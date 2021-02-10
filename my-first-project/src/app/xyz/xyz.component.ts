import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-xyz',
  templateUrl: './xyz.component.html',
  styleUrls: ['./xyz.component.css']
})
export class XyzComponent implements OnInit {

  public firstNameInput = new FormControl('');
  public lastNameInput = new FormControl('');
  
  constructor() { }

  ngOnInit(): void {
  }

}
