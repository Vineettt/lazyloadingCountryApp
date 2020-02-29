import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  countryCode: any;
  countryDetail: object;

  // Fetch Countries
  constructor(private http: HttpClient) { }
  getCountries() {
    return this.http.get('https://restcountries.eu/rest/v2/all').pipe(map(res => res));
  }

  // Fetch Country Detail using alpha3code
  getCountry(countryCode: any) {
    return this.http.get(`https://restcountries.eu/rest/v2/alpha/${countryCode}`).pipe(map(res => res));
  }
}
