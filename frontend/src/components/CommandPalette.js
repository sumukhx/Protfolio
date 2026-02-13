import React, { useState, useEffect, useCallback } from 'react';
import { Search, X, Terminal, FileText, Mail, Phone, Briefcase, FolderGit2 } from 'lucide-react';
import { Dialog, DialogContent } from './ui/dialog';
import { commandPaletteCommands, personalInfo } from '../data/portfolio';

export const CommandPalette = ({ isOpen, onClose, onConsoleToggle }) => {
  const [search, setSearch] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const filteredCommands = commandPaletteCommands.filter(cmd =>
    cmd.label.toLowerCase().includes(search.toLowerCase())
  );

  const handleCommand = useCallback(async (command) => {
    switch (command.action) {
      case 'navigate':
        const element = document.getElementById(command.target);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        break;
      case 'download':
        window.open(command.target, '_blank');
        break;
      case 'copy':
        try {
          // Try modern clipboard API first
          if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(command.target);
          } else {
            // Fallback for older browsers or non-secure contexts
            const textArea = document.createElement('textarea');
            textArea.value = command.target;
            textArea.style.position = 'fixed';
            textArea.style.left = '-999999px';
            textArea.style.top = '-999999px';
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            document.execCommand('copy');
            textArea.remove();
          }
        } catch (err) {
          console.warn('Copy failed:', err);
          // Silently fail - user can manually copy if needed
        }
        break;
      case 'toggle':
        if (command.target === 'console') {
          onConsoleToggle();
        }
        break;
      default:
        break;
    }
    onClose();
    setSearch('');
    setSelectedIndex(0);
  }, [onClose, onConsoleToggle]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % filteredCommands.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + filteredCommands.length) % filteredCommands.length);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          handleCommand(filteredCommands[selectedIndex]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, selectedIndex, filteredCommands, handleCommand]);

  const getCommandIcon = (id) => {
    switch (id) {
      case 'experience': return <Briefcase className="w-4 h-4" />;
      case 'projects': return <FolderGit2 className="w-4 h-4" />;
      case 'capabilities': return <Terminal className="w-4 h-4" />;
      case 'resume': return <FileText className="w-4 h-4" />;
      case 'email': return <Mail className="w-4 h-4" />;
      case 'phone': return <Phone className="w-4 h-4" />;
      case 'console': return <Terminal className="w-4 h-4" />;
      default: return <Search className="w-4 h-4" />;
    }
  };

  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl p-0 bg-card border-primary/30 shadow-[0_0_50px_rgba(6,182,212,0.15)]">
        <div className="flex items-center gap-3 px-4 py-3 border-b border-border/50">
          <Terminal className="w-5 h-5 text-primary" />
          <input
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Type a command or search..."
            className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground outline-none text-sm mono"
            autoFocus
          />
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="max-h-[400px] overflow-y-auto">
          {filteredCommands.length === 0 ? (
            <div className="px-4 py-8 text-center text-muted-foreground text-sm">
              No commands found
            </div>
          ) : (
            <div className="py-2">
              {filteredCommands.map((command, index) => (
                <button
                  key={command.id}
                  onClick={() => handleCommand(command)}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                    index === selectedIndex
                      ? 'bg-primary/10 border-l-2 border-primary'
                      : 'hover:bg-muted/50 border-l-2 border-transparent'
                  }`}
                >
                  <span className={index === selectedIndex ? 'text-primary' : 'text-muted-foreground'}>
                    {getCommandIcon(command.id)}
                  </span>
                  <span className={`text-sm ${index === selectedIndex ? 'text-foreground' : 'text-foreground/80'}`}>
                    {command.label}
                  </span>
                  {index === selectedIndex && (
                    <span className="ml-auto text-xs text-primary mono">ENTER</span>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="px-4 py-2 border-t border-border/50 bg-muted/20">
          <div className="flex items-center justify-between text-xs text-muted-foreground mono">
            <div className="flex items-center gap-4">
              <span><kbd className="px-1.5 py-0.5 bg-background rounded border border-border">↑↓</kbd> Navigate</span>
              <span><kbd className="px-1.5 py-0.5 bg-background rounded border border-border">↵</kbd> Execute</span>
              <span><kbd className="px-1.5 py-0.5 bg-background rounded border border-border">ESC</kbd> Close</span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
