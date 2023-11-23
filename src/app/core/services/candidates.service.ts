import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidate } from '../models/candidate';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CandidatesService {
  private api = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getCandidates(): Observable<Candidate[]> {
    return this.http.get<Candidate[]>(`${this.api}/candidates`);
  }

  getCandidate(id: number | string) {
    return this.http.get<Candidate>(`${this.api}/candidates/${id}`);
  }

  save(candidate: Candidate): Observable<Candidate> {
    return this.http.post<Candidate>(`${this.api}/candidates`, candidate, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
  }

  update(candidate: Candidate): Observable<Candidate> {
    if (typeof candidate.id === 'number' || typeof candidate.id === 'string') {
      return this.http.put<Candidate>(
        `${this.api}/candidates/${candidate.id}`,
        candidate
      );
    }
    const cause = {
      status: 404,
      error: new Error('Recurso no encontrado'),
      message: 'Recurso no encontrado',
    };
    throw new Error('Recurso no encontrado', { cause });
  }

  remove(id: string | number) {
    return this.http.delete(`${this.api}/candidates/${id}`);
  }
}
