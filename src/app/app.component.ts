import { Component, OnInit } from '@angular/core';
import { NewsApiService } from './services/news-api.service';
import { Source } from './models/source.model';
import { Article } from './models/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'nickelfox-angular-assignment';
  sourceNames: Source[] = [];
  article: Article[];
  show: boolean = true;
  source: string;

  constructor(private newsApi: NewsApiService) { }

  ngOnInit() {
    this.newsApi.getSources()
      .subscribe(
        data => {
          let i = 0;
          for (let d in data.sources) {
            this.sourceNames.push({id: data.sources[d].id, name: data.sources[d].name });
            i++;
          }
        }
      );
  }

  //receiving data and pushing data of interest in article array
  getFeed(id, name) {
    this.article = [];
    this.show = false;
    this.source = name;
    this.newsApi.getFeedFrom(id).subscribe(
      data => {
        for (let i in data["articles"]) {
          this.article.push({ title: data["articles"][i].title, url: data["articles"][i].url, urlToImage: data["articles"][i].urlToImage, description: data["articles"][i].description });
        }
      }
    );
  }

  onShow(data: { show: boolean }) {
    this.show = data.show;
  }
}
