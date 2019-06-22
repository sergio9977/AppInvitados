import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import {MatPaginator} from '@angular/material/paginator';
import { CreateComponent } from '../create/create.component';
import { Guest } from '../models/guest';
import { GuestService } from '../service/guest.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  displayedColumns: string[] = ['fullName', 'acciones'];
  dataGuests : MatTableDataSource<Guest>;
  guestsList: Guest[];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(public dialogResult: MatDialog, private guestService: GuestService) {
  }

  ngOnInit() {
    this.guestService.getGuests()
      .snapshotChanges()
      .subscribe(item => {
        this.guestsList = [];
        item.map((data) => {
          let value = data.payload.toJSON();
          value['$key'] = data.key;
          this.guestsList.push(value as Guest);
          this.dataGuests = new MatTableDataSource(this.guestsList);
          this.dataGuests.paginator = this.paginator;
        })
      });
  }

  applyFilter(filterValue: string) {
    this.dataGuests.filter = filterValue.trim().toLowerCase();
  }

  openCreateGuest() {
    let dialogRef = this.dialogResult.open(CreateComponent, {
      width: '500px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result != undefined){
        this.dataGuests.data.push(result);
      }
    });
  }

  deleteGuest(guest: Guest) {
    if(confirm('Estas seguro que quieres eliminar al invitado: '+guest.fullName)) {
      this.guestService.deleteGuest(guest.$key);
    }
  }

}