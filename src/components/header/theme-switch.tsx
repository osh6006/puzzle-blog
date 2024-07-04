"use client";

import React, { useEffect, useState } from "react";
import { MonitorSmartphone, Moon, Sun } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTheme } from "next-themes";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleTheme = (theme: string) => {
    setTheme(theme);
    console.log(theme);
  };

  return (
    <Tabs defaultValue={theme}>
      <TabsList className="p-1 gap-x-[2px] bg-transparent border rounded-full">
        <TabsTrigger
          value="light"
          className="rounded-full p-1.5 data-[state=active]:bg-sky-500/5 dark:data-[state=active]:bg-sky-500/20"
          onClick={() => handleTheme("light")}
          onChange={(e) => console.log(e)}
        >
          <Sun className="w-4 h-4" />
        </TabsTrigger>
        <TabsTrigger
          value="system"
          className="rounded-full p-1.5 data-[state=active]:bg-sky-500/5 dark:data-[state=active]:bg-sky-500/20"
          onClick={() => handleTheme("system")}
        >
          <MonitorSmartphone className="w-4 h-4 " />
        </TabsTrigger>
        <TabsTrigger
          value="dark"
          className="rounded-full p-1.5 data-[state=active]:bg-sky-500/5 dark:data-[state=active]:bg-sky-500/20"
          onClick={() => handleTheme("dark")}
        >
          <Moon className="w-4 h-4" />
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default ThemeSwitch;
