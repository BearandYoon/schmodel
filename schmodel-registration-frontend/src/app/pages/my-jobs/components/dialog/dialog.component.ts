import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { MyDialogComponent } from '../my-dialog/my-dialog.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})

export class DialogComponent implements OnInit {

  dialogResult = "";

  constructor(public dialog: MatDialog) { }

 
  ngOnInit() {
  }

  openDialog() {
    let dialogRef = this.dialog.open(MyDialogComponent, {
      width: '600px',
      data: 'This test is passed into the dialog'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed': $(result)`);
      this.dialogResult = result;
    })
  }
}
