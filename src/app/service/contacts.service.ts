import { Injectable } from '@angular/core';
import  {HttpClient} from "@angular/common/http";
import Contact from '../interfaces/contact.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  url = "http://localhost:3001/"

  constructor(private http : HttpClient) { }

  getContacts = () =>{
    return this.http.get(this.url)
  } 

  getContact = (id:String | Number) =>{
    return this.http.get(this.url+id)
  } 

  postContact = (datos:Contact | Object) =>{
    return this.http.post(this.url+"add", datos);
  }

  putContact = (datos:Contact | Object, id:String | Number | undefined) =>{
    return this.http.put(this.url+id, datos);
  }

  deleteContact = (id : String | Number) =>{
    return this.http.delete(this.url+id);
  }


}
