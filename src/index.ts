import {NumbersCollection} from './NumbersCollection';
import {StringsCollection} from './StringsCollection';
import {LinkedListCollection} from './LinkedListCollection';
import {Sorter} from './sorter';

const firstNumbersCollection = new NumbersCollection([6,13,-4, 8, -8]);
firstNumbersCollection.sort();
console.log(firstNumbersCollection.data)


 const firstStringsCollection = new StringsCollection('hammed');
// const SorterString = new Sorter(firstStringsCollection);
firstStringsCollection.sort();
console.log(firstStringsCollection.collection);

const firstLinkedListCollection = new LinkedListCollection();
firstLinkedListCollection.addNode(4);
firstLinkedListCollection.addNode(2);
firstLinkedListCollection.addNode(-8);
firstLinkedListCollection.addNode(9);
firstLinkedListCollection.addNode(-3);

 
// const sorterLinkedListCollection = new Sorter (firstLinkedListCollection);
 firstLinkedListCollection.sort();
 firstLinkedListCollection.print(); 