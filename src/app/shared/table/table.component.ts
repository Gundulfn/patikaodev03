import { Component, Input } from '@angular/core';
import { RoutingElement } from '../routing-element';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  keys: any;
  @Input() tableData: any[] = [];
  @Input() columnHeaders: any[] = [];
  @Input() routePath: any;
  @Input() showButton: boolean = true;

  pageIndex: number = 0;
  pageSize: number = 10;

  ngOnInit() {
    if (this.tableData && this.tableData.length > 0) {
      this.keys = Object.keys(this.tableData[0]);
    }
  }

  isRoutingElement(item: any): boolean {
    return (item as RoutingElement).queryParams !== undefined;
  }

  getRoutingValue(element: any): string {
    return element.value;
  }

  // Pagination Buttons
  handlePrevPageButton() {
    if (this.pageIndex > 0) {
      this.pageIndex--;
    }
  }

  handleNextPageButton() {
    if ((this.pageIndex + 1) * this.pageSize < this.tableData.length) {
      this.pageIndex++;
    }
  }

  isValidDate(value: any) {
    if(/^\d+$/.test(value))
      return false;
      
    return !isNaN(Date.parse(value));
  }
}
