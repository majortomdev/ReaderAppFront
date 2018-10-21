import {Component} from '@angular/core';
import {ArticleService} from '../services/article.service';
import {User} from '../models/user';
import {Article} from '../models/article';


@Component({
  selector: 'article-list',
  templateUrl: './article-list.component.html'
})

export class ArticleList {
  article: Article[];
  selectedArticle: Article;

  constructor (private articleService: ArticleService) {
    this.articleService.getArticles().subscribe(
      data=> console.log(this.article = JSON.parse(JSON.parse(JSON.stringify(data))._body)),
      error => console.log(error)
    );
  }
}
