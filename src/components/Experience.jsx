import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';

const Experience = () => {
  const experiences = [
    {
      year: "2024 - present",
      title: "React - Redux Toolkit",
      description: "I have delved into the realm of advanced web development by mastering Redux, React. Embracing the power of Redux, I have honed my skills in managing complex state across my applications, ensuring optimal performance and scalability."
    },
    {
      year: "2023 - 2024",
      title: "HTML5 - CSS3 - JavaScript",
      description: "Designed and developed user interfaces for web applications using HTML5 and CSS3. From structuring content with HTML to enhancing visual appeal with CSS, and implementing dynamic functionality with JavaScript and advanced frameworks"
    }
  ];

  return (
    <section className="py-5" id="experience">
      <div className="container">
      <motion.h1
            className="display-4 text-white text-center mb-5 glow-text"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            Experience
          </motion.h1>
        
        <div className="timeline position-relative" >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="timeline-item row mb-5"
            >
              <div className="col-md-3">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="year-badge text-light opacity-75 fs-5"
                >
                  {exp.year}
                </motion.div>
              </div>
              
              <div className="col-md-9">
                <div className="card bg-dark border-light border-opacity-25">
                  <div className="card-body">
                    <motion.h3 
                      className="text-light mb-3"
                      whileHover={{ x: 10 }}
                    >
                      {exp.title}
                    </motion.h3>
                    <p className="text-light opacity-75 mb-0">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .timeline::before {
          content: '';
          position: absolute;
          left: 25%;
          top: 0;
          bottom: 0;
          width: 2px;
          background: rgba(255,255,255,0.1);
        }
        
        .year-badge {
          position: relative;
          padding-right: 2rem;
        }
        
        .year-badge::after {
          content: '';
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #6366f1;
          box-shadow: 0 0 15px #6366f1;
        }

        @media (max-width: 768px) {
          .timeline::before {
            left: 20px;
          }
          
          .year-badge {
            padding-left: 40px;
            padding-right: 0;
            margin-bottom: 1rem;
          }
          
          .year-badge::after {
            left: 14px;
            right: auto;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;