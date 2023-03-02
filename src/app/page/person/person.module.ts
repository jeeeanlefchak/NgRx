import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { PersonFormComponent } from './person-form/person-form.component';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonReduce } from './person.reducer';
import { PersonService } from './person.service';

export const PAGES_ROUTING = RouterModule.forChild([
  {
    path: '',
    component: PersonListComponent,
  },
  {
    path: ':id',
    component: PersonFormComponent,
  },
]);

@NgModule({
  declarations: [
    PersonListComponent,
    PersonFormComponent,
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PAGES_ROUTING,
    StoreModule.forRoot({
      person: PersonReduce,
    }, {}),
  ],
  providers: [
    PersonService,

  ]
})
export class PersonModule { }
