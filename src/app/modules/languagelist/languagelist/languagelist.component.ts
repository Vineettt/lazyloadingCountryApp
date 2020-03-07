import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { DataService } from '../../../services/data.service';
@Component({
  selector: 'app-languagelist',
  templateUrl: './languagelist.component.html',
  styleUrls: ['./languagelist.component.css']
})
export class LanguagelistComponent implements OnInit {
  countryDetail: object;
  constructor(private apiService: ApiService, private data: DataService) { }

  ngOnInit() {
    if ( this.apiService.countryCode) {
       this.apiService.getCountry(this.apiService.countryCode).subscribe( countryDetail => {
        // Assigning countryDeatil to countryDetail object
        this.countryDetail = countryDetail;
      });
    }
    this.data.currentData.subscribe( countryDetail => this.countryDetail = countryDetail);
  }
}
