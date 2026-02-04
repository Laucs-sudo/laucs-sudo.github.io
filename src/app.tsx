import React from 'react';
import ReactDOM from 'react-dom/client';
const MyComponent = () => {
  return (
    <h1>this is coming soon</h1>
  );
};
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <MyComponent />
    </React.StrictMode>
  );
}
