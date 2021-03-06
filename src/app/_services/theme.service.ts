import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Theme} from '../_models/Theme';
import {SpecificTheme} from '../_models/SpecificTheme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  themeUrl: string = '/api/theme'


  constructor(
    private http: HttpClient,
  ) { }

  getThemes(filter: string, page: string, search: string): Observable<Theme[]> {
    return this.http.get<Theme[]>(`${this.themeUrl}/${filter}/${page}`, { params: { search: search }});
  }


  createTheme(theme: any): Observable<Theme> {
    return this.http.post<Theme>(this.themeUrl, theme);
  }

  getTheme(id: number): Observable<SpecificTheme> {
    return this.http.get<SpecificTheme>(`${this.themeUrl}/${id}`);
  }


  deleteTheme(id: number): Observable<any> {
    return this.http.delete(`${this.themeUrl}/${id}`);
  }

  updateTheme(theme: SpecificTheme): Observable<SpecificTheme> {
    return this.http.put<SpecificTheme>(`${this.themeUrl}/${theme.id}`, theme);
  }

  addModerToTheme(themeModer: any): Observable<any> {
    return this.http.post(`${this.themeUrl}/moder`, themeModer);
  }


  createReport(report): Observable<any> {
    return this.http.post("/api/report/theme", report);
  }

}
