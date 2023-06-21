import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Post } from 'src/app/interfaces/Post';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.css']
})
export class PageTwoComponent {
  allPosts!: Post[] 

  constructor(public http: HttpClient){
    this.getData()
  }

 async getData(){
  await this.http.get<any>('https://jsonplaceholder.typicode.com/posts')
  .subscribe((res) => {
    this.allPosts = res.map(({ userId, id, title, body }: Post) => {
      return {
        userId,
        id,
        title,
        body
      }
    })
  })
 }
}
