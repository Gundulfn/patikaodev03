import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-route-button',
  templateUrl: './route-button.component.html',
  styleUrls: ['./route-button.component.css']
})
export class RouteButtonComponent {
  @Input() routePath: any;
  @Input() buttonText: any;
  color: any;
  constructor(private route: Router){ }

  routeToPage(){
    this.route.navigateByUrl(this.routePath);
  }
}
