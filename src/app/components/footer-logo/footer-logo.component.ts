import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-footer-logo',
  templateUrl: './footer-logo.component.html',
  styleUrls: ['./footer-logo.component.css']
})
export class FooterLogoComponent implements OnInit {
  @Input() logoText?: string;
  @Input() srcPath: string;
  @Input() link: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
