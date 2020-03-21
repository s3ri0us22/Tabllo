import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { GroupComponent } from "./tables-view/group/group.component";
import { GroupCardComponent } from "./tables-view/group/group-card/group-card.component";
import { TablesViewComponent } from "./tables-view/tables-view.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GroupComponent,
    GroupCardComponent,
    TablesViewComponent
  ],
  imports: [BrowserModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
