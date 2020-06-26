import { Component, OnInit } from '@angular/core';
import { AddressDetails } from '../models/address-details';
import { FormDataService } from '../services/form-data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-address-details',
  templateUrl: './address-details.component.html',
  styleUrls: ['./address-details.component.scss']
})
export class AddressDetailsComponent implements OnInit {

  addressDetails : AddressDetails;

  constructor(private formDataService : FormDataService) { 
    this.addressDetails = formDataService.addressDetails;
  }

  ngOnInit() {
  }

  logIt(){
    this.formDataService.postData();
  }
  
}
