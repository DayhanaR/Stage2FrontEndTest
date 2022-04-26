import { Component, OnInit } from '@angular/core';
import { Article } from '../../interfaces/articles.interface';
import { ArticlesService } from '../../services/articles.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor(private articlesService: ArticlesService) { }
  
  newArticle: Article = {
    id: "",
    journal: "",
    eissn: "",
    publication_date: "",
    article_type: "",
    author_display: [],
    abstract: [],
    title_display:"",
    score: 0,
}

  articles: Article[] = [];

  ngOnInit(): void {
    this.articlesService.getArticles().subscribe( (response: any) =>{
      this.articles = response.response.docs;
    });
  };

  editCard(id: string): void{
    let articleId = this.articles.findIndex((article) => article.id === id);
    this.newArticle = this.articles[articleId];
  };

  removeCard(id: string): void{
    let articleId = this.articles.findIndex((article) => article.id === id);
    this.articles.splice(articleId, 1);
  };

  clear(): void {
    this.newArticle = {
      id: "",
      journal: "",
      eissn: "",
      publication_date: "",
      article_type: "",
      author_display: [],
      abstract: [],
      title_display:"",
      score: 0,
    }
  };

  add(newArticle: {
    id: string;
    title: string;
    journal: string;
    abstract: string[];
  }): void {
    this.clear();
    if (newArticle.id !== '') {
      const article = this.articles.find((art) => art.id === newArticle.id);
      if (article) {
        article.title_display = newArticle.title;
        article.abstract = newArticle.abstract;
        article.journal = newArticle.journal;
        console.log(article);
      }
    } else {
      this.articles.push({
        id: new Date().toLocaleTimeString(),
        abstract: newArticle.abstract,
        journal: newArticle.journal,
        title_display: newArticle.title,
      });
    }
    console.log(this.articles);
  }

}
