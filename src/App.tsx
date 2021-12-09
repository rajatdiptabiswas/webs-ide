import React, { useState } from 'react';
import Editor from './components/Editor';
import Preview from './components/Preview';
import Navbar from './components/Navbar';
import dedent from 'ts-dedent';

function App() {
  const [html, setHTML] = useState(dedent`
    <!-- html -->
    <h1 id="title">hello world</h1>
    <button onClick="fn()">🌈</button>

  `);
  const [css, setCSS] = useState(dedent`
    /* css */
    body {
      color: black;
      background-color: white;
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
    const colors = [
      'red',
      'orange',
      'yellow',
      'green',
      'blue',
      'indigo',
      'violet',
    ];

    const fn = () => {
      title.style.color = colors[index++];
      index %= colors.length;
    };

  `);

  const [theme, setTheme] = useState('vs-light');

  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex min-h-container mt-16">
        <div className="flex-1">
          <div className="h-1/3">
            <Editor
              language="html"
              theme={theme}
              code={html}
              setCode={setHTML}
            />
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
    </div>
  );
}

export default App;
