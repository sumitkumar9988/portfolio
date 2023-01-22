import { motion } from "framer-motion";
import Link from "next/link";
const Headers = () => {
  return (
    <motion.div className="absolute z-30 w-full opacity-90 transition-top  flex items-center transform transition duration-200 justify-center mx-auto py-8">
      <div className="w-full md:w-10/12 lg:w-7/12 ">
        <div>
          <Link href="/">
            <motion.div
              whileHover={{ y: -5 }}
              initial={{ y: -5 }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.5
              }}
              className="text-2xl mx-8 lg:mx-16 font-rubik font-semibold text-white"
            >
              Sumit.
            </motion.div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Headers;
