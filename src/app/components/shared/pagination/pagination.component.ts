import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() back: boolean = false;
  @Input() next: boolean = false;
  @Input() current: number = 1;
  @Input() total: number = 1;
  @Output() pageChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  handlePageChange(page: number) {
    this.pageChange.emit(page);
  }
}
