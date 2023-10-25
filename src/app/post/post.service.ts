import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Post } from '../interfaces/post.interface';


@Injectable({
  providedIn: 'root'
})

export class PostService {
  private apiHost = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.apiHost}/posts`);
  }

  createPost(post: Post): Observable<Post> {
    return this.http.post<Post>(`${this.apiHost}/posts`, post)
  }

}