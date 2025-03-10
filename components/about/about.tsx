import PageContainer from "../page-container"

export default function AboutSection() {
  return (
    <PageContainer>
      <div id="about" className="h-screen pt-10 md:pt-20">
        <div className="flex flex-col md:flex-row items- justify-center md:items-center">
          <div className="w-full md:w-1/2 flex flex-col justify-center h-full text-center md:text-center">
            <h1 className="text-4xl md:text-5xl font-bold">About Me</h1>
          </div>
        </div>
      </div>
    </PageContainer>
  )
}
