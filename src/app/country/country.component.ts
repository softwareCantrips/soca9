import { Component } from '@angular/core';
import { CityComponent } from "../city/city.component";
import { City } from '../city.model';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-country',
    standalone: true,
    templateUrl: './country.component.html',
    styleUrl: './country.component.scss',
    imports: [CityComponent, FormsModule]
})
export class CountryComponent {


  name:string = "Faerun";

  totalpopulation:number = 0;

  cssclass:string = "contentbox";

  cityone:string = "Baldurs Gate";
  citytwo:string = "Waterdeep";
  mastertax: string = "3%";

  addPop(event: City) {

    console.log(event.name + " increases poulation to =" + event.population);

    this.totalpopulation++;

    }

}
