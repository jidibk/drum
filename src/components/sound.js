import React from 'react'
import {useState, useRef} from 'react'
import './sound.css'

function Sound() {
    const audioRef = useRef(null);
    const [display, setDisplay] = useState('Heater Kit')
 



  const Heater_1 = () => {
    const audio = new Audio('Heater-1.mp3'); // Replace 'beep.mp3' with your audio file path
    audio.play();
    setDisplay('Heater 1');
  }

  const Heater_2 = () => {
    const audio = new Audio('Heater-2.mp3'); // Replace 'beep.mp3' with your audio file path
    audio.play();
    setDisplay('Heater 2');
  }

  const Heater_3 = () => {
    const audio = new Audio('Heater-3.mp3'); // Replace 'beep.mp3' with your audio file path
    audio.play();
    setDisplay('Heater 3');
  }

  const Heater_4 = () => {
    const audio = new Audio('Heater-4_1.mp3'); // Replace 'beep.mp3' with your audio file path
    audio.play();
    setDisplay('Heater 4');
  }

  const Clap = () => {
    const audio = new Audio('Heater-6.mp3'); // Replace 'beep.mp3' with your audio file path
    audio.play();
    setDisplay('Clap');
  }

  const O_hh = () => {
    const audio = new Audio('Dsc_oh.mp3'); // Replace 'beep.mp3' with your audio file path
    audio.play();

    // if (audioRef.current) {
    //   audioRef.current.play(); // Play the audio when button is clicked
    // }
    setDisplay('Open HH');
  }

  const Kicknhat = () => {
    const audio = new Audio('Kick_n_Hat.mp3'); // Replace 'beep.mp3' with your audio file path
    audio.play();

    // if (audioRef.current) {
    //   audioRef.current.play(); // Play the audio when button is clicked
    // }
    setDisplay("Kick n' Hat");
  }

  const Kick = () => {
    const audio = new Audio('RP4_KICK_1.mp3'); // Replace 'beep.mp3' with your audio file path
    audio.play();

    
    // audioRef.current.currentTime = 0; // Reset audio position
    // audioRef.current.play();

    // if (audioRef.current) {
    //   audioRef.current.play(); // Play the audio when button is clicked
    // }
    setDisplay('Kick');
  }

  const C_hh = () => {
    const audio = new Audio('Cev_H2.mp3'); // Replace 'beep.mp3' with your audio file path
    audio.play();  
    setDisplay('Closed HH');

    // audioRef.current.currentTime = 0; // Reset audio position
    // audioRef.current.play();



    // if (audioRef.current) {
    //   audioRef.current.play(); // Play the audio when button is clicked
    // }
  }


  return (
    <div id="drum-machine">
      <div className='container'>
        <div  className='controls'>
          <div id='display' className='display'>{display}</div>
        </div>
        <div className='buttonbox'>
          <button id='heater1' onClick={Heater_1} className='button drum-pad'><audio className='clip' id="Q" src="Heater-1.mp3" ref={audioRef}></audio>Q</button>
          

          <button id='heater2' onClick={Heater_2} className='button drum-pad'><audio className='clip' id="W" src="Heater-2.mp3" ref={audioRef}></audio>W</button>
          

          <button id='heater3' onClick={Heater_3} className='button drum-pad'><audio className='clip' id="E" src="Heater-3.mp3" ref={audioRef}></audio>E</button>
          

          <button id='heater4' onClick={Heater_4} className='button drum-pad'><audio className='clip' id="A" src="Heater-4_1.mp3" ref={audioRef}></audio>A</button>
          

          <button id='clap'onClick={Clap} className='button drum-pad'>  <audio className='clip' id="S" src="Heater-6.mp3" ref={audioRef}></audio>S</button>
        

          <button id='ohh'onClick={O_hh} className='button drum-pad'><audio className='clip' id="D" src="Dsc_Oh.mp3" ref={audioRef}></audio>D</button>
          

          <button id='knh'onClick={Kicknhat} className='button drum-pad'><audio className='clip' id="Z" src="Kick_n_Hat.mp3" ref={audioRef}></audio>Z</button>
          

          <button id='kick' onClick={Kick} className='button drum-pad'><audio className='clip' id="X" src="RP4_KICK_1.mp3" ref={audioRef}></audio> X</button>
          

          <button id='chh' onClick={C_hh} className='button drum-pad'><audio className='clip' id="C" src="Cev_H2.mp3" ref={audioRef}></audio> C</button>
          

          {/* <button onClick={beep}>Play beep</button>
          <audio id="beep" src="beep.mp3" ref={audioRef} /> */}
        </div> 
      </div>
    </div>
  )
}

export default Sound