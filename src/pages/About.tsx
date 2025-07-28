import React from "react";
import {
  FaEnvelopeOpenText,
  FaMapMarkerAlt,
  FaRegCalendarAlt,
  FaTabletAlt,
} from "react-icons/fa";

const aboutItems = [
  {
    title: "Title 1",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
    icon: "",
    bg: "rgb(252, 244, 255)",
  },
  {
    title: "Title 2",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
    icon: "",
    bg: "rgb(254, 250, 240)",
  },
  {
    title: "Title 3",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
    icon: "",
    bg: "rgb(252, 244, 255)",
  },
  {
    title: "Title 4",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
    icon: "",
    bg: "rgb(255, 244, 244)",
  },
  {
    title: "Title 5",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
    icon: "",
    bg: "rgb(255, 240, 248)",
  },
  {
    title: "Title 6",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
    icon: "",
    bg: "rgb(243, 250, 255)",
  },
];

function About() {
  const getLightBgStyle = (bg: string) =>
    ({
      "--custom-bg": bg,
    } as React.CSSProperties);

  return (
    <section>
      <div className="container lg:rounded-2xl bg-white dark:bg-[#111111]  px-4 sm:px-5 md:px-10 lg:px-20">
        <div data-aos="fade" className="aos-init aos-animate">
          <div className="py-12">
            <h2 className="after-effect after:left-52 mt-12 lg:mt-0 ">
              About Me
            </h2>
            <div className="grid grid-cols-12 md:gap-10 pt-4 md:pt-[40px] items-center">
              <div className="col-span-12 md:col-span-4">
                <img
                  className="w-full md:w-[330px] md:h-[400px] object-cover overflow-hidden rounded-[35px] mb-3 md:mb-0"
                  src=""
                  alt=""
                />
              </div>
              <div className="col-span-12 md:col-span-8 space-y-2.5">
                <div className=" md:mr-12 xl:mr-16">
                  <h3 className="text-4xl font-medium dark:text-white mb-2.5 ">
                    Who am i?
                  </h3>
                  <p className="text-gray-lite  dark:text-color-910 leading-7">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Nesciunt ipsum ab magnam ullam facilis sapiente, in animi
                    beatae est ratione voluptatum unde laudantium molestiae
                    aliquam aperiam exercitationem dolore quidem dicta.
                  </p>
                  <p className="text-gray-lite leading-7 mt-2.5 dark:text-color-910">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Nesciunt ipsum ab magnam ullam facilis sapiente, in animi
                    beatae est ratione voluptatum unde laudantium molestiae
                    aliquam aperiam exercitationem dolore quidem dicta.
                  </p>
                </div>
                <div>
                  <h3 className="text-4xl font-medium my-5 dark:text-white">
                    Personal Info
                  </h3>
                  <div className=" grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex">
                      <span className="text-amber-500 dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 ">
                        <FaTabletAlt size={24} />
                      </span>
                      <div className="space-y-1">
                        <p className="text-xs text-gray-lite dark:text-color-910">
                          Phone
                        </p>
                        <h6 className="font-medium dark:text-white">
                          <a
                            className="hover:text-[#FA5252] duration-300 transition"
                            href="tel:+1234567890"
                          >
                            +123 456 7890
                          </a>
                        </h6>
                      </div>
                    </div>
                    <div className="flex">
                      <span className="text-cyan-500 dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 ">
                        <FaMapMarkerAlt size={24} />
                      </span>
                      <div className="space-y-1">
                        <p className="text-xs text-gray-lite dark:text-color-910">
                          Location
                        </p>
                        <h6 className="font-medium dark:text-white">
                          Istanbul, Turkiye
                        </h6>
                      </div>
                    </div>
                    <div className="flex">
                      <span className="text-rose-500 dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 ">
                        <FaEnvelopeOpenText size={24} />
                      </span>
                      <div className="space-y-1">
                        <p className="text-xs text-gray-lite dark:text-color-910">
                          Email
                        </p>
                        <h6 className="font-medium dark:text-white">
                          <a
                            className="hover:text-[#FA5252] duration-300 transition"
                            href="mailto:ibthemes21@gmail.com"
                          >
                            example@mail.com
                          </a>
                        </h6>
                      </div>
                    </div>
                    <div className="flex">
                      <span className="text-emerald-500 dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 ">
                        <FaRegCalendarAlt size={24} />
                      </span>
                      <div className="space-y-1">
                        <p className="text-xs text-gray-lite dark:text-color-910">
                          Birthday
                        </p>
                        <h6 className="font-medium dark:text-white">
                          Jan 01, 1970
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pb-12">
            <h3 className="text-[35px] dark:text-white font-medium pb-5">
              What I do!
            </h3>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
              {aboutItems.map((item, index) => (
                <div
                  key={index}
                  className="about-box p-5 rounded-lg bg-[var(--custom-bg)] dark:bg-transparent transition-colors duration-300"
                  style={getLightBgStyle(item.bg)}
                >
                  <img
                    className="w-10 h-10 object-contain block mb-4"
                    src={item.icon}
                    alt={item.title}
                  />
                  <div className="space-y-2 break-words">
                    <h3 className="dark:text-white text-xl font-semibold">
                      {item.title}
                    </h3>
                    <p className="leading-8 text-gray-lite dark:text-[#A6A6A6]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="bg-[#F8FBFB] dark:bg-[#0D0D0D] max-w-full h-auto py-10 rounded-xl">
              <h3 className="text-center dark:text-white text-6xl mb-3 font-semibold ">
                Title
              </h3>
              <div className="slick-slider slick-initialized" dir="ltr">
                <div className="slick-list"></div>
              </div>
            </div>
          </div>
          <footer className="overflow-hidden rounded-b-2xl bg-white">
            <p className="text-center py-6 text-gray-lite  dark:text-color-910 ">
              © 2025 All Rights Reserved by{" "}
              <a
                className="hover:text-[#FA5252] duration-300 transition"
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                template
              </a>
              .
            </p>
          </footer>
        </div>
      </div>
    </section>
  );
}

export default About;
