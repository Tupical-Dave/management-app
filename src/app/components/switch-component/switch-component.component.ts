import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-switch-component',
  templateUrl: './switch-component.component.html',
  styleUrls: ['./switch-component.component.css']
})
export class SwitchComponentComponent implements OnInit {
  text :string = 'Eng';
  constructor() { }

  ngOnInit(): void {
  }

  toggleSwitch() {
    if(this.text === "Eng"){
      this.text = "Geo";
    } else {
      this.text = "Eng"
    }
  }


}
