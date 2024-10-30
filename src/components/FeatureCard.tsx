import React from 'react';
import './FeatureCard.css';  // Create this new CSS file for the styling

interface FeatureCardProps {
    icon: string;       // The path to the icon image
    title: string;      // Title of the card
    description: string;  // Description text
    topMargin?: number;   // Top margin of the card
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, topMargin = 0 }) => {
    return (
        <div className="feature-card" style={{ marginTop: `${topMargin}px` }}>
            <div className="icon-container">
                <img src={icon} alt={`${title} icon`} />
            </div>
            <h2 className="card-title">{title}</h2>
            <p className="card-description">{description}</p>
        </div>
    );
};
// #2BD0D0
export default FeatureCard;
