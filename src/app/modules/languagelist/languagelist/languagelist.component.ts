import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-languagelist',
  templateUrl: './languagelist.component.html',
  styleUrls: ['./languagelist.component.css']
})
export class LanguagelistComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

}
