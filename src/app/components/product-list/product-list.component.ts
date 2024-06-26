import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  product: Product[] = [];

  id: number = 1;

  constructor(private productService: ProductService) { }


  ngOnInit(): void {

    this.productList();

  }



  productList() {

    this.productService.getProductList().subscribe(

      data => {
        this.product = data
      }
    )
  }


  getAutoIncreamentId(): number {

    return this.id++;
  }

}
