import React from 'react';
import styled from 'styled-components';

const Loading = () => {
  return (
    <StyledWrapper>
      <div className="button">
        <div className="box">A</div>
        <div className="box">W</div>
        <div className="box">G</div>
        <div className="box">F</div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .button {
    display: flex;
  }

  .box {
    width: 35px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    font-weight: 700;
    color: #fff;
    transition: all .8s;
    cursor: pointer;
    position: relative;
    background: rgb(58, 165, 253);
    overflow: hidden;
  }

  .box:before {
    content: "A";
    position: absolute;
    top: 0;
    background: #0f0f0f;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateY(100%);
    transition: transform .4s;
  }

  .box:nth-child(2)::before {
    transform: translateY(-100%);
    content: 'W';
  }

  .box:nth-child(3)::before {
    content: 'G';
  }

  .box:nth-child(4)::before {
    transform: translateY(-100%);
    content: 'F';
  }

  .box:nth-child(5)::before {
    content: 'R';
  }

  .button:hover .box:before {
    transform: translateY(0);
  }`;

export default Loading;
