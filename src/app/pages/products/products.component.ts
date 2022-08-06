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
        img: 'https://app.fexpress.pe/storage/daily-deals/0DKncvwRIhqrpsfdzU9CyBIjbisQCpWmpJ9BfO2k.jpeg',
        title:
          'MSI Stealth 15M 15.6 144Hz FHD Intel Core i7-11375H, NVIDIA GeForce RTX 3060, 16GB, 512GB SSD',
        paragrafe:
          'Visual Performance: The 15.6” 144hz display delivers true-to-life images with a high refresh rate so you can see every frame of the game.',
      },
      {
        img: 'https://app.fexpress.pe/storage/daily-deals/8pskJSxEROVirtuAnDNIdK39YLGcOV7MAHKOowQf.jpeg',
        title: 'Beats Studio3 Wireless Noise Cancelling Over-Ear Headphones',
        paragrafe:
          'With fast Fuel, a 10-minute charge gives 3 hours of play when battery is low. Rechargeable lithium ion battery',
      },
      {
        img: 'https://app.fexpress.pe/storage/daily-deals/duVZ9BCcjJMhCgXG4IUZ8rCJtd04nusuadGVo5BX.jpeg',
        title: 'Google Pixel 6a 128GB',
        paragrafe:
          'Google Pixel 6a se adapta a ti; es superrápido y seguro y funciona con Google Tensor, el primer chip diseñado por Google solo para Pixel',
      },
      {
        img: 'https://app.fexpress.pe/storage/daily-deals/3d1X0EtGaeIz1M6UhksiO3ugCtJAbct15nWTVeCT.jpeg',
        title: 'Samsung Tab S8+ 256GB',
        paragrafe: 'Colores Disponibles: Silve, Graphite y Pink Gold',
      },
      {
        img: 'https://app.fexpress.pe/storage/daily-deals/bXxHRTGJPvpXUPMuxJ00H6bviECnSNn1NlkZHulH.jpeg',
        title:
          'ASUS TUF DASH 15.6 - Intel 11th Gen I7 - 16GB - NVIDIA GeForce RTX 3060 - 512GB SSD',
        paragrafe:
          'Reams of high-bandwidth DDR4 RAM to smoothly run your graphics-heavy PC games and video-editing applications, as well as numerous programs and browser tabs all at once.',
      },
      {
        img: 'https://app.fexpress.pe/storage/daily-deals/4IAguMgYxBviShPYbJmTY0tgMzuSkp7lV8D4BO11.jpeg',
        title:
          'Acer Nitro 5 Intel Core I7-11800H | NVIDIA GeForce RTX 3050 Ti | 15.6 FHD 144Hz IPS | 8GB DDR4 | 512GB NVMe SSD',
        paragrafe:
          'Stay Cool Under Pressure: When heavy use requires an added boost, Acer CoolBoost technology increases fan speed by 10% and CPU/GPU cooling by 9% compared to auto mode, overall increasing thermal performance by 25% for better gaming comfort',
      },
      {
        img: 'https://app.fexpress.pe/storage/daily-deals/fKKydt6j1ELQFUPEWyDLfx0eSNljKedntspW23GQ.jpeg',
        title:
          'Acer Predator Triton 300 SE 14 144Hz Intel 11th Gen i7 - GeForce RTX 3060 - 16GB DDR4 - 512GB SSD',
        paragrafe:
          'The new 11th Gen Intel® Core™ H Series processors for Ultraportable Gaming are made to push frames while making travel easy. Now clocking up to 5.0GHz Turbo with up to 4 cores and 8 threads, you get all the performance you need and the freedom to game anywhere.',
      },
      {
        img: 'https://app.fexpress.pe/storage/daily-deals/ai7Eu4MiBWuZle3WEYpvHC6dOG3m1QLiqaif4Pvh.jpeg',
        title:
          'MSI Pulse GL66 15.6 144Hz FHD Intel Core i7-11800H, NVIDIA GeForce RTX 3070, 16GB, 512GB SSD',
        paragrafe:
          'Supercharged Graphics: The MSI GL66 is powered by NVIDIA GeForce RTX, take on todays most popular games with these performance graphics.',
      },
    ];
  }
}
