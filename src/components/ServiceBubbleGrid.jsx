import React from 'react';
import ServiceBubble from './ServiceBubble';
import './ServiceBubbleGrid.css';

const ServiceBubbleGrid = ({ bubbles }) => {
  return (
    <div className="service-bubble-grid">
      {bubbles.map((bubble, index) => (
        <ServiceBubble key={index} text={bubble} />
      ))}
    </div>
  );
};

export default ServiceBubbleGrid;
