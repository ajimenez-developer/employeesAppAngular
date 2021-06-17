import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { StickerMessageComponent } from './sticker-message/sticker-message.component';
import { CustomTableComponent } from './custom-table/custom-table.component';
import { CustomFormComponent } from './custom-form/custom-form.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeesService } from './services/employees.service';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StickerMessageComponent,
    CustomTableComponent,
    CustomFormComponent,
    EmployeesComponent,
    FilterPipe
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule
  ],
  providers: [EmployeesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
