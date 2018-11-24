import { Component, OnInit } from '@angular/core';
import { AreaModel } from '../../../models/areaModel';
import { AreaService } from '../../../servicos/areaService';

@Component({
  selector: 'app-cadastrar-area',
  templateUrl: './cadastrar-area.component.html',
  styleUrls: ['./cadastrar-area.component.css']
})
export class CadastrarAreaComponent implements OnInit {
  area: AreaModel = new AreaModel();
  msg: string;
  sucesso: boolean;
  constructor(private areaService: AreaService) { }

  ngOnInit() {
  }
  salvar() {
    this.areaService.salva(this.area).subscribe(resp => {
      this.msg = resp.message;
      this.sucesso = true;
      this.limparObjeto();
    });
  }
  limparObjeto() {
    setTimeout(() => this.sucesso = false, 3000);
    this.area = new AreaModel;
  }
}
