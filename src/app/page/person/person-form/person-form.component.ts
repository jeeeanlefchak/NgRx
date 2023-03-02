import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { savePerson } from '../person.action';
import { selectPersonById } from '../person.selectors';
import { PersonState } from '../person.state';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.scss']
})
export class PersonFormComponent implements OnInit {

  form!: FormGroup;

  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private store: Store<PersonState>,
    private router: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      id: [null],
      name: ['', Validators.required],
      cpf: ['', Validators.required],
      phone: [''],
      email: ['', Validators.email],
      year: [15],
    })

    this.route.paramMap.subscribe((paramMap: any) => {
      if (paramMap.has('id') && paramMap['params']?.id != "new") {
        const id = paramMap.get('id');
        if (id && +id > 0) {
          this.edit(+id);
        }
      }
    });
  }

  onSubmit(): void {
    this.store.dispatch(savePerson({ usuario: this.form.value }));
    this.back();
  }

  private edit(id: number) {
    this.store.select(selectPersonById(id)).subscribe(person => {
      if (person) {
        this.form.patchValue(person);
      }
    });
  }

  back() {
    this.router.navigateByUrl('page/person');
  }

}


