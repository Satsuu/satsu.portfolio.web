import PageContainer from "../page-container"

export default function TechnologiesSection() {
  return (
    <PageContainer>
      <div id="technologies" className="h-screen pt-10 md:pt-20">
        <div className="flex flex-col md:flex-row items- justify-center md:items-center">
          <div className="w-full md:w-1/2 flex flex-col justify-center h-full text-center md:text-center">
            <h1 className="text-4xl md:text-5xl font-bold">
              Skills & Technologies
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-600">
              A showcase of tools and frameworks I work with.
            </p>
          </div>
        </div>
      </div>
    </PageContainer>
  )
}
