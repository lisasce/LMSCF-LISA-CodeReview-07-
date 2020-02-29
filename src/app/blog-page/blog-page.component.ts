import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {

  constructor() {}

  showSlide(component, slideIndex){
    let slide = Array.from(document.getElementsByClassName("slide"));
    // we need from to convert this html collection into an array
    for( let element of slide){
      // @ts-ignore
      element.style.display = "none";
    }
    if(slide.length>0){
      if (slideIndex >= slide.length){
        slideIndex = 0
      }
      // @ts-ignore
      slide[slideIndex].style.display = "block";
      slideIndex++;
    }
    setTimeout(function(){
      component.showSlide(component, slideIndex);
    }, 2000);
  }

  ngOnInit(): void {
    this.showSlide(this, 0);
  }
  }

