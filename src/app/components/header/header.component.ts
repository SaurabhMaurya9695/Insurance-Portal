import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.isLoggedIn= this.authService.isLoggedIn();
  }

  logout(): void {
    this.authService.logout().then(() => {
      this.router.navigate(['/login'], {
        queryParams: { logout: 'true' },
      });
    });
    location.reload();
  }
}
