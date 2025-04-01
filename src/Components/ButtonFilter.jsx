import React from 'react'

export const ButtonFilter = ({handleEvent, contentText}) => {
  return (
    <button onClick={handleEvent}>
        {contentText}
    </button>
  );
};
