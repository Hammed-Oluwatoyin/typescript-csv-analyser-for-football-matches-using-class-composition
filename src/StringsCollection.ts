import {Sorter } from "./sorter";




export class StringsCollection extends Sorter{
    

    constructor(public collection: string){
        super()
    
    }

    get length(): number{
       return  this.collection.length;
    }

    compare(leftIndex: number , rightIndex: number):boolean {
           
           return this.collection[leftIndex].toLowerCase() > this.collection[rightIndex].toLowerCase();
    }

    swap(leftIndex: number , rightIndex: number): void {
            const characters = this.collection.split('');
            const leftHandValue=characters[leftIndex];
            characters[leftIndex] = characters[rightIndex]
            characters[rightIndex] = leftHandValue;
            
            this.collection = characters.join('');
    }
} 