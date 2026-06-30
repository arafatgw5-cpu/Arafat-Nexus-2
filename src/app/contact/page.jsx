import ContactForm from "@/components/ContactForm";
import Container from "@/components/Container";
import { Mail, MapPinCheck, Phone } from "lucide-react";
import React from "react";

const infoData = [
  { title: "Phone", description: "01321913283", icon: <Phone /> },
  { title: "Email", description: "arafatgw5@gmail.com", icon: <Mail /> },
  {
    title: "Address",
    description: "Patuakhali Bangladesh",
    icon: <MapPinCheck />,
  },
];

<<<<<<< HEAD
 const ContactPage = () => {
=======
const ContactPage = () => {
>>>>>>> 5ecbec057e38bb4142a7f973d49e609781513972
  return (
    <Container className="py-6 md:py-12">
      <div className="flex flex-col md:flex-row gap-6 md:gap-14">
        <div className="w-full md:w-2/3">
          <ContactForm />
        </div>
        <div className="w-full md:w-1/3 flex flex-col justify-center gap-4 md:gap-8">
          {infoData?.map((item) => (
            <div key={item?.title} className="flex items-center space-x-4">
<<<<<<< HEAD
              <span className="rounded-md bg-[var(--color-primary)]/10 p-4 text-[var(--color-primary)]">
                {item?.icon}
              </span>
              <div>
                <h3 className="text-sm font-semibold text-[var(--color-muted)]">
                  {item?.title}
                </h3>
                <p className="text-[var(--color-text)]">{item?.description}</p>
=======
              <span className="bg-lightSky/5 p-4 rounded-md">{item?.icon}</span>
              <div>
                <h3 className="text-white/60 text-sm font-semibold">
                  {item?.title}
                </h3>
                <p>{item?.description}</p>
>>>>>>> 5ecbec057e38bb4142a7f973d49e609781513972
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

<<<<<<< HEAD
export default ContactPage;
=======
export default ContactPage;
>>>>>>> 5ecbec057e38bb4142a7f973d49e609781513972
