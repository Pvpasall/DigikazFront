import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Post } from '../interfaces/post.interface';


@Injectable({
  providedIn: 'root'
})

export class PostService {
  private jsonFile = 'assets/posts.json';

  constructor(private http : HttpClient) {}
   
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.jsonFile);
  }

}