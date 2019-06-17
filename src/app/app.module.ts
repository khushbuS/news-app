import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

//Application components
import { AppComponent } from './app.component';
import { ArticlesComponent } from './articles/articles.component';

//Service created to make http requests to newsapi
import { NewsApiService } from './services/news-api.service';

//Angular Material components used
import { MatButtonModule, MatListModule} from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';


@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatTabsModule 
  ],
  providers: [NewsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
