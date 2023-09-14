import React, { useState } from 'react';

const ThemeSwitch = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme = () => {
        setIsDarkTheme((prevTheme) => !prevTheme);
    };

    return (
        <div className={`theme-switch ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
            <label className="theme-switch-label">
                <input type="checkbox" onChange={toggleTheme} checked={isDarkTheme} />
                Toggle Dark Mode
            </label>
        </div>
    );
};

export default ThemeSwitch;
