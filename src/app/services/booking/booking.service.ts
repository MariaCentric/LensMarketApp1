import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  endpoint: string = "https://localhost:7219/api/Booking"

  constructor(
    private http: HttpClient
  ) { }

  getBooking() {
  return this.http.get(`${this.endpoint}`);
  }
}
