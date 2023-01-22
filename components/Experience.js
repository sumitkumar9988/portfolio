import React from "react";
import user from "../data/user";
import Item from "./Card/Experience";

const Experience = () => {
  const [experience, setExperience] = React.useState(user.experience);
  let x, y, z;
  x = 0;
  y = experience.length - parseInt(experience.length / 2);
  z = experience.length;

  return (
    <div>
      <div className="w-full mt-20 md:mt-4  md:w-10/12 lg:w-7/12 mx-auto ">
        <div className=" pb-8 ml-0  p-8 md:p-16">
          <div>
            <p className="mb-4 text-2xl font-bold md:text-3xl font-rubik text-white">
              Experience
            </p>
          </div>
          <div className="">
            <div className="flex flex-col ">
              {experience.map((item, i) => (
                <Item
                  {...item}
                  key={i}
                  first={i === 0}
                  last={i === experience.length - 1}
                  custom={i}
                />
              ))}
            </div>
            {/* <div className="hidden md:block">
            <div className="flex justify-between ">
              <div>
                {experience.slice(x, y).map((item, i) => (
                  <Item
                    {...item}
                    key={i}
                    first={i === 0}
                    last={
                      i ===
                      experience.length - parseInt(experience.length / 2) - 1
                    }
                    custom={i}
                  />
                ))}
              </div>
              <div>
                {experience.slice(y, z).map((item, i) => (
                  <Item
                    {...item}
                    key={i}
                    first={i === 0}
                    last={i === (experience.length % 2 === 0 ? y - 1 : y - 2)}
                    custom={i}
                  />
                ))}
              </div>
            </div>
          </div> */}
          </div>
        </div>
      </div>
    </div>
    // <div className="w-full md:w-10/12 lg:w-7/12  pb-12">
    //   <div className="mt-20 mb-4 md:mt-28 ml-8 md:ml-16 lg:ml-32">
    //     <div>
    //       <p className="md:mt-28  text-2xl font-bold md:text-3xl font-rubik   text-white">
    //         Experience
    //       </p>
    //     </div>

    //   </div>
    // </div>
  );
};

export default Experience;
