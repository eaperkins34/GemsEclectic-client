import { Component, OnInit } from '@angular/core';
import { JewelryService } from '../services/jewelry.service';
import { Jewelry } from '../models/jewelry-model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  jewelry: Jewelry[];
  // update = false;

  constructor(private js: JewelryService) { }

  ngOnInit() {
    this.getJewelry();
  }

  getJewelry(): void {
    this.js.getJewelry()
      .subscribe(jewelrys => {this.jewelry = jewelrys, console.log(jewelrys);
      });
  }

  onDelete(id: number) {
    this.js.deleteJewelry(id).subscribe(res => {
      console.log('Deleted');
    });
    location.reload();
  }

  // onUpdate(): void{
  //   this.update = true;
  // }

  logout() {
    localStorage.clear();
    sessionStorage.clear();
  }

}
