import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LegajoService } from '../../services/legajo.service';
import { LegajoModel } from '../../models/legajo.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Message } from 'primeng/api';
import { EquipostService } from '../../../equipost/services/equipost.service';
import { IEquipoT } from 'src/app/equipost/interfaces/equipot_interface';
import { LocalStorageService } from '../../../services/local-storage.service';

@Component({
  selector: 'legajos-add-form',
  templateUrl: './add-legajo-form.component.html',
  styleUrls: ['./add-legajo-form.component.scss'],
})
export class AddLegajoFormComponent implements OnInit {
  forma!: FormGroup;
  equipost_list: IEquipoT[] = [];

  @Output()
  actualizarLista: EventEmitter<void>;

  constructor(
    private legajoService: LegajoService,
    private fb: FormBuilder,
    private equipostService: EquipostService,
    private localStorageService: LocalStorageService
    ) {
    this.crearFormulario();
    this.actualizarLista = new EventEmitter<void>();
  }
  ngOnInit(): void {
    this.verificaDataEquiposT();        
  }

  //metodo que se ejecuta en cada inicio y verifica la data de equipost en el local storage
  verificaDataEquiposT(){
    const data_storage = localStorage.getItem('equipost_list');
    if(!data_storage || data_storage.length == 0){
      this.cargarEquiposT();
      console.log("No tenemos datos de equipos en el ls!")
    }
  }

  //metodo que peticion al backend y carga los equipos territoriales en el local storage y en la variable local  
  cargarEquiposT(){
    this.equipostService.getEquipost().subscribe((equipo) => {
      this.equipost_list = equipo.data.map((equipo) => {
        return {
          id: equipo.id_equipo,
          nombre: equipo.nombre
        };
      });
      this.localStorageService.setItem('equipost_list',this.equipost_list)
  })
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
