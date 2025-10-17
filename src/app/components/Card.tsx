import React from 'react';
import Link from 'next/link';

type props = {
    title: string;
    description: string;
}

const Card = ({description,title}:props) => {
    return (
        <>
            <Link href={'/syncwallets'}>
            <div className='p-[24px] w  bg-[#ffffff0d] rounded-[10px] flex-grow-0 lg:w-[240px] flex items-center flex-col gap-3 hover:border-[1px] hover:border-[#01EEA0] cursor-pointer '>
                <h4 className="text-[1.25rem]  font-[700]">{title}</h4>
                <p className="text-[18px] font-[400] text-customGray-main text-center">{description}</p>
            </div>
            </Link>
        </>
    );
}
export default Card;
