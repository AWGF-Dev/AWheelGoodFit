import React, { useDebugValue } from 'react';
import styled from 'styled-components';

const Volume = ({ audioRef }) => {
  // const handleToggle = (e) => {
  //   if (!audioRef.current) return
  //   audioRef.current.muted = !e.target.checked
  //   console.log("muted")
  // }


  return (
    <StyledWrapper>
      <div>
        <input
          type="checkbox"
          id="checkboxInput"
          onChange={(e) => {
            if (!audioRef.current) {
              console.log("audioRef.current is null!")
              return
            }
            audioRef.current.muted = e.target.checked
            console.log("muted:", audioRef.current.muted)
            if (audioRef.current.paused) {
              audioRef.current.play().catch(err => console.log(err))
            }
          }}
        />
        <label htmlFor="checkboxInput" className="toggleSwitch">
          <div className="speaker"><svg xmlns="http://www.w3.org/2000/svg" version={1.0} viewBox="0 0 75 75">
              <path d="M39.389,13.769 L22.235,28.606 L6,28.606 L6,47.699 L21.989,47.699 L39.389,62.75 L39.389,13.769z" style={{stroke: '#fff', strokeWidth: 5, strokeLinejoin: 'round', fill: '#fff'}} />
              <path d="M48,27.6a19.5,19.5 0 0 1 0,21.4M55.1,20.5a30,30 0 0 1 0,35.6M61.6,14a38.8,38.8 0 0 1 0,48.6" style={{fill: 'none', stroke: '#fff', strokeWidth: 5, strokeLinecap: 'round'}} />
            </svg></div>
          <div className="mute-speaker"><svg version={1.0} viewBox="0 0 75 75" stroke="#fff" strokeWidth={5}>
              <path d="m39,14-17,15H6V48H22l17,15z" fill="#fff" strokeLinejoin="round" />
              <path d="m49,26 20,24m0-24-20,24" fill="#fff" strokeLinecap="round" />
            </svg></div>
        </label>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  /* The switch - the box around the speaker*/
  .toggleSwitch {
    width: 35px;
    height: 35px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(39, 39, 39);
    border-radius: 40%;
    cursor: pointer;
    transition-duration: .2s;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.13);
    overflow: hidden;
  }

  /* Hide default HTML checkbox */
  #checkboxInput {
    display: none;
  }

  .bell {
    width: 18px;
  }

  .bell path {
    fill: white;
  }

  .speaker {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    transition-duration: .3s;
  }

  .speaker svg {
    width: 18px;
  }

  .mute-speaker {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    z-index: 3;
    transition-duration: .3s;
  }

  .mute-speaker svg {
    width: 18px;
  }

  #checkboxInput:checked +.toggleSwitch .speaker {
    opacity: 0;
    transition-duration: .3s;
  }

  #checkboxInput:checked +.toggleSwitch .mute-speaker {
    opacity: 1;
    transition-duration: .3s;
  }

  #checkboxInput:active + .toggleSwitch {
    transform: scale(1.4);
  }

  #checkboxInput:hover + .toggleSwitch {
    background-color: rgba(104, 105, 105, 1);
  }`;

export default Volume;
