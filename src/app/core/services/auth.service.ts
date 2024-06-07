import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user:any[] = [
    {
      id:1,
      name:"Ubayashiki",
      userName: "Ubayashiki",
      password:"Kanao"
    },
    {
      id:2,
      name:"Muzan",
      userName: "Muzan",
      password:"Nakime"
    }
  ]

  session:any;
  constructor(private route:Router) { 
    let session = localStorage.getItem("Session_Details")
    if(session){
      session = JSON.parse(session)
    }

    this.session = session
  }

  login(userName:string , password:string){
    let user = this.user.find((u) => u.userName == userName && u.password === password)
    if(user)
      {
        this.session = user
        localStorage.setItem("Session_Details",JSON.stringify(this.session)) 
        
      }

      return user
  }

  logout(){
    this.session = undefined
    localStorage.removeItem("Session_Details")
    this.route.navigateByUrl('/')
  }
}
