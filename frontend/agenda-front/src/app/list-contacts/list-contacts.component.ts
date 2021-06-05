import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.css']
})
export class ListContactsComponent implements OnInit {

  selected_contact = {"id": 0,"name": "","phones": [{"id": 50,"number": ""},{"id": 1,"number": ""}]}

  contacts = [
  {"id": 5,"name": "Maria2","phones": [{"id": 5,"number": "5454342"},{"id": 6,"number": "88454342"}]},
  {"id": 6,"name": "Maria José","phones": [{"id": 7,"number": "545434299"},{"id": 8,"number": "80454342"}]}
  ]

  phones = [
    [{"id": 5,"number": "5454342"},{"id": 6,"number": "88454342"}],
    [{"id": 7,"number": "545434299"},{"id": 8,"number": "80454342"}]
    ]

  constructor(private api:ApiService) {
    this.getContacts()
   }

  ngOnInit(): void {
  }

  getContacts = () =>{
    this.api.getAllContacts().subscribe(
      data =>{
        this.contacts = data 
        this.phones = data.phones 
      },
      error => {
        console.log("Aconteceu um erro",error.message);
      }
    );
  };

  contactClicked = (contact: { id: any; }) => {
    this.api.getContact(contact.id).subscribe(
      data =>{
        console.log(data) 
        this.selected_contact = data
      },
      error => {
        console.log("Aconteceu um erro",error.message);
      }
    );
  };

}
