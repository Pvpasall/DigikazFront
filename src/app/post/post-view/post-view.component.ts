import { Component } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from 'src/app/interfaces/post.interface';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})
export class PostViewComponent {

  posts: Post[] = [];
  
  
  constructor(private postService: PostService ) {}
  
  ngOnInit(): void {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }
  
}