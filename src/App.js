import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginComponent from './components/login';
import Market from './components/marketPlace';
import Navbar from './components/navbar';
import Searchbar from './components/Searchbar'
import FarmerHome from './components/farmerHome';
import TotalProducts from './components/FarmerStats';
import ProductDetails from './components/productDetails';
import SignUpForm from './components/signup';
import NegotiateRequest from './components/negotiateRequest';
import ShopingCart from './components/cart';
import OrderTable from './components/table';
import Footer from './footer';
import ContactsUs from './components/contactus';
import FAQs from './components/Faq\'s';
import Listing from './components/CreateEditListing';
import LandingPage from './components/LandingPage';
import OurVision from './components/ourvision';
import HowWorks from './components/howItWorks';
import TrustedPartners from './components/TrustedPartners';
import WhyUs from './components/Whyus.jsx';
import OurTeam from './components/OurTeam';
import CustomerReview from './components/WhatCustomerSaid';
function App() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Wheat", quantity: 1, price: 10 },
    { id: 2, name: "Rice", quantity: 1, price: 20 },
]);

  return (
    // <Router>
    //   <Routes>
    //     <Route exact path="/" component={<LoginComponent/>} />
    //   </Routes>
    // </Router>
    //<LoginComponent></LoginComponent>
    //<Market></Market>
    //<Navbar></Navbar>
    //<Searchbar></Searchbar>
    //<FarmerHome></FarmerHome>
    //<Listing pgTitle="Edit Your Listing Here!" btnTitle="Edit" ></Listing>
    //<Listing pgTitle="Create Your Listing Here !" btnTitle="Add product" ></Listing>
    //fixed top-0 w-full z-50

    //<ProductDetails images='["/Assets/images/main2.jpeg", "/Assets/images/img.jpg", "/Assets/images/main4.avif"]' Title="Listing Title" farmername="Zain" price="100" description="Tailwind includes an expertly-crafted default color palette out-of-the-box that is a great starting point if you don’t have your own specific branding in mind.If you’d like to completely replace the default color palette with your own custom colors, add your colors directly under the theme.colors section of your configuration file:" />
    //<SignUpForm></SignUpForm>
    //<NegotiateRequest pgTitle="You can send request to the farmer here !" btnTitle="Send Request" ></NegotiateRequest>
    //<ShopingCart cartItems={cartItems} name="Wheat" price="5000" quantity="50"/>

    //if farmer 
    //<OrderTable productName="Wheat" SellerName="Zain" buyerName="Minal" Quantity="50" UnitPrice="30" Button1Title="Accept" Button2Title="Reject" btn1ColName="Accept" btn2ColName="Reject"  Btn2Color="red-500" Btn2HoverColor="red-800" />
    //if buyer
    //<OrderTable productName="Wheat" SellerName="Zain" buyerName="Minal" Quantity="50" UnitPrice="30" Button1Title="Checkout" Button2Title="View" btn1ColName="Check out" btn2ColName="Receipt" Btn2Color="green-500" Btn2HoverColor="green-800" />
    //<Footer/>
    //<ContactsUs/>
    //<FAQs/>
    <LandingPage/>
    //<CustomerReview/>
    //<OurTeam/>
    //<WhyUs/>
    //<OurVision/>
    //<HowWorks/>
    //<TrustedPartners/>
    
    );
}

export default App;
