import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users = [];
  error = '';
  username: string;
  password: string;

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  login(username: string, password: string) {
    this.userService.login(username, password)
    .subscribe(
      data => {
        this.router.navigate(['/admin']);
      },
      error => {
        this.error = error;
        alert('Username or password is incorrect');
      }
    );
  }
}
