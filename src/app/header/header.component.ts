import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private Serviceservice: ServiceService) { }

  ngOnInit(): void {
  }

  goToHome() {
    this.router.navigate(['home']);
  }

  logout() {
    this.Serviceservice.logout();
  }

}