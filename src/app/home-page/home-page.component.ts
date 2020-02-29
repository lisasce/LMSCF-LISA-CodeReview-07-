import { Component, OnInit } from '@angular/core';
import {$} from 'protractor';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
zoom: boolean = false;

  constructor() { }

  ngOnInit(): void {

  }

}

