// First real shared types for the project. These are types that are used across multiple packages, and should be kept as minimal as possible to avoid unnecessary dependencies.
export type UserID = string;
export type RaceID = string;
export type RaceStatus = 'scheduled' | 'in_progress' | 'completed' | 'cancelled';

export interface User {
  id: UserID;
  age: number;
  name: string;
  email: string;
    // Add more fields as necessary
}