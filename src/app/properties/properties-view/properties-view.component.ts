import { Component } from '@angular/core';
import { PropertyService } from '../property.service';
import { Property } from 'src/app/interfaces/property.interface';

@Component({
  selector: 'app-properties-view',
  templateUrl: './properties-view.component.html',
  styleUrls: ['./properties-view.component.css']
})
export class PropertiesViewComponent {

  properties: Property[] = [];

  constructor(private propertyService: PropertyService) { }

  ngOnInit(): void {
    this.propertyService.getProperties().subscribe(
      properties => {
        this.properties = properties;
      }
    )
  }

  addProperty(): string {
    return window.location.href = "/add-property";
  }


}
