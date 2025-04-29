
import React from 'react';
import { Check, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from '@/context/ThemeContext';

const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme, themeOptions } = useTheme();

  const currentTheme = themeOptions.find(option => option.name === theme);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <span className="hidden sm:inline">Theme:</span>
          <span>{currentTheme?.label}</span>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-background border border-border shadow-lg" align="end">
        <DropdownMenuGroup>
          {themeOptions.map((option) => (
            <DropdownMenuItem
              key={option.name}
              onClick={() => setTheme(option.name)}
              className="flex items-center justify-between cursor-pointer"
            >
              <div>
                <span className="font-medium">{option.label}</span>
                <p className="text-xs text-muted-foreground">{option.description}</p>
              </div>
              {theme === option.name && (
                <Check className="h-4 w-4 text-primary" />
              )}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeSwitcher;
