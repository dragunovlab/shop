import { Pipe, PipeTransform } from "@angular/core";
import { IProduct } from "../interfaces/product.interface";

@Pipe({
    name: 'search',
    standalone: true
})
export class SearchPipe implements PipeTransform {
    
    public transform(list: IProduct[], search: string): IProduct[] {
        if (!search) {
            return list;
        }

        return list.filter(i => i.title.toLowerCase().includes(search.toLowerCase()));
    }
}