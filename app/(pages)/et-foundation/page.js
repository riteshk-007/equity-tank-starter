import Image from "next/image";
import React from "react";

export const metadata = {
  title: "Equity Tank - ET Foundation",
  description:
    "ET Foundation is a non-profit organization that works to provide financial literacy and education to the underprivileged and marginalized communities.",
};
const ETFoundation = () => {
  return (
    <div>
      <Image src="/et.png" width={1920} height={1080} alt="ET Foundation" />
    </div>
  );
};

export default ETFoundation;
