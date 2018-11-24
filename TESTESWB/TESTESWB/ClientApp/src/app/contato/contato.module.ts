import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarContatoComponent } from './listar-contato/listar-contato.component';
import { CadastrarContatoComponent } from './cadastrar-contato/cadastrar-contato.component';
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
  declarations: [ListarContatoComponent, CadastrarContatoComponent]
})
export class ContatoModule { }
