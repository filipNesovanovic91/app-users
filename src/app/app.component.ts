import { Component } from '@angular/core';
import { FooterComponent, HeaderComponent } from './shared';
import { MainComponent } from './main';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, MainComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app-users';
}
