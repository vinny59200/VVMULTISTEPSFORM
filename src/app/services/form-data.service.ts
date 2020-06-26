import { Injectable } from '@angular/core';
import { PersonalDetails } from '../models/personal-details';
import { AddressDetails } from '../models/address-details';

@Injectable({
  providedIn: 'root'
})
export class FormDataService{

  personalDetails : PersonalDetails;
  addressDetails : AddressDetails;

  constructor() {
    this.personalDetails = new PersonalDetails();
    this.addressDetails = new AddressDetails();
   }

   postData(){
     let newCombinedObject = {
       personalDetails : this.personalDetails, 
       fullAddress : this.addressDetails.fullAddress
     }

     //Use somthing like http.post etc to send the data to the backend server. 
     console.log(newCombinedObject);
   }
}