import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JewelryService } from '../services/jewelry.service';
import { Jewelry } from '../models/jewelry-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  jewelry: Jewelry[];

  constructor(
    private jewelryServ: JewelryService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.getJewelry();
  }

  getJewelry(): void {
    this.jewelryServ.getJewelry()
    .subscribe(jewelrys => {this.jewelry = jewelrys, console.log(jewelrys);
    });
  }

}
