import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, updateDoc, deleteDoc, doc } from '@angular/fire/firestore';
import { Task } from '../models/task.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivityTrackerService {
  private readonly IDLE_TIMEOUT = 60000; // 60 segundos
  private lastActivity: number = Date.now();

  constructor(private firestore: Firestore) {}

  startTracking(task: Task) {
    this.setupActivityListeners();
    // Implementaremos el tracking
  }

  private setupActivityListeners() {
    document.addEventListener('mousemove', () => this.updateActivity());
    document.addEventListener('keypress', () => this.updateActivity());
  }

  private updateActivity() {
    this.lastActivity = Date.now();
  }
}
