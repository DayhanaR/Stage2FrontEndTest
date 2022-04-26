import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Article } from '../interfaces/articles.interface';


@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http: HttpClient) { }

  getArticles(){
    return this.http.get<Article[]>('https://api.plos.org/search?q=title:DNA');
  }


}
