import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public translate: TranslateService, private router: Router) { 
    translate.addLangs(['mx','en']);
    translate.setDefaultLang('mx');
    translate.use('mx'); 
  }

  ngOnInit(): void {
  }

}
