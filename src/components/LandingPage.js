import { useState, useEffect } from "react";
import Navbar from "./navbar";
import OurVision from "./ourvision";
import TrustedPartners from "./TrustedPartners";
import HowWorks from "./howItWorks";
import Footer from "../footer";
import WhyUs from "./Whyus.jsx";
import OurTeam from "./OurTeam";
import CustomerReview from "./WhatCustomerSaid";
import { useInView } from 'react-intersection-observer';
import FaqQuestionsDiv from "./faqQuestionDiv.js";


const LandingPage = (props) => {
    const [imageIndex, setImageIndex] = useState(0);
    const images = [
        '/Assets/images/main2.jpg',
        '/Assets/images/main4.avif',
        '/Assets/images/img.jpg',
        '/Assets/images/main6.jpg',
        '/Assets/images/main3.jpg',
        '/Assets/images/main1.jpg'
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setImageIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);
    

    const [missionRef, missionInView] = useInView({ threshold: 0.5 });
    const [howWorksRef, howWorksInView] = useInView({ threshold: 0.5 });
    const [ourVisionRef, ourVisionInView] = useInView({ threshold: 0.5 });
    const [whyUsRef, whyUsInView] = useInView({ threshold: 0.5 });
    const [customerReviewRef, customerReviewInView] = useInView({ threshold: 0.5 });
    const [trustedPartnersRef, trustedPartnersInView] = useInView({ threshold: 0.5 });
    const [ourTeamRef, ourTeamInView] = useInView({ threshold: 0.5 });
    const [faq,faqInView] =useInView({threshold:0.5});

    return (
        <div>
            <Navbar />
            <div className="flex items-center justify-center">
                <div className="w-screen h-screen bg-gray-100 flex flex-col md:flex-row bg-white ">
                    <div className="w-full h-full flex items-start md:items-center md:w-1/2 px-6 py-8">
                        <div className="flex flex-col">
                            <h1 className="lg:text-6xl text-4xl font-bold text-green-500 text-center ">Connecting Farms to Forks</h1>
                            <h1 className="lg:text-3xl text-4xl mb-4 mt-4  font-bold  text-center">Fresh, Sustainable, Delivered</h1>
                            <p className="text-xl text-gray-500 mt-1 text-3xl md:text-center">FarmTech is the platform that brings locally grown, fresh produce straight to your table.Get best product from farms to your door step.</p>
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
            <div ref={missionRef} className={`text-center py-8 md:px-20 px-10 mt-28 md:mt-0 transition-opacity duration-1000 ${missionInView ? 'opacity-100' : 'opacity-0'}`}>
                <h1 className="lg:text-4xl text-4xl font-bold text-green-500 text-center ">Our Mission</h1>
                <p className="text-gray-500 text-lg mt-6 text-center ">To connect Farmers and buyers deliver best quality products from farms directly to your home.Let people 
                    feel the freshness of the pure products of farmer's farm.Astonish your table with fresh products. 
                </p>
            </div>
            <HowWorks ref={howWorksRef} className={`transition-opacity duration-1000 ${howWorksInView ? 'opacity-100' : 'opacity-0'}`} />
            <OurVision ref={ourVisionRef} className={`transition-opacity duration-1000 ${ourVisionInView ? 'opacity-100' : 'opacity-0'}`} />
            <WhyUs ref={whyUsRef} className={`transition-opacity duration-1000 ${whyUsInView ? 'opacity-100' : 'opacity-0'}`} />
            <CustomerReview ref={customerReviewRef} className={`transition-opacity duration-1000 ${customerReviewInView ? 'opacity-100' : 'opacity-0'}`} />
            <TrustedPartners ref={trustedPartnersRef} className={`transition-opacity duration-1000 ${trustedPartnersInView ? 'opacity-100' : 'opacity-0'}`} />
            <OurTeam ref={ourTeamRef} className={`transition-opacity duration-1000 ${ourTeamInView ? 'opacity-100' : 'opacity-0'}`} />
            
            <div ref={faq} className={`py-4 bg-white transition-opacity duration-1000 ${faqInView ? 'opacity-100' : 'opacity-0'}`} >
                <div class="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between">

                    <div class="text-center mt-8">
                        <h3 class="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
                            Frequently Asked <span class="text-green-500">Questions</span>
                        </h3>

                    </div>

                    <div class="mt-20">
                        <ul class="">

                            <li class="text-left mb-10">
                                <FaqQuestionsDiv question="How does the platform work?" answer="Our platform works by allowing farmers to create listings for their agricultural products, which are then visible to potential buyers. Buyers can browse listings and place orders."></FaqQuestionsDiv>
                            </li>
                            <li class="text-left mb-10">
                                <FaqQuestionsDiv question="Who can join the platform?" answer="Our platform is open to all farmers and buyers who meet our basic criteria. We welcome farmers of all sizes and specialties, as well as buyers interested in purchasing agricultural products directly from producers."></FaqQuestionsDiv>
                            </li>

                            <li class="text-left mb-10">
                                <FaqQuestionsDiv question="Are there any fees or commissions for using the platform?" answer="No,we do not charge any commission on transactions made through our platform."></FaqQuestionsDiv>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            <Footer />
        </div>
    );
}

export default LandingPage;
