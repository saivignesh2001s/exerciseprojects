import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descsortpipe'
})
export class DescsortpipePipe implements PipeTransform {

  transform(value: Array<any>, args:any[]):any{
    const sortfield = args[0];
    const sortDirection = args[1];
    let multiplier = -1;

    if (sortDirection === 'asc'){
      multiplier = 1;
    }

    value.sort((a:any,b:any) => {
      if(a[sortfield]< b[sortfield]){
        return -1* multiplier;
      }else if(a[sortfield]> b[sortfield]){
        return 1*multiplier;
      }else{
        return 0;
      }
    }
    );

    return value;
  }
}
