import ContactForm from "@/app/components/ContactForm";
import Map from "@/app/components/Map";
import React from "react";

export const metadata = {
  title: "Equity Tank - Contact Us",
  description:
    "Contact Equity Tank for any queries. Equity Tank is the best stock market institute in Delhi.",
};
const Contact = () => {
  return (
    <div>
      <ContactForm />
      <Map />
    </div>
  );
};

export default Contact;
