import { Component } from '@angular/core';
import { APIService } from './API.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'labApp-amplify';

  constructor(private apiService:APIService){

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.apiService.CreatePatient({"name":"Matias","dni":41130807}).then(data => {
      console.log(data)
    }).catch(error => {
      console.log(error)
    })
  }
}
