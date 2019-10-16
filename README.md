# Angular Downgrade

- a demo of angular 2+ downgrading to angular 1 directive

  - refer to `https://plnkr.co/edit/uILrai13oZmPsJxMghAG?p=preview`

- key steps

  - Angular Module Upgrade

    - By Inject UpgradeModule

  - Angular Component In Module declarations / entryComponents

  - import UpgradeModule

  - Create a AngularJS Module

  - Create a AngularJS Directive Using The Angular Component

  - Using the Angular Component as Angular JS directive in HTML

  - CONNECTING ANGULAR 1 TO ANGULAR 2

    - Don't use an ng-app to bootstrap the Angular 1 application

    ```javascript
    //[main.ts]
    import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
    import { Ng1AppModule } from "./app/ng1.module";
    import { Ng2AppModule } from "./app/ng2.module";

    platformBrowserDynamic()
      .bootstrapModule(Ng2AppModule)
      .then(ref => {
        ref.instance.upgrade.bootstrap(document.body, [Ng1AppModule.name]);
      });
    ```
