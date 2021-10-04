import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponent } from './product.component';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should be inactive on startup', () => {
    expect(component.isActive).toBeFalse();
  });
  it('should activate active class', () => {
    component.onMouseDown();
    expect(component.isActive).toBeTrue();
  });
  it('should deactivate active class', () => {
    component.onMouseUp();
    expect(component.isActive).toBeFalse();
  });
});
