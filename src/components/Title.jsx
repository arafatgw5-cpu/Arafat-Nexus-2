import { cn } from "@/lib/utils";

const Title = ({ children, className }) => {
  return (
    <h2
      className={cn(
        "mb-4 text-xl font-bold text-[var(--color-primary)]",
        className
      )}
    >
      {children}
    </h2>
  );
};

export default Title;