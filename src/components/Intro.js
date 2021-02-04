import React from 'react';
import '../App.css';

const Intro = () => {
  return (
    <div>
      <header className='intro'>
        <div className='intro-title'>
          <div className='name'>Smk Deena</div>
        </div>

        <h2 className='intro__tagline'>
          I'm
          <span className='name'> Deena Dhayalan</span>, a good learner &amp;
          always like to learn new technologies by experimenting myself.
          <span className='emoji technologist'></span>
        </h2>

        <h3 className='intro__contact'>
          <span>Get in touch :- </span>
          <span className='emoji pointer'></span>
          <span>
            <a
              href='mailto:smkdeenadhayalan@gmail.com'
              className='highlight-link'
            >
              smkdeenadhayalan@gmail.com
            </a>
          </span>
        </h3>
      </header>
    </div>
  );
};

export default Intro;
