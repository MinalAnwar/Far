import { useInView } from "react-intersection-observer";
import { useEffect,useState } from "react";
const TrustedPartners = () => {
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
        <div ref={ref} className={`text-center py-8 md:px-20 px-10 mt-28 md:mt-0 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-300">
                    <div className="text-center space-y-4">
                        <h2 className="text-4xl font-bold tracking-tight text-green-500 sm:text-4xl">Trusted by worldwide</h2>
                        <p className="text-lg leading-8 text-gray-500">We can help you showcase your farm products and deliver them in your buyer's home directly.</p>
                    </div>
                    <dl className="mt-16 grid grid-cols-1 gap-3 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-2">
                        <div className="flex flex-col bg-zinc-100 rounded-2xl p-8">
                            <dt className="text-sm font-semibold leading-6 text-gray-500">Words written in 2023</dt>
                            <dd className="order-first text-3xl font-semibold tracking-tight text-green-500">10K Users</dd>
                        </div>
                        <div className="flex flex-col bg-zinc-100 rounded-2xl p-8">
                            <dt className="text-sm font-semibold leading-6 text-gray-500">Products Delivered</dt>
                            <dd className="order-first text-3xl font-semibold tracking-tight text-green-500">1000K</dd>
                        </div>
                        <div className="flex flex-col bg-zinc-100 rounded-2xl p-8">
                            <dt className="text-sm font-semibold leading-6 text-gray-500">Farmers Registered</dt>
                            <dd className="order-first text-3xl font-semibold tracking-tight text-green-500">2.1k</dd>
                        </div>
                        <div className="flex flex-col bg-zinc-100 rounded-2xl p-8">
                            <dt className="text-sm font-semibold leading-6 text-gray-500">Buyer Registered</dt>
                            <dd className="order-first text-3xl font-semibold tracking-tight text-green-500">6.6k</dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    );
}

export default TrustedPartners;
