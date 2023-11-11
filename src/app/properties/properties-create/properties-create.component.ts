import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PropertyService } from '../property.service';
import { CustomPropertyFormValidators } from './validators';
import { HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../auth/auth.service'


@Component({
  selector: 'app-properties-create',
  templateUrl: './properties-create.component.html',
  styleUrls: ['./properties-create.component.css']
})
export class PropertiesCreateComponent {

  isLoading: boolean = true;
  propertyForm: FormGroup;
  errorMessage: string = "";
  selectedFiles: File[] = [];

  constructor(private fb: FormBuilder, private propertyService: PropertyService, private authService: AuthService) {

    this.propertyForm = this.fb.group({
      title: [[Validators.required, CustomPropertyFormValidators.titleValidator]],
      // userId: userId,
      description: [[Validators.required, CustomPropertyFormValidators.descriptionValidator]],
      location: [Validators.required],
      price: [[Validators.required, Validators.min(0), CustomPropertyFormValidators.priceValidator]],
      property_type: ['studio', Validators.required],
      size: [[Validators.required, Validators.min(0)]]
    });
  }

  onFileSelected(event: any) {
    this.selectedFiles = event.target.files;
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 100);
  }

  onSubmit() {
    const propertiesValues = this.propertyForm.value;
    const authToken = this.authService.getToken();

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken}`,
    });
    console.log(propertiesValues);
    this.propertyService.createProperty(propertiesValues, headers).subscribe(
      (response) => {
        console.log('Property saved succesfully');
        console.log(response);
      },
      (error) => {
        console.log('=========> Observable error.')
        this.errorMessage = "Amnaa louyy deconner dehh";
      }
    )
  }
}
