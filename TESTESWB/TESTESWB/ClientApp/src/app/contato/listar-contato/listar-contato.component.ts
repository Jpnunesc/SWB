import { Component, OnInit } from '@angular/core';
import { ContatoModel } from '../../../models/contatoModel';
import { ContatoService } from '../../../servicos/contatoService';
import * as XLSX from 'xlsx';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listar-contato',
  templateUrl: './listar-contato.component.html',
  styleUrls: ['./listar-contato.component.css']
})
export class ListarContatoComponent implements OnInit {
  contatos: any[] = new Array<any>();
  wopts: XLSX.WritingOptions = { bookType: 'xlsx', type: 'array' };
  fileName = 'Contatos.xlsx';
  msg: string;
  errorExport = false;
  sucesso = false;
  constructor(private contatoService: ContatoService,
              private route: ActivatedRoute,
              private router: Router
  ) { }

  ngOnInit() {
    this.BuscarContatos();
  }
  editar(id) {
    this.router.navigate(['editar-contato', id], { relativeTo: this.route });
  }
  BuscarContatos() {
    this.contatoService.listar().subscribe(resp => {
      this.contatos = resp.object;
    });
  }
  excluir(id) {
    this.contatoService.excluir(id).subscribe(resp => {
      console.log(resp);
     this.BuscarContatos();
     this.sucesso = true;
     this.msg = 'Operação realizada sucesso.';
     this.fecharMsg();
    });
  }


  Exportar(): void {
    /* Busca todos registros */
    if (this.contatos.length !== 0) {
      const arr = [];
      arr.push([
        ['Nome Contato'],
        ['Telefone'],
        ['Empresa'],
        ['Area']
      ]);
      for (let i = 0; i < this.contatos.length; i++) {
        arr.push([
          [this.contatos[i].nomeUsuario],
          [this.contatos[i].telefone],
          [this.contatos[i].nome],
          [this.contatos[i].area],
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
     this.fecharMsg();
    }
  }
  fecharMsg() {
    setTimeout(() => this.errorExport = false, 3000);
    setTimeout(() => this.sucesso = false, 3000);
  }

}

