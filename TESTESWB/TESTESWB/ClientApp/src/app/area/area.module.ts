import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarAreaComponent } from './cadastrar-area/cadastrar-area.component';
import { ListarAreaComponent } from './listar-area/listar-area.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  declarations: [CadastrarAreaComponent, ListarAreaComponent],
})
export class AreaModule { }
