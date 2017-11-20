//Code By Shawn O'Grady

/*
In trying to learn JS I am trying to implement some common data structures

This is my attempt at a singly linked list queue
Values in the queue will be of string type
End goal is to have user enter prompts (in main function) in order to perform the following functions:
  1. enqueue a value
  2. dequeue a value
  3. print the entire queue
  4. close the program

*/

//using strict node for safety
"use strict";

//Node for a singly linked list:

function Node(){

  var value, nextNode;

  //a constructor:
  function createNode(input){
    this.value=input;
  }

  //function to set the next node value:
  function doSetNextNode(newNode){
    this.nextNode=newNode;
  }

  //function to return next node:
  /*
  //I actually don't think this function is neccesary
  function doGetNextNode(){
    //if(this.nextNode.value!=null){
      //next node is not null
      return this.nextNode;
    //}

    else{
      //signifies end of queue for print function
      return "end of queue";
    }

  }
  */

  var NodeAPI={
    makeNode:createNode,
    setNextNode:doSetNextNode,
    //getNextNode:doGetNextNode
  };
  return NodeAPI;
}


//sll Queue:
function sllQueue(){

  var head=Node();
  var tail=Node();
  head.setNextNode(tail);
  //enqueue function:
  function doEnqueue(input){
    var tmp= Node(); //create new node with specified value
    tmp.makeNode(input);
    console.log(tmp.value + " was enqueued");

    if(tail.value!=null){
      //there are things in the list;
      tail.setNextNode(tmp);
      tail=tmp;
    }else{
      //list is empty
      head=tmp;
      tail=tmp;
    }

  }

  //dequeue function:
  /*
  function doDequeue(){
    if(this.head.value!=null){
      //there are things in the list;

    }else{
      //list is empty
    }
  }
    */

    //print queue function:

  function doPrint(){
    if(head.value!=null){
      //there are things in the list
      var tmp=head;
      console.log(tmp.value); //print value
      while(tmp!=tail){
        tmp=tmp.nextNode;
        console.log(tmp.value); //print value
      }
    }else{
      //list is empty
      alert("queue is empty");
    }
  }

  var publicAPI={
    enqueue:doEnqueue,
    print:doPrint
  };
  return publicAPI;
}

//testing basic functions:
var q=sllQueue();
q.enqueue("hi");
q.enqueue("hey");
q.enqueue("hello");
q.print();



//main function:
/*
function main(){
  //curently just test code
  var choice= prompt("Would you like to continue? (1 for yes, 0 for no)");
  do{
    choice=prompt("Would you like to continue? (1 for yes, 0 for no)");
  }while(choice!=0)
}
main();
*/
