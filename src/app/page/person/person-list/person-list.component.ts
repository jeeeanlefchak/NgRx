import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { deletePersons, setPersons } from '../person.action';
import { PersonModel } from '../person.model';
import { personSelected } from '../person.selectors';
import { PersonService } from '../person.service';
import { PersonState } from '../person.state';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})

export class PersonListComponent implements OnInit {

  list$ = this.store.select(personSelected);

  constructor(private service: PersonService,
    private store: Store<PersonState>) { }

  ngOnInit(): void {
    this.service.getAll().then((persons: PersonModel[]) => {
      this.store.dispatch(setPersons({ persons }));
    })
  }

  delete(id: number) {
    this.store.dispatch(deletePersons({ id }));
  }

}
