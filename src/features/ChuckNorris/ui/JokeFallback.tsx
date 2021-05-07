import React from 'react';
import styled from 'styled-components';

export const JokeFallback = () => {
  return (
    <ChuckNorrisImg>
      <img
        src="https://estaticos-cdn.prensaiberica.es/clip/f43b85c4-14e3-4a4d-ab61-cde8e8ed4e0e_16-9-aspect-ratio_default_0.jpg"
        alt=""
      />
    </ChuckNorrisImg>
  );
};

const ChuckNorrisImg = styled.div`
  img {
    max-width: 300px;
    max-height: 300px;
  }
`;
