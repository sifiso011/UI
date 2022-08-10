import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public slideIndex = 0;
  public carouselIndex = 0;

  carouselData = [
    {
      summary: 'Zenzele Meaning self reliance or do it yourself With e-Mintaka - Now you can!',
      img: 'https://www.e-tshwane.co.za/eTshwane/javax.faces.resource/assets/img/banner-02.jpg.xhtml',
      label: 'E-Mithaka',
    },
    {
      summary: 'No more estimates! Submit your meter readings for accurate billing.',
      img: 'https://www.e-tshwane.co.za/eTshwane/javax.faces.resource/assets/img/banner-01.jpg.xhtml',
      label: 'Submit meter readings online ',
    },
    {
      summary: 'View and pay your account via WhatsApp Our WhatsApp number is 061 123 789',
      img: 'https://www.e-tshwane.co.za/eTshwane/javax.faces.resource/assets/img/banner-02.jpg.xhtml',
      label: 'e-Mintaka is live on WhatsApp!',
    },
  ]

  constructor() { }

  ngOnInit(): void {
    this.carouselIndex = this.carouselData.length - 1;
    this.timer();
  }

  public prevSlides() {
    if (this.slideIndex > 0) {
      this.slideIndex--;
    } else {
      this.slideIndex = this.carouselIndex;
    }
  }


  public nextSlides() {
    if (this.slideIndex < this.carouselIndex) {
      this.slideIndex++;
    } else {
      this.slideIndex = 0;
    }
  }

  public timer() {
    setTimeout(() => {
      this.nextSlides()
      this.timer();
    }, 5000);
  }

}
