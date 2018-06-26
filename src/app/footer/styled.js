import styled, { css } from 'styled-components';

export const Wrap = styled.div`
  display: grid;
  grid-template-rows: 32px 1fr;
  grid-template-columns: 1fr 56px 56px 56px 1fr;
  align-items: center;
  justify-content: center;
  padding: 16px 0px;
  perspective: 750px;
`;

const StyledIcons = css`
  grid-row: 2 / 3;
  justify-self: center;
  width: 40px;
  height: 40px;
  margin: 8px;
  background-image: url(${props => props.icon});
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: cover;

  & > svg {
    fill: #000000;
  }
`;

export const EmailButton = styled.button`
  ${StyledIcons};
  border: none;
  cursor: pointer;
  grid-column: 2;

  &:focus {
    outline-style: none;
  }
`;

export const SocialLink = styled.a.attrs({
  target: '_blank',
  rel: 'noopener noreferrer',
})`
  ${StyledIcons};
  grid-column: ${props => (props.center ? '3' : '4')};
`;
