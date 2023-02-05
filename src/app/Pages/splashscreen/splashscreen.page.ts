import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-splashscreen',
  templateUrl: './splashscreen.page.html',
  styleUrls: ['./splashscreen.page.scss'],
})
export class SplashscreenPage implements OnInit {

 
  constructor(public router: Router) {
    
  }

  ngOnInit() { 
    //Use setTimeOut method to set a timer and navigate to the next page after time elapsis
    setTimeout(()=>{
      this.router.navigate(['./login']);
    },3000);
  }

 
}
