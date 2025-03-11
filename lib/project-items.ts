export interface ProjectItems {
  project_count: string
  project_name: string
  project_job: string
  project_description: string
  project_link: string
  project_image: string[]
}

export const projectItem: ProjectItems[] = [
  {
    project_count: "01",
    project_name: "SCDC",
    project_job: "Website Developer",
    project_description:
      "I was responsible for designing and developing the UI/UX, transforming concepts into a fully responsive website using ReactJS and React-Bootstrap, along with EmailJS for seamless email integration. I collaborated with cross-functional teams in an Agile SDLC environment, ensuring efficient development, regular iterations, and continuous improvements to enhance user experience and functionality.",
    project_link: "https://sanluiscdc.com/",
    project_image: [
      "/images/SCDC.png",
      "/images/SCDC_1.png",
      "/images/SCDC_2.png",
      "/images/SCDC_3.png",
      "/images/SCDC_4.png",
      "/images/SCDC_5.png",
    ],
  },
  {
    project_count: "02",
    project_name: "UV Express",
    project_job: "Full-Stack Developer",
    project_description:
      "I was responsible for developing five Android applications—Dispatcher, Driver, Maintenance, Reservation, and Teller—each designed to streamline specific operational processes. Additionally, I built a React-based web application for the Management Information System (MIS) using ReactJS, React-Bootstrap, and Firebase. This web application facilitated real-time data management, user authentication, and seamless communication between different system components, enhancing overall efficiency and usability.",
    project_link: "",
    project_image: [
      "/images/UV.png",
      "/images/UV_1.png",
      "/images/UV_2.png",
      "/images/UV_3.png",
      "/images/UV_4.png",
      "/images/UV_5.png",
      "/images/UV_6.png",
      "/images/UV_7.png",
    ],
  },
  {
    project_count: "03",
    project_name: "Portfolio",
    project_job: "Website Developer",
    project_description:
      "My personal portfolio website was built using ReactJS and React-Bootstrap, along with Netlify Emailer, to showcase my skills, technologies, and recent projects. It is a fully responsive website designed to provide an engaging and seamless user experience across all devices.",
    project_link: "https://satsuu.vercel.app/",
    project_image: [
      "/images/SATSU.png",
      "/images/SATSU_1.png",
      "/images/SATSU_2.png",
      "/images/SATSU_3.png",
      "/images/SATSU_4.png",
    ],
  },
]
