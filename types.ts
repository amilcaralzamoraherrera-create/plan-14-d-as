import type { ReactNode } from 'react';

export enum ProfileType {
  AS = 'AS',
  SE = 'SE',
  AD = 'AD',
  DP = 'DP',
}

export interface Option {
  text: string;
  profile: ProfileType;
}

export interface Question {
  id: string;
  question: string;
  options: Option[];
}

export type AnswerCounts = Record<ProfileType, number>;

export interface ProfileDetails {
  title: string;
  fullName: string;
  // FIX: Use ReactNode type which is now imported.
  visual: ReactNode;
  challenge: string;
  compassion: string;
  purpose: string;
  image: string;
}