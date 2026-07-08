import React, { useContext } from 'react';
import Logo from '../Elements/Logo';
import { ThemeContext } from '../../context/themeContext';
import { DarkModeContext } from '../../context/darkModeContext';

function AuthLayout(Props) {
  const { children, title } = Props; 
  const { theme } = useContext(ThemeContext);
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);


  const mainClasses = isDarkMode 
    ? "min-h-screen bg-gray-900 transition-colors duration-300 flex justify-center items-center" 
    : `min-h-screen bg-special-mainBg ${theme.name} transition-colors duration-300 flex justify-center items-center`;

  return (
    <>
      <main className={mainClasses}>
        <div className="max-w-md w-full p-6">
          <Logo />
          
          <h1 className={`text-xl font-bold text-center mt-4 mb-2 ${isDarkMode ? "text-white" : "text-slate-800"}`}>
            {title}
          </h1>

          {children} 
          
          <div className="flex justify-center mt-8">
            <button 
              onClick={toggleDarkMode} 
              className="px-6 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg font-bold transition-all shadow-sm hover:scale-105 flex items-center gap-2"
            >
              {isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default AuthLayout;