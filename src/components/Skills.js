import React from 'react';
import skills from '../data/skills';
import styled from 'styled-components';

const SkillBar = styled.div`
  margin-bottom: 1rem;
`;

const BarContainer = styled.div`
  background: #e2e4ea;
  border-radius: 10px;
  height: 20px;
  width: 70%;
  display: inline-block;
  margin-left: 15px;
  position: relative;
`;

const Progress = styled.div`
  height: 100%;
  background: linear-gradient(90deg,#4f8ef7,#1a2434);
  border-radius: 10px;
  width: ${props => props.width}%;
  transition: width 1.2s;
`;

const Skills = () => (
  <section>
    <h2>Skills</h2>
    {skills.map(skill => (
      <SkillBar key={skill.name}>
        <span>{skill.name}</span>
        <BarContainer>
          <Progress width={skill.percent} />
        </BarContainer>
        <span> {skill.percent}%</span>
      </SkillBar>
    ))}
  </section>
);

export default Skills;
