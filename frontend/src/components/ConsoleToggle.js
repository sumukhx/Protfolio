import React from 'react';
import { Terminal, Power } from 'lucide-react';

export const ConsoleToggle = ({ isConsoleMode, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Toggle Console Mode"
    >
      <div className={`
        flex items-center gap-2 px-4 py-2 rounded-lg border-2 transition-all duration-300
        ${isConsoleMode 
          ? 'bg-primary text-primary-foreground border-primary shadow-[0_0_20px_rgba(6,182,212,0.4)]' 
          : 'bg-card/80 backdrop-blur-sm text-muted-foreground border-border/50 hover:border-primary/50'
        }
      `}>
        <Terminal className="w-4 h-4" />
        <span className="text-xs mono font-medium hidden sm:inline">
          {isConsoleMode ? 'CONSOLE' : 'NORMAL'}
        </span>
        <div className={`w-2 h-2 rounded-full ${isConsoleMode ? 'bg-primary-foreground animate-pulse-tactical' : 'bg-muted-foreground/50'}`} />
      </div>
    </button>
  );
};
