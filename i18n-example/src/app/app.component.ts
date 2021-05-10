import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'i18n-example';

  constructor(public translateService:TranslateService) {
    translateService.addLangs(['en','sp','gr']);   //set array of languages
    translateService.setDefaultLang('sp'); 
    const browserLanguage = translateService.getBrowserLang();
    translateService.use(browserLanguage.match(/en|sp|gr/) ? browserLanguage : 'sp');   //if browser language is not from our supported language then set spanish as laguage
  }
}
