import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CompetitionService {
  url = 'http://localhost:8081/api/v1/competitions';

  constructor(private http: HttpClient) {
  }
    
    getAllCompetitions(page: number, size: number) {
        return this.http.get(this.url + '?page=' + page + '&size=' + size);
    }

    createCompetition(competition: any) {
        return this.http.post(this.url, competition);
    }
}
