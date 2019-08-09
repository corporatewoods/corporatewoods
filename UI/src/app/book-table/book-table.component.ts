import { Component, OnInit, AfterContentChecked, Input } from '@angular/core';
import { DatePipe } from "@angular/common";
@Component({
  selector: 'app-book-table',
  templateUrl: './book-table.component.html',
  styleUrls: ['./book-table.component.sass']
})
export class BookTableComponent implements OnInit, AfterContentChecked {
  books: Book[];
  @Input() searchText: string;

  constructor() { }

  ngOnInit() {
    this.books = [
      new Book(0, "Great Expectations", "Charles Dickens"),
      new Book(1, "Moby Dick", "Herman Melville"),
      new Book(2, "Anna Karenina", "Leo Tolstoy"),
      new Book(3, "Illiad", "Homer"),
      new Book(4, "The Adventures of Sherlock Holmes", "Sir Arthur Conan Doyle"),
      new Book(4, "Homer: A Very Short Introduction (Very Short Introductions)", "Barbara Graziosi")
    ];
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