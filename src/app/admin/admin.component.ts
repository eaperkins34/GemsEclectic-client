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

  constructor(private jewelryServ: JewelryService) { }

  ngOnInit() {
    this.getJewelry();
  }

  getJewelry(): void {
    this.jewelryServ.getJewelry()
      .subscribe(jewelrys => {this.jewelry = jewelrys, console.log(jewelrys);
      });
  }
}
