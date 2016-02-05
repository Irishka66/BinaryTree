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
        //var bt = new BinaryTree();
   	}

	insert(data) {
      
      var a = this.root;
      
      function insertData(data){
      
      if (a == null){
       	a.data = data;
    	a.left = null;
    	a.right = null;
      } else {
    	  if (a.data > data){
             
             a = a.left;
             insertData(data);

    	  } else {
    	  	if (a.data < data){
    	     
    	     a = a.right;
             insertData(data);

    	  	} else {
    	  		alert ("Узел со значением " + data + " уже существует")
    	  	}
    	  }
      }
      }()

	}

	contains(data) {

     var a = this.root;
      
      function containsData(data){
      
      if (a.data == data){
       	return true;
      } else {
    	  if (a.data > data){
             
             a = a.left;
             containsData(data);

    	  } else {
    	  	if (a.data < data){
    	     
    	     a = a.right;
             containsData(data);

    	  	} else {
    	  		alert ("Узел со значением " + data + " не существует")
    	  	}
    	  }
      }
      }() 


	}

	remove(data) {

	}

	size() {
      var a = this.root;
      var k = 0;

      function sizeData(){
      
       if (a.data){
       	     k++;
       } 
       if (a.left.data){    
             a = a.left;
             sizeData();
       } 
       if (a.right.data){    
             a = a.right;
             sizeData();
       } 

       return k;
    	  
      }() 




	}

	isEmpty() {
 
    if (this.root) {
    	return true;
    }

	}
}
