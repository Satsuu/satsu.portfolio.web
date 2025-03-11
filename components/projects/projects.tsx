import PageContainer from "../page-container"
import ProjectList from "./project-list"

export default function ProjectSection() {
  return (
    <PageContainer>
      <div id="projects" className="h-auto pt-10 md:pt-20">
        <div className="flex flex-col md:flex-row items-start justify-center md:items-center">
          <div className="w-full flex flex-col justify-center h-full text-center md:text-center">
            <h1 className="text-4xl md:text-5xl font-bold">
              Top Projects I've Built
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-600">
              A collection of web and mobile apps I've built, focusing on
              functionality and great user experience.
            </p>

            <div className="mt-20">
              <ProjectList />
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  )
}
