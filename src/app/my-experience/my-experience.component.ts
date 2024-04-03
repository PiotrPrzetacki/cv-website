import { Component } from '@angular/core';
import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-my-experience',
  standalone: true,
  imports: [MatAccordion, MatExpansionModule],
  templateUrl: './my-experience.component.html',
  styleUrl: './my-experience.component.scss'
})
export class MyExperienceComponent {

}
