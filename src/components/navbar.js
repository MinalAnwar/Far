import React, { useState } from 'react';

const Navbar = (props) => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [showCart, setShowCart] = useState(false);
    const [showProfileMenu, setShowProfileMenu] = useState(false);
    const [cartItems, setCartItems] = useState([
        { id: 1, name: "Wheat", quantity: 1, price: 10 },
        { id: 2, name: "Rice", quantity: 1, price: 20 },
    ]);


    const incrementQuantity = (id) => {
        const updatedCartItems = cartItems.map(item => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });
        setCartItems(updatedCartItems);
    };

    const decrementQuantity = (id) => {
        const updatedCartItems = cartItems.map(item => {
            if (item.id === id && item.quantity > 1) {
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        });
        setCartItems(updatedCartItems);
    };

    const removeItem = (id) => {
        const updatedCartItems = cartItems.filter(item => item.id !== id);
        setCartItems(updatedCartItems);
    };

    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        setShowProfileMenu(!showProfileMenu);
    }
    const handleCartClick = () => {
        setShowCart(!showCart);
        setShowProfileMenu(false);
    };

    return (
        <nav className="py-3 md:py-6 md:pr-5 bg-white shadow-md relative z-10">
            <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 md:px-6 relative">
                <div className='flex align-center justify-center'>
                    <div className="flex mb-4 md:mb-0">
                        <div className='text-green-500'>
                            <span className="text-4xl  font-bold">Farm</span>
                        </div>
                        <span className="text-black text-4xl  font-bold hover:text-green-500">Tech</span>
                    </div>
                    <div className="hidden sm:flex  align-center justify-center mt-3">
                        <a href="#" className="text-gray-500  text-md  ml-12 hover:text-green-400 mx-2">Home</a>
                        <a href="#" className="text-gray-500  text-md  ml-12 hover:text-green-400 mx-2">About</a>
                        <a href="#" className="text-gray-500  text-md  ml-12 hover:text-green-400 mx-2">Blogs</a>
                        <a href="#" className="text-gray-500  text-md  ml-12 hover:text-green-400 mx-2">Contact</a>
                        <a href="#" className="text-gray-500  text-md  ml-12 hover:text-green-400 mx-2">FAQ's</a>
                    </div>
                </div>

                <div className="md:flex items-center sm:ml-10 flex-shrink-0 relative ">
                    <div className="relative mr-6 hidden sm:block">
                        <img
                            src="https://via.placeholder.com/40"
                            alt="Profile"
                            className="w-9 h-9 rounded-full cursor-pointer"
                            onClick={() => setShowProfileMenu(!showProfileMenu)}
                        />
                        {showProfileMenu && (
                            <div className="absolute top-full right-0 mt-2 w-48 bg-white p-4 shadow-lg rounded-lg">
                                <ul>
                                    <li className="py-2" onClick={() => handleCategorySelect('login')}>Login</li>
                                    <li className="py-2" onClick={() => handleCategorySelect('signin')}>Sign in</li>
                                    <li className="py-2" onClick={() => handleCategorySelect('editprofile')}>Edit profile</li>
                                </ul>
                            </div>
                        )}
                    </div>

                   {!props.isHidden && <button className="text-black  relative" onClick={handleCartClick}>
                        <svg viewBox="0 0 20 20" fill="gray" className="menu w-7 h-7">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M2 4h16a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2zm0 5h16a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2zm0 5h16a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2z"
                            />
                        </svg>
                        {!showCart && cartItems.length > 0 && (
                            <span className="bg-green-500 text-white rounded-full w-5 h-5 flex items-center p-1 justify-center absolute -top-1 -right-1">{cartItems.length}</span>
                        )}
                    </button>
                    }       
                    {showCart && (
                        <div className="absolute top-full right-0 mt-2 w-64 bg-white p-4 shadow-2xl rounded-lg">
                            {cartItems.map(item => (
                                <div key={item.id} className="flex items-center justify-between mb-2">
                                    <div className="flex items-center space-x-4">
                                        <img src="https://source.unsplash.com/random" alt="Product" className="w-16 h-16 rounded-md mb-1 object-cover mr-4" />
                                        <div className='ml-1'>
                                            <span className="text-lg mb-1">{item.name}</span>
                                            <div className="flex items-center mt-1 space-x-2">
                                                <button onClick={() => decrementQuantity(item.id)} className="text-gray-500">-</button>
                                                <span>{item.quantity}</span>
                                                <button onClick={() => incrementQuantity(item.id)} className="text-gray-500">+</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <button onClick={() => removeItem(item.id)} className="text-red-500 mb-1">X</button>
                                        <span className="text-gray-500">${item.price}</span>
                                    </div>
                                </div>
                            ))}
                            <div className="flex justify-between items-center mt-4">
                                <span className="font-bold">Total:</span>
                                <span>${totalPrice}</span>
                            </div>
                            <div className="flex justify-between items-center mt-4">
                                <button className="flex-1 hover:bg-green-700 hover:border-green-700 mr-4 bg-green-500 border-solid border-2 border-green-500 font-bold text-white px-4 py-2 rounded-md">Checkout</button>
                                <button className="flex-1 hover:bg-green-700 hover:border-green-700 bg-green-500 border-solid border-2 border-green-500 font-bold text-white px-4 py-2 rounded-md">View</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
