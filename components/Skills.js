/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import user from "../data/user";
const Skills = () => {
  return (
    <div>
      <div className="w-full mt-20 md:mt-4  md:w-10/12 lg:w-7/12 mx-auto ">
        <div className=" pb-8 ml-0  p-8 md:p-16">
          <div>
            <p className="mb-4 text-2xl font-bold md:text-3xl font-rubik text-white">
              Skills
            </p>
          </div>
          <div className="max-w-xl  mt-8 pl-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-4">
            {user.skills.map((skill, i) => (
              <motion.div
                transition={{
                  duration: 0.5
                }}
                whileHover={{ scale: 1.1 }}
                key={i}
                className="block pt-3 pb-2 p-1 px-2 w-32  text-center bg-gray-900 rounded-lg shadow-xl "
              >
                <motion.div className="">
                  <img className="mx-auto w-8 h-8" src={skill.image} alt="" />
                </motion.div>
                <p className="mt-2 text-base font-medium text-white">
                  {skill.skill}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
