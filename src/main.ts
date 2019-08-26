import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";
import { Ng1AppModule } from "./app/ng1.module";
import { environment } from "./environments/environment";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(ref => {
    ref.instance.upgrade.bootstrap(document.body, [Ng1AppModule.name]);
  })
  .catch(err => console.error(err));
