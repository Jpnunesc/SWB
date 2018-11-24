import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { ContatoService } from '../servicos/contatoService';
import { HttpModule } from '@angular/http';
import { ListarAreaComponent } from './area/listar-area/listar-area.component';
import { CadastrarAreaComponent } from './area/cadastrar-area/cadastrar-area.component';
import { AreaService } from '../servicos/areaService';
import { ListarEmpresaComponent } from './empresa/listar-empresa/listar-empresa.component';
import { CadastroEmpresaComponent } from './empresa/cadastro-empresa/cadastro-empresa.component';
import { EmpresaService } from '../servicos/empresasService';
import { CadastrarContatoComponent } from './contato/cadastrar-contato/cadastrar-contato.component';
import { ListarContatoComponent } from './contato/listar-contato/listar-contato.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    ListarAreaComponent,
    CadastrarAreaComponent,
    ListarEmpresaComponent,
    CadastroEmpresaComponent,
    ListarContatoComponent,
    CadastrarContatoComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
   // HttpClientModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'area', component: ListarAreaComponent },
      { path: 'empresa', component: ListarEmpresaComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'empresa', component: ListarEmpresaComponent},
      { path: 'cadastrar-empresa', component: CadastroEmpresaComponent},
      { path: 'cadastrar-area', component: CadastrarAreaComponent},
      { path: 'contato', component: ListarContatoComponent},
      { path: 'cadastrar-contato', component: CadastrarContatoComponent},
      { path: 'editar-contato/:id', component: CadastrarContatoComponent}
    ])
  ],
  providers: [ContatoService, AreaService, EmpresaService], 
  bootstrap: [AppComponent]
})
export class AppModule { }
