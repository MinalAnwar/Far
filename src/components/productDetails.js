import { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Navbar from "./navbar";
import ButtonFilled from './buttonFilled';
import Footer from '../footer';

const ProductDetails = (props) => {
    const [images, setImages] = useState([]);

    // Parse the string of image URLs into an array
    useEffect(() => {
        if (props.images) {
            const parsedImages = JSON.parse(props.images);
            setImages(parsedImages);
        }
    }, [props.images]);

    return (
        <div>
            <Navbar />
            <div className="flex items-center justify-center">
                <div className="w-screen h-screen  rounded-3xl lg:p-10 lg:m-5 bg-gray-100 flex flex-col md:flex-row bg-white">

                    <div className="w-full md:h-full flex flex-col items-center justify-center md:w-1/2 px-6 py-8">
                        <Carousel
                            showThumbs={false}
                            showArrows={true}
                            showStatus={false}
                            infiniteLoop={true}
                            autoPlay
                            interval={5000} // Set the interval for auto play if needed
                        >
                            {images.map((imageUrl, index) => (
                                <div className='flex h-full' key={index}>
                                    <img className="rounded-2xl " src={imageUrl} alt={`Slide ${index}`} />
                                </div>
                            ))}
                        </Carousel>
                        <div className='mt-4'>
                            <h3 className="text-3xl text-green-500 font-semibold">Description</h3>
                            <p className="text-md mt-1 text-gray-500">{props.description}</p>
                        </div>

                    </div>
                    <div className="w-full md:h-full flex flex-col justify-start md:w-1/2 px-6 py-8">
                        <div className='mt-0 lg:my-12  w-full'>
                            <div >
                                <h2 className="text-4xl mb-1 text-green-500 font-bold">{props.Title}</h2>
                                <p className="text-lg text-gray-500">Product by: {props.farmername} </p>

                            </div>
                            <div className="lg:mt-8 md:mt-3 mt-3">
                                <p className="text-3xl text-green-500 font-semibold">Price: {props.price}PKR</p>
                            </div>
                            <div className='flex justify-center md:justify-start h-1/3 lg:mt-4 md:mt-1 mt-2 items-center'>
                                <div className='flex-2 flex-col mr-4'>
                                    <p className="text-2xl text-green-500 font-semibold">Delivery time</p>
                                    <p className='text-xl text-gray-500 mt-1 md:mt-3'>7 working days</p>
                                </div>
                                <div className='flex-1'>
                                    <p className="text-2xl text-green-500 font-semibold">Certified</p>
                                    <p className="text-xl text-gray-500 mt-1 md:mt-3">Quality Assured</p>
                                </div>
                            </div>


                            <div className="flex md:mt-4 lg:mt-8 mr-5 mt-4">
                                <ButtonFilled isFlex="flex-1" title="Add to cart" Margin="5" bgColor="green-500" borderColor="green-500" textColor="white" />
                                <ButtonFilled isFlex="flex-1" title="Buy now" bgColor="green-500" borderColor="green-500" textColor="white" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default ProductDetails;
