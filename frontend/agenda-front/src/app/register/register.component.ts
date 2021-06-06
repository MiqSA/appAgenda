import { Component, OnInit } from '@angular/core';
import { FormArray, FormArrayName, FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent{

  public title: String = 'agenda-front';
  public phones: any = new Array; 
  public contacts: FormGroup;


  public constructor(
    private api: ApiService,
    private formBuilder:FormBuilder)
    {
    this.contacts = this.formBuilder.group({
      name:'',
      phones: new FormArray([
        this.formBuilder.group({
          number: ''
        })
      ])
    })
    this.phones = this.contacts.get('phones') as FormArray
  }

  public addItem() {
    const item = this.formBuilder.group({
      number: '',
    })
    this.phones.push(item)
  };

  public removeItem(index: number) {
    this.phones.removeAt(index);
  };

  public submitContacts() {
    
    this.api.saveNewContact(this.contacts.value).subscribe(
      data =>{
        console.log(data) 
      },
      (      error: { message: any; }) => {
        console.log("Aconteceu um erro",error.message);
      }
    );
    };
  

}

