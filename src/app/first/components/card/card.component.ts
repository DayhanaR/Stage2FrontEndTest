import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Article } from '../../interfaces/articles.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input () article! : Article

  @Output() removeCard = new EventEmitter();

  @Output() editCard = new EventEmitter();

  @Output() clearEdit = new EventEmitter();

  abstractToggle: boolean = false;

  toggleShowAbstract(): void {
    this.abstractToggle = !this.abstractToggle;
  }

  quitCard(): void{
    this.removeCard.emit();
  }

}
