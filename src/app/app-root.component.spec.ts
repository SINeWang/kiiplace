import { TestBed, async } from '@angular/core/testing';
import { AppRootComponent } from './app-root.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppRootComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppRootComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'kiiplace'`, () => {
    const fixture = TestBed.createComponent(AppRootComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('kiiplace');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppRootComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('kiiplace app is running!');
  });
});
