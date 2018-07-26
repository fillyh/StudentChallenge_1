import { Component, OnInit } from '@angular/core';
import {Saiyan} from '../saiyan';
import {SAIYANS} from '../saiyans-list';

@Component({
  selector: 'saiyans',
  templateUrl: './saiyans.component.html',
  styleUrls: ['./saiyans.component.css']
})
export class SaiyansComponent implements OnInit {

  saiyan = SAIYANS;

  constructor() { }

  ngOnInit() {
  }

}
