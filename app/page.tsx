import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-10">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
        <div className="flex h-48 w-full items-end justify-center">
          <Image
            src="/beta.png"
            alt="Beta Logo"
            width={300}
            height={300}
            priority
          />
        </div>
      </div>

      <div className=" text-center font-semibold">
      <p className=" text-white"> NO RUGS. NO GAMES. NO BULLSHIT.</p>
      <p className=" text-white"> ALL COMMUNITY EFFORT.</p>
      <p className=" text-white"> THIS IS JUST THE BEGINNING.</p>
      <br></br>
      <p className=" text-white"> Renounced Mint Authority.</p>
      <p className=" text-white"> Contract Renounced. </p>
      <p className=" text-white"> Liquidity Burned.  </p>
      <p className=" text-white"> No Transaction Fees. No Tax.</p>
      <br></br>
      <p className=" text-white">Beta Token, essential to the Alpha ecosystem, translates activity into
                                value. </p>
                                
      <p className=" text-white">It initiates our journey to reshape finance and ensure fair wealth
                                  distribution.</p>
      <p className=" text-white">Our perpetual, immutable system highlights DeFi's
                                potential and rewards devoted members</p>
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

        <div className="text-center bg-green-500 rounded-lg px-[50px] py-[10px]">
        <a
          href="https://raydium.io/swap"
          className="text-[20px] text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="font-semibold">
            Buy Now{" "}
          </p>
        </a>
        </div>
      </div>

    </main>
  );
}
