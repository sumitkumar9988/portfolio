import user from "../data/user";
import ProjectCard from "./Card/ProjectCard";
const Project = () => {
  return (
    <div>
      <div className="w-full md:w-10/12 lg:w-8/12 mx-auto pb-12">
        <div className="mt-20 mb-4 ">
          <div>
            <p className="md:mt-28 ml-8 md:ml-16 lg:ml-32 text-2xl font-bold md:text-3xl font-rubik   text-white">
              Project
            </p>
          </div>
          <div className=" mt-10 md:mt-20 md:px-8 max-w-screen-lg">
            {user.projects.map((project, i) => (
              <ProjectCard key={i} rightShift={i % 2 === 0} {...project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
