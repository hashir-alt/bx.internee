import React from 'react';
import './CreatorCard.css'; // Ensure this path is correct

const CreatorCard = ({ creator }) => {
  return (
    <div className="creator-card">
      <img src={creator.photo} alt={creator.name} />
      <h3>{creator.name}</h3>
      <a href={creator.channelLink} target="_blank" rel="noopener noreferrer">Click to visit</a>
    </div>
  );
};

export default CreatorCard;
