import React from 'react';
import '../App.css';
import email from '../image/email.svg';
import github from '../image/github.svg';
import linkedin from '../image/linkedin.svg';

const Footer = () => {
  return (
    <div>
      <footer className='footer'>
        <div className='footer__copyright'>
          <div className='top'>
            <span>👉 Developed by&nbsp;</span>
          </div>
          <div className='bottom'>
            <span>Deenadhayalan K</span>
          </div>
        </div>

        <div className='footer__links'>
          <a
            href='mailto:smkdeenadhayalan@gmail.com'
            target='_blank'
            title='Email'
            rel='noreferrer'
          >
            <span className='text'>Email</span>
            <img src={email} alt='email' />
          </a>
          <a
            href='https://www.github.com/smkdeena'
            target='_blank'
            title='GitHub'
            rel='noreferrer'
          >
            <span className='text'>GitHub</span>
            <img src={github} alt='github' />
          </a>
          <a
            href='https://www.linkedin.com/in/smkdeenadhayalan/'
            target='_blank'
            title='LinkedIn'
            rel='noreferrer'
          >
            <span className='text'>LinkedIn</span>
            <img src={linkedin} alt='linkedin' />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
