import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the footer text with the current year', () => {
    const element = fixture.nativeElement as HTMLElement;
    const paragraph = element.querySelector('p');
    const currentYear = new Date().getFullYear();
    expect(paragraph).toBeTruthy(); 
    expect(paragraph?.textContent).toContain(`© ${currentYear} Users Manager | All Rights Reserved`);
  });
});
