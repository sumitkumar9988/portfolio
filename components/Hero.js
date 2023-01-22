/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import {
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiOutlineGithub
} from "react-icons/ai";
import user from "../data/user";

const Hero = () => {
  return (
    <div className=" ">
      <div className="w-full md:w-10/12 lg:w-7/12 mx-auto">
        <div className="pt-24 p-8 lg:p-16 md:pt-32  pb-4">
          <motion.div
            whileHover={{ y: -5 }}
            transition={{
              duration: 0.5
            }}
          >
            <img
              src={user.avatar}
              alt="me"
              className={` rounded-full w-24 h-24 object-cover bg-transparent  md:w-36 md:h-36 mt-36 text-white`}
            />
          </motion.div>

          <div className="flex items-center">
            <h1
              className={`mt-6 mb-6 text-4xl font-rubik font-bold md:mt-8 md:mb-8 md:text-5xl text-white`}
            >
              {user.name}
            </h1>
          </div>
          <p
            className={`text-xl font-extrabold tracking-normal md:text-3xl font-rubik    text-gray-200`}
          >
            {user.role}
          </p>
          <div className="flex gap-3 flex-row mt-8">
            <motion.div
              whileHover={{ y: -5 }}
              transition={{
                duration: 0.5
              }}
            >
              <a
                className=""
                target="_blank"
                rel="noopener noreferrer"
                href={`${user.links.github}`}
              >
                <AiOutlineGithub className={`h-8 w-8 m-1 text-white`} />
              </a>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              transition={{
                duration: 0.5
              }}
            >
              <a
                className=""
                target="_blank"
                rel="noopener noreferrer"
                href={`${user.links.twitter}`}
              >
                <AiFillTwitterCircle className={`h-8 w-8 m-1  text-white`} />
              </a>
            </motion.div>{" "}
            <motion.div
              whileHover={{ y: -5 }}
              transition={{
                duration: 0.5
              }}
            >
              <a
                className=""
                target="_blank"
                rel="noopener noreferrer"
                href={`${user.links.linkedin}`}
              >
                <AiFillLinkedin className={`h-8 w-8 m-1  text-white`} />
              </a>
            </motion.div>
          </div>

          <div className="mt-10">
            <p className={` text-base md:text-xl font-rubik text-gray-200`}>
              {user.bio}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
