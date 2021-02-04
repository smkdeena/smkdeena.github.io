import React from 'react';
import '../App.css';

const Skills = () => {
  const languages = ['Java', 'JavaScript', 'SQL', 'HTML/CSS'];
  const frameworks = ['Spring', 'React', 'Bootstrap', 'Wordpress'];
  const tools = ['VS Code', 'Eclipse', 'PostMan', 'Git/GitHub'];
  const platforms = ['Linux', 'Windows', 'Azure', 'AWS'];

  return (
    <div>
      <section className='section skills'>
        <div className='section__title'>Skills</div>
        <div className='section__content'>
          <div className='skillz'>
            <div className='skillz__category'>
              <div className='skillz__category__label'>Languages</div>
              <ul>
                {languages.map((language, index) => (
                  <li key={index} className='skillz__category__item'>
                    {language}
                  </li>
                ))}
              </ul>
            </div>

            <div className='skillz__category'>
              <div className='skillz__category__label'>Frameworks</div>
              <ul>
                {frameworks.map((framework, index) => (
                  <li key={index} className='skillz__category__item'>
                    {framework}
                  </li>
                ))}
              </ul>
            </div>

            <div className='skillz__category'>
              <div className='skillz__category__label'>Tools</div>
              <ul>
                {tools.map((tool, index) => (
                  <li key={index} className='skillz__category__item'>
                    {tool}
                  </li>
                ))}
              </ul>
            </div>

            <div className='skillz__category'>
              <div className='skillz__category__label'>Platforms</div>
              <ul>
                {platforms.map((platform, index) => (
                  <li key={index} className='skillz__category__item'>
                    {platform}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
