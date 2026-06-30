"use client";
import { statsData } from "@/constants";
import CountUp from "react-countup";

const Statistics = () => {
  return (
    <section>
<<<<<<< HEAD
      <div className="flex flex-col items-center gap-2.5 md:flex-row md:gap-5">
        {statsData?.map((item, index) => (
          <div
            key={index}
            className="flex flex-1 flex-col items-center justify-center gap-2 md:flex-row md:gap-4 lg:justify-start"
=======
      <div className="flex items-center flex-col md:flex-row gap-2.5 md:gap-5">
        {statsData?.map((item, index) => (
          <div
            key={index}
            className="flex flex-1 gap-2 md:gap-4 flex-col md:flex-row items-center justify-center lg:justify-start"
>>>>>>> 5ecbec057e38bb4142a7f973d49e609781513972
          >
            <CountUp
              end={item.num}
              duration={5}
              delay={2}
<<<<<<< HEAD
              className="text-4xl font-extrabold text-[var(--color-primary)] lg:text-6xl"
=======
              className="text-4xl lg:text-6xl font-extrabold"
>>>>>>> 5ecbec057e38bb4142a7f973d49e609781513972
            />
            <p
              className={`${
                item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
<<<<<<< HEAD
              } text-sm leading-snug text-[var(--color-text)]`}
=======
              } leading-snug text-white/80 text-sm`}
>>>>>>> 5ecbec057e38bb4142a7f973d49e609781513972
            >
              {item?.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

<<<<<<< HEAD
export default Statistics;
=======
export default Statistics;
>>>>>>> 5ecbec057e38bb4142a7f973d49e609781513972
