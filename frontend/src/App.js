import React, { useState, useEffect, useCallback } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { OriginStory } from './components/OriginStory';
import { Capabilities } from './components/Capabilities';
import { Experience } from './components/Experience';
import { Leadership } from './components/Leadership';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CommandPalette } from './components/CommandPalette';
import { ConsoleToggle } from './components/ConsoleToggle';
import { Toaster } from './components/ui/sonner';
import './App.css';

function App() {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isConsoleMode, setIsConsoleMode] = useState(false);

  // Command palette keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Ctrl+K or Cmd+K or /
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen(true);
      } else if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes(e.target.tagName)) {
        e.preventDefault();
        setIsCommandPaletteOpen(true);
      } else if (e.key === 'Escape') {
        setIsCommandPaletteOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Toggle console mode
  const handleConsoleToggle = useCallback(() => {
    setIsConsoleMode(prev => !prev);
  }, []);

  // Apply console mode class to body
  useEffect(() => {
    if (isConsoleMode) {
      document.body.classList.add('console-mode');
    } else {
      document.body.classList.remove('console-mode');
    }
  }, [isConsoleMode]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <Header onCommandPaletteOpen={() => setIsCommandPaletteOpen(true)} />

      {/* Main content */}
      <main>
        <Hero isConsoleMode={isConsoleMode} />
        <OriginStory isConsoleMode={isConsoleMode} />
        <Capabilities isConsoleMode={isConsoleMode} />
        <Experience isConsoleMode={isConsoleMode} />
        <Leadership isConsoleMode={isConsoleMode} />
        <Projects isConsoleMode={isConsoleMode} />
        <Contact isConsoleMode={isConsoleMode} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Command Palette */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onConsoleToggle={handleConsoleToggle}
      />

      {/* Console Mode Toggle */}
      <ConsoleToggle
        isConsoleMode={isConsoleMode}
        onToggle={handleConsoleToggle}
      />

      {/* Toast notifications */}
      <Toaster />
    </div>
  );
}

export default App;
