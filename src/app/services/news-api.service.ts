//service to manage api calls
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class NewsApiService {

  //registered api key to get access to the api and make calls
  API_KEY = '40789b1dac424842b81d5c16e3789a04';
  constructor(private httpClient: HttpClient) { }

  //to get the top news sources
  getSources(): Observable<any> {
    return this.httpClient.get('https://newsapi.org/v2/sources?apiKey='+ this.API_KEY);
  }

  //to get the daily feed of particular news source
  getFeedFrom(id: string) {
    return this.httpClient.get('https://newsapi.org/v2/top-headlines?sources='+ id + '&apiKey=' + this. API_KEY);
  }

}
