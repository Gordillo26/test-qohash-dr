import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test Qohash';
  pathFolder : string = ""

  constructor(private router: Router) {
  }

  getFolderInfo(){
    this.router.navigateByUrl('file-explorer/' + encodeURIComponent(this.pathFolder));
}
}
