import React from 'react';

type PreviewProps = {
  sourceCode: string;
};

export default function Preview({ sourceCode }: PreviewProps) {
  return (
    <iframe
      className="w-full h-full"
      title="preview"
      sandbox="allow-scripts"
      srcDoc={sourceCode}
    />
  );
}
