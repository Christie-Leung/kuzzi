"use client"

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Hero from "./hero";
import Image from "next/image";


import Waste from "../public/waste.png"
import { Dispatch, MutableRefObject, Ref, SetStateAction, useEffect, useState } from "react";
import { Button } from "./ui/button";
import { hero as heroText, truckLandfill } from "../public/text.json"
import Heading1 from "./ui/heading1";
import Heading2 from "./ui/heading2";

import GarbageTruck from "../public/garbage_truck.png";

const Example = () => {
  return (
    <div className="bg-neutral-800">
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll down
        </span>
      </div>
      <HorizontalScrollCarousel />
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll up
        </span>
      </div>
    </div>
  );
};

export default Example;

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
  const x2 = useTransform(scrollYProgress, [1, 0], ["-95%", "1%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
          <section ref={targetRef} className="relative top-0 w-full h-5/6">
        <div className="sticky top-0 h-full w-full overflow-x-hidden">
          <div className={`absolute h-full w-[10000px] will-change-transform `}>
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
        <div className={`absolute h-full w-full will-change-transform `}>
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
      <div className={`absolute h-full w-full  my-10 will-change-transform  overflow-x-hidden`}>
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
          <motion.div style={{ translateX: `${x2}` }}>
          <Image src={GarbageTruck} alt="landfill truck" 
          className={`sticky bottom-10 left-10 max-w-[20vw]`}/>
          </motion.div>
        
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

const cards = [
  {
    url: "/imgs/abstract/1.jpg",
    title: "Title 1",
    id: 1,
  },
  {
    url: "/imgs/abstract/2.jpg",
    title: "Title 2",
    id: 2,
  },
  {
    url: "/imgs/abstract/3.jpg",
    title: "Title 3",
    id: 3,
  },
  {
    url: "/imgs/abstract/4.jpg",
    title: "Title 4",
    id: 4,
  },
  {
    url: "/imgs/abstract/5.jpg",
    title: "Title 5",
    id: 5,
  },
  {
    url: "/imgs/abstract/6.jpg",
    title: "Title 6",
    id: 6,
  },
  {
    url: "/imgs/abstract/7.jpg",
    title: "Title 7",
    id: 7,
  },
];