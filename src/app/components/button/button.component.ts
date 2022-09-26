import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
@Input() color?: string;
@Input() text: string;
@Input() href: string;
@Input()
ngStyle: { [klass: string]: any; }

  constructor() { }

  ngOnInit(): void {
  }

}
