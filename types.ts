import React from 'react';

export interface ActionPoint {
  id: string;
  title: string;
  description: string;
  details?: string[]; 
}

export interface Phase {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactElement<{ className?: string }>;
  accentColor: string;
  focusAreas: string[];
  keyActions: ActionPoint[];
  geminiPromptSeed: string;
}

export interface GroundingChunk {
  web?: {
    uri: string;
    title: string;
  };
  retrievedContext?: {
    uri: string;
    title: string;
  };
}