import { Component, OnInit } from '@angular/core';
import { FormArray, FormArrayName, FormBuilder, FormGroup } from '@angular/forms';

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
    console.log(this.contacts.value)
    
  };

}

