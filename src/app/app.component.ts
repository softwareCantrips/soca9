import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CityComponent } from "./city/city.component";
import { CountryComponent } from "./country/country.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, CityComponent, CountryComponent]
})
export class AppComponent {
  title = 'soca9';
}
