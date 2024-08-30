if (process.env.NODE_ENV !== "production") {
    require('dotenv').config()
}


const mongoose = require("mongoose")
const express = require("express")
const path = require("path")
const bodyParser = require('body-parser');
const app = express();
const bcrypt = require("bcrypt")
const passport = require("passport");
const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require("method-override")

const products = require("./models/Product")
const User = require("./models/User")
const Cart = require("./models/Cart")
const Order = require("./models/Order")
const dbURI = process.env.MONGO

mongoose.connect(dbURI)
    .then(() => {
        app.listen(3000)
        console.log("Server is running on port 3000");
    })
    .catch((err) => console.log(err))

const coupons = [
    {
        code: "ABC",
        isClaimed: false
    }
]

const users = []
const carts = []
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(flash())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride('_method'))
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.get("/", (req, res) => {
    console.log("REQ USER ", req.user)
    res.status(200).json({ message: "Success!" });
})


app.get("/register", (req, res) => {
    res.status(400).json({ error: "Bad Request" });
})


app.get("/getUserData", async (req, res) => {
  try {
    const {userId}  = req.query;
    console.log("USERD ", userId)
    if (!userId) {
      return res.status(400).json({ error: 'userId parameter is required' });
    }

    const user = await User.findOne({ id: userId });

    console.log("USER FOUND ", user)
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    console.error('Error getting user data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});



app.get("/products/:id", async (req,res) => {
    try {
        const productId = req.params.id;
        console.log("PRODID ", productId)
        const product = await products.findById(productId);
        if (product) {
          res.status(200).json({ product });
        } else {
          res.status(404).json({ message: "Product not found" });
        }
      } catch (error) {
        console.error("Error fetching product:", error);
        res.status(500).json({ error: "Internal server error" });
        }
})

app.get("/products", async (req, res) => {
    try {
        const prods = await products.find();
        console.log("PRODS", prods);
        res.status(200).json(prods);
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ error: "Internal server error" });
    }
})

app.get("/cartData", async (req, res) => {
    const userId = req.query.userId;

    try {
        const cartData = await Cart.find({ userId });

        console.log("CART DATA", cartData);

        res.status(200).json({ message: "Found Cart Data", cartData });
    } catch (error) {
        console.error("Error fetching cart data:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


app.post('/addCart', async (req, res) => {
    try {
        const { userId, productID, orderCount, orderSize } = req.body;

        console.log("ASD " + userId + " " + productID + " " + orderCount + " " + orderSize);

        const existingCartEntry = await Cart.findOne({ userId, productID });

        if (existingCartEntry) {
            existingCartEntry.orderCount += orderCount;
            await existingCartEntry.save();
        } else {
            const newCartEntry = new Cart({
                userId,
                productID,
                orderCount,
                orderSize
            });
            console.log("NEW ENTRY ", newCartEntry)
            await newCartEntry.save();
        }

        console.log("CARTS ASD", await Cart.find())

        res.status(200).json({ message: "Added to Cart Successfully!" });
    } catch (error) {
        console.log("FAILURE :", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
  });
  

app.post("/login", async (req, res) => {
    console.log(req.body);
    try {
        const { email, password } = req.body;
        
        const user = await User.findOne({ email });
        console.log("user", user);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (passwordMatch) {
            console.log("SUCCESS :", user);
            return res.status(200).json({ message: "Successful Login!", userId: user.id });
        } else {
            console.log("FAILURE :", user);
            return res.status(400).json({ message: "Wrong password!" });
        }
    } catch (error) {
        console.error("Error in login:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
})

app.post('/orders', async (req, res) => {
    try {
      const orderData = req.body;
  
      const order = await Order.create(orderData);
      await Cart.deleteMany({ userId: orderData.userId });
      res.status(201).json(order);
    } catch (error) {
      console.error('Error placing order:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

app.post("/register", async (req, res) => {
    try {
        console.log("REQ BODY", req.body);
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        
        const existingUser = await User.findOne({ email: req.body.email });
        if (existingUser) {
            return res.status(400).json({ error: "User already exists" });
        }

        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        });

        await newUser.save();

        console.log("REGISTER USER ", newUser);
        res.status(200).json({ message: "Success" });
    } catch (error) {
        console.error("Error in register:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.delete('/logout', (req, res) => {
    req.logOut((err) => {
        if (err) {
            return res.status(500).json({ error: "Error logging out" });
        }
        res.status(200).json({ message: "Logout successful" });
    });
});


function checkAuthenticated(req, res, next) {
    console.log(req.user)
    if (req.isAuthenticated()) {
        return next()
    }
    return res.status(401).json({ message: "Not authenticated" });
}


function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return res.status(403).json({ message: "Forbidden - You are already authenticated" });
    }
    next()
}

