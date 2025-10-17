'use client'
import React from 'react';
import { BlockChainProps } from '../types';
import Image from 'next/image';


const BlockChain = ({iconUrl, name}: BlockChainProps) => {
    return (
        <div className="p-2 w-full">
            <div className="flex justify-between items-center p-3 rounded-lg cursor-pointer border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all duration-200 hover:border-[#01EEA0]">
                <div className="flex flex-row gap-3 items-center min-w-0">
                    <div className="w-2.5 h-2.5 bg-green-500 rounded-full shrink-0" />
                    <p className="truncate font-semibold text-sm sm:text-base text-gray-800">{name}</p>
                </div>
                <div className="flex-shrink-0">
                    <Image src={iconUrl} alt={name} width={36} height={36} className="object-contain rounded-md" />
                </div>
            </div>
        </div>
    );
}

export default BlockChain;
