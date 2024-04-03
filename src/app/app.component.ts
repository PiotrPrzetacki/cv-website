import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { HeaderComponent } from './header/header.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MyExperienceComponent } from './my-experience/my-experience.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { Title } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { isDevMode } from '@angular/core';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule, MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    HeaderComponent,
    AboutMeComponent,
    MyExperienceComponent,
    ContactComponent,
    FooterComponent,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatTooltipModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Piotr Przetacki';
  translationErrorText = $localize`Translation available only in production build (click for more info)`;
  isInDevMode = isDevMode()
  constructor(private titleService: Title, public dialog: MatDialog){
    this.titleService.setTitle(this.title)
  }

  openTranslationInfo(){
    this.dialog.open(TranslationViewDialog)
  }
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'translation-info-dialog.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
})
export class TranslationViewDialog {
}
