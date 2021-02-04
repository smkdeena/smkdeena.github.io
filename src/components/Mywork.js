import React from 'react';
import '../App.css';

const Mywork = () => {
  const projects = [
    {
      projectId: 1,
      projectTitle: 'Insurance Member Enrollment',
      projectDesc:
        'My First Simple Spring Boot Project. This Module allow users to register him/herself as member of the insurance company.',
      projectUrl:
        'https://github.com/smkdeena/member-enrollment-insurance-mfrp',
      techused: ['Java', 'Spring Boot', 'Bootstrap', 'HTML', 'CSS'],
    },
  ];

  return (
    <section className='section other-projects'>
      <div className='section__title'>Projects</div>
      <div className='section__content'>
        {projects.map((project, index) => (
          <div key={index} className='project'>
            <div className='project__name'>
              <a
                href={project.projectUrl}
                className='arrow-link'
                target='_blank'
                rel='noreferrer'
              >
                {project.projectTitle}
              </a>
            </div>

            <p>{project.projectDesc}</p>

            <div className='project__used'>
              {project.techused.map((projectTech, index) => (
                <span key={index} className='project__used__item'>
                  {projectTech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Mywork;
