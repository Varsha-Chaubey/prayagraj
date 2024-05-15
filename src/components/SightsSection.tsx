"use client";
import Link from "next/link";
import sightData from "../data/data.json";
import { BackgroundGradient } from "./ui/background-gradient";

interface Places {
  id: number;
  slug: string;
  name: string;
  description: string;
  category: string;
}
const SightsSection = () => {
  const topPlaces = sightData.places.filter((places: Places) => places);

  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide">
            {" "}
            Places to visit{" "}
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Top sights in Prayagraj
          </p>
        </div>
      </div>
      <div className="mt-10 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {topPlaces.map((place: Places) => place.id<=6 &&(
            <div className="flex justify-center" key={place.id}>
                 <BackgroundGradient className="flex flex-col rounded-[22px]  bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
            <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{place.name}</p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{place.description}</p>
                <Link href={`/places/${place.slug}`} className="mt-2">Learn More</Link>
            </div>
                 </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link
          href={"/places"}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
        >
          View More Places
        </Link>
      </div>
    </div>
  );
};

export default SightsSection;
