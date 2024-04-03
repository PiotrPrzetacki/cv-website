import { Component } from '@angular/core';
import { SmileSuffixPipe } from '../smile-suffix.pipe';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SmileSuffixPipe, MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  paragraphText = $localize`Crafting captivating user interfaces is my forte. With a blend of creativity and technical finesse, I transform designs into immersive digital experiences. Let's elevate your web presence together.`;
}
