import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { CustomerService } from 'src/app/demo/service/customer.service';
import { ProductService } from 'src/app/demo/service/product.service';
import { Customer, Representative } from 'src/app/demo/api/customer';
import { Product } from 'src/app/demo/api/product';

interface expandedRows {
  [key: string]: boolean;
}

//interface para manejar la subida de archivos
interface UploadEvent {
  originalEvent: Event;
  files: File[];
}

@Component({
  selector: 'legajos-edit-tab',
  templateUrl: './edit-legajo-tab.component.html',
  styleUrls: ['./edit-legajo-tab.component.scss'],
})
export class EditLegajoTabComponent{
  //datos en duro del formulario
  selectedState: any = null;

  //para manejar la subida de archivos
  uploadedFiles: any[] = [];

  idFrozen: boolean = false;

  customers1: Customer[] = [];

  customers2: Customer[] = [];

  customers3: Customer[] = [];

  selectedCustomers1: Customer[] = [];

  selectedCustomer: Customer = {};

  representatives: Representative[] = [];

  statuses: any[] = [];

  products: Product[] = [];

  rowGroupMetadata: any;

  expandedRows: expandedRows = {};

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

  loading: boolean = true;

  isExpanded: boolean = false;

  cities1: any[] = [];

  cities2: any[] = [];

  city1: any = null;

  city2: any = null;

  // variable para el date picker
  date: Date | undefined;


  constructor(  
    private messageService: MessageService
  ) {}

  expandAll() {
    if (!this.isExpanded) {
      this.products.forEach((product) =>
        product && product.name ? (this.expandedRows[product.name] = true) : ''
      );
    } else {
      this.expandedRows = {};
    }
    this.isExpanded = !this.isExpanded;
  }

  formatCurrency(value: number) {
    return value.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  }

  //metodo que maneja la subida de archivos
  onUpload(event: any) {
    for (const file of event.files) {
      this.uploadedFiles.push(file);
    }

    this.messageService.add({
      severity: 'info',
      summary: 'Success',
      detail: 'File Uploaded',
    });
  }
}
