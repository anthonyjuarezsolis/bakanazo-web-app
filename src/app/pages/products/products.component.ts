import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  public cardArray = [];
  constructor() {}

  ngOnInit() {
    this.cardArray = [
      {
        img: './assets/img/product-1.png',
        title: 'UX review presentations',
        paragrafe:
          'How do you create compelling presentations that wow your colleagues and impress your managers?',
      },
      {
        img: './assets/img/product-2.png',
        title: 'Migrating to Linear 101',
        paragrafe:
          'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.',
      },
      {
        img: './assets/img/product-3.png',
        title: 'Building your API Stack',
        paragrafe:
          'The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.',
      },
      {
        img: './assets/img/product-4.png',
        title: 'Bill Walsh leadership lessons',
        paragrafe:
          'Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?',
      },
      {
        img: './assets/img/product-5.png',
        title: 'PM mental models',
        paragrafe:
          'Mental models are simple expressions of complex processes or relationships.',
      },
      {
        img: './assets/img/product-6.png',
        title: 'What is Wireframing?',
        paragrafe:
          'Introduction to Wireframing and its Principles. Learn from the best in the industry.',
      },
      {
        img: './assets/img/product-7.png',
        title: 'How collaboration makes us better designers',
        paragrafe:
          'Collaboration can make our teams stronger, and our individual designs better.',
      },
      {
        img: './assets/img/product-8.png',
        title: 'Our top 10 Javascript frameworks to use',
        paragrafe:
          'JavaScript frameworks make development easy with extensive features and functionalities.',
      },
    ];
  }
}
