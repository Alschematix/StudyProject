import React from 'react';
import Content from './Content';

interface Props {
  html: string;
}

const HTMLInjector: React.FC<Props> = ({ html }) => {
  return (
    <div>
      <Content content={html} />
    </div>
  );
};

export default HTMLInjector;
