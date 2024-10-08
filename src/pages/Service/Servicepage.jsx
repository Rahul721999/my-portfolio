import { React, useState, useEffect } from 'react';
import { ProjectCard, ServiceCard } from '../../components';
import './ServicePage.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Service = () => {
  const [services, setService] = useState([]);
  const [viewProject, setViewProject] = useState(false);

  const handleClick = () => {
    setViewProject(!viewProject);
  }

  useEffect(() => {
    fetch('./services.json')
      .then(response => {
        if (!response.ok) {
          throw new console.error('Failed to fetch skills');
        }
        return response.json();
      })
      .then(data => { setService(data.services) })
      .catch(error => {
        console.log('There was a problem: ', error);
      });
  }, []);

  if (!viewProject) {
    return (
      <section id="service" className="h-screen section-container">
        <h1 className="text-4xl font-bold flex justify-center laptop:text-6xl items-center">
          My&nbsp;<span className="text-cyan">Services</span>
        </h1>
        <div className=" mt-8 mb-8
        w-full h-[70%] items-center justify-center overflow-x-hidden
        gap-10 tablet:gap-20 
        service-cards-container">
          {services.map((service, index) => (
            <ServiceCard key={index} title={service.category} description={service.description} />
          ))}
        </div>
        <div className="w-full h-12 flex justify-center">
          <a className="btn-type1 text-sm" onClick={handleClick}>Projects!</a>
        </div>
      </section>

    )
  } else {
    return (<ViewProject show={handleClick} />)
  }
}

export default Service;


function ViewProject({ show }) {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch('./projects.json')
      .then(response => {
        if (!response.ok) {
          throw new console.error('Failed to fetch skills');
        }
        return response.json();
      })
      .then(data => { setProjects(data.projects) })
      .catch(error => {
        console.log('There was a problem loading projects: ', error);
      });
  }, []);

  return (
    <section id="service" className="h-screen section-container">
      <h1 className="text-4xl font-bold flex justify-center laptop:text-6xl items-center">
        My&nbsp;<span className="text-cyan">Projects</span>
      </h1>
      <div className="
        project-cards-container
        mt-8 mb-8 
        h-inherit tablet:h-[70%]
        w-full tablet:w-[90%] laptop:w-[70%] 
        gap-10 tablet:gap-15
        ">
          {projects.map((project) =>(
            <ProjectCard project={project}/>
          ))}
      </div>
      <div className="w-full h-12 flex justify-center">
        <a className="btn-type1 text-sm" onClick={show}>Close</a>
      </div>
    </section>
  )
}