import React from "react";
import user from "../data/user";
import Item from "./Card/Education";

const Experience = () => {
  const [education, setEducation] = React.useState(user.education);
  let x, y, z;
  x = 0;
  y = education.length - parseInt(education.length / 2);
  z = education.length;

  return (
    <div className="w-full mt-20 md:mt-4  md:w-10/12 lg:w-7/12 mx-auto ">
      <div className=" pb-8 ml-0  p-8 md:p-16">
        <div>
          <p className="mb-4 text-2xl font-bold md:text-3xl font-rubik text-white">
            Education
          </p>
        </div>
        <div className="">
          <div className="flex flex-col md:hidden ">
            {education.map((item, i) => (
              <Item
                {...item}
                key={i}
                first={i === 0}
                last={i === education.length - 1}
                custom={i}
              />
            ))}
          </div>
          <div className="hidden md:block">
            <div className="flex justify-between ">
              <div>
                {education.slice(x, y).map((item, i) => (
                  <Item
                    {...item}
                    key={i}
                    first={i === 0}
                    last={
                      i ===
                      education.length - parseInt(education.length / 2) - 1
                    }
                    custom={i}
                  />
                ))}
              </div>
              <div>
                {education.slice(y, z).map((item, i) => (
                  <Item
                    {...item}
                    key={i}
                    first={i === 0}
                    last={i === (education.length % 2 === 0 ? y - 1 : y - 2)}
                    custom={i}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
