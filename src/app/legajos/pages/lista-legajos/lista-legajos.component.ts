import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Customer, Representative } from 'src/app/demo/api/customer';
import { CustomerService } from 'src/app/demo/service/customer.service';
import { Product } from 'src/app/demo/api/product';
import { ProductService } from 'src/app/demo/service/product.service';
import { Table } from 'primeng/table';
import { MessageService, ConfirmationService, Message } from 'primeng/api';
import { LegajoService } from '../../services/legajo.service';
import { ILegajo, ILegajos } from '../../interfaces/legajos.interface';





// interface expandedRows {
//     [key: string]: boolean;
// }

// //interface para manejar la subida de archivos
// interface UploadEvent {
//     originalEvent: Event;
//     files: File[];
// }

@Component({
    selector: 'legajos-lista',
    templateUrl: './lista-legajos.component.html',
    styleUrls: ['./lista-legajos.component.scss'],
    providers: [MessageService, ConfirmationService]
  })
  export class ListaLegajosComponent implements OnInit {


    //datos de legajos
    legajosList!: ILegajo[];
    totalLegajos: number = 0;

    msgs: Message[] = [];

    showSuccessViaMessages() {
      this.msgs = [];
      this.msgs.push({ severity: 'success', summary: 'Success Message', detail: 'Message sent' });
  }



    customers1: Customer[] = [];

    customers2: Customer[] = [];

    customers3: Customer[] = [];

    // selectedCustomers1: Customer[] = [];

    // selectedCustomer: Customer = {};

    representatives: Representative[] = [];

    statuses: any[] = [];

    products: Product[] = [];

    // rowGroupMetadata: any;

    // expandedRows: expandedRows = {};

    activityValues: number[] = [0, 100];

    // isExpanded: boolean = false;

    // idFrozen: boolean = false;

   loading: boolean = true;

    dialogVisible: boolean = false;

    dialogAddLegajo: boolean = false;

    // //datos en duro del formulario
    // selectedState: any = null;

    // //para manejar la subida de archivos
    // uploadedFiles: any[] = [];

    // states: any[] = [
    //     {name: 'Arizona', code: 'Arizona'},
    //     {name: 'California', value: 'California'},
    //     {name: 'Florida', code: 'Florida'},
    //     {name: 'Ohio', code: 'Ohio'},
    //     {name: 'Washington', code: 'Washington'}
    // ];

    // dropdownItems = [
    //     { name: 'Option 1', code: 'Option 1' },
    //     { name: 'Option 2', code: 'Option 2' },
    //     { name: 'Option 3', code: 'Option 3' }
    // ];

    // cities1: any[] = [];

    // cities2: any[] = [];

    // city1: any = null;

    // city2: any = null;

    // // variable para el date picker
    // date: Date | undefined;

    @ViewChild('filter') filter!: ElementRef;

    constructor(
        private customerService: CustomerService,
        private productService: ProductService,
        // private messageService: MessageService,
        private legajosService: LegajoService
        ) { 
            // this.legajosService.getLegajos().subscribe((info) => {
            //     console.log(info)
            // });
        }
        

    ngOnInit() {
        // this.legajosService.getLegajos().subscribe((info) => {
        //     this.legajosList = info.data;
        //     this.totalLegajos = info.total;
        //     console.log(this.legajosList, this.totalLegajos);
        // });
        this.cargarLegajos();

        this.customerService.getCustomersLarge().then(customers => {
            this.customers1 = customers;
            this.loading = false;

            // @ts-ignore
            this.customers1.forEach(customer => customer.date = new Date(customer.date));
        });
        this.customerService.getCustomersMedium().then(customers => this.customers2 = customers);
        this.customerService.getCustomersLarge().then(customers => this.customers3 = customers);
        this.productService.getProductsWithOrdersSmall().then(data => this.products = data);

        this.representatives = [
            { name: 'Amy Elsner', image: 'amyelsner.png' },
            { name: 'Anna Fali', image: 'annafali.png' },
            { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
            { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
            { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
            { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
            { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
            { name: 'Onyama Limba', image: 'onyamalimba.png' },
            { name: 'Stephen Shaw', image: 'stephenshaw.png' },
            { name: 'XuXue Feng', image: 'xuxuefeng.png' }
        ];

        this.statuses = [
            { label: 'Unqualified', value: 'unqualified' },
            { label: 'Qualified', value: 'qualified' },
            { label: 'New', value: 'new' },
            { label: 'Negotiation', value: 'negotiation' },
            { label: 'Renewal', value: 'renewal' },
            { label: 'Proposal', value: 'proposal' }
        ];
    }

    //metodo que carga los datos de legajos en la variable local
    cargarLegajos(){
        this.legajosService.getLegajos().subscribe((info) => {
            this.legajosList = info.data;
            this.totalLegajos = info.total;            
        });
    }

    // onSort() {
    //     this.updateRowGroupMetaData();
    // }

    // updateRowGroupMetaData() {
    //     this.rowGroupMetadata = {};

    //     if (this.customers3) {
    //         for (let i = 0; i < this.customers3.length; i++) {
    //             const rowData = this.customers3[i];
    //             const representativeName = rowData?.representative?.name || '';

    //             if (i === 0) {
    //                 this.rowGroupMetadata[representativeName] = { index: 0, size: 1 };
    //             }
    //             else {
    //                 const previousRowData = this.customers3[i - 1];
    //                 const previousRowGroup = previousRowData?.representative?.name;
    //                 if (representativeName === previousRowGroup) {
    //                     this.rowGroupMetadata[representativeName].size++;
    //                 }
    //                 else {
    //                     this.rowGroupMetadata[representativeName] = { index: i, size: 1 };
    //                 }
    //             }
    //         }
    //     }
    // }

    // expandAll() {
    //     if (!this.isExpanded) {
    //         this.products.forEach(product => product && product.name ? this.expandedRows[product.name] = true : '');

    //     } else {
    //         this.expandedRows = {};
    //     }
    //     this.isExpanded = !this.isExpanded;
    // }

    // formatCurrency(value: number) {
    //     return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    // }

   
    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }

    clear(table: Table) { 
        
        table.clear();
        this.filter.nativeElement.value = '';
    }

    showDialog() {        
        this.dialogVisible = true;
    }

    showAddLegajo() {
        console.log("presionando add legajo dialog")
        this.dialogAddLegajo = true;
    }

    // //metodo que maneja la subida de archivos
    // onUpload(event: any) {
    //     for (const file of event.files) {
    //         this.uploadedFiles.push(file);
    //     }

    //     this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
    // }
    
}

