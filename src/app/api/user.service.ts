import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
class PostObj {
  constructor(
    public userId: number,
    public fname: string,
    public uname: string,
    public lname: string,
    public semail: string,
    public spassword: string,
    public cpassword: string,
    public sabout: string
  ) { }
}
@Injectable({
  providedIn: 'root'
})
export class UserService {
  restAPI = "https://rueblur.betaplanets.com/wp-json/mobileapi/v1/register";
  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.Postdata();
  }
  Postdata() {
    const promise = new Promise((resolve, reject) => {
      const URL = this.restAPI;
      this.http.post(URL, PostObj)
        .subscribe(data => {
          console.log("data stored");
        }, error => {
          console.log(error);
        });
    });
    return promise;
  }
}

