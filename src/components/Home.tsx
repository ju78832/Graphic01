'use client'
import { cn } from "@/utils/cn";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect"




export default function Home() {
    const word = `Elevate your brand with bespoke graphic designs at our shop. 
    Collaborative, creative, and detail-oriented, we craft captivating 
    visuals that reflect your brand's identity. Satisfaction guaranteed.
     Contact us today!`
  return (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
    <Spotlight
      className="-top-40 left-0 md:left-60 md:-top-20"
      fill="white"
    />
    <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
      <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
        Grphics Designer's <br /> Commuinty is here.
      </h1>
      <div className="mt-10 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
      <TextGenerateEffect words={word}/>
      </div> </div>
    </div>
  
  )
}
