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
      {/* বর্ডার এবং আইকন কালার থিম অনুযায়ী আপডেট করা হয়েছে */}
      <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-[var(--color-primary)] text-[var(--color-primary)]">
        <Check className="h-10 w-10" />
      </div>
      
      <h2 className="text-4xl font-extrabold leading-none text-transparent text-outline">
        Thank You!
      </h2>
      
      <p className="text-[var(--color-text)]">{status}</p>
    </motion.div>
  );
};

export default SuccessMsg;