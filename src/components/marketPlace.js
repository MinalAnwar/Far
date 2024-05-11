import Searchbar from "./Searchbar";
import Navbar from "./navbar";
import { useState, useEffect } from "react";
import ListingCard from "./card";
import ButtonBorder from "./buttonBorder";
import Footer from "../footer";
const Market = () => {

    const [selectedCategory, setSelectedCategory] = useState('');
    const [imageIndex, setImageIndex] = useState(0);
    const [showCategory, setShowCategory] = useState(false);
    const images = [
        '/Assets/images/main2.jpg',
        '/Assets/images/main4.avif',
        '/Assets/images/img.jpg',
        '/Assets/images/main6.jpg',
        '/Assets/images/main3.jpg',
        '/Assets/images/main1.jpg'
    ];
    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        setShowCategory(!selectedCategory);
    }

    const handleClick = () => {
        setShowCategory(!showCategory);
    };
    useEffect(() => {
        const interval = setInterval(() => {
            setImageIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);
    return (
        <div>
            <Navbar></Navbar>
            <div className="flex items-center justify-center">
                <div className="w-screen h-screen bg-gray-100 flex flex-col md:flex-row bg-white overflow-hidden">
                    <div className="w-full h-full flex items-start md:items-center md:w-1/2 px-6 py-8">
                        <div className="flex flex-col">
                            <h1 className="lg:text-8xl text-5xl font-bold text-green-500 md:text-left">Grow,Sell and Live</h1>
                            <p className="text-xl text-gray-500 mt-1 text-3xl md:text-center">FarmTech is the platform that brings locally grown, fresh produce straight to your table.Get best product from farms to your door step.</p>

                            <Searchbar></Searchbar>
                        </div>
                    </div>
                    <div className="w-full h-full flex items-center justify-center md:w-1/2 px-6 py-8">
                        <img
                            className="max-h-full w-auto shadow-2xl md:max-h-full md:w-full object-cover rounded-xl"
                            src={images[imageIndex]}
                            alt="Image"
                        />
                    </div>
                </div>
            </div>

            <div className="flex justify-start ml-8 ">
                <div class="block max-w-sm  p-6 bg-white border-2 w-3/4 border border-gray-200 shadow-2xl rounded-lg hover:shadow-2xl  ">

                    <h5 class="mb-2 text-3xl font-bold  text-green-500">Filter By</h5>
                    <div className="mt-5 flex flex-wrap ">
                        <ButtonBorder isFlex="flex-1" title="A - Z" fonts="semibold" textColor="green-500"></ButtonBorder>
                        <ButtonBorder isFlex="flex-1" title="Price " fonts="semibold" textColor="green-500" ></ButtonBorder>

                        <ButtonBorder isFlex="flex-1" title="Category" fonts="semibold" textColor="green-500" handle={handleClick} ></ButtonBorder>
                        {showCategory && (
                            <div className="absolute ml-4 sm:ml-20 lg:ml-44 mt-20 w-48 bg-white p-4 shadow-lg rounded-lg">
                                <ul>
                                    <li className="py-2" onClick={() => handleCategorySelect('Fruit')}>Fruit</li>
                                    <li className="py-2" onClick={() => handleCategorySelect('Vegetable')}>Vegetable</li>
                                    <li className="py-2" onClick={() => handleCategorySelect('Wheat')}>Wheat</li>

                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap">
                <ListingCard image="/Assets/images/img.jpg" title="Listing Title" description="add some description here." amount="50 Kg" price="250" ></ListingCard>
                <ListingCard image="/Assets/images/img.jpg" title="Listing Title" description="add some description here." amount="50 Kg" price="250" ></ListingCard>
                <ListingCard image="/Assets/images/img.jpg" title="Listing Title" description="add some description here." amount="50 Kg" price="250" ></ListingCard>
                <ListingCard image="/Assets/images/img.jpg" title="Listing Title" description="add some description here." amount="50 Kg" price="250" ></ListingCard>

            </div>
            <Footer/>
        </div >

    );

}

export default Market;