import React from 'react';
import { personalInfo, education } from '../data/portfolio';
import { Mail, Phone, Github, Linkedin, Download, GraduationCap, MapPin } from 'lucide-react';

export const Contact = ({ isConsoleMode }) => {
  const handleCopy = async (text, label) => {
    try {
      // Try modern clipboard API first
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        // Fallback for older browsers or non-secure contexts
        const textArea = document.createElement('textarea');
        textArea.value = text;
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
  };

  return (
    <section id="contact" className="relative py-20 lg:py-32 overflow-hidden">
      {isConsoleMode && (
        <>
          <div className="absolute inset-0 tactical-grid opacity-20" />
          <div className="absolute inset-0 scan-line opacity-10" />
        </>
      )}
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/30 rounded-full mb-4">
            <Mail className="w-3 h-3 text-primary" />
            <span className="text-xs mono text-primary font-medium">CONTACT_PROTOCOL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Initiate Contact
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Available for AI consulting, research collaboration, and innovative projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Email */}
          <button
            onClick={() => handleCopy(personalInfo.email, 'Email')}
            className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 hover:border-primary/50 transition-all glow-tactical text-left group"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs mono text-muted-foreground mb-1 uppercase">Email</div>
                <div className="text-sm text-foreground font-medium truncate group-hover:text-primary transition-colors">
                  {personalInfo.email}
                </div>
                <div className="text-xs text-muted-foreground mt-2">Click to copy</div>
              </div>
            </div>
          </button>

          {/* Phone */}
          <button
            onClick={() => handleCopy(personalInfo.phone, 'Phone')}
            className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 hover:border-primary/50 transition-all glow-tactical text-left group"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs mono text-muted-foreground mb-1 uppercase">Phone</div>
                <div className="text-sm text-foreground font-medium mono group-hover:text-primary transition-colors">
                  {personalInfo.phone}
                </div>
                <div className="text-xs text-muted-foreground mt-2">Click to copy</div>
              </div>
            </div>
          </button>

          {/* GitHub */}
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 hover:border-primary/50 transition-all glow-tactical group"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                <Github className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs mono text-muted-foreground mb-1 uppercase">GitHub</div>
                <div className="text-sm text-foreground font-medium truncate group-hover:text-primary transition-colors">
                  @sumukhx
                </div>
                <div className="text-xs text-muted-foreground mt-2">View projects →</div>
              </div>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 hover:border-primary/50 transition-all glow-tactical group"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                <Linkedin className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs mono text-muted-foreground mb-1 uppercase">LinkedIn</div>
                <div className="text-sm text-foreground font-medium truncate group-hover:text-primary transition-colors">
                  Sumukh Chhabra
                </div>
                <div className="text-xs text-muted-foreground mt-2">Connect →</div>
              </div>
            </div>
          </a>
        </div>

        {/* Education card */}
        <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 mb-8 glow-tactical">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
              <GraduationCap className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1">
              <div className="text-xs mono text-muted-foreground mb-1 uppercase">Education</div>
              <div className="text-lg font-semibold text-foreground mb-1">
                {education.degree}
              </div>
              <div className="text-sm text-muted-foreground mb-2">
                {education.institution} • {education.duration}
              </div>
              <div className="text-xs text-foreground/80">
                {education.focus}
              </div>
            </div>
          </div>
        </div>

        {/* Download resume CTA */}
        <div className="text-center">
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all glow-tactical font-semibold"
          >
            <Download className="w-5 h-5" />
            Download Complete Resume
          </a>
          <p className="text-xs mono text-muted-foreground mt-4">
            CLEARANCE_LEVEL: PUBLIC_DISTRIBUTION
          </p>
        </div>
      </div>
    </section>
  );
};
