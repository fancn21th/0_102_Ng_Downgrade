import { Component, OnInit, Input } from "@angular/core";
import { Ng1AppModule } from "../ng1.module";
import { downgradeComponent } from "@angular/upgrade/static";

@Component({
  selector: "app-article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.css"]
})

export class ArticleComponent implements OnInit {
  @Input() author: string;
  title: string = "Unicycle Jousting Recognized as Olympic Sport";

  constructor() {}

  ngOnInit() {}
}

Ng1AppModule.directive(
  "ng1Article",
  downgradeComponent({
    component: ArticleComponent,
    inputs: ["author"]
  })
);
