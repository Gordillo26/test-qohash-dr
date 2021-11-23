import { Component, OnInit } from '@angular/core';
import { ApiHttpService } from '../core/services/api-http.service';


export interface ListNode {
  name: string;
  size: string;
  type: string;
  last_modified: string;
}

@Component({
  selector: 'app-file-explorer',
  templateUrl: './file-explorer.component.html',
  styleUrls: ['./file-explorer.component.css']
})
export class FileExplorerComponent implements OnInit {

  displayedColumns: string[] = ['name', 'size', 'type', 'last_modified'];

  dataSource = []; //call API
  currentFolderSize = "0";



  constructor(private dataService: ApiHttpService) { }

  ngOnInit(): void {
    this.dataService.getFoldersElements().subscribe((data: any)=>{
      this.currentFolderSize = data.shift();
      this.dataSource = data;
    }
  )}
}
