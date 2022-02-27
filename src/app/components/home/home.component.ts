import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = "这是一个home标题"

  products: Array<any> = [
    {
      name: 'iPhone 11',
      price: 6000
    },
    {
      name: 'iPhone 12',
      price: 7000
    },
    {
      name: 'iPhone 13',
      price: 8000
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  handleNotify() {
    alert("接受推送")
  }
}
