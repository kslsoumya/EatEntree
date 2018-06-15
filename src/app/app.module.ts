import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppHttpService } from './app-http.service';

import { ToastrModule } from 'ngx-toastr';
import { HomeViewComponent } from './home-view/home-view.component';
import { ItemsDisplayModule } from './items-display/items-display.module';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomeViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ItemsDisplayModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([
      { path: 'home', component: HomeViewComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', component: NotFoundComponent }
    ])
  ],
  providers: [AppHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
