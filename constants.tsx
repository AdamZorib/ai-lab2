
import React from 'react';
import { Phase } from './types';

const ExperimentationIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-12 h-12"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.354a15.055 15.055 0 0 1-4.5 0m4.5 0v-.333c0-.68-.024-1.355-.072-2.016M6.75 18.75a9.75 9.75 0 0 1 10.5 0c.092.006.183.01.274.012a6.013 6.013 0 0 1 2.686-1.518c.28-.097.55-.21.806-.341M3.002 16.822a6.013 6.013 0 0 1 2.686-1.518c.28-.097.55-.21.806-.341m0 0A11.25 11.25 0 0 0 12 13.5m0 0a11.25 11.25 0 0 1 5.498 1.463m-5.498-1.463A11.25 11.25 0 0 0 6.502 14.963M12 4.5a2.25 2.25 0 0 0-2.25 2.25c0 1.33.187 2.613.534 3.802m4.432-3.802a2.25 2.25 0 0 1 2.25 2.25c0 1.33-.187 2.613-.534 3.802M12 4.5a2.25 2.25 0 0 1-2.25 2.25c0 1.33.187 2.613.534 3.802m1.184 5.698a1.5 1.5 0 0 0-2.368 0M12 4.5v.001Z" />
  </svg>
);

const AdoptionIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-12 h-12"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M12 6.75a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5ZM12 12.75a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5Z" />
  </svg>
);

const TransformationIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-12 h-12"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.82m5.84-2.56a12.025 12.025 0 0 0-5.84 0M12 4.5v1.875a1.875 1.875 0 0 0 0 3.75V12m0 0v2.625a1.875 1.875 0 0 0 0 3.75V21m0 0H9m0 0h3m0 0H6.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-15.382 3.178a9.012 9.012 0 0 1 0-6.356m12.764 0a9.012 9.012 0 0 1 0 6.356M3 12c0 2.466.932 4.716 2.475 6.431m13.05-6.431c1.543-1.715 2.475-3.965 2.475-6.431" />
  </svg>
);

export const PHASES_DATA: Phase[] = [
  {
    id: 'experimentation',
    title: 'Phase 1: Experimentation',
    subtitle: 'Igniting AI Potential & Quick Wins',
    description: 'Focus on low-risk, high-reward projects to build momentum and learn. Identify early adopters and leverage existing tools for rapid exploration.',
    icon: <ExperimentationIcon className="w-16 h-16 text-blue-500" />,
    accentColor: 'blue',
    focusAreas: [
      'Identify quick wins & low-hanging fruit',
      'Foster a culture of learning and iteration',
      'Engage early adopters and champions',
      'Understand AI capabilities and limitations'
    ],
    keyActions: [
      { id: 'exp1', title: 'Launch Small-Scale Pilots', description: 'Select 2-3 well-defined problems solvable with AI. Keep scope narrow and timelines short (e.g., 4-8 weeks).', details: ['Define clear success metrics.', 'Use off-the-shelf AI tools or simple models.'] },
      { id: 'exp2', title: 'Run AI Literacy Workshops', description: 'Educate teams on AI basics, potential use cases in your domain, and ethical considerations.', details: ['Tailor content to different roles (technical, business, leadership).', 'Showcase successful AI applications in similar industries.'] },
      { id: 'exp3', title: 'Identify High-Impact Use Cases', description: 'Brainstorm with cross-functional teams to find areas where AI can deliver significant value (e.g., process automation, improved decision-making).', details: ['Prioritize based on feasibility, impact, and alignment with strategic goals.'] },
    ],
    geminiPromptSeed: 'Our organization is in the AI experimentation phase. We are looking for advice on identifying low-risk, high-reward AI projects. '
  },
  {
    id: 'adoption',
    title: 'Phase 2: Adoption',
    subtitle: 'Scaling Success & Building Capabilities',
    description: 'Scale successful experiments, develop internal AI skills, integrate AI into workflows, and establish governance for responsible AI use.',
    icon: <AdoptionIcon className="w-16 h-16 text-green-500" />,
    accentColor: 'green',
    focusAreas: [
      'Scale proven AI solutions',
      'Develop in-house AI talent and expertise',
      'Integrate AI into core business processes',
      'Establish AI governance and ethical frameworks'
    ],
    keyActions: [
      { id: 'ado1', title: 'Develop Training Programs', description: 'Create structured learning paths for different roles to build AI skills across the organization.', details: ['Include technical training (data science, MLOps) and business-focused training (AI strategy, product management).', 'Leverage online courses, internal experts, and external partners.'] },
      { id: 'ado2', title: 'Establish an AI Center of Excellence (CoE)', description: 'Form a dedicated team to drive AI strategy, share best practices, provide support, and oversee governance.', details: ['The CoE can act as an internal consultancy for AI projects.'] },
      { id: 'ado3', title: 'Refine & Standardize AI Workflows', description: 'Document and standardize processes for AI development, deployment, and monitoring (MLOps).', details: ['Implement tools for version control, CI/CD for ML, and model monitoring.'] },
    ],
    geminiPromptSeed: 'Our organization is moving into the AI adoption phase. We need guidance on strategies for scaling AI solutions and building internal capabilities. '
  },
  {
    id: 'transformation',
    title: 'Phase 3: Transformation',
    subtitle: 'Reimagining Business with AI',
    description: 'Fundamentally rethink business models, processes, and customer experiences with AI at the core. Drive strategic alignment and cultural change for long-term AI-driven innovation.',
    icon: <TransformationIcon className="w-16 h-16 text-purple-500" />,
    accentColor: 'purple',
    focusAreas: [
      'Embed AI into strategic decision-making',
      'Explore new AI-driven business models',
      'Foster a deeply AI-aware organizational culture',
      'Drive continuous innovation through AI research'
    ],
    keyActions: [
      { id: 'trn1', title: 'Secure Leadership Commitment & Vision', description: 'Ensure top leadership champions a clear, long-term vision for AI transformation and allocates necessary resources.', details: ['Communicate the AI vision consistently across the organization.'] },
      { id: 'trn2', title: 'Invest in Foundational AI Capabilities', description: 'Build robust data infrastructure, advanced AI/ML platforms, and specialized talent for strategic AI initiatives.', details: ['Consider partnerships or acquisitions to accelerate capability building.'] },
      { id: 'trn3', title: 'Explore Disruptive AI Applications', description: 'Proactively research and experiment with cutting-edge AI technologies that could reshape your industry or create new markets.', details: ['Set up an AI research lab or innovation incubator.'] },
    ],
    geminiPromptSeed: 'Our organization aims for AI-driven transformation. We are seeking strategic insights on how AI can fundamentally reshape our business model or core processes. '
  }
];
    