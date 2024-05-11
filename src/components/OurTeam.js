import { useInView } from "react-intersection-observer";
import { useEffect,useState } from "react";

const OurTeam = () => {
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
        <div ref={ref} class= {`p-10 max-w-screen-lg mx-auto transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div class="text-center mb-4">
                <h3 class="text-4xl sm:text-4xl leading-normal font-extrabold tracking-tight text-green-500">
                    Our<span class="text-4xl"> Team</span>
                </h3>
            </div>
            <div class="sm:grid grid-cols-2 gap-6 my-10">

                <div class="max-w-sm w-full lg:max-w-full lg:flex mx-auto my-10">
                    <div class="h-48  lg:w-48  flex-none bg-cover rounded-t lg:rounded-t lg:rounded-l text-center overflow-hidden">
                        <img src="/Assets/images/minal.jpeg" alt="minal" />
                    </div>
                    <div
                        class="  lg:border-l-0  shadow-xl  bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4">
                        <div class="">
                            <a href="#"
                                class="text-green-500 font-bold text-2xl mb-2 hover:text-green-800 transition duration-500 ease-in-out">
                                Minal Anwar</a>
                            <p class="text-md text-gray-600">
                                Developer                             </p>
                            <p class="text-gray-500 text-base mt-4">Working at Frontend using Tailwind Css ReactJs.
                            </p>

                            
                        </div>

                    </div>

                </div>

                <div class="max-w-sm w-full lg:max-w-full lg:flex mx-auto my-10">
                    <div class="h-48  lg:w-48 flex-none bg-cover rounded-t lg:rounded-t lg:rounded-l text-center overflow-hidden">
                        <img src="/Assets/images/minal.jpeg" alt="minal" />
                    </div>
                    <div
                        class="  lg:border-l-0  shadow-xl  bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4">
                        <div class="">
                            <a href="#"
                                class="text-green-500 font-bold text-2xl mb-2 hover:text-green-800 transition duration-500 ease-in-out">
                                Zain Mehmood</a>
                            <p class="text-md text-gray-600">
                                Developer                             </p>
                            <p class="text-gray-500 text-base mt-4">Working at backend using nodeJs and mongo.
                            </p>

                          

                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default OurTeam;