"use client"
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";


interface ThemePro {
  isDark: boolean;
  setIsDark: Dispatch<SetStateAction<boolean>>;
}
const themeContext = createContext<ThemePro>({isDark:true,setIsDark:()=>true});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // localStorage.getItem("theme") == "dark";
  const [isDark, setIsDark] = useState(true);
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.removeItem("theme");
    }
  }, [isDark]);

  return (
    <themeContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </themeContext.Provider>
  );
};

export const useTheme=()=>{
    return useContext(themeContext);
}