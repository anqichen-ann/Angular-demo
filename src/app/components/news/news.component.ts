import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  @Input() product : Array<any> | undefined;
  @Output() notify = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
