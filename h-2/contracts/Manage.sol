
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

// 0x391Ee177255844e97fB7455d425DD0674d2CDe8A
// https://mumbai.polygonscan.com/address/0x391Ee177255844e97fB7455d425DD0674d2CDe8A#code


contract Manage is Ownable{
    IERC20 public tokenAddress;
    address ownerAdd;
    uint id = 0;

    constructor(IERC20 _tokenAddress){
        tokenAddress = _tokenAddress;
        ownerAdd = msg.sender;

    }
    

    event studentCreated(uint batch,string  studentId, string name, address studentAdd); //created by student itself
    // event studentDeleted();  // deleted by admin
    event studentVerified(uint batch, string studentId, string name, bool verifyStatus); // verified by admin
    // event 
    event tokenTransfer(address sender, address reciever, uint amount);
    event productCreated(string imageUrl,string name,uint price);


    struct Student{
        string image;
        string studentId;
        string name;
        uint batch;
        uint balance;
        bool verified;

    }
    
    struct Product{
        uint productId;
        string imageUrl;
        string name;
        uint price;

    }
    Product[] public products;

    mapping (address => Student)  public studentAddressToDetail;



    function verify(address _studentAddress) public onlyOwner{
        Student memory student = studentAddressToDetail[_studentAddress];
        student.verified = true;
        emit studentVerified(student.batch,student.studentId,student.name,true);
    }

    function createStudent(string memory _image, string memory _studentId,string memory _name,uint _batch) public{
        studentAddressToDetail[msg.sender] = Student(_image,_studentId,_name,_batch,0,false);
        emit studentCreated(_batch,_studentId,_name,msg.sender);

    }

    function sendTokenToAddress(address _to, uint _amount) public{
        uint sendToken;

        if(msg.sender == ownerAdd){
            sendToken = _amount;
            (bool sent) =  tokenAddress.transferFrom(msg.sender,_to, sendToken);
            require(sent, "Transfer failed");
            studentAddressToDetail[_to].balance+=sendToken;
        }
        else{
         if(studentAddressToDetail[msg.sender].batch == studentAddressToDetail[_to].batch){
            sendToken = _amount;


        }
        else {
            sendToken = (750*_amount)/1000;
        }
        
        require(studentAddressToDetail[msg.sender].balance >= sendToken,"insufficient balance to send");
        // Transfer the tokens
        require(tokenAddress.transferFrom(msg.sender,_to, sendToken), "Transfer failed");
        studentAddressToDetail[_to].balance+=sendToken;
        studentAddressToDetail[msg.sender].balance-= sendToken;

        }

        emit tokenTransfer(msg.sender,_to,_amount);
    }

    function buyMerch(uint _price) public{

        // SafeERC20 token = SafeERC20(tokenAddress);
        require(studentAddressToDetail[msg.sender].balance>=_price,"insufficient balance");
        (bool sent) =  tokenAddress.transferFrom(msg.sender,ownerAdd, _price);
        require(sent, "Transfer failed");
        studentAddressToDetail[msg.sender].balance-=_price;
    }

    function listProduct(string memory _image, string memory _name,uint _price) public{
        uint productId = id;
        products.push(Product(productId,_image,_name,_price));
        id++;

        //emit event productCreated
        emit productCreated(_image,_name,_price);
    }

    function getData(address _studentAddress) public view returns(Student memory){
        Student memory student = studentAddressToDetail[_studentAddress];
        return student;
    }




}