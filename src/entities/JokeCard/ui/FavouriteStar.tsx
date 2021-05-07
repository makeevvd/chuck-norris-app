import React from 'react';

export const FavouriteStar = ({ isFavourite }: { isFavourite: boolean }) => {
  return (
    <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8 1.0183L10.1037 4.75056L10.216 4.94991L10.4403 4.99517L14.64 5.84253L11.7405 8.99656L11.5856 9.16503L11.6119 9.39236L12.1037 13.6483L8.20808 11.8654L8 11.7701L7.79192 11.8654L3.89626 13.6483L4.38813 9.39236L4.4144 9.16503L4.25953 8.99656L1.36 5.84253L5.55966 4.99517L5.78398 4.94991L5.89634 4.75056L8 1.0183Z"
        fill={isFavourite ? 'gold' : 'white'}
        stroke="#809DD6"
      />
    </svg>
  );
};
