import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LegajoService } from '../../services/legajo.service';
import { LegajoModel } from '../../models/legajo.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Message } from 'primeng/api';
import { EquipostService } from '../../../equipost/services/equipost.service';
import { IEquipoT } from 'src/app/equipost/interfaces/equipot_interface';
import { LocalStorageService } from '../../../services/local-storage.service';
import { ServicioslService } from '../../../serviciosl/services/serviciosl.service';
import { IServicio } from 'src/app/serviciosl/interfaces/serviciosl.interface';

@Component({
  selector: 'legajos-add-form',
  templateUrl: './add-legajo-form.component.html',
  styleUrls: ['./add-legajo-form.component.scss'],
})
export class AddLegajoFormComponent implements OnInit {
  forma!: FormGroup;
  equipost_list: IEquipoT[] = [];
  servicios_list: IServicio[] = [];
  @Output()
  actualizarLista: EventEmitter<void>;

  constructor(
    private legajoService: LegajoService,
    private fb: FormBuilder,
    private equipostService: EquipostService,
    private servicioslService: ServicioslService,
    private localStorageService: LocalStorageService
    ) {
    this.crearFormulario();
    this.actualizarLista = new EventEmitter<void>();
  }
  ngOnInit(): void {
    this.verificaDataLocalStorage();        
  }

  //metodo que se ejecuta en cada inicio y verifica la data de equipost en el local storage
  verificaDataLocalStorage(){
    //verificamos la data de equipos territoriales
    const data_storage = localStorage.getItem('equipost_list');    
    if(!data_storage || data_storage.length == 0){
      this.cargarEquiposT();      
    }    
    this.equipost_list = JSON.parse(data_storage!);    
    this.equipost_list.sort(this.compararPorNombre)

    //verificamos la data de servicios locales
    const servicios_storage = localStorage.getItem('serviciosl_list');    
    if(!servicios_storage || servicios_storage.length == 0){
      this.cargarServiciosL();      
    }    
    this.servicios_list = JSON.parse(servicios_storage!);    
    this.servicios_list.sort(this.compararPorNombre)
  }

  //metodo que peticion al backend y carga los equipos territoriales en el local storage y en la variable local  
  cargarEquiposT(){
    this.equipostService.getEquipost().subscribe((equipo) => {
      this.equipost_list = equipo.data.map((equipo) => {
        return {
          id: equipo.id_equipo,
          nombre: equipo.nombre,
        };
      });
      this.localStorageService.setItem('equipost_list',this.equipost_list)
  })
}

cargarServiciosL(){
  this.servicioslService.getServiciosl().subscribe((servicio) => {
    this.servicios_list = servicio.data.map((servicio) => {
      return {
        id: servicio.id_serviciol,
        nombre: servicio.nombre,
        equipot_id: servicio.equipot_id
      };
    });
    this.localStorageService.setItem('serviciosl_list',this.servicios_list)
})
}

  // Función de comparación personalizada para ordenar por nombre, que sera utlizada para ordenar los datos de dropdowns
 compararPorNombre(a: any, b: any) {
  const nombreA = a.nombre.toUpperCase();
  const nombreB = b.nombre.toUpperCase();

  if (nombreA < nombreB) {
    return -1;
  }
  if (nombreA > nombreB) {
    return 1;
  }

  return 0;
}

  // selectedState: any = null;

  states: any[] = [
    { name: 'Arizona', code: 'Arizona' },
    { name: 'California', value: 'California' },
    { name: 'Florida', code: 'Florida' },
    { name: 'Ohio', code: 'Ohio' },
    { name: 'Washington', code: 'Washington' },
  ];

  dropdownItems = [
    { name: 'Option 1', code: 'Option 1' },
    { name: 'Option 2', code: 'Option 2' },
    { name: 'Option 3', code: 'Option 3' },
  ];

  generos = [
    {
      id: 2,
      sexo: 'masculino',
    },
    {
      id: 1,
      sexo: 'femenino',
    },
  ];

  cities1: any[] = [];

  cities2: any[] = [];

  city1: any = null;

  city2: any = null;

  date: Date | undefined;

  //variables del message shared component
  msgs: Message[] = [];

  showSuccessViaMessages() {
    this.msgs = [];
    this.msgs.push({
      severity: 'success',
      summary: 'Registro Creado!',
      detail: 'Se ha agregado un nuevo registro de Legajo al Sistema',
    });
  }

  showErrorViaMessages() {
    this.msgs = [];
    this.msgs.push({
      severity: 'error',
      summary: 'Registro Fallido!',
      detail: 'Error al cargar el nuevo registro',
    });
  }

  crearFormulario() {
    this.forma = this.fb.group({
      apellido: ['', [Validators.required, Validators.minLength(5)], []],
      nombre: ['', [Validators.required, Validators.minLength(5)], []],
      fecha_nacimiento: ['', [], []],
      usuario_alta_id: [1, [Validators.required, Validators.min(0)], []],
      usuario_modif_id: [1, [Validators.required, Validators.min(0)], []],
      direccion: ['direccion_test', [Validators.minLength(5)], []],
      nro_documento: ['35412784', [Validators.minLength(5)], []],
      referencia_llamada102: [
        'referencia de prueba 102',
        [Validators.minLength(5)],
        [],
      ],
      sexo_id: [null, [Validators.required], []],
      equipot_id: [null, [], []],
      serviciol_id: [null, [], []],
      
    });
  }

  submitFormLegajo() {    
    if(!this.forma.valid){
      this.forma.markAllAsTouched(); 
      return;
    }

    let dataLegajo: Partial<LegajoModel>;

    dataLegajo = {
      apellido: this.forma.get('apellido')?.value,
      nombre: this.forma.get('nombre')?.value,
      fecha_nacimiento: this.forma.get('fecha_nacimiento')?.value,
      usuario_alta_id: 1,
      usuario_modif_id: 1,
      direccion: 'direccion_test',
      nro_documento: this.forma.get('nro_documento')?.value,
      referencia_llamada102: 'referencia_llamada_test',
      sexo_id: this.forma.get('sexo_id')?.value,
      equipot_id: this.forma.get('equipot_id')?.value,
      serviciol_id: this.forma.get('serviciol_id')?.value
    };

    this.legajoService.postLegajo(dataLegajo).subscribe({
      next: (resultado) => {
        this.showSuccessViaMessages();
        this.actualizarLista.emit();
      },
      error: (err) => {
        this.showErrorViaMessages();
      },
    });
  }

  //configuracion de la verificacion sincronica
  isValidField(field: string): boolean | null {
    return (
      this.forma.controls[field].errors && this.forma.controls[field].touched
    );
  }

  getFieldError(field: string): string | null {
    if (!this.forma.controls[field]) return null;
    const errors = this.forma.controls[field].errors || {};
    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'El campo es requerido';
        case 'min':
          return 'El campo es un numero y debe de ser mayor a 0';
        case 'minlength':
          return `El campo debe de ser de al menos  ${errors['minlength'].requiredLength} letras`;
      }
    }
    return '';
  }
}
