import React from 'react';
import "../App.css"

const Card = ({ data, isDarkTheme }) => {
    return (
        <div className="card">
            <h3>{data.card_title}</h3>
            {data.data && (
                <div className="card-data">
                    <strong>Data:</strong> {data.data_type === 'tags' ? data.data_value.join(', ') : data.data_value}
                </div>
            )}
            {data.button && (
                <button className="card-button">{data.button_name}</button>
            )}
            {data.link && (
                <a href={data.redirect} className="card-link">
                    {data.link_name || 'Link'}
                </a>
            )}
            {data.note && (
                <div className="card-note">
                    <em>{data.note}</em>
                </div>
            )}
        </div>
    );
};

export default Card;
