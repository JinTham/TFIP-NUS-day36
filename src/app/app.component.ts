import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day36';

  constructor(private router: Router){  }

  gotoTrex(){
    this.router.navigate(['/trex'])
  }
}
