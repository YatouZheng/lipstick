import { Component, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


interface IButtonName {
  ButtonName: string;
}

@Component({
  selector: 'navbar-component',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
@Injectable()
export class NavbarComponent {
  menuItems: IButtonName[] = [];

  constructor(private http: HttpClient) {
    console.log('AppComponent constructor');
    this.http.get('/menuitems').subscribe((data) => {
      this.menuItems = data['menuItems'];
    },
      err => {
        console.log(`error: ${err}`);
      },
      () => {
        console.log(`success`);
      });
  }

}

