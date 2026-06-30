<<<<<<< HEAD
// import { cn } from "@/lib/utils";

// const Container = ({ children, className }) => {
//   return (
//     <div className={cn("max-w-6xl mx-auto px-4", className)}>{children}</div>
//   );
// };

// export default Container;
import { cn } from "@/lib/utils";

const Container = ({ children, className, style, ...props }) => {
  return (
    <div 
      // থিমের মেইন টেক্সট কালার ডিফল্টভাবে সেট করা হলো
      style={{ color: "var(--color-text)", ...style }} 
      className={cn("max-w-6xl mx-auto px-4", className)} 
      {...props}
    >
      {children}
    </div>
=======
import { cn } from "@/lib/utils";

const Container = ({ children, className }) => {
  return (
    <div className={cn("max-w-6xl mx-auto px-4", className)}>{children}</div>
>>>>>>> 5ecbec057e38bb4142a7f973d49e609781513972
  );
};

export default Container;
