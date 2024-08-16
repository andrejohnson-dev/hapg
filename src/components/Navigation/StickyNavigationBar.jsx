import styles from './StickyNavigationBar.module.css';
import { useState } from 'react';
import useIntersectionObserver from '../../hooks/use-intersection-observer';

import { PageText } from '../Text/Text';

import { capitalizeFirstLetterEachWord } from '../../utils/text-help';
import { GridSystem } from '../GridSystem/GridSystem';

export const StickyNavigationBar = ({ data }) => {
  const [activeSection, setActiveSection] = useState(null);

  useIntersectionObserver(setActiveSection);
  // useIntersectionObserver(setActiveSection, {
  //   root: null,
  //   rootMargin: '0px',
  //   threshold: 0.5, 
  // });

  const handleClick = (event, categoryIndex) => {
console.log(categoryIndex)
    event.preventDefault();
    const targetElement = document.getElementById(`category-${categoryIndex}`);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
    console.log('active section',activeSection)
    console.log('target section',targetElement)
  };
  const activeStyle = {
    fontWeight: '600',
    // color:'#EA1917',
    // color:'#EA191',
    // color: 'red',
    // textDecoration: 'underline',
    
     borderBottom:'3px solid #EA1917',
  };
console.log(data)
  return (
    <GridSystem 
    gridType='spread'
    containerBackgroundColor='#F6F3EB'>
       <div className={styles.contentWrapper}>
      <nav className={styles.stickyNavContainer}>
        <div className={styles.stickyNavWrapper}>
          <div className={styles.stickyNav}>
            {Object.keys(data).map((category, categoryIndex) => (
              <a
                key={categoryIndex}
                href={`#category-${categoryIndex}`}
                onClick={(e) => handleClick(e, categoryIndex)}
                style={activeSection === `category-${categoryIndex}` ? activeStyle : {}}
              >
                <PageText type='stickyNavTitleText'>
                  {capitalizeFirstLetterEachWord(category)}
                </PageText>
              </a>
            ))}
          </div>
        </div>
      </nav>
      </div>
    </GridSystem>
  );
};
