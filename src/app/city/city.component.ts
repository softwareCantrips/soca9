import { Component, EventEmitter, Input, Output } from '@angular/core';
import { City } from '../city.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-city',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './city.component.html',
  styleUrl: './city.component.scss'
})
export class CityComponent {



  @Input() cityname:string = "";

  @Output() popEvent = new EventEmitter<City>();

  @Input() taxrate: string = "10%";
  @Output() taxrateChange = new EventEmitter<string>();
  
  population:number = 0;

  setTax() {

     this.taxrateChange.emit(this.taxrate);

  }

  incPop() {

    this.population++;
    let city:City = new City(this.population, this.cityname);
    this.popEvent.emit(city);

  }

}
