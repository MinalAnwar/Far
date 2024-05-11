import { useInView } from "react-intersection-observer";
import { useEffect,useState } from "react";
const OurVision = () => {
    const [ref, inView] = useInView();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (inView) {
            
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 100);

            
            return () => {clearTimeout(timer);
                setIsVisible(false);
            };
        }
    }, [inView]);
    return (
        <div ref={ref} class= {`flex justify-center duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} > 
            <section className="py-16  px-6">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-extrabold text-center text-green-500">Our Vision</h2>
                    <div className="mt-10 grid  grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="flex flex-col items-center"> 
                            <div className=" text-center">
                                <h3 className="text-xl font-medium">Mission</h3>
                                <p className="mt-2 text-base text-gray-500">
                                    Revolutionize food distribution by connecting farmers with consumers, providing convenient access to locally sourced, high-quality products while ensuring fair prices and promoting sustainability.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="text-center">
                                <h3 className="text-xl font-medium">Values</h3>
                                <p className="mt-2 text-base text-gray-500">We believe in honesty, integrity, Sustainability, Quality and Convenience.</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="text-center">
                                <h3 className="text-xl font-medium">Vision</h3>
                                <p className="mt-2 text-base text-gray-500">
                                    To become the foremost platform bridging farmers and consumers, providing access to fresh, sustainable produce globally.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default OurVision;
