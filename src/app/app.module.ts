import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DragulaModule} from "ng2-dragula/ng2-dragula";

@NgModule({
  declarations: [
    AppComponent,
    CardComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DragulaModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
