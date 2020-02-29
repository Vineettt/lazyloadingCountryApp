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

  // fetch Country Detail using alpha3code
  onChange( deviceValue: any) {
    // Execute if block when the user select a undefined value
    // Execute Else when user select a alpha3code
    if ( deviceValue !== 'undefined') {
      // Assigning alpha3code to countryCode variable
      this.apiService.countryCode = deviceValue;
      this.apiService.getCountry(deviceValue).subscribe( countryDetail => {
        // Assigning countryDeatil to countryDetail object
        this.apiService.countryDetail = countryDetail;
      },
      err => {
        console.log(err);
        return false;
      });
    } else {
      this.apiService.countryCode = undefined;
      this.apiService.countryDetail = undefined;
    }
  }

}
