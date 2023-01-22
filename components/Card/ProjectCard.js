/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import { FaGithub, FaLink } from "react-icons/fa";
const ProjectCard = ({
  name,
  description,
  DemoUrl,
  repoUrl,
  logo,
  rightShift
}) => {
  return (
    <motion.div
      transition={{
        duration: 0.5
      }}
      whileHover={{ scale: 1.03 }}
    >
      <div className="flex flex-col items-center justify-center my-8   rounded-xl">
        <div className="w-10/12 lg:w-full h-80 flex lg:flex-row rounded-xl">
          <div className="w-full lg:w-7/12 h-full relative">
            <img
              className={
                "absolute w-full h-full object-cover md:object-auto bg-fixed bg-cover object-center opacity-30 shadow-lg  lg:opacity-100  rounded-lg md:rounded-l-xl"
              }
              src={logo}
              alt=""
            />
            <div className="block lg:hidden bg-opacity-10 absolute   mx-8 z-10 my-8 text-left">
              <div className="text-xl font-bold font-rubik md:text-2xl text-white">
                {name}
              </div>
              <div className=" my-8 text-base h-32 overflow-clip  rounded  text-gray-200">
                {description}
              </div>
              <div className="flex flex-row z-50 pt-4">
                {repoUrl && (
                  <div className="z-10">
                    <a target="_blank" rel="noreferrer" href={repoUrl}>
                      <FaGithub className="  w-6 mx-2 h-8 text-white" />
                    </a>
                  </div>
                )}
                {DemoUrl && (
                  <div className="z-10">
                    <a target="_blank" rel="noreferrer" href={DemoUrl}>
                      <FaLink className="text-white  w-6 mx-2 h-8" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div
            className={` hidden lg:block lg:w-5/12 bg-gray-900 shadow-lg rounded-r-xl`}
          >
            <div className={"absoulte flex flex-col mx-8 my-8 text-left"}>
              <div
                className={`text-xl font-bold font-rubik md:text-2xl text-white`}
              >
                {name}
              </div>
              <div
                className={` my-8 text-base h-32 overflow-clip  rounded text-gray-200`}
              >
                {description}
              </div>
              <div className="relative">
                <div className={"absolute flex flex-row  right-0 "}>
                  {repoUrl && (
                    <div>
                      <a target="_blank" rel="noreferrer" href={repoUrl}>
                        <FaGithub className="w-6 mx-2 h-8 text-white" />
                      </a>
                    </div>
                  )}
                  {DemoUrl && (
                    <div>
                      <a target="_blank" rel="noreferrer" href={DemoUrl}>
                        <FaLink className="w-6 mx-2 h-8 text-white" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
