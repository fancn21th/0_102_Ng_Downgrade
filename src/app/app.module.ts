import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { UpgradeModule } from "@angular/upgrade/static";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ArticleComponent } from "./article/article.component";

@NgModule({
  declarations: [AppComponent, ArticleComponent],
  imports: [BrowserModule, AppRoutingModule, UpgradeModule],
  // exports: [ArticleComponent],
  providers: [],
  // IT IS A MUST TO PUT THE DOWNGRADE COMPONENT IN THE ENTRY COMPONENT DEFINITION
  entryComponents: [ArticleComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public upgrade: UpgradeModule) {}
}
