import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalUserListComponent } from './personal-user-list.component';

describe('PersonalUserListComponent', () => {
  let component: PersonalUserListComponent;
  let fixture: ComponentFixture<PersonalUserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalUserListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
