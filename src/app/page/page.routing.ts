import { RouterModule } from "@angular/router";

export const PAGES_ROUTING = RouterModule.forChild([
  {
    path: '',
    redirectTo: 'person',
    pathMatch: 'full'
  },
  {
    path: 'person',
    loadChildren: () => import('./person/person.module').then(m => m.PersonModule)
  }
]);