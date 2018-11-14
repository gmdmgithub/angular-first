import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'summary'
})
export class SummaryPipe implements PipeTransform {

    // transform (value: sany, args?:any){
    transform (value: string, limit?: number, uppercase?: boolean) {
        if (!value) {
            return null;
        }
        if (!limit) {
            limit = 50;
        }

        if (uppercase) {
            value = value.toUpperCase();
        }

        return value.length > limit ? value.substr(0, limit) + '...' : value;
    }
}
