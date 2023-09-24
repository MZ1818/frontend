import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./Notes_Accordion.css";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const Notes_Accordion = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="accordion_notes">
      <h1>Notes</h1>
      <br />
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        disableGutters
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          style={{ backgroundColor: "black" }}
        >
          <Typography sx={{ width: "33%", flexShrink: 0, color: "white" }}>
            Audit Planning
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
            <CheckCircleOutlineIcon />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        disableGutters
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
          style={{ backgroundColor: "black" }}
        >
          <Typography sx={{ width: "33%", flexShrink: 0, color: "white" }}>
            Preparation and Data Collection
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat
            lectus, varius pulvinar diam eros in elit. Pellentesque convallis
            laoreet laoreet.
            <CheckCircleOutlineIcon />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        disableGutters
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
          style={{ backgroundColor: "black" }}
        >
          <Typography sx={{ width: "33%", flexShrink: 0, color: "white" }}>
            Risk Assessment and Internal Control Evaluation
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
            sit amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
          <CheckCircleOutlineIcon />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
        disableGutters
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
          style={{ backgroundColor: "black" }}
        >
          <Typography sx={{ width: "33%", flexShrink: 0, color: "white" }}>
            Risk Assessment and Internal Control Evaluation
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
            sit amet egestas eros, vitae egestas augue. Duis vel est augue.
            <CheckCircleOutlineIcon />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Notes_Accordion;
