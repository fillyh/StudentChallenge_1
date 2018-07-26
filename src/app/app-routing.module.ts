import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { DbCharactersComponent } from './db-characters/db-characters.component';
import { SaiyansComponent } from './saiyans/saiyans.component';
import { NameksComponent } from './nameks/nameks.component';


const routes: Routes = [
  {path: 'db-characters', component: DbCharactersComponent},
  {path: 'saiyans', component: SaiyansComponent},
  {path: 'nameks', component: NameksComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
