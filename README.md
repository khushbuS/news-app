Technologies Used: </br>
Angular (https://angular.io/) </br>
Angular Material (https://material.angular.io/)</br>
SCSS (https://sass-lang.com/)</br>
mdc-layout-grid (https://github.com/material-components/material-components-web/tree/master/packages/mdc-layout-grid)</br>
API Used: https://newsapi.org/#documentation</br>
</br>
Software installation required:</br>
1.	Nodejs (https://nodejs.org/en/)</br>
2.	Angular CLI (https://cli.angular.io/)</br>
</br>
Application Workflow:</br>
AppModule: The root module of the application.</br>
AppComponent: The root component, also showing top news sources received using getSources() method through API call.	</br>
ArticlesComponent: It holds the layout for each daily feed list of articles for particular news source.</br>
Models: </br>
Article: data type definition to parse article info coming from API call.</br>
Source: data type definition to parse news sources coming from API call.</br>
NewsApiService:  to manage API calls.
