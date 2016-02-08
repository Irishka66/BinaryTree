'use strict';

//import Node from './node';

class BinaryTree {
	constructor() {
    this.root = null;
	}

	insert(data) {

	  // if (this.root === null) {
   //         this.root = new Node (data, null, null);
   //         return;
	  //  }

	   
              var currentNode = this.root;

	          function insertData(nodeData){
	              if (!currentNode){
	              currentNode = new Node (nodeData);
	              return; 
	              } else {
	                    if (currentNode.data > nodeData){
	                         currentNode = currentNode.left;
	                         insertData(nodeData);
	                    } else {
	                          if (currentNode.data < nodeData){
	                               currentNode = currentNode.right;
	                               insertData(nodeData);
	                          }else {
	                              return; 
	                          }
	                    }
	              }
	            }

	    insertData(data);
	    return; // надо ли писать ретурн?

	}

	contains(data) {

	     var currentNode = this.root;
	        function containsData(nodeData){
	            if (currentNode.data == nodeData){
	              return true;
	            } else {
	                  if (currentNode.data > nodeData){
	                       currentNode = currentNode.left;
	                       containsData(nodeData);
	                  } else {
	                        if (currentNode.data < nodeData){
	                           currentNode = currentNode.right;
	                           containsData(nodeData);
	                        } else {
	                              return false;
	                        }
	                  }
	            }
	        }
	     
	     return containsData(data);

	}

	remove(data) {



	}

	size() {

      var currentNode = this.root;
      var counter = 0;

	      function sizeData(currentNode){
	         if (currentNode.data){
	         	     counter++;
	         }	     
	         if (currentNode.left.data){    
     	             sizeData(currentNode.left);
	         } 
	         if (currentNode.right.data){    
	                 sizeData(currentNode.left);
	         }
           return counter;
	      }
    
      return sizeData(currentNode);

	}

	isEmpty() {
      if (this.root) {
    	return false;
      } else {
    	return true;}

	}
}
