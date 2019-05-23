import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { Body } from '../work/styled';
import { LinkStyles } from './styled';

const Button = styled.button.attrs({
  type: 'button',
})`
  ${LinkStyles};
  margin-top: ${props => props.theme.ratio.two}em;
  border: none;
  background: none;
  &:active {
    outline: none;
  }
`;

const BackButton = ({ history: { goBack } }) => {
  const buttonRef = useRef();

  return (
    <Button
      onClick={() => {
        buttonRef.current.blur();
        goBack();
      }}
      ref={buttonRef}
    >
      <Body style={{ margin: '0' }}>
        &larr; Back
      </Body>
    </Button>
  );
};

BackButton.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(BackButton);