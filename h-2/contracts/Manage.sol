// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/SafeERC20.sol";



contract Manage{
    address public tokenAddress;
    address owner;

    constructor(address _tokenAddress){
        tokenAddress = _tokenAddress;
        owner = msg.sender;

    }
    

    event studentCreated(uint batch,string  studentId, string name, address studentAdd); //created by student itself
    // event studentDeleted();  // deleted by admin
    event studentVerified(uint batch, string studentId, string name, bool verifyStatus); // verified by admin
    // event 
    event tokenTransfer(address sender, address reciever, uint amount);
    event productCreated(uint productId,string imageUrl,string name,uint price);


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

    mapping (address studentAddress => Student studentData)  public studentAddressToDetail;



    function verify(address _studentAddress) onlyOwner{
        studentAddressToDetail[_studentAddress].verified = true;
        emit studentVerified(_batch,_studentId,_name,true);
    }

    function createStudent(string memory _image, string memory _studentId,string memory _name,uint _batch) public{
        studentAddressToDetail[msg.sender] = Student(_image,_studentId,_name,_batch,0,false);
        emit studentCreated(_batch,_studentId,_name,msg.sender);

    }

    function sendToken(address _to, uint _amount) public{
                // Get the token contract
        ERC20 token = ERC20(tokenAddress);


        if ((msg.sender == owner) ){
            uint sendToken = _amount;
            require(token.transfer(_to, sendToken), "Transfer failed");
            studentAddressToDetail[_to].balance+=sendToken;
        }
        else{
         if(studentAddressToDetail[msg.sender].batch == studentAddressToDetail[_to].batch){
            uint sendToken = _amount;


        }
        else {
            uint sendToken = (750*_amount)/1000;
        }
        
        require(studentAddressToDetail[msg.sender].balance >= sendToken,"insufficient balance to send");
        // Transfer the tokens
        require(token.transfer(_to, sendToken), "Transfer failed");
        studentAddressToDetail[_to].balance+=sendToken;
        studentAddressToDetail[msg.sender]-= sendToken;

        }

        emit tokenTransfer(msg.sender,_to,_amount)
    }

    function buyMerch(uint _price, ){
        ERC20 token = ERC20(tokenAddress);
        require(studentAddressToDetail[msg.sender].balance>=_price,"insufficient balance");
        require(sendToken(owner,_price),"failed to send token");
        studentAddressToDetail[msg.sender]-=_price;
    }

    function listProduct(string memory _image, string memory _name,uint _price) public{
        uint productId = id;
        products.push(Product(productId,_image,_name,_category,_price,_token,_quantity,msg.sender));
        id++;

        //emit event productCreated
        emit productCreated(_image,_name,_price);
    }





}