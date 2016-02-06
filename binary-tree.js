'use strict';


import Node from './node';

/*class Node {
	constructor(data, left, right) {
		this.data = data || null;
		this.left = left || null;
		this.right = right || null;
	}
}*/


class BinaryTree {
	constructor() {
        this.root = null;    
   	}

	insert(data) {
      
      var currentNode = this.root;
      
      (function insertData(data){
      
        if (currentNode == null){
        currentNode.data = data;
      	currentNode.left = null;
      	currentNode.right = null;
        } else {
      	  if (currentNode.data > data){
               
               currentNode = currentNode.left;
               insertData(data);

      	  } else {
      	  	if (currentNode.data < data){
      	     
      	     currentNode = currentNode.right;
               insertData(data);

      	  	} else {
      	  		alert ("Node with " + data + " exists")
      	  	}
      	  }
        }
      }())

	}

	contains(data) {

     var currentNode = this.root;
      
      (function containsData(data){
      
        if (currentNode.data == data){
         	return true;
        } else {
      	  if (currentNode.data > data){
               
               currentNode = currentNode.left;
               containsData(data);

      	  } else {
      	  	if (currentNode.data < data){
      	     
      	     currentNode = currentNode.right;
               containsData(data);

      	  	} else {
      	  		alert ("Node with " + data + " doesn't exist")
      	  	}
      	  }
        }
      }()) 


	}

	remove(data) {

	}

	size() {
      var currentNode = this.root;
      var counter = 0;

      (function sizeData(){
      
         if (currentNode.data){
         	     counter++;
         } 
         if (currentNode.left.data){    
               currentNode = currentNode.left;
               sizeData();
         } 
         if (currentNode.right.data){    
               currentNode = currentNode.right;
               sizeData();
         } 

         return counter;
    	  
      }()) 




	}

	isEmpty() {
 
    if (this.root) {
    	return true;
    }

	}
}
