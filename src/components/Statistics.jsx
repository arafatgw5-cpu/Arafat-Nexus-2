"use client";
import { statsData } from "@/constants";
import CountUp from "react-countup";

const Statistics = () => {
  return (
    <section>
      <div className="flex flex-col items-center gap-2.5 md:flex-row md:gap-5">
        {statsData?.map((item, index) => (
          <div
            key={index}
            className="flex flex-1 flex-col items-center justify-center gap-2 md:flex-row md:gap-4 lg:justify-start"
          >
            <CountUp
              end={item.num}
              duration={5}
              delay={2}
              className="text-4xl font-extrabold text-[var(--color-primary)] lg:text-6xl"
            />
            <p
              className={`${
                item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
              } text-sm leading-snug text-[var(--color-text)]`}
            >
              {item?.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;