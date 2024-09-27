import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecuperarcontrasenamodalComponent } from './recuperarcontrasenamodal.component';

describe('RecuperarcontrasenamodalComponent', () => {
  let component: RecuperarcontrasenamodalComponent;
  let fixture: ComponentFixture<RecuperarcontrasenamodalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RecuperarcontrasenamodalComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecuperarcontrasenamodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
