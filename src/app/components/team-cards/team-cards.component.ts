import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-cards',
  templateUrl: './team-cards.component.html',
  styleUrls: ['./team-cards.component.css']
})
export class TeamCardsComponent implements OnInit {

  slideConfig = { 'infinite': false,
  'slidesToShow': 3,
  'slidesToScroll': 1,
  'autoplay': true,
  'arrows': true,
  'dots': true,
  'focusOnSelect': true,
  // 'draggable': true,
  'responsive': [{
    'breakpoint': 1200,
    'settings': {
      'slidesToShow': 3,
      'slidesToScroll': 1,
      'dots': true,
      'arrows': true,
    }
  }, {
    'breakpoint': 991,
    'settings': {
      'slidesToShow': 2,
      'slidesToScroll': 1,
      'dots': true,
      'arrows': true,
    }
  }, {
    'breakpoint': 568,
    'settings': {
      'slidesToShow': 1,
      'dots': true,
      'arrows': true,
    }
  }]};

  constructor() { }

  ngOnInit(): void {
  }

  title = 'ngSlick';


  slickInit(e: any) {
    console.log('slick initialized');
  }

  breakpoint(e: any) {
    console.log('breakpoint');
  }

}
