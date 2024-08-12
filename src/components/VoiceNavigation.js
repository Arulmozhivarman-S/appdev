import React, { useEffect } from 'react';
import annyang from 'annyang';
import { useNavigate } from 'react-router-dom';

const VoiceNavigation = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (annyang) {
    
      const commands = {
        'go to home': () => navigate('/home'),
        'log out':()=> navigate('/login'),
        'go to recover': () => navigate('/recover'),
        'go to workout': () => navigate('/workout'),
        'scroll down': () => window.scrollBy({ top: window.scrollY + 500, behavior: 'smooth' }),
        'scroll up': () => window.scrollBy({ top: window.scrollY - 500, behavior: 'smooth' }),
        'click *element': (element) => {
          const target = document.querySelector(element);
          if (target) target.click();
        }
      };
     
      annyang.addCommands(commands);
      annyang.start();

      return () => {
        annyang.abort();
      };
    } else {
      console.warn('Annyang is not supported in this browser.');
    }
  }, [navigate]);

  return (
    <div>
      {/* <p>Voice Navigation Enabled. Try saying "go to home", "scroll down", or "click button".</p> */}
    </div>
  );
};

export default VoiceNavigation;
