import Image from 'next/image';
import { montserrat } from './_lib/fonts';
import LostConnectionImage from '../../public/images/lost-page.png';
import React from 'react';



const ErrorPage = ({classList} : {classList?: string})=>{
    return(
        <div className={`w-[100%] p-[35px] pb-[55px] bg-[#191c24] border-[2px] border-black border-solid rounded-[15px] ${classList}`}>
            <Image src={LostConnectionImage} alt="connection-lost-img" className='w-[40%] m-auto block rotate-[-90deg]' />
            <h5 className={`${montserrat.className} text-lg leading-[28px] font-bold text-white mt-[25px] text-center`}>Oops ! something went wrong !</h5>
        </div>
    )
}

export default ErrorPage;