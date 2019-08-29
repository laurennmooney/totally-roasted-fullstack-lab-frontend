import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Response } from 'selenium-webdriver/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  cart: any;
  showUpdateForm: boolean = false;
  showAddForm: boolean = false;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.getCartItems();
  }

  getCartItems(): void {
    this.cartService.getAllItems().subscribe(response => {
      (this.cart = response)
    });
  }

  deleteItem(id: number): void {
    this.cartService.deleteItem(id).subscribe(response => {
      this.cart = response;
    });
  }

  updateItem(form: NgForm, id: number) {
    this.cartService.updateItem(form.value, id).subscribe(response => {
      this.cart = response;
    });
  }

  toggleUpdateForm() {
    this.showUpdateForm = !this.showUpdateForm;
  }

  toggleAddForm() {
    this.showAddForm = !this.showAddForm;
  }

  addItemToCart(form: NgForm) {
    this.cartService.addItem(form.value).subscribe(response => {
      this.cart = response;
    })
  }
}
