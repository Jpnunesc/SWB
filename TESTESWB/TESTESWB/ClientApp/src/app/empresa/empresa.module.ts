import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarEmpresaComponent } from './listar-empresa/listar-empresa.component';
import { CadastroEmpresaComponent } from './cadastro-empresa/cadastro-empresa.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  declarations: [ListarEmpresaComponent, CadastroEmpresaComponent ]
})
export class EmpresaModule { }
