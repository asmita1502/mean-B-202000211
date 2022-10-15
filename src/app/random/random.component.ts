import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {
  randomnumber = 0
  constructor() { }

  ngOnInit(): void {
  }
  generateRandom = () => {
    this.randomnumber = Math.random();
  }
}
