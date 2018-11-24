
export class EmpresaModel {
    id: string;
    nome: string;
    
    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
  }