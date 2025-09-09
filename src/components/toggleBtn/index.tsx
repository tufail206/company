"use client"
import { useTheme } from '@/context/ThemeContext'
import React from 'react'
import { MoonIcon, SunIcon } from "lucide-react";
const ToggleBtn = () => {
    const { isDark, setIsDark } = useTheme();
    const handleSwitch=()=>{
      
        setIsDark(!isDark)
    }
  return (
    <button onClick={handleSwitch} className="py-2 px-4  cursor-pointer">
      {isDark ? (
        <SunIcon />
      ) : (
        <MoonIcon />
      )}
    </button>
  );
}

export default ToggleBtn