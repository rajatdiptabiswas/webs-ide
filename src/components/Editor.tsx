import React from 'react';
import MonacoEditor, { Monaco } from '@monaco-editor/react';
import ThemesList from './../data/ThemesList';

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
  function handleEditorWillMount(monaco: Monaco) {
    Object.keys(ThemesList).map((key) =>
      monaco.editor.defineTheme(key, ThemesList[key].theme)
    );
  }

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
      beforeMount={handleEditorWillMount}
    />
  );
}
