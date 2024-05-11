import { useInView } from "react-intersection-observer";
import { useEffect,useState } from "react";
const HowWorks = () => {
    const [ref, inView] = useInView();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (inView) {
            
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 200);

            
            return () => {clearTimeout(timer);
                setIsVisible(false);
            };
        }
    }, [inView]);
    return (
        <div>
            <section id="works" class="relative  py-10 sm:py-20 lg:py-32" >
                <div ref={ref} class= {`px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} > 
                    <div class="max-w-2xl mx-auto text-center">
                        <h2 class="text-4xl text-green-500 font-bold mx-auto md:text-4xl lg:text-4xl">How does it work?</h2>
                        <p class="max-w-2xl mx-auto mt-4 text-xl text-gray-500 leading-relaxed ">
                            Our plateform will help you to get freshness delivered.
                        </p>
                    </div>
                    <div class="relative mt-12 lg:mt-20">
                        <div class="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28"><img alt="" loading="lazy" width="1000" height="500" decoding="async" data-nimg="1" class="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"/>
                        </div>
                        <div class="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
                            <div>
                                <div
                                    class="flex items-center justify-center w-16 h-16 mx-auto bg-green-500 rounded-full shadow-2xl">
                                    <span class="text-xl font-semibold text-white">1</span>
                                </div>
                                <h3 class="mt-6 text-xl  text-green-500 font-semibold leading-tight md:mt-10">Create Account</h3>
                                <p class="mt-4 text-base text-gray-400 md:text-lg">
                                    Enter Required information
                                </p>
                            </div>
                            <div>
                                <div
                                    class="flex items-center justify-center w-16 h-16 mx-auto bg-green-500 rounded-full shadow-2xl">
                                    <span class="text-xl font-semibold text-white">2</span>
                                </div>
                                <h3 class="mt-6 text-xl  text-green-500 font-semibold leading-tight md:mt-10">Chosse Product</h3>
                                <p class="mt-4 text-base text-gray-400 md:text-lg">
                                    Choose quantity choose rates
                                </p>
                            </div>
                            <div>
                                <div
                                    class="flex items-center justify-center w-16 h-16 mx-auto bg-green-500 rounded-full shadow-2xl">
                                    <span class="text-xl font-semibold text-white">3</span>
                                </div>
                                <h3 class="mt-6 text-xl  text-green-500 font-semibold leading-tight md:mt-10">Place Order</h3>
                                <p class="mt-4 text-base text-gray-400 md:text-lg">
                                    Enter billing information
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
               
            </section>
        </div>
    );
}

export default HowWorks;