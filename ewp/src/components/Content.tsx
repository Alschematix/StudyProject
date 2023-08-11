import React from 'react';

interface Props {
  content: string;
}

const Content: React.FC<Props> = ({ content }) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: content }} />
  );
};

export default Content;
