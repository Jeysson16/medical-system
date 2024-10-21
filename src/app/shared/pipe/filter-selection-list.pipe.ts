import { Pipe, PipeTransform } from "@angular/core";
import { GAEstructura } from "@shared/models/IGAEstructura";

@Pipe({
    name: "filterSelectionList"
})
export class FilterSelectionListPipe implements PipeTransform {
    transform(items: any[], searchText: string, nameGeneric: string): any[] {
        if (!items) return [];
        if (!searchText) return items;
        searchText = searchText.toLowerCase();
        return items.filter(data => data[nameGeneric].toLowerCase().includes(searchText));
    }
}
