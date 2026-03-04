import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Tailwind CSS', 'Redux']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express', 'Python', 'Django', 'REST APIs', 'GraphQL']
    },
    {
      title: 'Database',
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase']
    },
    {
      title: 'Tools & Others',
      skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Agile', 'Testing']
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-content">
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="section-subtitle">Technologies I work with</p>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
