import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IProduct } from "../interfaces/product.interface";

@Injectable()
export class ProductRequestService {

    protected readonly httpClient: HttpClient = inject(HttpClient);
    private readonly _url: string = 'https://api.escuelajs.co/api/v1/products';

    public getProductList(): Observable<IProduct[]> {
        return this.httpClient.get<IProduct[]>(this._url);
    }

}