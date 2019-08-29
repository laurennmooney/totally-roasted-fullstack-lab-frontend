import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  getAllItems() {
    return this.http.get("http://localhost:5000/cart-items");
  }

  deleteItem(id: number) {
    return this.http.delete(`http://localhost:5000/cart-items/${id}`);
  }

  updateItem(updatedItem: object, id: number) {
    return this.http.put(`http://localhost:5000/cart-items/${id}`, updatedItem);
  }

  addItem(newItem: object) {
    return this.http.post("http://localhost:5000/cart-items", newItem);
  }
}
