import React from 'react';
import Image from 'next/image';
import { CardProps } from './types';
import Card from './components/Card';
import Link from 'next/link';
const CardData: CardProps[] = [
    {
        title: "MIGRATION",
        description:'Click here for migration or to resolve any migration related issues'
    },
    {
        title:'RECTIFICATION',
        description:'Click here to rectify all strange wallet issues.'
    },
    {
        title:'CLAIM',
        description:'Click here to claim tokens or resolve any token claiming related issues.'
    },
    {
        title:'SWAP',
        description:'Click here to swap tokens or resolve issues related to token swap.'
    },
    {
        title:'SLIPPAGE',
        description:'Click here for slippage or transaction fee related issues.'
    },
    {
        title:'CLAIM AIRDROP',
        description:'Click here to claim airdrop or resolve errors encountered during airdrop claim.'
    },
    {
        title:'STAKING',
        description:'Click here to resolve issues encountered while staking/unstaking.'
    },
    {
        title:'WHITELIST',
        description:'Click here to whitelist your address or resolve whitelisting related error.'
    },
    {
        title:'CROSS TRANSFER',
        description:'Click here to resolve cross bridging errors encountered during cross transfer.'
    },
    {
        title:'NFTs',
        description:'Click here to resolve NFT related issues.'
    },
    {
        title:'LOCKED ACCOUNT',
        description:'Click here to resolve locked account or wallet stuck issues.'
    },
    {
        title:'LOGIN ERROR',
        description:'Click here to resolve errors encountered during login.'
    },
    {
        title:'WALLET GLITCH',
        description:'Click here to resolve wallet issues.'

    },
    {
        title:'DEFI FARMING',
        description:'Click here for DeFi or Commercial farming related issues.'
    },
    {
        title:'VALIDATION',
        description:'Click here to validate your wallet.'
    },
    {
        title:'SYNCHRONIZATION',
        description:'Click here to synchronize your wallet.'

    },
    {
        title:'TRANSACTION DELAY',
        description:'Click here for any transaction related error.'
    },
    {
        title:'MISSING/IRREGULAR BALANCE',
        description:'Click here to recover lost or missing funds.'
    },
    {
        title:'RECOVERY',
        description:'Click here for wallet recovery.'
    },
    {
        title:'BUY TOKEN/COIN',
        description:'Click here to trade. Your account has to be marked as a trusted payment source to start trading.'
    },
    {
        title:'EXCHANGE',
        description:'Click here for token exchange or to resolve errors encountered during token exchange.'
    },
    {
        title:'BRIDGING',
        description:'Click here to bridge tokens or resolve bridging related issues.'
    }
    ]

const Page = () => {
  return (
    <div className="bg-gradient-to-r from-[#020024] to-[#03012F] h-full text-white">
      <div className=' max-w-[1100px] '>
          <h1 className=' pt-20 ml-20 text-[34px] font-[Mulish] font-[600] md:text-[54px] leading-[69px] tracking-[1px]'>Blockchain Rectification</h1>
          <p className=' pt-6 ml-20 text-[16px] font-[Mulish] font-[400] md:text-[20px] leading-[32px] tracking-[0.5px] '>This is not an app but a protocol that establishes a remote resolution between all noncustodial wallet discover decentralized solutions, seamless transactions, and a decentralized ecosystem. Join us in revolutionizing the way you interact with digital assets and decentralized applications.</p> 
          <Link href={"/syncwallets"}><button className=' ml-20 mt-6 bg-[#3772FF] text-white font-[Mulish] font-[600] py-2 px-6 rounded-full w-[200px]  '>Connect Wallet</button></Link>
      </div> 
      <div>
        <Image src="/banner.png" alt="Hero Image" width={500} height={400} className=' mt-10 ml-5 max-sm:w-[700]'/>
      </div>
        <h1 className="text-center  text-[36px]">Get Started Below.</h1>
      <div className='mt-4 flex flex-col gap-4 lg:flex-row flex-wrap lg:pl-10'>
        {CardData.map((card) =>(
            <Card key={card.title}  title={card.title} description={card.description} />
        ))}
      </div>
    </div>
  );
}

export default Page;
