import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-contacts-detail',
  templateUrl: './contacts-detail.component.html',
  styleUrls: ['./contacts-detail.component.css']
})
export class ContactsDetailComponent implements OnInit {

  constructor(
    private route:ActivatedRoute, 
    private api:ApiService) { }
  
  selected_contact = {"id": 0,"name": "","phones": [{"id": 50,"number": ""},{"id": 1,"number": ""}]};
  selected_id: any;
  

  ngOnInit(){
    this.route.paramMap.subscribe((param: ParamMap)=>{
      let id = parseInt(param.get( 'id') || '{}');
      this.selected_id = id;
      this.loadContact(id);
    });
    
   
  }

  loadContact(id: any){ 
    this.api.getContact(id || '{}').subscribe(
      data =>{
        console.log(data) 
        this.selected_contact = data;
      },
      error => {
        console.log("Aconteceu um erro",error.message);
      }
    );
  }

}
