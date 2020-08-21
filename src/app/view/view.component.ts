import { Component, OnInit } from '@angular/core';
import  * as firebase from 'firebase';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  constructor() { }
  cords: any[];
  count: number;
  products:any[];
  ngOnInit() {
  }
  async map(violation){
    await firebase.firestore().collection("violation").where("type","==",violation).get().then((queryDocumentSnapshot)=>{
      console.log(queryDocumentSnapshot.docs);
      this.cords=queryDocumentSnapshot.docs;
      this.count=this.cords.length;

    }).catch((err)=>{
      console.log(err);
    })}
    add(licenseNo,name,type,nic,oldRec){
    
      firebase.firestore().collection("products").add(
        {
          "license_no": licenseNo,
          "name": name,
          "license_type":type,
          "nic": nic ,
          "old_rec":oldRec
        }
      ).then(()=>{
        console.log("Success")
      }
      ).catch((err)=>{
        console.log(err);
      })
      
    }
    async get(licenseNo){
      await firebase.firestore().collection("products").where("license_no","==",licenseNo).get().then((queryDocumentSnapshot)=>{
        console.log(queryDocumentSnapshot.docs);
        this.products=queryDocumentSnapshot.docs;
      }).catch((err)=>{
        console.log(err);
      })}
      select(){
        console.log(event);
      }
  

}
