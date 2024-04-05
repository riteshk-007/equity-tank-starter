import Image from "next/image";
import React from "react";
import { review } from "@/data/review";

export const metadata = {
  title: "Equity Tank - Testimonials",
  description:
    "Discover why our Students love us. Read firsthand accounts of the exceptional service and results we deliver.",
};
const Testimonials = () => {
  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-xl">
          <h3 className="text-[#03989e] dark:text-[#00c2cb] text-3xl font-semibold sm:text-4xl">
            Hear From Our Satisfied Students
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mt-3">
            Discover why our clients love us. Read firsthand accounts of the
            exceptional service and results we deliver.
          </p>
        </div>
        <div className="mt-12">
          <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {review?.map((item) => (
              <a
                href="https://www.google.com/search?gs_ssp=eJzj4tVP1zc0LM5KKzBJzy42YLRSNagwtjRIMTBNSbVIMbJMTkyytDKoMEoxN09KMkk0NDcxSjM0TfbiTi0szSypVChJzMsGAJh7FDc&q=equity+tank&rlz=1C1RXQR_enIN1100IN1100&oq=eq&gs_lcrp=EgZjaHJvbWUqFQgCEC4YJxivARjHARiABBiKBRiOBTIGCAAQRRg8MgYIARBFGDkyFQgCEC4YJxivARjHARiABBiKBRiOBTIGCAMQRRg7Mg0IBBAAGIMBGLEDGIAEMgYIBRBFGDwyBggGEEUYPDIGCAcQRRg80gEIMzQxMWowajGoAgCwAgA&sourceid=chrome&ie=UTF-8#ip=1&lrd=0x390d05de8d29cab9:0x2d77bb4a1742f15c,1,,,,"
                key={item?.id}
                target="_blank"
              >
                <div className="w-full h-72 ">
                  <Image
                    width={774}
                    height={516}
                    src={item?.img}
                    className="w-full h-full object-cover object-center shadow-md rounded-xl"
                    alt={item?.name}
                    style={{ objectPosition: item?.position }}
                  />
                </div>
                <div className="mt-4">
                  <h4 className="text-lg text-gray-700 dark:text-gray-300 font-semibold">
                    {item.name}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">
                    {item.review}
                  </p>
                </div>
              </a>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
