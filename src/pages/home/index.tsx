import { FaLinkedinIn, FaGithub, FaDownload } from "react-icons/fa";

export default function Home() {
  return (
    <div
      className="flex flex-col items-center h-[100vh] md:h-[90vh] lg:h-[80vh] xl:h-[71vh] justify-center aos-init aos-animate"
      data-aos="fade"
    >
      <image />
      <img
        className="rounded-full w-[250px] h-[250px] 2xl:w-[280px] 2xl:h-[280px]"
        src="https://placehold.co/400"
        alt=""
      />
      <h3 className="mt-6 mb-1 text-5xl font-semibold dark:text-white">
        Firstname Lastname
      </h3>
      <p className="mb-4 text-[#7B7B7B]">Full Stack Developer</p>
      <div className="flex space-x-3">
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <span className="socialbtn text-[#b8babb]">
            <FaGithub size={16} />
          </span>
        </a>

        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="socialbtn text-[#0072b1]">
            <FaLinkedinIn size={16} />
          </span>
        </a>
      </div>
      <a
        href="/CV_EN.pdf"
        download=""
        className="flex items-center bg-gradient-to-r from-[#FA5252] to-[#DD2476] duration-200 transition ease-linear hover:bg-gradient-to-l px-8 py-3 text-lg text-white rounded-[35px] mt-6"
      >
        <FaDownload className="mr-3" />
        Download CV
      </a>
    </div>
  );
}
