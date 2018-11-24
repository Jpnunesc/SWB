import { Component, OnInit } from '@angular/core';
import { EmpresaModel } from '../../../models/empresaModel';
import { EmpresaService } from '../../../servicos/empresasService';

@Component({
  selector: 'app-cadastro-empresa',
  templateUrl: './cadastro-empresa.component.html',
  styleUrls: ['./cadastro-empresa.component.css']
})
export class CadastroEmpresaComponent implements OnInit {
  empresa: EmpresaModel = new EmpresaModel();
  msg: string;
  sucesso: boolean;
  constructor(private empresaService: EmpresaService) { }

  ngOnInit() {
  }
  salvar() {
    this.empresaService.salva(this.empresa).subscribe(resp => {
      this.msg = resp.message;
      this.sucesso = true;
      this.limparObjeto();
    });
  }
  limparObjeto() {
    setTimeout(() => this.sucesso = false, 3000);
    this.empresa = new EmpresaModel;
  }
}
