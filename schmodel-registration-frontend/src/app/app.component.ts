import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpHelperService } from './core/http-helper.service';

@Injectable()

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    // this.http.

    // let headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    // headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');
    // headers.append('Access-Control-Allow-Credentials', 'true');
                   
    this.http.get('http://localhost:8080/my-jobs').subscribe(data => {
      console.log(data);
    });
    // this.http.get('https://api.github.com/users/seeschweiler').subscribe(data => {
    //   console.log(data);
    // });
    // this.http.get("https://api.github.com/users/seeschweiler", {}, true, null).subscribe(data => {
    //   console.log(data);
    // });
    
  }
}
