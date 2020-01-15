import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { GroupComponent } from "./group/group.component";
import { GroupCardComponent } from "./group/group-card/group-card.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GroupComponent,
    GroupCardComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
