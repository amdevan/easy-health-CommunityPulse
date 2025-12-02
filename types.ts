import React from 'react';

export interface HealthCamp {
  id: string;
  title: string;
  date: string;
  location: string;
  category: 'General' | 'Pediatric' | 'Geriatric' | 'Dental' | 'Eye Care';
  spotsAvailable: number;
  description: string;
  image: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum Page {
  HOME = 'HOME',
  CAMPS = 'CAMPS',
  PARTNERS = 'PARTNERS',
  VOLUNTEERS = 'VOLUNTEERS'
}

export interface ImpactStat {
  label: string;
  value: string;
  trend: number;
  icon: React.ComponentType<any>;
}