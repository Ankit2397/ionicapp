import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
class PostObj {
  constructor(
    public userId: number,
    public id: string,
    public fname: string,
    public body: string
  ) { }
}
@Injectable({
  providedIn: 'root'
})
export class UserService {
  restAPI: string = "https://rueblur.betaplanets.com/wp-json/mobileapi/v1/register";
  postData = [];
  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.fetchPosts();
  }
  fetchPosts() {
    const promise = new Promise((resolve, reject) => {
      const URL = this.restAPI;
      this.http
        .get<PostObj[]>(URL)
        .toPromise()
        .then((res: any) => {
          this.postData = res.map((res: any) => {
            return new PostObj(
              res.userId,
              res.id,
              res.title,
              res.body
            );
          });
          // resolve();
        },
          err => {
            reject(err);
          }
        );
    });
    return promise;
  }
}