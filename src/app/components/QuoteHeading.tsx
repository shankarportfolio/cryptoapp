import { inter } from "../_lib/fonts";

const QuoteHeading = ({children} : {children?: React.ReactNode}) =>{
    return(
        <h1 className={`${inter.className} w-2/3 md:w-full text-[25px] loading-[30px] md:text-[30px] md:loading-[35px] text-[#fff] font-[500] tracking-[0.5px]`}>{children}</h1>
    )
}

export default QuoteHeading;