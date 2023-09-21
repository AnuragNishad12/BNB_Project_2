// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.9.0;


contract Course {
   
   struct Memo{
   
    string name;
    uint timestamp;
    address from;
   }

   Memo[] memos;
   address payable owner;

   constructor() {
      owner= payable (msg.sender);
   }

   function buyCourse(string memory name) public payable  {
      require(msg.value>0,"Please pay greater than 0 ether");
      owner.transfer(msg.value);
      memos.push(Memo(name,block.timestamp,msg.sender));
   }


function getMemos() public view returns (Memo[] memory) {
   return memos;
}


   
}