import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className='acc' style={{alignItems:'center',marginBottom:'50px',marginLeft:'120px',width:'80%'}}>
      <Accordion  expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
          Tracking Workout Completion
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          
        Tracker dashboard shows the percentage of cardio workouts that the user has completed. In addition, it also shows the percentage of weekly goals achieved by clicking on the respective columns.  This tracking dashboard provides users with an easy way to keep tabs on their daily activity and see how they are doing at a high level.
        The user can keep a track of the distance travelled in miles depicting per day basis and a collective measure of the week.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Tracking Diet Completion</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
          Tracking Diet Completion
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          We also added calorie tracker with this app which allows user to keep track of their calorie intake by providing the details about their food intake from our dashboard. It displays the same completion bar graphs along with percentages for both calorie intake and calorie burnt.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Advanced settings
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Filtering has been entirely disabled for whole web server
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Tracking Weekly Goals
        Fitness Tracker includes a feature where the user can set their goals and the dashboard will help them keep a track on those goals. The goals can be added using the Set Goals option in the navigation menu provided.

        Also, the dashboard shows the goals achieved when Achievements from the navigation bar is clicked.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Adding the meal for the day</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          
        The user can enter the food item he/she intakes for the respective meal and the same will be stored as calorie intake for the user. Each meal icon can be clicked, and the food item can be selected from the list.

        User Performance: And finally, the application also shows the user’s performance depicting the user’s performance in comparison to the other user’s using the application.

        Conclusion: The Activity Tracking application is a full-fledged solution for your fitness goals keeping in mind all the metrics required and analysis of the same to keep a track on your way to achieve your goals.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
