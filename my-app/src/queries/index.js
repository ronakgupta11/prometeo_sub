export function FETCH_CREATED_PRODUCT() {
    return ` query{
          productCreateds{
            id
            imageUrl
            name
            price
          }
      }`;
  }
  export function FETCH_CREATED_STUDENT() {
    return ` query{
        studentCreateds{
            id
            batch
            name
            studentId
            studentAdd
          }
      }`;
    }
      export function FETCH_TRANSACTIONS() {
        return ` query{
            tokenTransfers{
                id
                sender
                reciever
                amount
                transactionHash
              }
          }`;

  }