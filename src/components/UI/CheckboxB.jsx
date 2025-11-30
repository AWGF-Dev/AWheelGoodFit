import React from 'react';
import styled from 'styled-components';

const CheckboxB = ({ checked = false, onChange, uniqueId }) => {
  return (
    <StyledWrapper>
      <div className="cntr">
        <input
          type="checkbox"
          id={uniqueId}
          className="hidden-xs-up"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
        />
        <label htmlFor={uniqueId} className={`cbx ${checked ? "checked" : ""}`} />
      </div>
    </StyledWrapper>
  );
};


const StyledWrapper = styled.div`
  .cbx {
    position: relative;
    top: 1px;
    width: 27px;
    height: 27px;
    border: 1px solid #c8ccd4;
    border-radius: 3px;
    vertical-align: middle;
    transition: background 0.1s ease;
    cursor: pointer;
    display: block;
  }

  .cbx:after {
    content: '';
    position: absolute;
    top: 2px;
    left: 8px;
    width: 7px;
    height: 14px;
    opacity: 0;
    transform: rotate(45deg) scale(0);
    border-right: 2px solid #fff;
    border-bottom: 2px solid #fff;
    transition: all 0.3s ease;
    transition-delay: 0.15s;
  }

  .cntr {
    position: relative;
  }

    .cbx.checked {
    border-color: transparent;
    background: #6871f1;
    animation: jelly 0.6s ease;
    }

    .cbx.checked:after {
    opacity: 1;
    transform: rotate(45deg) scale(1);
    }

  @keyframes jelly {
    0% { transform: scale(1, 1); }
    30% { transform: scale(1.25, 0.75); }
    40% { transform: scale(0.75, 1.25); }
    50% { transform: scale(1.15, 0.85); }
    65% { transform: scale(0.95, 1.05); }
    75% { transform: scale(1.05, 0.95); }
    to { transform: scale(1, 1); }
  }

  .hidden-xs-up {
    display: none !important;
  }
`;

export default CheckboxB;
