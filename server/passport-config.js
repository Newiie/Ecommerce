const bcrypt = require("bcrypt")
const LocalStrategy = require("passport-local").Strategy

function initialize(passport, getUserByEmail, getUserById) {
    console.log("THIS RUN :")
    let a = "nothing"
    const authenticateUser = async (email, password, done) => {
        const user = getUserByEmail(email)
        console.log("SUCCES :", user)
        a = "Something"
        
        if (user == null) {
            return done(null, false, { message: "No user with that email"})
        }

        try {
            if (await bcrypt.compare(password, user.password)) {
                console.log("SUCCES :", user)
                return done(null, user)
            } else {
                console.log("FAILURE :", user)
                return done(null, false, {message: 'Password incorrect'})
            }
        } catch (e) {
            console.log("error :", user)
            return done(e)
        }   
    }

    passport.use(new LocalStrategy({usernameField: 'email'}, authenticateUser))
    console.log("CHECK: ", a)
    passport.serializeUser((user, done) => {
        console.log("User Serialized", user)
        done(null, user.id)
    })
    passport.deserializeUser((id, done) => {
        return done(null, getUserById(id))
    })
}

module.exports = initialize