import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MediaComponent } from './media.component';
import { HttpClientModule } from '@angular/common/http';
import { MediaService } from '../services/media.service'; // Importa tu servicio real
import { of } from 'rxjs';

describe('MediaComponent', () => {
  let component: MediaComponent;
  let fixture: ComponentFixture<MediaComponent>;
  let mediaService: MediaService; // Declara una variable para el servicio

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MediaComponent],
      imports: [HttpClientModule],
      providers: [MediaService], // Proporciona el servicio en la prueba
    });

    fixture = TestBed.createComponent(MediaComponent);
    component = fixture.componentInstance;
    mediaService = TestBed.inject(MediaService); // Inyecta el servicioggggg
    fixture.detectChanges();
  });

  it('should return 550.6', () => {
    // Simula la respuesta del servicio para getMedia()
    spyOn(mediaService, 'getMedia').and.returnValue(of({ data: [550.6] }));

    component.ngOnInit();

    expect(component.mediaProxy).toEqual(550.6);
  });

  it('should return 60.32', () => {
    // Simula la respuesta del servicio para getHours()
    spyOn(mediaService, 'getHours').and.returnValue(of({ data: [60.32] }));

    component.ngOnInit();

    expect(component.mediaHours).toEqual(60.32);
  });
});