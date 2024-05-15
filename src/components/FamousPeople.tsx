import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const famous_people = [
  {
    id: 1,
    name: "Jawaharlal Nehru",
    designation: "Politician",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Jnehru.jpg/333px-Jnehru.jpg",
  },
  {
    id: 2,
    name: "Indira Gandhi",
    designation: "Politician",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Indira_Gandhi_1977.jpg/70px-Indira_Gandhi_1977.jpg",
  },
  {
    id: 3,
    name: "Harivansh Rai Bachchan",
    designation: "Poet",

    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Harivansh_Rai_Bachchan_2003_stamp_of_India.jpg/76px-Harivansh_Rai_Bachchan_2003_stamp_of_India.jpg",
  },
  {
    id: 4,
    name: "Madan Mohan Malaviya",
    designation: "Educator, Politician",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Madan_Mohan_Malaviya1.jpg/72px-Madan_Mohan_Malaviya1.jpg",
  },
  {
    id: 5,
    name: "Amitabh Bachchan",
    designation: "Actor",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Indian_actor_Amitabh_Bachchan.jpg/345px-Indian_actor_Amitabh_Bachchan.jpg",
  },

  {
    id: 6,
    name: "Dhyan Chand",
    designation: "Field Hockey Player",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Dhyan_Chand_closeup.jpg/60px-Dhyan_Chand_closeup.jpg",
  },
];
const FamousPeople = () => {
  return (
    <div className="relative h-[40rem] overflow-hidden flex item-center justify-center">
      <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
        <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">
          Famous Peoples from Prayagraj
        </h2>
        <p className="text-base md:text-lg text-white text-center mb-4">
          {" "}
          Meet Some Famous Peoples Who Belongs from Prayagraj
        </p>
        <div className="flex flex-row items-center justify-center mb-10 w-full">
          <AnimatedTooltip items={famous_people} />
        </div>
      </WavyBackground>
    </div>
  );
};

export default FamousPeople;
