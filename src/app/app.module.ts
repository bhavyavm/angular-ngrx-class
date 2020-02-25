import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { StoreModule } from "@ngrx/store";
import { studentReducer } from "./reducers/student.reducer";
import { ListingComponent } from "./listing/listing.component";
import { AddStudentComponent } from "./add-student/add-student.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({ students: studentReducer })
  ],
  declarations: [AppComponent, AddStudentComponent, ListingComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
