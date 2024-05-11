import { useInView } from "react-intersection-observer";
import { useEffect,useState } from "react";
const CustomerReview = () => {
    const [ref, inView] = useInView();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (inView) {
            
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 150);

            
            return () => {clearTimeout(timer);
                setIsVisible(false);
            };
        }
    }, [inView]);
    return (
        <div  ref={ref} class= {`m-5 sm:m-20 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} >
            <div class="container flex flex-col items-center justify-center w-full p-6 mx-auto text-center xl:px-0">
                
                <h2 class="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-green-500 lg:leading-tight lg:text-4xl ">Here's what our customers said</h2>
                <p class="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl ">FarmTech is a great way to increase brand trust and awareness. Use this section to highlight your popular customers.</p>
            </div>
            <div class="container p-6 mx-auto mb-10 xl:px-0">
                <div class="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
                    <div class="lg:col-span-2 xl:col-auto">
                        <div class="flex flex-col justify-between w-full h-full px-6 py-6 shadow-xl  md:px-14 rounded-2xl md:py-14 ">
                            <p class="text-2xl leading-normal text-green-500">Share a that FarmTech is best place to buy fresh products.</p>
                            <div class="flex items-center mt-8 space-x-3">
                                <div class="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
                                    <img alt="Avatar" src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?crop=faces&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjIwMTQ5ODEx&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=100&amp;h=100" loading="lazy" />
                                </div>
                                <div>
                                    <div class="text-lg font-medium text-gray-500">Nageen Haider</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="flex flex-col justify-between w-full h-full px-6 py-6 shadow-xl md:px-14 rounded-2xl md:py-14 ">
                            <p class="text-2xl leading-normal text-green-500">This place is best for getting quality products in town.</p>
                            <div class="flex items-center mt-8 space-x-3">
                                <div class="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
                                    <img alt="Avatar" src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;crop=faces&amp;fit=crop&amp;w=100&amp;h=100&amp;q=80" loading="lazy" />
                                </div>
                                <div>
                                    <div class="text-lg font-medium text-gray-500">Noor Muhammad</div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="">
                        <div class="flex flex-col justify-between w-full h-full px-6 py-6 shadow-xl  md:px-14 rounded-2xl md:py-14 ">
                            <p class="text-2xl leading-normal text-green-500">I got my products delivered in time and quality was awsome.</p>
                            <div class="flex items-center mt-8 space-x-3">
                                <div class="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
                                    <img alt="Avatar" src="https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=100&amp;h=100&amp;crop=faces&amp;q=80" loading="lazy" />
                                </div>
                                <div>
                                    <div class="text-lg font-medium text-gray-500">Kaleem khan</div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default CustomerReview;