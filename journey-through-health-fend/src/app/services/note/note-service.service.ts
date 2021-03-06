import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Note } from '../../types/note';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class NoteServiceService {
  private apiUrl = 'http://localhost:8080/notes';
  private eventApiUrl = 'http://localhost:8080/events';

  fakeNote: Note = {
    id: 'fake_note_id',
    event_id: 'fake_event_id',
    note: 'Fake Note',
    created_at: '05-02-2020 10:31:42',
  };

  constructor(private http: HttpClient) {}

  createNote(newNote: Note, eventId: string): Observable<Note> {
    return this.http.post<Note>(
      `${this.eventApiUrl}/${eventId}/notes`,
      newNote,
      httpOptions
    );
  }

  editNote(noteId: string, newNote: Note): Observable<Note> {
    this.http.put<Note>(`${this.apiUrl}/${noteId}`, newNote, httpOptions);
    return of(this.fakeNote);
  }

  deleteNote(noteId: string): Observable<Note> {
    this.http.delete<Note>(`${this.apiUrl}/${noteId}`);
    return of(this.fakeNote);
  }
}
