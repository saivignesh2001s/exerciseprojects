import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  movielist:any[]=[
        {
          "movie":"alaipayuthe"
        },
        {
          "movie":"roja"
        },
        {
          "movie":"Padayappa"
        },
        {
          "movie":"Dasvatharam"
        }

  ]

}
