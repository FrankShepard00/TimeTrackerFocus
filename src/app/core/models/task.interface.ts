export interface Task {
  id?: string;
  name: string;
  timeSpent: number;        // en segundos para cálculos precisos
  lastActive: Date;
  isActive: boolean;
  createdAt: Date;
  dailyGoal: {
    hours: number;
    minutes: number;
  };
  dailyProgress: number;    // en segundos
  focusScore: number;       // 0-100%
}
