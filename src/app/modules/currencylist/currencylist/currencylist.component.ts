import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-currencylist',
  templateUrl: './currencylist.component.html',
  styleUrls: ['./currencylist.component.css']
})
export class CurrencylistComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

}
