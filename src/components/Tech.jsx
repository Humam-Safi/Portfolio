import { motion } from "framer-motion";
import javascript from "../assets/tech/javascript.png";
import html from "../assets/tech/html.png";
import css from "../assets/tech/css.png";
import reactjs from "../assets/tech/reactjs.png";
import redux from "../assets/tech/redux.png";
import tailwind from "../assets/tech/tailwind.png";
import bootstrap from "../assets/tech/bootstrap-logo-shadow.png";
import git from "../assets/tech/git.png";

const Tech = () => {
  const technologies = [
    { name: 'html', icon: html },
    { name: 'css', icon: css },
    { name: 'javascript', icon: javascript },
    { name: 'bootstrap', icon: bootstrap },
    { name: 'tailwind', icon: tailwind },
    { name: 'reactjs', icon: reactjs },
    { name: 'redux', icon: redux },
    { name: 'git', icon: git },
  ];

  return (
    <div className="px-5 py-2" style={{ overflow: 'hidden' }}>
      <div className="row justify-content-center">
      <motion.h1
        style={{padding:"40px 20px"}}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="display-4 text-white text-center mb-5 glow-text"
          >
          Technologies
        </motion.h1>
        <motion.div
          className="col-12 d-flex flex-wrap justify-content-center"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{ maxWidth: '100%' , padding:"100px 20px" , gap:"50px"}}
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              animate={{
                x: [0, 20, 0],
                transition: {
                  duration: 2.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: index * 0.2
                }
              }}
              className="tech-card "
            >
              <img 
                src={tech.icon}
                alt={tech.name}
                className="tech-icon"
                style={{
                  width: '80px',
                  height: '80px',
                  objectFit: 'contain'
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Tech;