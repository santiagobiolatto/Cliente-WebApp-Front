import { Component } from '@angular/core';

// Tagea a la clase como un tipo component
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// Crea una clase
export class AppComponent {
  title = 'clientes-app';
  curso = 'asdasd';
  rojo = ' rojo!';
}
