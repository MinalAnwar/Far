const ButtonFilled = (props) => {
    return (
        <button className={`bg-${props.bgColor} text-center hover:bg-green-700 hover:border-green-700 border-solid border-2 mt-5mr-5px border-${props.borderColor} font-bold border-l-0 mr-${props.Margin} text-${props.textColor} px-4 py-3 rounded-xl ${props.isFlex} items-center `} onClick={props.handel} type="submit">{props.title}</button>
    );
}
 
export default ButtonFilled;