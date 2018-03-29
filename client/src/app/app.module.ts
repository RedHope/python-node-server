import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { ExamsApiService } from "./exams/exams-api.service";
import {Design1} from './design-1.component';

@NgModule({
  declarations: [AppComponent, Design1],
  imports: [BrowserModule, HttpClientModule],
  providers: [ExamsApiService],
  bootstrap: [AppComponent, Design1]
})
export class AppModule {}
