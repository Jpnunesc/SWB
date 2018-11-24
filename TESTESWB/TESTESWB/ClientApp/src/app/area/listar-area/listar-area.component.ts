import { Component, OnInit } from '@angular/core';
import { AreaModel } from '../../../models/areaModel';
import { AreaService } from '../../../servicos/areaService';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-listar-area',
  templateUrl: './listar-area.component.html',
  styleUrls: ['./listar-area.component.css']
})
export class ListarAreaComponent implements OnInit {
  Areas: AreaModel[] = new Array<AreaModel>();
  msg: string;
  errorExport = false;
  wopts: XLSX.WritingOptions = { bookType: 'xlsx', type: 'array' };
  fileName = 'Area.xlsx';
  constructor(private areaService: AreaService) { }

  ngOnInit() {
    this.BuscarAreas();
  }
BuscarAreas() {
  this.areaService.listar().subscribe(resp => {
  console.log(resp);
  this.Areas = resp.object;
  });
}
Exportar(): void {
  /* Busca todos registros */
  if (this.Areas.length !== 0) {
    const arr = [];
    arr.push([
      ['Area']
    ]);
    for (let i = 0; i < this.Areas.length; i++) {
      arr.push([
        [this.Areas[i].area],
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
