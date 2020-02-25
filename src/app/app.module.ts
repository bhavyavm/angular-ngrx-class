import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { StoreModule } from "@ngrx/store";
import { studentReducer } from "./reducers/student.reducer";
import { NgGCReadComponent } from './ng/ng.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({ students: studentReducer })
  ],
  declarations: [AppComponent, HelloComponent, NgGCReadComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
