import React from "react";
import "./home.scss";
import Task_Accordion from "../../components/TaskAccordion/Task_Accordion";
import Notes_Accordion from "../../components/NotesAccordion/Notes_Accordion";

//classname content is of global css
const Home = () => {
  return (
    <div className="content home">
      <h1 className="home_heading">Welcome to CY</h1>
      <Task_Accordion />
      <Notes_Accordion />
      <br />
    </div>
  );
};

export default Home;
