'use strict';

//import Node from './node';

class BinaryTree {
	constructor() {
    this.root = null;
	}

	insert(data) {

	   var currentNode;

		if (this.root == null) {
			this.root = new Node(data);
		} else {
			currentNode = this.root;
		}
			
		while (currentNode) {
			if (currentNode.data > data) {
				if (currentNode.left != null) 
					currentNode = currentNode.left;
				else {
					currentNode.left = new Node(data);
					break;	
				}
			} else if (currentNode.data < data) {
				if (currentNode.right != null) 
					currentNode = currentNode.right;
				else {
					currentNode.right = new Node(data);
					break;
				}
			} else break;	
		}
		
	}

	contains(data) {

		var currentNode = this.root;
		var soughtFor = false; 

		  while (currentNode != null){
			   if (currentNode.data > data) 
			        currentNode = currentNode.left; 
			   else if (currentNode.data < data) 
			        currentNode = currentNode.right;
			   else if (currentNode.data == data ){ 
				    soughtFor = true;
				    break;
			   }
		  }
		  
		return soughtFor;

	}

	remove(data) {





	}

	size() {

       var counter = 0;
       if (this.root)
            sizeOfTree(this.root);

        function sizeOfTree(currentNode) {
            if (currentNode)
                counter++;
            if (currentNode.left)
                sizeOfTree(currentNode.left);
            if (currentNode.right)
                sizeOfTree(currentNode.right); 
        }
       
        return counter;

	}

	isEmpty() {
      if (this.root) {
    	return false;
      } else {
    	return true;}

	}
}
