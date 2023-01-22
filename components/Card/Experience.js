import { motion } from "framer-motion";
const Experience = ({
  title,
  organization,
  description,
  startDate,
  endDate,
  last
}) => {
  return (
    <motion.div
      whileHover={{
        x: 10,
        transition: {
          duration: 0.5
        }
      }}
    >
      <div className=" flex flex-row gap-4 items-center mt-24 ">
        <div className="h-full w-4">
          <div className="block w-3 h-3 bg-white rounded-full "></div>
        </div>

        <div>
          <div className="ml-8 text-gray-200 pr-8">
            <p className="text-base font-rubik font-medium">{title}</p>
            <p className="text-base ">{organization}</p>
            <p className="text-base font-rubik  font-medium w-full pt-4 ">
              {description}
            </p>
            <p
              className={`flex items-center text-sm mt-0.5 text-gray-200 pt-4`}
            >
              {startDate} -- {endDate}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
