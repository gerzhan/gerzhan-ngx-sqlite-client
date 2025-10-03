import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSqliteClient } from './ngx-sqlite-client';

describe('NgxSqliteClient', () => {
  let component: NgxSqliteClient;
  let fixture: ComponentFixture<NgxSqliteClient>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxSqliteClient]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxSqliteClient);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
