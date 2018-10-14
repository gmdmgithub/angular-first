import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    if(!value)
      return null;
    let word = value.split(' ');
   

    for(var i =0; i<word.length;i++){
      if(i>0 && this.isPreposition(word[i]))
        word[i] = word[i].toLowerCase();
      else
        word[i]= this.toTitleCase(word[i]); 
    }
    return word.join(' ');
  }

  private isPreposition(word:string):boolean{
    let prepositions = ['of','the','on','in','at'];//array of prepositions
    return prepositions.includes(word.toLowerCase());
  }
  private toTitleCase(word:string):string{
    return word.substr(0,1).toUpperCase() +word.substr(1).toLowerCase();
  }

}
