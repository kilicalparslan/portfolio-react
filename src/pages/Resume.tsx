import { FaAward } from "react-icons/fa";
import { MdBusinessCenter, MdSchool } from "react-icons/md";

const skills = [
  "Frontend",
  "Backend",
  "API & Data Management",
  "Database",
  "React",
  "Next.js",
  "Bootstrap",
  "Shadcn",
  "Zustand",
  "JavaScript",
  "TypeScript",
  "MaterialUI",
  "NestJS",
  "Redux",
  "TypeORM",
  "Three.js",
  "Babylon.js",
  "Express.js",
  "GraphQL",
  "Prisma",
  "REST API",
  "WebSocket",
  ".NET",
  "Redis",
  "Tailwind",
  "PostgreSQL",
  "MongoDB",
];

const workingSkills = [
  { name: "Frontend", percent: 100, color: "#FF6464" },
  { name: "Backend", percent: 95, color: "#9272D4" },
  { name: "Database", percent: 95, color: "#5185D4" },
  { name: "Design", percent: 75, color: "#CA56F2" },
];

const education = [
  {
    year: "2022-Present",
    title: "M.Sc. in Computer Education and Instructional Technology",
    place: "Yildiz Technical University, Istanbul",
  },
  {
    year: "2017 - 2022",
    title: "Bachelor in Computer Education and Instructional Technology",
    place: "Yildiz Technical University, Istanbul",
  },
];

const experience = [
  {
    year: "2024-Present",
    title: "Frontend Developer & Digital Content Designer",
    place: "Bahcesehir College, Istanbul",
  },
  {
    year: "2023-2024",
    title: "Full Stack Developer",
    place: "BAB Technology, Gebze",
  },
];

const certifications = [
  {
    year: "June 2024",
    title: "Advanced Mobile Development with Kotlin",
    place: "BTK",
  },
  {
    year: "May 2024",
    title: "Advanced Java & Spring",
    place: "BTK",
  },
];

function Resume() {
  return (
    <section className="bg-white lg:rounded-2xl dark:bg-[#111111] flex justify-center">
      <div data-aos="fade" className="aos-init aos-animate">
        <div className="container sm:px-5 md:px-10 lg:px-20">
          <div className="py-12 px-4">
            <h2 className="after-effect after:left-44 mb-[40px] mt-12 lg:mt-0">
              Resume
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6 ">
              <div>
                <div className="flex items-center space-x-2 mb-4 ">
                  <MdSchool className="text-6xl text-[#F95054]" />
                  <h4 className="text-5xl dark:text-white font-medium">
                    Education
                  </h4>
                </div>
                {education.map(({ year, title, place }) => (
                  <div
                    key={`${title}-${year}`}
                    className="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg dark:border-[#212425] dark:border-2 bg-transparent"
                  >
                    <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">
                      {year}
                    </span>
                    <h3 className="text-xl dark:text-white">{title}</h3>
                    <p className="dark:text-[#b7b7b7]">{place}</p>
                  </div>
                ))}
              </div>

              <div>
                <div className="flex items-center space-x-2 mb-4 ">
                  <MdBusinessCenter className="text-6xl text-[#F95054]" />
                  <h4 className="text-5xl dark:text-white font-medium">
                    Experience
                  </h4>
                </div>
                {experience.map(({ year, title, place }) => (
                  <div
                    key={`${title}-${year}`}
                    className="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg dark:border-[#212425] dark:border-2 bg-transparent"
                  >
                    <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">
                      {year}
                    </span>
                    <h3 className="text-xl dark:text-white">{title}</h3>
                    <p className="dark:text-[#b7b7b7]">{place}</p>
                  </div>
                ))}
              </div>

              <div>
                <div className="flex items-center space-x-2 mb-4 ">
                  <FaAward className="text-6xl text-[#F95054]" />
                  <h4 className="text-5xl dark:text-white font-medium">
                    Certifications
                  </h4>
                </div>
                {certifications.map(({ year, title, place }) => (
                  <div
                    key={`${title}-${year}`}
                    className="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg dark:border-[#212425] dark:border-2 bg-transparent"
                  >
                    <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">
                      {year}
                    </span>
                    <h3 className="text-xl dark:text-white">{title}</h3>
                    <p className="dark:text-[#b7b7b7]">{place}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="container bg-color-810 dark:bg-[#0D0D0D] py-12 px-4 sm:px-5 md:px-10 lg:px-20">
          <div className="grid grid-cols-1  md:grid-cols-2 gap-8">
            <div className="col-span-1">
              <h4 className="text-5xl dark:text-white font-medium mb-6">
                Working Skills
              </h4>

              {workingSkills.map(({ name, percent, color }) => (
                <div className="mb-7" key={name}>
                  <div className="flex justify-between py-1">
                    <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">
                      {name}
                    </span>
                    <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">
                      {percent}%
                    </span>
                  </div>
                  <svg
                    className="rc-progress-line"
                    viewBox="0 0 100 1"
                    preserveAspectRatio="none"
                  >
                    <path
                      className="rc-progress-line-trail"
                      d="M 0.5,0.5 L 99.5,0.5"
                      strokeLinecap="round"
                      stroke="#1C1C1C"
                      strokeWidth="1"
                      fillOpacity="0"
                    />
                    <path
                      className="rc-progress-line-path"
                      d="M 0.5,0.5 L 99.5,0.5"
                      strokeLinecap="round"
                      stroke={color}
                      strokeWidth="1"
                      fillOpacity="0"
                      style={{
                        strokeDasharray: `${percent}px, 100px`,
                        strokeDashoffset: "0px",
                        transition:
                          "stroke-dashoffset 0.3s, stroke-dasharray 0.3s, stroke 0.3s linear, 0.06s",
                      }}
                    />
                  </svg>
                </div>
              ))}
            </div>
            <div className="col-span-1">
              <h4 className="text-5xl dark:text-white font-medium mb-8">
                Knowledges
              </h4>

              <div className="flex gap-x-3 gap-y-3 md:gap-y-6 md:gap-x-4 flex-wrap">
                {skills.map((skill) => (
                  <button
                    key={skill}
                    className="resume-btn bg-zinc-100 dark:bg-[#1C1C1C] text-slate-700 dark:text-white rounded-md px-5 py-2"
                  >
                    {skill}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
