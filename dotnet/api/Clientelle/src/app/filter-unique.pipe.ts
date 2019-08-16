import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterUnique'
})
export class FilterUniquePipe implements PipeTransform {
  uniqBy = (arr, predicate) => {
    const cb = typeof predicate === 'function' ? predicate : (o) => o[predicate];
    return [...arr.reduce((map, item) => {
      const key = (item === null || item === undefined) ?
        item : cb(item);
      map.has(key) || map.set(key, item);
      return map;
    }, new Map()).values()];
  };
  transform(value: any, key?: string): any {
    if (value !== undefined && value !== null) {
      return this.uniqBy(value, key);
    }
    return value;
  }
}