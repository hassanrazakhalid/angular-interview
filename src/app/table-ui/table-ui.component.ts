import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-ui',
  templateUrl: './table-ui.component.html',
  styleUrls: ['./table-ui.component.scss'],
})
export class TableUiComponent implements OnInit {
  time = ['7:00 pm', '8:00 pm', '9:00 pm', '10:00 pm'];

  constructor() {}

  ngOnInit(): void {}

  //   1- traverse string charaterwise and check whether the character ascii lies between a-z or A-Z ascii
  // 2- if it matches range of characters ascii then check its previous character it should be the count of times that character should be repeated
  // 3- make an object of key values pair of number of repeations with that character for ex:
  // {
  // 	"a":4,
  // 	"b":1
  // }

  // 4- then using for in loop of js make a string that will make an encrypted string
}
