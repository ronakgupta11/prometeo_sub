import {
  OwnershipTransferred as OwnershipTransferredEvent,
  productCreated as productCreatedEvent,
  studentCreated as studentCreatedEvent,
  studentVerified as studentVerifiedEvent,
  tokenTransfer as tokenTransferEvent
} from "../generated/Manage/Manage"
import {
  OwnershipTransferred,
  productCreated,
  studentCreated,
  studentVerified,
  tokenTransfer
} from "../generated/schema"

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleproductCreated(event: productCreatedEvent): void {
  let entity = new productCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.imageUrl = event.params.imageUrl
  entity.name = event.params.name
  entity.price = event.params.price

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlestudentCreated(event: studentCreatedEvent): void {
  let entity = new studentCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.batch = event.params.batch
  entity.studentId = event.params.studentId
  entity.name = event.params.name
  entity.image = event.params.image
  entity.studentAdd = event.params.studentAdd

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlestudentVerified(event: studentVerifiedEvent): void {
  let entity = new studentVerified(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.batch = event.params.batch
  entity.studentId = event.params.studentId
  entity.name = event.params.name
  entity.verifyStatus = event.params.verifyStatus

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handletokenTransfer(event: tokenTransferEvent): void {
  let entity = new tokenTransfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.sender = event.params.sender
  entity.reciever = event.params.reciever
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
