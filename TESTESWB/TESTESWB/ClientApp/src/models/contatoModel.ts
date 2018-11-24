import { EmpresaModel } from './empresaModel';
import { AreaModel } from './areaModel';

export class ContatoModel {
    id: string;
    nomeUsuario: string;
    telefone: number;
    idEmpresa: string;
    idArea: string;

    empresas: EmpresaModel;
    areas: AreaModel;

    constructor(values: Object = {}) {
      this.empresas = new EmpresaModel();
      this.areas = new AreaModel();
    }
  }
