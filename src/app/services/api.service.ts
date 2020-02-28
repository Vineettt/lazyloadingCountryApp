import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  country: any;
  countryDetail: object;

  constructor(private http: HttpClient) { }
  getCountries() {
    return this.http.get('https://restcountries.eu/rest/v2/all').pipe(map(res => res));
  }
  getCountry(country) {
    return this.http.get(`https://restcountries.eu/rest/v2/alpha/${country}`).pipe(map(res => res));
  }
}