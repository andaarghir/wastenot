import React from "react";
import MultiplePizzas from "../assets/about.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
          We are students concerned  by the global crising of food wasting. According to the United Nations Environment Programme’s (UNEP’s) Food Waste Index Report 2021,
           people globally waste 1 billion tonnes of food each year. A staggering one-third of all food produced globally is lost or wasted. The evidence is becoming too 
           hard to ignore. Food systems reform is critical to tackling the planetary crisis of climate change, nature and biodiversity loss and pollution and waste.
           Food loss and waste are responsible for 8 to10 per cent of all greenhouse gas emissions, and thus reducing food waste is one of the most important ways any of 
           us can reduce our emission of greenhouse emissions and contribution to climate change. With collaborative action across supply chains, reducing food waste at home,
            a few key behaviour changes by consumers, and policies that keep food out of the landfill, we can have a huge impact on the triple planetary crisis, with benefits 
            across the 2030 Agenda for Sustainable Development.
        </p>
      </div>
    </div>
  );
}

export default About;
