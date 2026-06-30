import { cn } from "@/lib/utils";

const Title = ({ children, className }) => {
  return (
<<<<<<< HEAD
    <h2
      className={cn(
        "mb-4 text-xl font-bold text-[var(--color-primary)]",
        className
      )}
    >
=======
    <h2 className={cn("text-xl text-lightSky font-bold mb-4", className)}>
>>>>>>> 5ecbec057e38bb4142a7f973d49e609781513972
      {children}
    </h2>
  );
};

<<<<<<< HEAD
export default Title;
=======
export default Title;
>>>>>>> 5ecbec057e38bb4142a7f973d49e609781513972
