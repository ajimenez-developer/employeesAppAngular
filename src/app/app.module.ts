import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { StickerMessageComponent } from './sticker-message/sticker-message.component';
import { CustomTableComponent } from './custom-table/custom-table.component';
import { CustomFormComponent } from './custom-form/custom-form.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeesService } from './services/employees.service';
import { FilterPipe } from './pipes/filter.pipe';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    StickerMessageComponent,
    CustomTableComponent,
    CustomFormComponent,
    EmployeesComponent,
    FilterPipe,
    SearchComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EmployeesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
