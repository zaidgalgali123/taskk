import React from 'react';
import "../App.css"

const SeeMoreButton = ({ onClick, showAll }) => {
    return (
        <button className="see-more-button" onClick={onClick}>
            {showAll ? 'Show Less' : 'See More'}
        </button>
    );
};

export default SeeMoreButton;
