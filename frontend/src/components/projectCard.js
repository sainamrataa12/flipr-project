import React from 'react';

const ProjectCard = ({ project }) => (
  <div style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem', width: '300px' }}>
    <img
      src={`http://localhost:5000/uploads/${project.image}`}
      alt={project.name}
      style={{ width: '100%', height: '200px', objectFit: 'cover' }}
    />
    <h3>{project.name}</h3>
    <p>{project.description}</p>
    <button>Read More</button>
  </div>
);

export default ProjectCard;
