import { Component, Input } from '@angular/core';
import users from '../assets/users.json';
import philLinks from '../assets/philLinks.json'
import pranayLinks from '../assets/pranayLinks.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pictures-gcp';
  public userList:{ user: string; }[]=users;
  public philLinksList:{ name: string, link:String; }[]=philLinks;
  selectedUser:any="";
  public pranayLinksList:{ name: string, link:String; }[]=pranayLinks;

}
