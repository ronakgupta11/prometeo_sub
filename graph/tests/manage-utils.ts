import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  OwnershipTransferred,
  productCreated,
  studentCreated,
  studentVerified,
  tokenTransfer
} from "../generated/Manage/Manage"

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createproductCreatedEvent(
  imageUrl: string,
  name: string,
  price: BigInt
): productCreated {
  let productCreatedEvent = changetype<productCreated>(newMockEvent())

  productCreatedEvent.parameters = new Array()

  productCreatedEvent.parameters.push(
    new ethereum.EventParam("imageUrl", ethereum.Value.fromString(imageUrl))
  )
  productCreatedEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  productCreatedEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )

  return productCreatedEvent
}

export function createstudentCreatedEvent(
  batch: BigInt,
  studentId: string,
  name: string,
  studentAdd: Address
): studentCreated {
  let studentCreatedEvent = changetype<studentCreated>(newMockEvent())

  studentCreatedEvent.parameters = new Array()

  studentCreatedEvent.parameters.push(
    new ethereum.EventParam("batch", ethereum.Value.fromUnsignedBigInt(batch))
  )
  studentCreatedEvent.parameters.push(
    new ethereum.EventParam("studentId", ethereum.Value.fromString(studentId))
  )
  studentCreatedEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  studentCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "studentAdd",
      ethereum.Value.fromAddress(studentAdd)
    )
  )

  return studentCreatedEvent
}

export function createstudentVerifiedEvent(
  batch: BigInt,
  studentId: string,
  name: string,
  verifyStatus: boolean
): studentVerified {
  let studentVerifiedEvent = changetype<studentVerified>(newMockEvent())

  studentVerifiedEvent.parameters = new Array()

  studentVerifiedEvent.parameters.push(
    new ethereum.EventParam("batch", ethereum.Value.fromUnsignedBigInt(batch))
  )
  studentVerifiedEvent.parameters.push(
    new ethereum.EventParam("studentId", ethereum.Value.fromString(studentId))
  )
  studentVerifiedEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  studentVerifiedEvent.parameters.push(
    new ethereum.EventParam(
      "verifyStatus",
      ethereum.Value.fromBoolean(verifyStatus)
    )
  )

  return studentVerifiedEvent
}

export function createtokenTransferEvent(
  sender: Address,
  reciever: Address,
  amount: BigInt
): tokenTransfer {
  let tokenTransferEvent = changetype<tokenTransfer>(newMockEvent())

  tokenTransferEvent.parameters = new Array()

  tokenTransferEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  tokenTransferEvent.parameters.push(
    new ethereum.EventParam("reciever", ethereum.Value.fromAddress(reciever))
  )
  tokenTransferEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return tokenTransferEvent
}
