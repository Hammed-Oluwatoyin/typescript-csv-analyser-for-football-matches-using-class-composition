import {Sorter} from "./sorter";


class Node {
 next : Node | null = null;
    constructor(public data: number){}
}


export class LinkedListCollection  extends Sorter{

    

    head : Node | null = null;

   addNode (data: number): void {
      let  node = new Node(data);

        if (!this.head) {
            this.head = node; 
            return
        }
        let tail = this.head;
        while(tail.next){
            tail = tail.next;
        }    
        
        tail.next = node;
   }     

  get length (): number {

    let counter = 0;
       if (!this.head){
            return counter;

       }

       let node = this.head ;
       counter = 1;
       while(node.next) {
           counter++;
           node = node.next
       }

       return counter;
   }

   at ( index : number): Node {

    

    if(!this.head){
        throw new Error("the value u looking for is not available")
    }
    let counter = 0;
    let node : null | Node = this.head;
    while (node) {
        if(index === counter){
            return node;
        }
        counter++
        node = node.next;


    }
    throw new Error("Index your are looking of is greater than the size");
   }

   compare (leftIndex: number , rightIndex: number): boolean{
       if (!this.head){
           throw new Error("the list is empty");
       }
        return this.at(leftIndex).data > this.at(rightIndex).data;


   }

   swap( leftIndex: number , rightIndex: number) :void {
            if(this.compare(leftIndex, rightIndex)){
                let leftNode = this.at(leftIndex);
                let rightNode = this.at(rightIndex);

                let leftHandValue = rightNode.data;
                
                rightNode.data = leftNode.data;
                leftNode.data = leftHandValue;
                

                

            }
   }


   print() : void{

    if (!this.head){
        return
    }

    let node :Node|null = this.head;

    while(node){
        
        console.log(node.data);
        node = node.next;

    }
    

   }


    
}