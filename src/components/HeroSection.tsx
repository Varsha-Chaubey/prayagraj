"use client";

import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
const HeroSection = () => {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col item-center  justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <div className="p-4 relative z-10 w-full text-center">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="blue"
        />
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Prayagraj The Sangam City
        </h1>
        <p className="mt-5 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto ">
          Prayagraj, formerly known as Allahabad or Ilahabad, is a metropolis in
          the Indian state of Uttar Pradesh. Prayagraj lies close to Triveni
          Sangam, the three-river confluence of the Ganges, Yamuna, and the
          mythical Sarasvati. The city is the judicial capital of Uttar Pradesh
          with the Allahabad High Court being the highest judicial body in the
          state.
        </p>
        <div className="mt-5">
          <Link href={"https://en.wikipedia.org/wiki/Prayagraj"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Wikipedia
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
