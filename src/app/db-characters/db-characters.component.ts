import { Component, OnInit } from '@angular/core';
import {Characters} from '../characters';
import {CHARACTERS}  from '../character-list';

@Component({
  selector: 'db-characters',
  templateUrl: './db-characters.component.html',
  styleUrls: ['./db-characters.component.css']
})
export class DbCharactersComponent implements OnInit {

  characters = CHARACTERS;

  constructor() { }




  ngOnInit() {
  }


}
