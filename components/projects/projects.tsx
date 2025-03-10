import PageContainer from "../page-container"

export default function ProjectSection() {
  return (
    <PageContainer>
      <div id="projects" className="h-screen pt-10 md:pt-20">
        <div className="flex flex-col md:flex-row items- justify-center md:items-center">
          <div className="w-full md:w-1/2 flex flex-col justify-center h-full text-center md:text-center">
            <h1 className="text-4xl md:text-5xl font-bold">
              Latest Projects I've Built
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-600">
              A showcase of my recent work, featuring web and mobile
              applications.
            </p>
          </div>
        </div>
      </div>
    </PageContainer>
  )
}
