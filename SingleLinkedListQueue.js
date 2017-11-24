//Code By Shawn O'Grady

/*
+In trying to learn JS I am trying to implement some common data structures

+This is my attempt at a singly linked list queue
+Values in the queue will be of string type
+End goal is to have user enter prompts (in main function) in order to perform the following functions:
  1. enqueue a value
  2. dequeue a value
  3. print the entire queue
  4. close the program

+I currently believe I can enqueue values, print values, and dequeue
  -dequeue function feels like it could be done better
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

  var head=Node();  //node that will be dequeued first
  var tail=Node();  //node that will be dequeued last
  //head.setNextNode(tail);
  //enqueue function:
  function doEnqueue(input){
    var tmp= Node(); //create new node with specified value
    tmp.makeNode(input);
    //console.log(tmp.value + " was enqueued");
    alert(tmp.value + " was enqueued");

    if(tail.value!=null){
      //there are things in the queue;
      tail.setNextNode(tmp);
      tail=tmp;
    }else{
      //list is empty
      head=tmp;
      tail=tmp;
    }

  }

  //dequeue function:

  function doDequeue(){
    if(head.value!=null){
      //there are things in the list;
      var tmp=head;
      if(head!=tail){
        //we're not at the end of the queue
        head=head.nextNode;
      }

      else{
        //we're dequeueing the last item in the queue
        head=Node();
        tail=Node();
        //head.setNextNode(tail);
      }

      //var tmpValue=tmp.value;
      alert(tmp.value+" was dequeued");
    }else{
      //list is empty
      alert("queue is empty, cannot dequeue another item");
    }
  }


    //print queue function:

  function doPrint(){
    if(head.value!=null){
      //there are things in the list
      var queueString="Queue contains(in order): \n";  //will hold entirety of queue as single string for simple printing

      var tmp=head;
      queueString=queueString+tmp.value+"\r"; //add value to the string

      //traverse queue, head to tail, adding values to string
      while(tmp!=tail){
        tmp=tmp.nextNode;
        queueString=queueString+tmp.value+"\r"; //add value to the string
      }
      alert(queueString); //print the entirety of the queue as single string
    }else{
      //list is empty
      alert("queue is empty");
    }
  }

  var publicAPI={
    enqueue:doEnqueue,
    print:doPrint,
    dequeue:doDequeue
  };
  return publicAPI;
}
/*
//testing basic functions:
var q=sllQueue();
q.print();

//testing if properly enqueues:
q.enqueue("hi");
q.enqueue("hey");
q.enqueue("hello");

q.print();  //"hi hey hello"

//testing if properly dequeues to empty:
q.dequeue();  //"hi"
q.print();  //"hey hello"
q.dequeue();  //"hey"
q.dequeue();  //"hello"

q.print();  //should say "queue is empty"
q.dequeue();  //should say "queue is empty, cannot dequeue another item"

//testing if properly enqueues after being fully dequeued:
q.enqueue("again");
q.enqueue("another");
q.enqueue("one more");
q.print(); //"again another one more"

//testing if properly dequeues after being emptied + refilled:
q.dequeue();  //"again"
q.print();  //"another one more"
q.dequeue();  //"another"
q.dequeue();  //"one more"

q.print();  //should say "queue is empty"
q.dequeue();  //should say "queue is empty, cannot dequeue another item"
*/

//main function:
function main(){
  var q=sllQueue();
  var choice;
  do{
    choice=prompt("What would you like to do? \r 1. enqueue a value \r 2. dequeue a value \r 3. print the queue \r 4. terminate program");
    if(choice==1){
      //enqueue a value
      var userInput=prompt("enter a value to enqueue");
      q.enqueue(userInput);
    }
    else if(choice==2){
      //dequeue a value
      q.dequeue();
    }
    else if(choice==3){
      //print the queue
      q.print();
    }
    else if (choice==4||choice==null){
      //user wants to terminate or hit "cancel" button
      alert("thank you for using this program");
    }
    else{
      //invalid choice
      alert("please enter a valid choice");
    }
  }while(choice!=4 && choice!=null)
}
main();




