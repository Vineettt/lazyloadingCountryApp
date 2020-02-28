import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  countries: object;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getCountries().subscribe( countries => {
      this.countries = countries;
    },
    err => {
      console.log(err);
      return false;
    });
  }

  onChange( deviceValue: any) {
    if(deviceValue !== 'undefined') {
      this.apiService.country = deviceValue;
      this.apiService.getCountry(deviceValue).subscribe( countryDetail =>{
        this.apiService.countryDetail = countryDetail;
      },
      err => {
        console.log(err);
        return false;
      });
    } else {
      this.apiService.country = undefined;
      this.apiService.countryDetail = undefined;
    }
  }

}
