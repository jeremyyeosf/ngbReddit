import { Component, HostBinding, OnInit, Input } from '@angular/core';
import { Article } from './article.model';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input('article') article: Article;
  

  constructor() {

  }

  voteUp(): boolean {
    this.article.voteUp();
    // returning false tells browser not to follow empty link/reload, 
    // as click event is propagated to all parent components in JS
    return false; 
  }

  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }

  
  
  ngOnInit(): void {
  }

}
