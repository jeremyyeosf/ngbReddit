import { Component, HostBinding, OnInit } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  article: Article;
  

  constructor() {
    this.article = new Article(
      'Angular',
      'http://angular.io',
      10);
  }

  voteUp() {
    this.votes += 1;
    // returning false tells browser not to follow empty link/reload, 
    // as click event is propagated to all parent components in JS
    return false; 
  }

  voteDown() {
    this.votes -= 1;
    return false;
  }

  ngOnInit(): void {
  }

}
