import React from 'react';
import { personalInfo } from '../data/portfolio';
import { Github, Linkedin, Mail, Phone, Download, Command } from 'lucide-react';

export const Header = ({ onCommandPaletteOpen }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded border-2 border-primary bg-primary/10 flex items-center justify-center">
              <span className="text-primary font-bold text-lg mono">SC</span>
            </div>
            <div className="hidden sm:block">
              <div className="text-sm font-semibold text-foreground">{personalInfo.name}</div>
              <div className="text-xs text-muted-foreground mono">AI_SOLUTIONS</div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#origin" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Overview
            </a>
            <a href="#capabilities" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Capabilities
            </a>
            <a href="#experience" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Experience
            </a>
            <a href="#leadership" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Leadership
            </a>
            <a href="#projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={onCommandPaletteOpen}
              className="flex items-center gap-2 px-3 py-1.5 text-xs mono bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground rounded border border-border/50 hover:border-primary/50 transition-all"
            >
              <Command className="w-3 h-3" />
              <span className="hidden sm:inline">⌘K</span>
            </button>
            
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-xs mono bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors glow-tactical"
            >
              <Download className="w-3 h-3" />
              <span className="hidden sm:inline">RESUME</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
