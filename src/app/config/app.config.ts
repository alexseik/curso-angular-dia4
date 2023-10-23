import { InjectionToken } from '@angular/core';
import { Candidate } from '../models/candidate';

export interface AppConfig {
  candidates?: Candidate[];
}

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');
