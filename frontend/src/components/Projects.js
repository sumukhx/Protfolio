import React, { useState } from 'react';
import { projects } from '../data/portfolio';
import { FolderGit2, ArrowRight, ChevronDown, ChevronUp, ExternalLink, Github, FileText } from 'lucide-react';

const statusColors = {
  'Production': 'bg-primary/20 text-primary border-primary/30',
  'Research': 'bg-accent/20 text-accent border-accent/30',
  'Prototype': 'bg-warning/20 text-warning border-warning/30'
};

export const Projects = ({ isConsoleMode }) => {
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleProject = (projectId) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  return (
    <section id="projects" className="relative py-20 lg:py-32 bg-muted/20">
      {isConsoleMode && (
        <div className="absolute inset-0 tactical-grid opacity-10" />
      )}
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/30 rounded-full mb-4">
            <FolderGit2 className="w-3 h-3 text-primary" />
            <span className="text-xs mono text-primary font-medium">SYSTEM_MODULES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            AI systems for real-world applications and problem-solving
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid gap-6">
          {projects.map((project) => {
            const isExpanded = expandedProject === project.id;
            
            return (
              <div
                key={project.id}
                className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg overflow-hidden hover:border-primary/50 transition-all glow-tactical"
              >
                {/* Project header - clickable */}
                <button
                  onClick={() => toggleProject(project.id)}
                  className="w-full p-6 text-left hover:bg-muted/20 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`px-2 py-0.5 text-xs mono rounded border ${statusColors[project.status]}`}>
                          {project.status.toUpperCase()}
                        </span>
                        <span className="text-xs text-muted-foreground">{project.category}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-sm text-foreground/80 leading-relaxed mb-4">
                        {project.description}
                      </p>

                      {/* Tech tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 text-xs mono bg-primary/10 text-primary rounded border border-primary/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Expand icon */}
                    <div className="flex-shrink-0">
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5 text-primary" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-muted-foreground" />
                      )}
                    </div>
                  </div>
                </button>

                {/* Expanded content */}
                {isExpanded && (
                  <div className="px-6 pb-6 border-t border-border/30 pt-6 space-y-6 animate-slide-down">
                    {/* Objective */}
                    <div>
                      <h4 className="text-sm mono text-primary font-semibold mb-2 uppercase">Objective</h4>
                      <p className="text-sm text-foreground/80 leading-relaxed">
                        {project.objective}
                      </p>
                    </div>

                    {/* Pipeline - minimal text-based */}
                    <div>
                      <h4 className="text-sm mono text-primary font-semibold mb-3 uppercase">Pipeline</h4>
                      <div className="bg-background/50 border border-border/50 rounded-lg p-4 mono text-xs">
                        <div className="flex flex-col gap-2">
                          {/* Inputs */}
                          <div className="flex items-start gap-2">
                            <span className="text-muted-foreground whitespace-nowrap">INPUT:</span>
                            <span className="text-foreground">
                              {project.pipeline.inputs.join(' + ')}
                            </span>
                          </div>
                          
                          {/* Arrow */}
                          <div className="flex items-center gap-2 pl-14">
                            <ArrowRight className="w-4 h-4 text-primary" />
                          </div>
                          
                          {/* Model */}
                          <div className="flex items-start gap-2">
                            <span className="text-muted-foreground whitespace-nowrap">MODEL:</span>
                            <span className="text-primary font-semibold">
                              {project.pipeline.model}
                            </span>
                          </div>
                          
                          {/* Arrow */}
                          <div className="flex items-center gap-2 pl-14">
                            <ArrowRight className="w-4 h-4 text-primary" />
                          </div>
                          
                          {/* Outputs */}
                          <div className="flex items-start gap-2">
                            <span className="text-muted-foreground whitespace-nowrap">OUTPUT:</span>
                            <span className="text-foreground">
                              {project.pipeline.outputs.join(' + ')}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Engineering choices */}
                    <div>
                      <h4 className="text-sm mono text-primary font-semibold mb-3 uppercase">
                        Key Engineering Choices
                      </h4>
                      <ul className="space-y-2">
                        {project.engineeringChoices.map((choice, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-foreground/80">
                            <ArrowRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>{choice}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap gap-3 pt-4 border-t border-border/30">
                      {project.links.repo ? (
                        <a
                          href={project.links.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 text-xs mono bg-card border border-border hover:border-primary/50 rounded transition-colors"
                        >
                          <Github className="w-3 h-3" />
                          Repository
                        </a>
                      ) : (
                        <span className="flex items-center gap-2 px-4 py-2 text-xs mono bg-muted/50 text-muted-foreground rounded cursor-not-allowed">
                          <Github className="w-3 h-3" />
                          Repository (Private)
                        </span>
                      )}
                      
                      {project.links.demo ? (
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 text-xs mono bg-card border border-border hover:border-primary/50 rounded transition-colors"
                        >
                          <ExternalLink className="w-3 h-3" />
                          Demo
                        </a>
                      ) : (
                        <span className="flex items-center gap-2 px-4 py-2 text-xs mono bg-muted/50 text-muted-foreground rounded cursor-not-allowed">
                          <ExternalLink className="w-3 h-3" />
                          Demo (Classified)
                        </span>
                      )}
                      
                      {project.links.writeup ? (
                        <a
                          href={project.links.writeup}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 text-xs mono bg-card border border-border hover:border-primary/50 rounded transition-colors"
                        >
                          <FileText className="w-3 h-3" />
                          Write-up
                        </a>
                      ) : (
                        <span className="flex items-center gap-2 px-4 py-2 text-xs mono bg-muted/50 text-muted-foreground rounded cursor-not-allowed">
                          <FileText className="w-3 h-3" />
                          Write-up (N/A)
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
