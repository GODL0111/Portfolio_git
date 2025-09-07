import React from 'react';
import projects from '../data/projects';
import styled from 'styled-components';

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  gap: 2rem;
`;

const Card = styled.div`
  background: ${({ theme }) => theme.card};
  padding: 1.2rem;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(30,50,100,0.10);
  border-left: 5px solid ${({ status }) =>
    status === 'Completed' ? '#4f8ef7' : '#f7b42c'};
`;

const Status = styled.span`
  font-size: 0.9rem;
  color: ${({ status }) =>
    status === 'Completed' ? '#4f8ef7' : '#f7b42c'};
  font-weight: bold;
`;

const Projects = () => (
  <section>
    <h2>Projects</h2>
    <ProjectGrid>
      {projects.map(proj => (
        <Card key={proj.title} status={proj.status}>
          <h3>{proj.title}</h3>
          <p>{proj.description}</p>
          <Status status={proj.status}>{proj.status}</Status>
          {proj.git && (
            <p>
              <a href={proj.git} target="_blank" rel="noopener noreferrer">
                View on GitHub
              </a>
            </p>
          )}
        </Card>
      ))}
    </ProjectGrid>
  </section>
);

export default Projects;
