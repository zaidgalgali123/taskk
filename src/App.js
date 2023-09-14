import React, { useState } from "react";
import "./App.css";
import BannerSlider from "./components/BannerSlider";
import Section from "./components/Section";
import ThemeSwitch from "./components/ThemeSwitch";
import Card from "./components/Card"; // Import your Card component here
import { bannerData, sectionData, cardData } from "./Data";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  return (
    <div className={`App ${isDarkTheme ? "dark-theme" : "light-theme"}`}>
      <ThemeSwitch isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
      <BannerSlider data={bannerData} isDarkTheme={isDarkTheme} />
      {sectionData.map((section) => (
        <Section
          key={section.id}
          data={section}
          cards={cardData}
          isDarkTheme={isDarkTheme}
        />
      ))}
      {/* {cardData.map((card) => (
        <Card key={card.id} data={card} isDarkTheme={isDarkTheme} />
      ))} */}
    </div>
  );
}

export default App;
