import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  constructor(public translate: TranslateService, private router: Router) { 
    translate.addLangs(['mx','en']);
    translate.setDefaultLang('mx');
    translate.use('mx'); 
  }

  ngOnInit(): void {
  }

}
