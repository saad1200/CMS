
import { Injectable }         from '@angular/core';
import { DataItem }             from "./dataItem";
import {Http}                 from "@angular/http";

export class DataService {

  constructor(private http: Http, private table: string) { }

  public endpoint = "http://localhost:8080";
 
  get(id: string, callback) {
    this.http.get(`${this.endpoint}/${this.table}/${id}`)
      .subscribe(response => {
        callback(response.json());
      })
  }

  getList(callback) {    
    this.http.get(`${this.endpoint}/${this.table}`)
      .subscribe(response => {
        callback(response.json());
      });
  }

  save(item: DataItem, callback) {
    if (item._id) {
      this.http.put(`${this.endpoint}/${this.table}/${item._id}`, item)
        .subscribe(response => {
          callback(true);
        });
    } else {
      this.http.post(`${this.endpoint}/${this.table}`, item)
        .subscribe(response => {
          callback(true);
        });
    }
  }

}