import React, { useState } from 'react';

import Card from './Card';
import "../App.css"

const Section = ({ data, cards, }) => {
    const [showAllCards, setShowAllCards] = useState(false);

    const toggleCardVisibility = () => {
        setShowAllCards(!showAllCards);
    };

    return (
        <div className="section">
            <h2>{data.title}</h2>
            <div className="cards">
                {cards
                    .filter((card) => card.parent_sec === data.id)
                    .slice(0, showAllCards ? cards.length : 2)
                    .map((card) => (
                        <div key={card.id} className="card">
                            <h3>{card.card_title}</h3>
                            {card.button_name && (
                                <button className="card-button">{card.button_name}</button>
                            )}
                        </div>
                    ))}
            </div>
            {/* <div className="cards">
                <Card />
            </div> */}
            {cards.filter((card) => card.parent_sec === data.id).length > 3 && (
                <button onClick={toggleCardVisibility}>
                    {showAllCards ? 'Show Less' : 'See More'}
                </button>
            )}
        </div>
    );
};

export default Section;

