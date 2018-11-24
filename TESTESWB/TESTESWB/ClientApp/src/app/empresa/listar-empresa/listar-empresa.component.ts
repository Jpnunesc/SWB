import { Component, OnInit } from '@angular/core';
import { EmpresaModel } from '../../../models/empresaModel';
import { EmpresaService } from '../../../servicos/empresasService';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-listar-empresa',
  templateUrl: './listar-empresa.component.html',
  styleUrls: ['./listar-empresa.component.css']
})
export class ListarEmpresaComponent implements OnInit {
  Empresa: EmpresaModel[] = new Array<EmpresaModel>();
  wopts: XLSX.WritingOptions = { bookType: 'xlsx', type: 'array' };
  fileName = 'Area.xlsx';
  msg: string;
  errorExport = false;
  constructor(private empresaService: EmpresaService) { }

  ngOnInit() {
    this.BuscarAreas();
  }
BuscarAreas() {
  this.empresaService.listar().subscribe(resp => {
  console.log(resp);
  this.Empresa = resp.object;
  });
}
Exportar(): void {
  /* Busca todos registros */
  if (this.Empresa.length !== 0) {
    const arr = [];
    arr.push([
      ['Area']
    ]);
    for (let i = 0; i < this.Empresa.length; i++) {
      arr.push([
        [this.Empresa[i].nome],
      ]);
    }
    const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(arr);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* salva arquivo do tipo .xlsx */
    XLSX.writeFile(wb, this.fileName);
  } else {
    this.errorExport = true;
    this.msg = 'Não contém registros para exportar!';
  }
}
limparObjeto() {
  setTimeout(() => this.errorExport = false, 3000);
}
}
