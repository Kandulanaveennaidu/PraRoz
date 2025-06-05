import React, { useEffect } from 'react';
import './index.css'; // Tailwind styles

function App() {
  useEffect(() => {
    const primereactBase = document.createElement('link');
    primereactBase.rel = 'stylesheet';
    primereactBase.id = 'primereact-base';
    primereactBase.href = 'https://unpkg.com/primereact/resources/primereact.min.css';
    document.head.appendChild(primereactBase);

    const primereactTheme = document.createElement('link');
    primereactTheme.rel = 'stylesheet';
    primereactTheme.id = 'primereact-theme';
    primereactTheme.href = 'https://unpkg.com/primereact/resources/themes/lara-dark-purple/theme.css';
    document.head.appendChild(primereactTheme);

    const primeiconsLink = document.createElement('link'); // Renamed to avoid conflict
    primeiconsLink.rel = 'stylesheet';
    primeiconsLink.id = 'primeicons-link'; // Unique ID
    primeiconsLink.href = 'https://unpkg.com/primeicons/primeicons.css';
    document.head.appendChild(primeiconsLink);

    return () => {
      const baseLink = document.getElementById('primereact-base');
      if (baseLink) document.head.removeChild(baseLink);
      const themeLink = document.getElementById('primereact-theme');
      if (themeLink) document.head.removeChild(themeLink);
      const iconsLink = document.getElementById('primeicons-link');
      if (iconsLink) document.head.removeChild(iconsLink);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-brand-purple mb-4">VoiceBuddy</h1>
      <p className="text-lg text-gray-300">Application structure initialized manually.</p>
      {/* RouterOutlet will go here later */}
    </div>
  );
}

export default App;
