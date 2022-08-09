import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  public arrayTest = [];
  public arrFiltered = [];
  public searchInput: string;
  public lengthResult: number;

  constructor(public loginService: LoginService) {}

  ngOnInit() {
    this.filterData();
  }

  filterData(): void {
    this.loginService
      .getList()
      .pipe(map((changes) => changes.map((c) => c.payload.doc.data())))
      .subscribe((data) => {
        this.arrayTest = data;
        this.arrFiltered = this.arrayTest;
        console.log(this.arrayTest);
      });
  }

  onChange(target) {
    this.transform(this.arrayTest, target.value);
    if (target.value?.length === 0) {
      this.arrFiltered = this.arrayTest;
    }
    this.searchInput = target.value;
  }
  onBlur(target) {}
  onEnter(event, value) {}
  onClick(textSearch: string) {
    this.arrFiltered = this.arrayTest.filter(({ category }) => {
      return category === textSearch;
    });
    if (textSearch.length === 0) {
      this.arrFiltered = this.arrayTest;
    }
  }
  transform(languages: any[], searchInput: string): any[] {
    if (!searchInput) {
      return languages;
    }
    console.log('jamon:', searchInput.toUpperCase());
    console.log(
      'jamon2:',
      languages.filter((x) => x.name.includes(searchInput.toUpperCase()))
    );

    return (this.arrFiltered = languages.filter((x) =>
      x.name.includes(searchInput)
    ));
  }
}
