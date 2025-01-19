import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'searchPipe',
    standalone: true
})
export class SearchPipe implements PipeTransform {

    /**
      * трансформ
      * @param list список
      * @param keyGetter получение ключа у айтема списка, необязателен
      */
    public transform<T>(list: T[], value: string, keyGetter: (value: T) => string = (value: T) => String(value)): T[] {
        return list.filter(i => keyGetter(i).toLowerCase().includes(value.toLowerCase()));
    }
}