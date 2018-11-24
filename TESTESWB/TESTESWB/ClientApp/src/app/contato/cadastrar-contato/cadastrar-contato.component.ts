import { Component, OnInit } from '@angular/core';
import { ContatoModel } from '../../../models/contatoModel';
import { ContatoService } from '../../../servicos/contatoService';
import { AreaModel } from '../../../models/areaModel';
import { EmpresaModel } from '../../../models/empresaModel';
import { EmpresaService } from '../../../servicos/empresasService';
import { AreaService } from '../../../servicos/areaService';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastrar-contato',
  templateUrl: './cadastrar-contato.component.html',
  styleUrls: ['./cadastrar-contato.component.css']
})
export class CadastrarContatoComponent implements OnInit {

  contato: ContatoModel = new ContatoModel();
  areas: AreaModel[] = new Array<AreaModel>();
  empresas: EmpresaModel[] = new Array<EmpresaModel>();
  teste: string;
  msg: string;
  mostraMsg = false;
  dadosValidos: boolean;
  sucesso = false;
  edita = false;
  mgsAcao = 'Salvar';
  constructor(private contatoService: ContatoService,
    private empresaService: EmpresaService,
    private areaService: AreaService,
    private route: ActivatedRoute,
   // private router: Router
  ) {

   }

  ngOnInit() {
    this.buscarAreas();
    this.buscarEmpresas();

    if (this.route.params) {
      this.route.params.subscribe(params => {
        if (params['id']) {
          this.editar(params['id']);
          this.edita = true;
          this.mgsAcao = 'Editar';
        }
      });
    }
  }
  editar(id) {
    this.contatoService.editar(id).subscribe(resp => {
      this.contato = resp.object;
    });
    console.log(id);
  }
  salvar() {
    this.validarDados();
    debugger;
    if (this.dadosValidos) {
      this.contatoService.save(this.contato).subscribe(resp => {
        this.msg = resp.message;
        this.sucesso = true;
        if (this.edita === false) {
          this.limparObjeto();
          this.fecharMsg();
        } else {
         this.fecharMsg();
        }
      });
    } else {
      this.mostraMsg = true;
      this.fecharMsg();
    }

  }
  limparObjeto() {
    this.contato = new ContatoModel();
  }

  buscarAreas() {
    this.areaService.listar().subscribe(resp => {
      this.areas = resp.object;
    });
  }
  validarDados() {
    if (this.contato.nomeUsuario === null || this.contato.nomeUsuario === undefined) {
      this.msg = 'nome obrigatorio';
      return this.dadosValidos = false;
    } else  if (this.contato.telefone === null || this.contato.telefone === undefined) {
      this.msg = 'Telefone obrigatorio';
      this.dadosValidos = false;
    } else if (this.contato.idArea === null || this.contato.idArea === undefined) {
      this.msg = 'Area obrigatorio';
      return this.dadosValidos = false;
    } else  if (this.contato.idEmpresa === null || this.contato.idEmpresa === undefined) {
      this.msg = 'Empresa obrigatorio';
      return this.dadosValidos = false;
    }
    this.dadosValidos = true;
  }
  buscarEmpresas() {
    this.empresaService.listar().subscribe(resp => {
      this.empresas = resp.object;
    });
  }
  fecharMsg() {
    setTimeout(() => this.mostraMsg = false, 3000);
    setTimeout(() => this.sucesso = false, 3000);
  }
}
