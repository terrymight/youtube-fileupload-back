import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpTokenService } from './http-token.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  title = 'Hello, Hit the subcribe button';

  constructor(private tSvc: HttpTokenService) { }


  ngOnInit(): void {
    this.tSvc.getCrsfToken()
      .subscribe(x => console.log(x))
  }
}
