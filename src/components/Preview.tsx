import React from 'react';

type PreviewProps = {
  html: string;
  css: string;
  js: string;
};

export default function Preview({ html, css, js }: PreviewProps) {
  return (
    <iframe
      className="w-full h-full"
      title="preview"
      sandbox="allow-scripts"
      srcDoc={`</html>
          <body>
            ${html}
          </body>
          <style>
            ${css}
          </style>
          <script>
            ${js}
          </script>
        </html>`}
    />
  );
}
