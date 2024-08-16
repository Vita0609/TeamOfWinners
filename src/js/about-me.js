const generateSkillsMarkup = () => {
    return `
      <div class="about-skills-container">
        <ul class="about-skills-list">
          <li class="about-skills-item">HTML/CSS</li>
          <li class="about-skills-item">JavaScript</li>
          <li class="about-skills-item">React</li>
          <li class="about-skills-item">Node.js</li>
          <li class="about-skills-item">React Native</li>
          <li class="about-skills-item">Soft skills</li>
        </ul>
      </div>
    `;
  };

  const aboutMeContainer = document.querySelector('.about-accordion-container');

  const skillsMarkup = generateSkillsMarkup();

  aboutMeContainer.insertAdjacentHTML('beforeend', skillsMarkup);