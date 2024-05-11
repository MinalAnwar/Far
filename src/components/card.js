import ArrowSvg from "./svg";
import ButtonSvg from "./ButtonWithSvg";
import ButtonBorder from "./buttonBorder";
const ListingCard = (props) => {
    console.log(props.svg)
    return (
        <div class=" m-8 max-w-sm bg-white rounded-lg shadow-2xl">
            <a href="#">
                <img class="rounded-t-lg" id="sliderImage" src={props.image} alt="" />
            </a>
            <div class="p-5">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-green-500 ">{props.Title}</h5>
                </a>
                <p class="mb-3 font-normal text-gray-500">{props.description}</p>
                <div className="flex justify-between mt-6 mb-7">
                    <p className="text-green-500 font-bold text-2xl">{props.amount}</p>
                    <p className="text-green-500 font-bold text-2xl">{props.price} RS</p>
                </div >
                <div className="flex justify-end items-end">
                    <ButtonBorder title="Buy now"  borderColor="green-500" textColor="green-500" ></ButtonBorder>
                    <ButtonSvg title="View" isFlex="flex"  borderColor="green-500" textColor="green-500" svg={<ArrowSvg/>} ></ButtonSvg>
                </div>
            </div>
        </div>
        
        
    );
}

export default ListingCard;