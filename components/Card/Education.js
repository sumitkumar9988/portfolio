import { motion } from "framer-motion";
const Experience = ({ degree, institute, startDate, endDate, last }) => {
  return (
    <motion.div
      whileHover={{
        x: 10,
        transition: {
          duration: 0.5
        }
      }}
    >
      <div className="relative flex items-center mt-14">
        {!last && <div className="absolute h-20 mt-32 ml-1 w-0.5 bg-white" />}
        <div className="h-full w-4">
          <div className="block w-3 h-3 bg-white rounded-full "></div>
        </div>
        <div className="ml-8 text-gray-200">
          <p className="text-base font-rubik font-medium">{degree}</p>
          <p className="text-base">{institute}</p>
          <p className="flex items-center text-sm mt-0.5 text-gray-200">
            {startDate} -- {endDate}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
