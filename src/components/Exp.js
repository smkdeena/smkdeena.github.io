import React from 'react';
import '../App.css';

const Exp = () => {
  const jobCompany = [
    {
      companyName: 'Cognizant Techology Solution',
      jobDuration: 'Dec 2020 - Present',
      jobPosition: 'Programmer Analyst',
    },
    {
      companyName: 'Cognizant Techology Solution',
      jobDuration: 'Dec 2019 - Dec 2020',
      jobPosition: 'Programmer Analyst Trainee',
    },
  ];

  return (
    <section className='section experience'>
      <div className='section__title'>Experience</div>
      <div className='section__content'>
        <div className='jobs'>
          {jobCompany.map((job, index) => (
            <div key={index} className='job'>
              <div className='time-place'>
                <div className='job__company'>{job.companyName}</div>
                <div className='job__time'>{job.jobDuration}</div>
              </div>
              <div className='job__position'>{job.jobPosition}</div>
            </div>
          ))}
        </div>

        <a href='/resume.pdf' target='_blank' className='arrow-link'>
          View My Resume
        </a>
      </div>
    </section>
  );
};

export default Exp;
