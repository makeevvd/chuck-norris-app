import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Button = styled.button`
  box-sizing: border-box;
  max-width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 8px;
  margin-bottom: 8px;
  color: #809dd6;
  background-color: transparent;
  border: 1px solid #809dd6;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
  text-decoration: none;
  &:hover:not(:disabled) {
    outline: 0;
    color: black;
    border-color: black;
    background-color: white;
    cursor: pointer;
  }
  &:disabled {
    opacity: 0.6;
    filter: saturate(60%);
  }
`;

Button.propTypes = {
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
