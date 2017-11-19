import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTalentPhotosComponent } from './edit-talent-photos.component';

describe('EditTalentPhotosComponent', () => {
  let component: EditTalentPhotosComponent;
  let fixture: ComponentFixture<EditTalentPhotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTalentPhotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTalentPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
