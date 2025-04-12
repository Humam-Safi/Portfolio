import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pro1 from "../assets/pro1.png";
import pro2 from "../assets/pro2.png";
import pro3 from "../assets/pro3.png";
import pro4 from "../assets/pro4.jpg";
import pro5 from "../assets/pro5.png";
import pro6 from "../assets/pro6.png";
import pro7 from "../assets/pro7.jpg";
import pro8 from "../assets/pro8.png";
import pro9 from "../assets/pro9.png";
import pro10 from "../assets/pro10.png";
import pro11 from "../assets/pro11.png";

const Projects = () => {
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [selectedTech, setSelectedTech] = useState("all");

  const projects = [
    {
      title: "E-Commerce",
      description: "E-Commerce With Dashboard And all authintcation method ",
      image: pro1,
      tech: [
        "Html",
        "Css",
        "React Js",
        "BootStrap",
        "Skeleton",
        "React-image-gallery",
        "React-paginate",
        "Formik",
        "Yup",
      ],
      link: "https://humam-eshop.vercel.app/",
    },
    {
      title: "Leon Template",
      description: "Html And Css Template Simple Design With Full Responsive",
      image: pro7,
      tech: ["Html", "Css"],
      link: "https://first-template-three.vercel.app/",
    },
    {
      title: "IMDb Clone",
      description: "Film Clone similar as IMDb Clone With Redux",
      image: pro2,
      tech: ["Html", "Css", "React Js", "Redux Toolkit", "Tailwind"],
      link: "https://imdb-clone-films.vercel.app/",
    },
    {
      title: "Weather App",
      description: "Small Weather App With Real Weather Api",
      image: pro3,
      tech: ["Html", "Css", "JavaScript"],
      link: "https://weather-app-three-inky-75.vercel.app/",
    },
    {
      title: "Master Template",
      description: "Html And Css Template Simple Design With Full Responsive",
      image: pro6,
      tech: ["Html", "Css"],
      link: "https://third-template-nine.vercel.app/",
    },
    {
      title: "Notes App",
      description: "Notes App With Register Page Using New Libraries",
      image: pro4,
      tech: [
        "Html",
        "Css",
        "React Js",
        "Redux Toolkit",
        "Formik",
        "Yup",
        "BootStrap",
      ],
      link: "https://register-notes-app.vercel.app/",
    },
    {
      title: "Kasper Template",
      description: "Html And Css Template Simple Design With Full Responsive",
      image: pro5,
      tech: ["Html", "Css"],
      link: "https://kasper-template-olive.vercel.app/",
    },
    {
      title: "Memory Game",
      description: "Simple Memory Card Game With Html, Css And JavaScript",
      image: pro8,
      tech: ["Html", "Css" , "JavaScript"],
      link: "https://memory-game-gamma-lemon.vercel.app/",
    },
    {
      title: "Typing Speed Test",
      description: "Simple Typing Speed Test With Html, Css And JavaScript",
      image: pro9,
      tech: ["Html", "Css" , "JavaScript"],
      link: "https://memory-game-gamma-lemon.vercel.app/",
    },
    {
      title: "Guess Word Game",
      description: "Simple Guess Word Game With Html, Css And JavaScript",
      image: pro10,
      tech: ["Html", "Css" , "JavaScript"],
      link: "https://guess-word-game-brown.vercel.app/",
    },
    {
      title: "Quiz App",
      description: "Simple Quiz App With Html, Css And JavaScript",
      image: pro11,
      tech: ["Html", "Css" , "JavaScript"],
      link: "https://quiz-app-one-navy-90.vercel.app/",
    },
  ];

  // Get all unique technologies
  const allTechnologies = Array.from(
    new Set(projects.flatMap((project) => project.tech))
  ).sort();

  useEffect(() => {
    if (selectedTech === "all") {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter((project) =>
        project.tech.includes(selectedTech)
      );
      setFilteredProjects(filtered);
    }
  }, [selectedTech]);

  const settings = {
    dots: true,
    infinite: filteredProjects.length > 1,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: filteredProjects.length > 1,
    autoplaySpeed: 5000,
    arrows: filteredProjects.length > 1,
    fade: false,
    cssEase: "cubic-bezier(0.4, 0, 0.2, 1)",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
    appendDots: (dots) => (
      <div
        style={{
          backgroundColor: "transparent",
          borderRadius: "10px",
          padding: "20px 10px",
          position: "absolute",
          bottom: "-75px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          gap: "12px",
        }}
      >
        {dots}
      </div>
    ),
    customPaging: () => (
      <div
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          backgroundColor: "#fff",
          opacity: 0.3,
          transition: "all 0.3s ease",
          cursor: "pointer",
        }}
      />
    ),
    dotsClass: "slick-dots custom-dots",
  };

  return (
    <section className="py-5 projects-section" id="projects">
      <div className="container px-0 px-sm-3">
        <h2 className="display-4 text-white text-center mb-5 glow-text">
          Featured Projects
        </h2>

        <div className="text-center mb-4">
          <p className="text-light fs-5">
            Total Projects: {filteredProjects.length}
          </p>
        </div>

        <div className="tech-filter mb-4">
          <div className="d-flex justify-content-center">
            <select
              className="form-select custom-select"
              value={selectedTech}
              onChange={(e) => setSelectedTech(e.target.value)}
            >
              <option value="all">All Technologies</option>
              {allTechnologies.map((tech) => (
                <option key={tech} value={tech}>
                  {tech}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="position-relative projects-slider">
          {filteredProjects.length > 0 ? (
            filteredProjects.length === 1 ? (
              <div className="px-2">
                <div className="card glass-effect border-0 rounded-3 overflow-hidden">
                  <div className="row g-0 p-3 p-md-4">
                    <div className="col-md-6 position-relative mb-4 mb-md-0">
                      <div className="image-container">
                        <img
                          src={filteredProjects[0].image}
                          alt={filteredProjects[0].title}
                          className="img-fluid rounded-3 shadow project-image"
                          style={{ maxHeight: "300px", width: "100%", objectFit: "cover" }}
                        />
                        <div className="image-overlay"></div>
                      </div>
                    </div>

                    <div className="col-md-6 d-flex flex-column justify-content-center ps-0 ps-md-4">
                      <h3 className="text-gradient fs-2 mb-3 fade-in">
                        {filteredProjects[0].title}
                      </h3>
                      <p className="text-light fs-6 fs-md-5 mb-4 fade-in-delay">
                        {filteredProjects[0].description}
                      </p>
                      <div className="mb-4 fade-in-delay-2">
                        <h4 className="text-gradient fs-5 mb-3">
                          Technologies Used:
                        </h4>
                        <div className="d-flex flex-wrap gap-2">
                          {filteredProjects[0].tech.map((tech, techIndex) => (
                            <span
                              key={tech}
                              className="tech-badge pop-in"
                              style={{
                                animationDelay: `${techIndex * 0.1}s`,
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <a
                        href={filteredProjects[0].link}
                        className="btn-custom align-items-center gap-2 px-4 py-2 fade-in-delay-3"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ width: "fit-content" }}
                      >
                        Explore Project <span className="arrow">→</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Slider {...settings}>
                {filteredProjects.map((project, index) => (
                  <div key={index} className="px-2">
                    <div className="card glass-effect border-0 rounded-3 overflow-hidden">
                      <div className="row g-0 p-3 p-md-4">
                        <div className="col-md-6 position-relative mb-4 mb-md-0">
                          <div className="image-container">
                            <img
                              src={project.image}
                              alt={project.title}
                              className="img-fluid rounded-3 shadow project-image"
                              style={{ maxHeight: "300px", width: "100%", objectFit: "contain" }}
                            />
                            <div className="image-overlay"></div>
                          </div>
                        </div>

                        <div className="col-md-6 d-flex flex-column justify-content-center ps-0 ps-md-4">
                          <h3 className="text-gradient fs-2 mb-3 fade-in">
                            {project.title}
                          </h3>
                          <p className="text-light fs-6 fs-md-5 mb-4 fade-in-delay">
                            {project.description}
                          </p>
                          <div className="mb-4 fade-in-delay-2">
                            <h4 className="text-gradient fs-5 mb-3">
                              Technologies Used:
                            </h4>
                            <div className="d-flex flex-wrap gap-2">
                              {project.tech.map((tech, techIndex) => (
                                <span
                                  key={tech}
                                  className="tech-badge pop-in"
                                  style={{
                                    animationDelay: `${techIndex * 0.1}s`,
                                  }}
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                          <a
                            href={project.link}
                            className="btn-custom align-items-center gap-2 px-4 py-2 fade-in-delay-3"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ width: "fit-content" }}
                          >
                            Explore Project <span className="arrow">→</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            )
          ) : (
            <div className="text-center text-light py-5">No projects found</div>
          )}
        </div>
      </div>

      <style jsx>{`
        .projects-section {
          overflow-x: hidden;
          width: 100%;
        }

        .projects-slider {
          padding: 50px 0;
        }

        @media (max-width: 768px) {
          .projects-slider {
            padding: 30px 0;
          }
        }

        .tech-badge {
          background-color: rgba(255, 255, 255, 0.1);
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 0.9rem;
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
        }

        .tech-badge:hover {
          transform: translateY(-2px);
          background-color: rgba(255, 255, 255, 0.2) !important;
        }

        .slick-dots {
          bottom: -60px;
        }

        .slick-dots li.slick-active div {
          background-color: #6b46c1 !important;
          opacity: 1 !important;
          transform: scale(1.2);
        }

        .slick-dots li div:hover {
          opacity: 0.7 !important;
        }

        .slick-slide {
          transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          opacity: 1 !important;
        }

        .slick-track {
          display: flex;
          align-items: center;
        }

        .custom-select {
          background: linear-gradient(145deg, #2d1b69, #1c103f);
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12' fill='none'%3E%3Cpath d='M2.5 4.5L6 8L9.5 4.5' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 12px center;
          color: white;
          border: 1px solid rgba(107, 70, 193, 0.3);
          padding: 8px 32px 8px 16px;
          border-radius: 8px;
          cursor: pointer;
          max-width: 200px;
          appearance: none;
          font-size: 0.95rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .custom-select:focus {
          outline: none;
          box-shadow: 0 0 0 2px rgba(107, 70, 193, 0.5),
            0 4px 6px rgba(0, 0, 0, 0.1);
          border-color: rgba(107, 70, 193, 0.8);
        }

        .custom-select:hover {
          border-color: rgba(107, 70, 193, 0.8);
          box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
        }

        .custom-select option {
          background-color: #433166;
          color: white;
          padding: 8px;
        }

        @media (max-width: 768px) {
          .display-4 {
            font-size: 2rem;
          }

          .card {
            margin: 0;
          }

          .project-image {
            max-height: 200px !important;
          }
        }

        @media (max-width: 576px) {
          .container {
            padding: 0 10px;
          }

          .card {
            border-radius: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
