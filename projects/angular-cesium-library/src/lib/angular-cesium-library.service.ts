import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AngularCesiumLibraryService {
  public defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJjZjgzZTk4Ni1jMGEzLTQ3ZDgtOWZkNi1kMjU3NjNjZWR'+
  'lMjMiLCJpZCI6MjIwNjIsInNjb3BlcyI6WyJhc3IiLCJnYyJdLCJpYXQiOjE1ODEyMTg2OTh9.NeORpwVR8eWaji_ARqNZf4ynjjXKZoR-6EyKlN8Gl3M';
  constructor() { }
}
