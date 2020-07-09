import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccordianBasicComponent } from './accordian-basic/accordian-basic.component';
import { CarouselBasicComponent } from './carousel-basic/carousel-basic.component';
import { PopoverBasicComponent } from './popover-basic/popover-basic.component';
import { ModalBasicComponent } from './modal-basic/modal-basic.component';
import { TypeaheadBasicComponent } from './typeahead-basic/typeahead-basic.component';
import { FormsModule } from '@angular/forms';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    CarouselBasicComponent,
    PopoverBasicComponent,
    ModalBasicComponent,
    TypeaheadBasicComponent,
    AccordianBasicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgModule,
    FormsModule,
    NgbTypeaheadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
