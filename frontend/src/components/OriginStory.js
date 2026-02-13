import React from 'react';
import { summary } from '../data/portfolio';
import { FileText, ChevronRight } from 'lucide-react';

export const OriginStory = ({ isConsoleMode }) => {
  return (
    <section id="origin" className="relative py-20 lg:py-32 overflow-hidden">
      {isConsoleMode && (
        <div className="absolute inset-0 tactical-grid opacity-20" />
      )}
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-8">
          <FileText className="w-5 h-5 text-primary" />
          <h2 className="text-sm mono text-primary font-semibold tracking-wider uppercase">
            {summary.title}
          </h2>
        </div>

        {/* Content card */}
        <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-8 lg:p-12 glow-tactical hover:border-primary/50 transition-all">
          <div className="space-y-6">
            {/* Journey timeline markers */}
            <div className="flex items-center gap-2 text-xs mono text-muted-foreground mb-6">
              <span className="px-2 py-1 bg-primary/10 border border-primary/30 rounded">2024.05</span>
              <ChevronRight className="w-3 h-3" />
              <span className="px-2 py-1 bg-primary/10 border border-primary/30 rounded">PRESENT</span>
            </div>

            {/* Main story */}
            <p className="text-base lg:text-lg text-foreground/90 leading-relaxed">
              {summary.content}
            </p>

            {/* Journey highlights */}
            <div className="grid sm:grid-cols-3 gap-4 pt-6 border-t border-border/30">
              <div>
                <div className="text-primary mono text-sm font-semibold mb-1">Netweb Tech</div>
                <div className="text-xs text-muted-foreground">AI Solutions with NVIDIA</div>
              </div>
              <div>
                <div className="text-primary mono text-sm font-semibold mb-1">DRDO CAIR</div>
                <div className="text-xs text-muted-foreground">GPS-Denied → Autonomous Nav</div>
              </div>
              <div>
                <div className="text-primary mono text-sm font-semibold mb-1">Indian Navy</div>
                <div className="text-xs text-muted-foreground">Sonar Mines → Combat Systems</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
