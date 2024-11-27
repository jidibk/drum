import React, { useRef, useState, useEffect} from 'react';
import './sound.css'

const DrumPad = () => {
  const audioRefs = useRef({}); // Object to hold references for multiple audio elements
  const [display, setDisplay] = useState('')

  // Function to play the audio associated with a button
  const playSound = (id, text) => {
    const audio = audioRefs.current[id];
    if (audio) {
        if (!audio.paused) {
            audio.pause();
          }
          audio.currentTime = 0;
          audio.play().catch((error) => {
            console.error("Error playing audio:", error);
          });
      setDisplay(text); // Update the display text
    }
  };

  const handleKeyDown = (event) => {
    const key = event.key.toUpperCase();
    const button = buttons.find((btn) => btn.id === key);
    if (button) {
      playSound(button.id, button.text);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const buttons = [
    { id: 'Q', src: 'Heater-1.mp3', text: 'Heater 1' },
    { id: 'W', src: 'Heater-2.mp3', text: 'Heater 2'},
    { id: 'E', src: 'Heater-3.mp3', text: 'Heater 3'},
    { id: 'A', src: 'Heater-4_1.mp3', text: 'Heater 4' },
    { id: 'S', src: 'Heater-6.mp3', text: 'Clap' },
    { id: 'D', src: 'Dsc_Oh.mp3', text: 'Open HH' },
    { id: 'Z', src: 'Kick_n_Hat.mp3', text: "Kick n' hat" },
    { id: 'X', src: 'RP4_KICK_1.mp3', text: 'Kick' },
    { id: 'C', src: 'Cev_H2.mp3', text: 'Closed HH' },
  ];

  return (
<div id="drum-machine">
      <div className='container'>
        <div  className='controls'>
          <div id='display' className='display'>{display || 'Hit a pad!'}</div>
        </div>
        <div className='buttonbox'>{buttons.map((button) => (
        <button
          key={button.id}
          id={`btn-${button.id}`}
          className="button drum-pad"
          onClick={() => playSound(button.id, button.text)}
        >
          <audio
            className="clip"
            id={button.id}
            src={button.src}
            ref={(el) => (audioRefs.current[button.id] = el)} // Assign ref dynamically
          ></audio>
          {button.id}
        </button>
      ))}
      </div> 
      </div>
    </div>
  );
};

export default DrumPad;



