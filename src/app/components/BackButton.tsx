import { outfit } from "../_lib/fonts";
import { ArrowUpLeft } from "lucide-react";
import { useRouter } from 'next/navigation';

const BackButton = () =>{
    const router = useRouter();
    return(
        <div onClick={() => router.back()} className={`${outfit.className} text-[13px] loading-[20px] md:text-[15px] md:loading-[20px] inline-flex items-center justify-start rounded-[5px] bg-[var(--themecolor)] py-[5px] px-[15px] md:py-[10px] md:px-[20px] text-[#000] mb-[25px] outline-none hover:outline-none focus:outline-none hover:bg-[#191c24] hover:text-white transition-all duration-300 ease-in-out cursor-pointer`}>
            <ArrowUpLeft className="w-[18px] mr-[7px]" /> Back
        </div>
    )
}

export default BackButton;