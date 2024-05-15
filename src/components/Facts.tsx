"use client";

import Image from "next/image";
import { TracingBeam } from "./ui/tracing-beam";

const facts = [
  {
    title: "Allahabad High Court",
    description:
      "The Allahabad High Court is one of the oldest high courts in India and holds significant historical and legal importance. Established in 1869, it is located in Prayagraj (formerly Allahabad). The architecture of the building is an impressive blend of Indo-Islamic and British architectural styles. It serves as the highest judicial body in the state of Uttar Pradesh, hearing cases related to civil, criminal, constitutional, and administrative matters.",
    image:
      "https://i0.wp.com/www.opindia.com/wp-content/uploads/2022/04/386490-allahabad-high-court.jpg?fit=800%2C480&ssl=1",
  },
  {
    title: "Magh Mela",
    description:
      "The Magh Mela is one of the largest and most auspicious Hindu religious festivals held annually in Prayagraj. It takes place during the Hindu month of Magh (January-February) and is centered around the sacred confluence of the Ganges, Yamuna, and mythical Saraswati rivers. Devotees from all over India gather here to take ritual baths in the holy waters, perform religious ceremonies, and seek blessings. The festival is renowned for its vibrant atmosphere, spiritual fervor, and various cultural activities.",
    image:
      "https://c.ndtvimg.com/2021-02/m0quvakg_magh-mela-prayagraj_625x300_27_February_21.jpg?im=Resize=(1230,900)",
  },
  {
    title: "Prayagraj Junction",
    description:
      "Prayagraj Junction is a major railway station located in Prayagraj, Uttar Pradesh. It serves as a crucial transportation hub connecting various parts of the country. The station's historical significance lies in its role as a primary gateway for pilgrims visiting Prayagraj for religious events such as the Kumbh Mela and Magh Mela. It is one of the busiest railway stations in North India, catering to a large number of passengers and trains on a daily basis.      ",
    image: "https://i.ytimg.com/vi/C1t7q0AbEIo/maxresdefault.jpg",
  },
  {
    title: "Bamrauli Airport (Prayagraj Airport)",
    description:
      "Bamrauli Airport, also known as Prayagraj Airport, is a domestic airport serving the city of Prayagraj. Located in Bamrauli, it primarily handles domestic flights to major cities in India. While smaller in size compared to international airports, Bamrauli Airport plays a crucial role in facilitating air travel for residents and visitors to Prayagraj and the surrounding region. It contributes to the city's connectivity and accessibility, serving as an important transportation link for both business and leisure travelers.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/b4/Allahabad_Airport_Terminal_New.jpg",
  },
];
const Facts = () => {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {facts.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <p className={"text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200"}>{item.title}</p>

            <div className="text-sm  prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                 {item.description}
                </p>
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
};

export default Facts;
