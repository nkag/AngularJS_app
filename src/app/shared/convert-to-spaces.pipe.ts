import {Pipe, PipeTransform} from '@angular/core';

@Pipe({

	name: 'convertToSpaces'
})

//Here, value= product.productCode i.e., gdn-0011 and as a parameter for the character variable, we pass the value that we want to replace, here it is -
export class ConvertToSpacesPipe implements PipeTransform{

transform(value:string, character:string): string{

	return value.replace(character, ' '); //the - in gdn-0011 is replaced with a single whitespace. 
	

}
}