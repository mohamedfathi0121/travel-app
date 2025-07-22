import { createContext, useContext, useState } from "react";

// 1. إنشاء الكونتكست
export const ThemeContext = createContext();

// 2. هوك مخصص لاستخدام الكونتكست
export const useTheme = () => useContext(ThemeContext);

// 3. ThemeProvider لاحتواء التطبيق وتوفير القيمة
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
