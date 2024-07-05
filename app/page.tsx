"use client";

import Image from "next/image";

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-1">
      <div className="z-0 w-full max-w-5xl items-center justify-between font-mono text-sm">
        <div className="flex h-52 w-full items-end justify-center">
          <Image
            src="/beta.png"
            alt="Beta Logo"
            width={300}
            height={300}
            
          />
        </div>
      </div>

      <div className="text-center">
        <h1 className="text-9xl font-bold text-white">
          Beta
        </h1>
      </div>
      
      <div className=" z-20 text-center beta-container">
        <p className="text-4xl font-bold text-white">
          Beta Token Post-Launch
        </p>
        <div className="beta-middle w-auto h-auto">
          <Image 
          className="beta-image"
          src="/timeline.png" 
          alt="timeline"
          width={940}
          height={1050}
          priority
          />
        </div>
      </div>

      <div className=" text-center font-semibold text-white">
      <p> NO RUGS. NO GAMES. NO BULLSHIT.</p>
      <p> ALL COMMUNITY EFFORT.</p>
      <p> THIS IS JUST THE BEGINNING.</p>
      <br/>
      <p> Renounced Mint Authority.</p>
      <p> Contract Renounced. </p>
      <p> Liquidity Burned.  </p>
      <p> No Transaction Fees. No Tax.</p>
      <br/>
      <p>Beta Token, essential to the Alpha ecosystem, translates activity into value. </p>                          
      <p>It initiates our journey to reshape finance and ensure fair wealth distribution.</p>
      <p>Our perpetual, immutable system highlights DeFi's potential and rewards devoted members</p>
      </div>

      <div className=" flex flex-col items-center gap-6 pt-10">
        <div className=" flex flex-col items-center text-center lg:mb-0 bg-green-500 rounded-lg">
          <p className="text-2xl font-semibold px-[20px] py-3 text-white">
              0xca530408c3e552b020a2300debc7bd18820fb42f
          </p>
        </div>

        <div className="text-center bg-green-500 rounded-lg px-[50px] py-[10px]">
        <a
          href="/whitepaper.pdf"
          className="text-[20px] text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="font-semibold">
            WhitePaper{" "}
          </p>
        </a>
        </div>

        <div className="grid grid-cols-2 gap-12">
        <div className="col-span-1 text-center bg-green-500 rounded-lg px-[10px] py-[10px]">
          <a href="https://raydium.io/swap" className="text-[20px] text-white" target="_blank" rel="noopener noreferrer">
            <p className="font-semibold text-center">
              Buy Now{" "}
            </p>
          </a>
        </div>
        <WalletMultiButton className="col-span-1 font-semibold text-center"  style={{backgroundColor: 'rgb(34 197 94)', color: 'white', borderRadius: '8px', fontSize: '20px'}} />
        </div>
      </div>

    </main>
  );
}
