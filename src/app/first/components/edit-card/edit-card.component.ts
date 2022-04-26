import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Article } from '../../interfaces/articles.interface';

@Component({
  selector: 'app-edit-card',
  templateUrl: './edit-card.component.html',
  styleUrls: ['./edit-card.component.css']
})
export class EditCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  editArticle!: Article;

  @Output() setArticle = new EventEmitter();

  title: string = '';
  journal: string = '';
  abstract: string = '';

  
  addArticle(): void {
    this.setArticle.emit({
      id: this.editArticle.id,
      title: this.title,
      journal: this.journal,
      abstract: this.abstract,
    });
  }

}
