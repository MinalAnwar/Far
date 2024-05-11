import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const WhyUs = () => {

    const [ref, inView] = useInView();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (inView) {

            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 200);


            return () => {
                clearTimeout(timer);
                setIsVisible(false);
            };
        }
    }, [inView]);

    return (
        <div ref={ref} className={`py-10 sm:py-20 m-5 sm:m-20 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <h2 className="text-4xl text-green-500 text-center font-bold mx-auto mb-16">Why Us?</h2>
            <div className="grid gap-4 md:grid-cols-3">
            <div className="flex-col p-10 py-16 rounded-lg  md:p-12 shadow-md animated-box transform transition-transform hover:translate-y-2 hover:scale-120 ease-in-out duration-1200">


                    <p className="flex items-center justify-center text-4xl font-semibold text-white bg-green-500 rounded-full shadow-lg w-14 h-14">
                        1
                    </p>
                    <div className="h-5"></div>
                    <p className="font-serif text-gray-500 text-2xl">No commission for selling.</p>
                </div>
                <div className="flex-col p-8 py-16 rounded-lg shadow-2xl md:p-12 shadow-2xl animated-box transform transition-transform hover:translate-y-2">
                    <p className="flex items-center justify-center text-4xl font-semibold text-white bg-green-500 rounded-full shadow-lg w-14 h-14">
                        2
                    </p>
                    <div className="h-5"></div>
                    <p className="font-serif text-gray-500 text-2xl">We deliver on time.</p>
                </div>
                <div className="flex-col p-8 py-16 rounded-lg shadow-2xl md:p-12 shadow-2xl animated-box transform transition-transform hover:translate-y-2">
                    <p className="flex items-center justify-center text-4xl font-semibold text-white bg-green-500 rounded-full shadow-lg w-14 h-14">
                        3
                    </p>
                    <div className="h-5"></div>
                    <p className="font-serif text-gray-500 text-2xl">We test products before selling.</p>
                </div>
            </div>
        </div>
    );
}

export default WhyUs;
