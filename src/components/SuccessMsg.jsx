import { Check } from "lucide-react";
import { motion } from "motion/react";

const SuccessMsg = ({ status }) => {
  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="flex flex-col items-center justify-center gap-3 py-6"
    >
<<<<<<< HEAD
      {/* বর্ডার এবং আইকন কালার থিম অনুযায়ী আপডেট করা হয়েছে */}
      <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-[var(--color-primary)] text-[var(--color-primary)]">
        <Check className="h-10 w-10" />
      </div>
      
      <h2 className="text-4xl font-extrabold leading-none text-transparent text-outline">
        Thank You!
      </h2>
      
      <p className="text-[var(--color-text)]">{status}</p>
=======
      <div className="border-2 border-lightSky w-20 h-20 rounded-full flex items-center justify-center text-lightSky">
        <Check className="w-10 h-10" />
      </div>
      <h2 className="text-4xl leading-none font-extrabold text-transparent text-outline">
        Thank You!
      </h2>
      <p>{status}</p>
>>>>>>> 5ecbec057e38bb4142a7f973d49e609781513972
    </motion.div>
  );
};

<<<<<<< HEAD
export default SuccessMsg;
=======
export default SuccessMsg;
>>>>>>> 5ecbec057e38bb4142a7f973d49e609781513972
