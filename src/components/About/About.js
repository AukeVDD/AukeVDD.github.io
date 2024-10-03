import React, { useState, useEffect } from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { about } from '../../portfolio';
import './About.css';

// TypeDeleteAnimation Component
const TypeDeleteAnimation = ({ textArray, typingSpeed = 100, deletingSpeed = 50 }) => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentText = textArray[loopIndex];
    let timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayText(currentText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, deletingSpeed);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(currentText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, typingSpeed);
    }

    if (!isDeleting && charIndex === currentText.length) {
      setTimeout(() => setIsDeleting(true), 250); // Short pause before deleting
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setLoopIndex((loopIndex + 1) % textArray.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, loopIndex, textArray, typingSpeed, deletingSpeed]);

  return <span>{displayText}</span>;
};

const About = () => {
  const { name, role, description, resume, social } = about;

  return (
    <div className='about center'>
      {name && (
        <h1>
          Hi, I am <span className='about__name'>{name}.</span>
        </h1>
      )}

      {role && (
        <h2 className='about__role'>
          A<TypeDeleteAnimation textArray={[` ${role}`, 'n Automation Engineer', ' Tech Enthusiast']} />
        </h2>
      )}
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>
        {resume && (
          <a href={resume}>
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default About;
