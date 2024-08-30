import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import SellerHeader from '../../components/SellerHeader.jsx';
import SellerFooter from '../../components/SellerFooter.jsx';
import DescriptionIcon from '../../assets/description-inactive.png';
import CategoryIcon from '../../assets/index-finger-active.png';
import ImageIcon from '../../assets/camera-inactive.png';
import DeliveryIcon from '../../assets/delivery-box-inactive.png';
import DottedLineIcon from '../../assets/dotted-line-icon.png';
import '../../stylesFolder/Seller/AddProductCategoryStyle.css';

function AddProductCategory() {
  const navigate = useNavigate(); // Hook for route navigation
  const [selectedCategories, setSelectedCategories] = useState([]); // Tracks selected sub-categories
  const [activeMainCategory, setActiveMainCategory] = useState('Electronics'); // Sets initial main category

  const goBack = () => {
    navigate('/add-product-description');
  };

  const goNext = () => {
    navigate('/add-product-images');
  };

  // Toggles selection of a sub-category
  const toggleSubCategory = (subCategory) => {
    setSelectedCategories((prev) =>
      prev.includes(subCategory) ? prev.filter((c) => c !== subCategory) : [...prev, subCategory]
    );
  };

  // Removes a sub-category from the selected list
  const removeSelectedCategory = (subCategory) => {
    setSelectedCategories((prev) => prev.filter((c) => c !== subCategory));
  };

  // List of main product categories
  const mainCategories = [
    'Electronics', 'Fashion', 'Home and Garden', 'Supermarket', 'Beauty', 'Culture',
    'Sports and Tourism', 'Automotive', 'Properties'
  ];

  // Sub-categories associated with each main category
  const subCategories = {
    Electronics: [
      { label: 'Phone and accessories', subItems: ['Phone', 'Tablet', 'Charger', 'Earphones'] },
      { label: 'Computers', subItems: ['Desktop', 'Laptop', 'Monitor', 'Keyboard', 'Mouse'] },
      { label: 'Consoles and machines', subItems: ['Gaming Console', 'Handheld Console', 'Virtual Reality Headset'] },
      { label: 'Photography', subItems: ['Camera', 'Lens', 'Tripod', 'Lighting Equipment'] }
    ],
    Fashion: [
      { label: "Men's Clothing", subItems: ['Shirts', 'Pants', 'Suits', 'Outerwear'] },
      { label: "Women's Clothing", subItems: ['Dresses', 'Tops', 'Skirts', 'Outerwear'] },
      { label: 'Accessories', subItems: ['Watches', 'Bags', 'Jewelry', 'Sunglasses'] },
      { label: 'Footwear', subItems: ['Sneakers', 'Boots', 'Formal Shoes', 'Sandals'] }
    ],
    'Home and Garden': [
      { label: 'Furniture', subItems: ['Sofa', 'Bed', 'Dining Table', 'Chair'] },
      { label: 'Decor', subItems: ['Rugs', 'Curtains', 'Wall Art', 'Lamps'] },
      { label: 'Gardening', subItems: ['Plants', 'Soil', 'Garden Tools', 'Pots'] }
    ],
    Supermarket: [
      { label: 'Groceries', subItems: ['Fruits', 'Vegetables', 'Dairy', 'Bakery'] },
      { label: 'Household Supplies', subItems: ['Cleaning Products', 'Paper Goods', 'Laundry Detergent'] },
      { label: 'Beverages', subItems: ['Juices', 'Sodas', 'Water', 'Coffee'] }
    ],
    Beauty: [
      { label: 'Makeup', subItems: ['Foundation', 'Lipstick', 'Mascara', 'Eyeshadow'] },
      { label: 'Skincare', subItems: ['Cleansers', 'Moisturizers', 'Serums', 'Masks'] },
      { label: 'Haircare', subItems: ['Shampoo', 'Conditioner', 'Styling Products', 'Hair Tools'] }
    ],
    Culture: [
      { label: 'Books', subItems: ['Fiction', 'Non-Fiction', 'Comics', 'Magazines'] },
      { label: 'Music', subItems: ['CDs', 'Vinyl Records', 'Digital Downloads', 'Instruments'] },
      { label: 'Art', subItems: ['Paintings', 'Sculptures', 'Craft Supplies', 'Art Prints'] }
    ],
    'Sports and Tourism': [
      { label: 'Sports Equipment', subItems: ['Fitness', 'Outdoor', 'Team Sports', 'Water Sports'] },
      { label: 'Tourism', subItems: ['Luggage', 'Travel Guides', 'Outdoor Gear', 'Camping Supplies'] }
    ],
    Automotive: [
      { label: 'Car Parts', subItems: ['Engine', 'Brakes', 'Tires', 'Lights'] },
      { label: 'Accessories', subItems: ['Car Audio', 'Seat Covers', 'GPS', 'Tool Kits'] },
      { label: 'Maintenance', subItems: ['Oil', 'Coolant', 'Filters', 'Windshield Wipers'] }
    ],
    Properties: [
      { label: 'Residential', subItems: ['Apartments', 'Houses', 'Condos', 'Villas'] },
      { label: 'Commercial', subItems: ['Offices', 'Warehouses', 'Retail Spaces', 'Industrial Properties'] },
      { label: 'Land', subItems: ['Plots', 'Agricultural Land', 'Forests', 'Waterfront'] }
    ]
  };

  // Renders sub-categories associated with the active main category
  const renderSubCategories = () => {
    return subCategories[activeMainCategory]?.map((category, index) => (
      <div className="column" key={index}>
        <h3>{category.label}</h3>
        <div className="column-items">
          {category.subItems.map((item, subIndex) => (
            <label key={subIndex}>
              <input
                type="checkbox"
                className="large-checkbox"
                checked={selectedCategories.includes(item)} // Shows checked state if item is selected
                onChange={() => toggleSubCategory(item)} // Toggles item selection
              />
              {item}
            </label>
          ))}
        </div>
      </div>
    ));
  };

  // Renders the selected sub-categories as removable tags
  const renderSelectedCategories = () => {
    return selectedCategories.map((category, index) => (
      <div className="selected-category-box" key={index}>
        {category}
        <span className="remove-category" onClick={() => removeSelectedCategory(category)}>✖</span>
      </div>
    ));
  };

  return (
    <>
      <SellerHeader /> {/* Header component */}
      <div className="add-product-category-container">
        <div className="exclusive">
          {/* Product progress step indicator */}
          <div className="product-header-indicator">
            <img src={DescriptionIcon} alt="Description" className="step-icon" />
            <img src={DottedLineIcon} alt="Dotted Line" className="dotted-line-icon" />
            <img src={CategoryIcon} alt="Category" className="step-icon" />
            <img src={DottedLineIcon} alt="Dotted Line" className="dotted-line-icon" />
            <img src={ImageIcon} alt="Image" className="step-icon" />
            <img src={DottedLineIcon} alt="Dotted Line" className="dotted-line-icon" />
            <img src={DeliveryIcon} alt="Delivery" className="step-icon" />
          </div>
          {/* Category selection heading */}
          <div className="category-heading">
            <h2>Select the category your item</h2>
          </div>
          {/* Main and sub-category form container */}
          <div className="form-container">
            {/* List of main categories */}
            <div className="main-categories">
              {mainCategories.map((category, index) => (
                <div
                  key={index}
                  className={`main-category-item ${category === activeMainCategory ? 'active' : ''}`}
                  onClick={() => setActiveMainCategory(category)} // Sets active main category
                >
                  <span>{category}</span>
                  <span className="category-arrow">&gt;</span>
                </div>
              ))}
            </div>
            {/* Sub-category checkboxes */}
            <div className="sub-categories">
              {renderSubCategories()}
            </div>
          </div>
          {/* Selected sub-category tags */}
          <div className="selected-categories">
            <h3>Selected categories:</h3>
            <div className="selected-categories-container">
              {renderSelectedCategories()}
            </div>
          </div>
          {/* Navigation buttons */}
          <div className="navigation-buttons">
            <button type="button" className="back-button" onClick={goBack}>Back</button>
            <button type="button" className="next-button" onClick={goNext}>Next</button>
          </div>
        </div>
      </div>
      <SellerFooter /> {/* Footer component */}
    </>
  );
}

export default AddProductCategory;
