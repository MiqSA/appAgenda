import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ListContactsComponent } from '../list-contacts/list-contacts.component';
import { ApiService } from './api.service';

@Component({
  selector: 'app-contacts-detail',
  templateUrl: './contacts-detail.component.html',
  styleUrls: ['./contacts-detail.component.css']
})



export class ContactsDetailComponent implements OnInit {

  

  constructor(
    private route:ActivatedRoute, 
    private api:ApiService,
) { }
  
  
  selected_contact = {"id": 0,"name": "","phones": [{"id": 0,"number": ""},{"id": 1,"number": ""}]};
  selected_id: number = 0;
  

  ngOnInit(){
    this.route.paramMap.subscribe((param: ParamMap)=>{
      let id = parseInt(param.get( 'id') || '0');
      this.selected_id = id;
      this.loadContact(id);
    }); 
  }

  loadContact(id: any){ 
    this.api.getContact(id || 0).subscribe(
      data =>{
        console.log(data) 
        this.selected_contact = data;
      },
      error => {
        console.log("Aconteceu um erro",error.message);
      }
    );
  };

  update(){ 
    this.api.updateContact(this.selected_contact).subscribe(
      (      data: { id: number; name: string; phones: { id: number; number: string; }[]; }) =>{
        this.selected_contact = data;
      },
      (      error: { message: any; }) => {
        console.log("Aconteceu um erro",error.message);
      }
    );
  };

  delete(){ 
    this.api.deleteContact(this.selected_id).subscribe(
      (      data: any) =>{
        console.log("Contato deletado!");
      },
      (      error: { message: any; }) => {
        console.log("Aconteceu um erro",error.message);
      }
    );
  };

}
