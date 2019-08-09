import { Component, OnInit, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-book-table',
  templateUrl: './book-table.component.html',
  styleUrls: ['./book-table.component.sass']
})
export class BookTableComponent implements OnInit, AfterContentChecked {
  books: Book[];

  constructor() { }

  ngOnInit() {
    this.books.push(new Book(0, "Great Expectations", "Charles Dickens"));
    this.books.push(new Book(1, "Moby Dick", "Herman Melville"));
    this.books.push(new Book(2, "Anna Karenina", "Leo Tolstoy"));
  }

  ngAfterContentChecked() {
    console.log(this);
  }

}

class Book {
  id: number;
  title: string;
  author: string;
  constructor(id: number, title: string, author: string) {
    this.id = id;
    this.title = title;
    this.author = author;
  }
}