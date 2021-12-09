import React from 'react';
import MonacoEditor from '@monaco-editor/react';

type EditorProps = {
  language: string;
  theme: string;
  code: string;
  setCode: React.Dispatch<React.SetStateAction<string>>;
};

export default function Editor({
  language,
  theme,
  code,
  setCode,
}: EditorProps) {
  return (
    <MonacoEditor
      width="100%"
      height="100%"
      theme={theme}
      defaultLanguage={language}
      defaultValue={`${language}\n`}
      value={code}
      onChange={(value: string | undefined) => {
        setCode(value ?? '');
      }}
      options={{
        fontSize: 13,
      }}
    />
  );
}
