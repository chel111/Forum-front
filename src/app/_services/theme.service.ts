import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Theme} from '../_models/Theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  themeUrl: string = '/api/theme'


  constructor(
    private http: HttpClient,
  ) { }

  getThemes(filter: string, page: string): Observable<Theme[]> {
    return this.http.get<Theme[]>(`${this.themeUrl}/${filter}/${page}`);
  }



}
