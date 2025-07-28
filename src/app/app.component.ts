import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from "./components/user/user.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'NgRx-based-Angular-demo';
}
