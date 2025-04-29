
import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  return (
    <header className="w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="font-bold text-xl text-primary">GoGetWell.ai</div>
        </div>
        
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary">
              Features
            </a>
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary">
              Pricing
            </a>
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary">
              About
            </a>
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary">
              Contact
            </a>
          </nav>
          
          <div className="flex items-center gap-4">
            <ThemeSwitcher />
            <Button className="hidden md:flex">Get Started</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
