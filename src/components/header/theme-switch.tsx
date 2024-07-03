import React from "react";
import { MonitorSmartphone, Moon, Sun } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ThemeSwitch = () => {
  return (
    <Tabs defaultValue="light">
      <TabsList className="p-1 gap-x-[2px] bg-transparent border rounded-full">
        <TabsTrigger
          value="light"
          className="rounded-full p-1.5 data-[state=active]:bg-sky-500/5"
        >
          <Sun className="w-4 h-4" />
        </TabsTrigger>
        <TabsTrigger
          value="system"
          className="rounded-full p-1.5 data-[state=active]:bg-sky-500/5"
        >
          <MonitorSmartphone className="w-4 h-4" />
        </TabsTrigger>
        <TabsTrigger
          value="black"
          className="rounded-full p-1.5 data-[state=active]:bg-sky-500/5"
        >
          <Moon className="w-4 h-4" />
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default ThemeSwitch;
