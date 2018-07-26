import { Component, OnInit } from '@angular/core';
import{Namek} from '../namek';
import{NAMEKS} from  '../namek-list';

@Component({
  selector: 'nameks',
  templateUrl: './nameks.component.html',
  styleUrls: ['./nameks.component.css']
})
export class NameksComponent implements OnInit {

namek = NAMEKS;

  constructor() { }

  ngOnInit() {
  }

}
