import React, { useState } from 'react';
import Editor from './components/Editor';
import Preview from './components/Preview';
import dedent from 'ts-dedent';

function App() {
  const [html, setHTML] = useState(dedent`
    <!-- html -->
    <h1>Hello world!</h1>
  `);
  const [css, setCSS] = useState(dedent`
    /* css */
    body {
      color: white;
      background-color: black;
    }
  `);
  const [js, setJS] = useState(dedent`
    // javascript
    
  `);

  const [theme, setTheme] = useState('vs-dark');

  return (
    <div className="flex min-h-screen">
      <div className="flex-1">
        <div className="h-1/3">
          <Editor language="html" theme={theme} code={html} setCode={setHTML} />
        </div>
        <div className="h-1/3">
          <Editor language="css" theme={theme} code={css} setCode={setCSS} />
        </div>
        <div className="h-1/3">
          <Editor
            language="javascript"
            theme={theme}
            code={js}
            setCode={setJS}
          />
        </div>
      </div>
      <div className="flex-1">
        <Preview html={html} css={css} js={js} />
      </div>
    </div>
  );
}

export default App;
