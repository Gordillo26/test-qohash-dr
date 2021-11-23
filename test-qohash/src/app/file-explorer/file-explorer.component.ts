import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  pathToRequest = ""



  constructor(private dataService: ApiHttpService,
    private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.pathToRequest = params['path'];

      this.dataService.getFoldersElements(this.pathToRequest).subscribe((data: any) => {
        this.currentFolderSize = data.shift();
        this.dataSource = data;
      }
      )
    });

  }
}
