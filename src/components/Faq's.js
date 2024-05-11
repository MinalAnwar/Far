import Navbar from "./navbar";
import FaqQuestionsDiv from "./faqQuestionDiv";
import Footer from "./footer";
const FAQs = () => {
    return (
        <div>
            <Navbar/>
            <div class="py-4 bg-white">
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
                            <li class="text-left mb-10">
                                <FaqQuestionsDiv question="How are products priced?" answer="Farmers set their own prices for products listed on our platform. Buyers can view these prices and may have the opportunity to negotiate or make offers directly with the farmers."></FaqQuestionsDiv>
                            </li>
                            <li class="text-left mb-10">
                                <FaqQuestionsDiv question="What types of products are available on the platform?" answer="Our platform offers a wide range of agricultural products, including fresh produce, grains, livestock, dairy products, poultry, and more. Farmers can list any products they have available for sale."></FaqQuestionsDiv>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default FAQs;