import { css } from 'styled-components';

const sizes = {
  desktop: 992,
  tablet: 768,
  smallTablet: 630,
};

// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = sizes[label] / 16;
  accumulator[label] = (...args) => css`
    @media (min-width: ${emSize}em) {
      ${css(...args)}
    }
  `;
  return accumulator;
}, {});

export const colours = {
  main: '#7BB9FF',
  cta: '#062F70',
  support: '#FFFFFF',
  text: 'rgba(0,0,0,0.85)',
  background: 'rgba(0,0,0,0.025)',
};

export const spacer = '16px';

export default {
  media,
  colours,
  spacer,
};
