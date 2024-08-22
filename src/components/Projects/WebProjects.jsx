import { projects } from "../../utils";

export default function WebProjects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center place-content-center gap-[5dvh] ">
      {projects &&
        projects.map((project, index) => {
          return (
            <div
              key={index}
              className="flex flex-col gap-[2dvh] justify-center items-center"
            >
              <a href={project.link}>
                <img
                  style={{ height: "clamp(30rem, 50vw, 40vw)" }}
                  className="transition-all shadow-lg shadow-gray-400 duration-400 hover:scale-[102%]"
                  src={project.photo}
                  alt=""
                />
              </a>
              <div
                style={{ width: "clamp(20rem, 50vw, 25vw)" }}
                className="flex flex-col gap-[2dvh] rounded-md"
              >
                <h1 className="font-bold text-start text-xl">
                  {project.title}
                </h1>
                <h1 className="font-bold text-start text-balance">
                  {project.description}
                </h1>
              </div>
            </div>
          );
        })}
    </div>
  );
}
