import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { IconComponent } from './components/shared/Icons/icons-svg.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { PageLoadingComponent } from './components/shared/page-loading/page-loading.component';
import { PaginationComponent } from './components/shared/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    PageLoadingComponent,
    IconComponent,
    PaginationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
