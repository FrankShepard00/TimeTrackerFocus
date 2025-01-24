import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'time-tracker',
    pathMatch: 'full'
  },
  {
    path: 'time-tracker',
    loadComponent: () => import('./features/time-tracker/time-tracker.component').then(m => m.TimeTrackerComponent)
  }
];
