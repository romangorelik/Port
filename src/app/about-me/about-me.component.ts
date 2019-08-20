import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  location: string = 'Staten Island, NY'
  phone: string = '718-813-2967'
  email: string = 'romang31@gmail.com'
  github: string = 'github.com/romangorelik'
  linkedin: string = 'linkedin.com/in/roman-gorelik'


  constructor() { }

  ngOnInit() {
  }

}
