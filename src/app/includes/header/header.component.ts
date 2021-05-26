import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public translate: TranslateService, private router: Router) { 
    translate.addLangs(['mx','en']);
    translate.setDefaultLang('mx');
    translate.use('mx'); 
  }

  ngOnInit(): void {
  }

}
