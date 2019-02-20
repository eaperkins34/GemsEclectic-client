import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { Jewelry } from '../models/jewelry-model';
import { JewelryService } from '../services/jewelry.service';

@Component({
  selector: 'app-new-piece',
  templateUrl: './new-piece.component.html',
  styleUrls: ['./new-piece.component.css']
})
export class NewPieceComponent implements OnInit {
  createJewelry: FormGroup;
  jewelry: Jewelry[];

  constructor(
    private fb: FormBuilder,
    private jewelryService: JewelryService,
    private router: Router) { }

  ngOnInit() {
    this.createJewelry = this.fb.group({
      name: new FormControl(),
      description: new FormControl(),
      image: new FormControl(),
      price: new FormControl()
    });
  }

  onSubmit() {
    this.jewelryService.createJewelry(this.createJewelry.value)
      .subscribe(res => {
        console.log(res);
        alert('New Piece Created');
        this.router.navigate(['/admin']);
      });
  }
}
