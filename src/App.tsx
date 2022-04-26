import React, { useEffect, useState } from 'react';
import dedent from 'ts-dedent';

import Editor from './components/Editor';
import Preview from './components/Preview';
import Navbar from './components/Navbar';

import ThemesList from './data/ThemesList';

function App() {
  const themeOptions = Object.keys(ThemesList).map((key) => {
    return { value: key, label: key.toLowerCase() };
  });

  const [themeOption, setThemeOption] = useState(themeOptions[0]);
  const [theme, setTheme] = useState(ThemesList[themeOption.value].theme);

  useEffect(() => {
    setTheme(ThemesList[themeOption.value].theme);
  }, [themeOption]);

  const foregroundColor = theme.colors['editor.foreground'];
  const backgroundColor = theme.colors['editor.background'];

  const [html, setHTML] = useState(dedent`
    <!-- html -->
    <h1 id="title">hello world</h1>
    <button onClick="fn()">⌘</button>

  `);
  const [css, setCSS] = useState(dedent`
    /* css */
    body {
      color: #F0F0F0;
      background-color: #121212;
      font-family: sans-serif;
      
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

  `);
  const [js, setJS] = useState(dedent`
    // javascript
    const title = document.getElementById('title');

    let index = 0;
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

    const fn = () => {
      title.style.color = colors[index];

      index++;
      index %= colors.length;
    };

  `);
  const [sourceCode, setSourceCode] = useState(``);

  const inputDelaySeconds = 0.5;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSourceCode(dedent`
        </html>
          <body>
            ${html}
          </body>
          <style>
            ${css}
          </style>
          <script>
            ${js}
          </script>
        </html>
      `);
    }, inputDelaySeconds * 1000);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <div
      style={{
        backgroundColor: `${backgroundColor}`,
      }}
      className="flex flex-col overflow-hidden"
    >
      <Navbar
        textColor={foregroundColor}
        backgroundColor={backgroundColor}
        themeOption={themeOption}
        setThemeOption={setThemeOption}
        themeOptions={themeOptions}
      />
      <div className="flex min-h-container mt-16">
        <div className="flex-1">
          <div className="h-1/3">
            <Editor
              language="html"
              theme={themeOption.value}
              code={html}
              setCode={setHTML}
            />
          </div>
          <div className="h-1/3">
            <Editor
              language="css"
              theme={themeOption.value}
              code={css}
              setCode={setCSS}
            />
          </div>
          <div className="h-1/3">
            <Editor
              language="javascript"
              theme={themeOption.value}
              code={js}
              setCode={setJS}
            />
          </div>
        </div>
        <div className="flex-1">
          <Preview sourceCode={sourceCode} />
        </div>
      </div>
    </div>
  );
}

export default App;
