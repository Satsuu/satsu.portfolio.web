import PageContainer from "../page-container"

export default function ContactSection() {
  return (
    <PageContainer>
      <div id="contact" className="h-screen pt-10 md:pt-20">
        <div className="flex flex-col md:flex-row items- justify-center md:items-center">
          <div className="w-full md:w-1/2 flex flex-col justify-center h-full text-center md:text-center">
            <h1 className="text-4xl md:text-5xl font-bold">Connect With Me</h1>
            <p className="mt-4 text-lg md:text-xl text-gray-600">
              Let's collaborate and stay in touch! Reach out via email or follow
              me on social media.
            </p>
          </div>
        </div>
      </div>
    </PageContainer>
  )
}
