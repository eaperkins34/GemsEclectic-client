import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { JewelryService } from '../services/jewelry.service';


@Component({
  selector: 'app-update-jewerly',
  templateUrl: './update-jewerly.component.html',
  styleUrls: ['./update-jewerly.component.css']
})

export class UpdateJewerlyComponent implements OnInit {
  @Input() jewelry;
  public jewelryEditForm: FormGroup;
  token: string;

  constructor(
    private fb: FormBuilder,
    private js: JewelryService
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.jewelryEditForm = this.fb.group({
      id: this.jewelry.id,
      name: this.jewelry.name,
      description: this.jewelry.description,
      image: this.jewelry.image,
      price: this.jewelry.price,
      available: this.jewelry.available
    });
  }

  onSubmit(form) {
    this.js.updateJewelry(form.value)
      .subscribe((updateJewelry) => {
        location.reload();
      });
  }
}
