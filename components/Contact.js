import { motion } from "framer-motion";
import user from "../data/user";
const Contact = () => {
  return (
    <div className="w-full mt-20 md:mt-4  md:w-10/12 lg:w-7/12 mx-auto ">
      <div className=" pb-8 ml-0  p-8 md:p-16">
        <div>
          <p className="mb-4 text-2xl font-bold md:text-3xl font-rubik text-white">
            Contact Me
          </p>
        </div>
        <div className="">
          <motion.div
            whileHover={{
              x: 10,
              transition: {
                duration: 0.5
              }
            }}
            className="mt-8 "
          >
            <a
              href="mailto:ranga.sumit1999@gmail.com"
              className="text-base font-medium md:text-xl text-gray-200"
            >
              {user.email}
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
