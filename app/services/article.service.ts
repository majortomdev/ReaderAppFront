import {Injectable} from '@angular/core';
import {User} from '../models/user';
import {Article} from '../models/article';
import {Http, Headers} from '@angular/http';

@Injectable ()
export class ArticleService {
  constructor (private http: Http){}

  getArticles() {
    let url = "http://localhost:8080/article/allArticles";
    return this.http.get(url);

    // getArticleById (articleId: number) {
    //   let tokenUrl1 = "http://localhost:8080/rest/article/articleId";
    //   let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer'+localStorage.getItem("token")});
    //   return this.http.post(tokenUrl1, JSON.stringify(articleId), {headers: headers1});
    // }

    // getArticlesByUser (user: User) {
    //   let tokenUrl1 = "http://localhost:8080/rest/article/user";
    //   let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer'+localStorage.getItem("token")});
    //   return this.http.post(tokenUrl1, JSON.stringify(user), {headers: headers1});
    // }

    // updateArticle (article: Article) {
    //   let tokenUrl1 = "http://localhost:8080/rest/article/update";
    //   let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer'+localStorage.getItem("token")});
    //   return this.http.post(tokenUrl1, JSON.stringify(article), {headers: headers1});
    // }

  }
}
