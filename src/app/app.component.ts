import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    console.log('title object: ', title)
    this.articles.push(new Article(title.value, link.value, 0));
    // clear the input field values
    title.value = '';
    link.value = '';
    // return false to avoid browser resetting
    return false;
  }

  // can also be written as Array<Article>. Concept of generics. 
  // Array will only hold objects of type Article as defined in article.model.ts
  articles: Article[]; 
  constructor() {
    // populate articles (array of type class Article)
    this.articles = [        
      new Article('Angular','http://angular.io',3),
      new Article('Fullstack','http://fullstack.io',2),
      new Article('Angular Homepage','http://angular.io',1),
    ]
  }

  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }

  

}
