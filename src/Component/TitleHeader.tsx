// ./list/TitleHeader.tsx

import React from 'react';

type TitleHeaderProps = {
  title: string;
};

const TitleHeader: React.FC<TitleHeaderProps> = ({ title }) => {
  return <h1>{title}</h1>;
};

export default TitleHeader; 