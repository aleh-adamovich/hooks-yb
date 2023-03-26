import {useState} from "react";

const HookSwitcher = () => {
  const [theme, setTheme] = useState('light');

  const onLight = () => setTheme('light');
  const onDark = () => setTheme('dark');

  const themeClass = theme === 'light' ? 'light-theme' : 'dark-theme';

  return (
    <div className={themeClass + ' app'}>
      <button onClick={onLight}>Light</button>
      <button onClick={onDark}>Dark</button>

      <h3>This is theme switcher component</h3>
    </div>
  )
}

export default HookSwitcher;
