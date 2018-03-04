import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';

import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe'
import { StarComponent } from './shared/star.component'

@NgModule({
  declarations: [
    AppComponent, 
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent

  ],
  imports: [
    BrowserModule, 
    //every browser application must import the browser module
    FormsModule
    //This FormsModule is for ngModel. 
  ],
  providers: [], //providers array is for services
  bootstrap: [AppComponent] //bootstrap array defines the startup component of our application
})
export class AppModule { }
