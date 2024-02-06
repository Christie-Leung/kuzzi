"use client"

import Hero from "@/components/hero";
import GarbageTruck from "../public/garbage_truck.png";
import Waste from "../public/waste.png"
import { Dispatch, MutableRefObject, Ref, SetStateAction, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { useScroll, useTransform } from "framer-motion";
import { hero as heroText, truckLandfill } from "../public/text.json"
import Heading1 from "./ui/heading1";
import Heading2 from "./ui/heading2";

const HorizontalLandfill = () => {
 const targetRef = useRef(null);
 const { scrollYProgress } = useScroll({
    target: targetRef,
 });

 const translateX = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
 
  return (
    <>
      <section ref={targetRef} className="relative top-0 w-full h-5/6">
        <div className="sticky top-0 h-full w-full overflow-x-hidden">
          <div className={`absolute h-full w-[10000px] will-change-transform translate-x-[-${translateX}%]`}>
            <div className="absolute flex w-full h-[50vh] items-center">
              <Hero text2={heroText.h2} text1={heroText.h1}/>
            </div>
          </div>

          <div className={`absolute h-full w-[10000px] will-change-transform`}>
            <Image src={GarbageTruck} alt="landfill truck" 
            className="absolute bottom-0 left-10 max-w-[30vw] max-h-[20wh]"/>
          </div>
        </div>
      </section>

      <section ref={targetRef} className="relative w-full h-[90%] my-10">
      <div className="sticky top-0 h-full w-full overflow-x-hidden overflow-hidden">
        <div className={`absolute h-full w-full will-change-transform translate-x-[-${translateX}%]`}>
          <div className="absolute flex w-full h-[50vh] items-center">
          <Hero text2={truckLandfill.h2} text1={truckLandfill.h1}/>
          </div>
         </div>

         <div className={`absolute h-full w-[10000px] will-change-transform`}>
          <Image src={GarbageTruck} alt="landfill truck" 
          className="absolute bottom-0 left-10 max-w-[30vw] max-h-[20wh] translate-x-3/4"/>
        </div>
        <div className={`absolute h-full w-full will-change-transform`}>
          <Image src={Waste} alt="landfill waste pile" 
          className="absolute bottom-[10vh] right-[-10vw] max-w-[30vw] max-h-[20wh] scale-[2.2]"/>
        </div>
      </div>
    </section>

    <section ref={targetRef} className="relative w-full h-[90%] my-10">
      <div className={`absolute h-full w-full  my-10 will-change-transform  overflow-x-hidden translate-x-[-${translateX}%]`}>
        <div className="absolute flex flex-col w-full h-[50vh]">
          <Hero text2={"Behind Landfills"} text1={"there are Artists who"}/>
          
          <div className="flex flex-col justify-start mx-16 my-8 items-start">
          <Heading1 text="CARE" />
          <Heading1 text="CYCLE" />
          <Heading1 text="CREATE" />
          </div>
        </div>
          </div>

         <div className={`absolute h-3/4 w-full will-change-transform`}>
          <Image src={Waste} alt="landfill truck" 
          className="absolute bottom-0 right-[-10px] max-w-[30vw] max-h-[20wh] scale-[4.5]"/>
        </div>
    </section>
    </>
  )
}

export default HorizontalLandfill;