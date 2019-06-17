import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Article } from '../models/article.model';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  @Input() articles: Article[];
  @Input() source: string;
  
  @Output() showdiv = new EventEmitter<{ show: boolean }>();

  constructor() {}

  ngOnInit() { }

  //boolean set to true to show the list of top news sources ongoing back 
  goBack() {
    this.showdiv.emit({ show: true });
  }
 
}
