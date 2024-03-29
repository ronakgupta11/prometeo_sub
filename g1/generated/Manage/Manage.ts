// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class productCreated extends ethereum.Event {
  get params(): productCreated__Params {
    return new productCreated__Params(this);
  }
}

export class productCreated__Params {
  _event: productCreated;

  constructor(event: productCreated) {
    this._event = event;
  }

  get imageUrl(): string {
    return this._event.parameters[0].value.toString();
  }

  get name(): string {
    return this._event.parameters[1].value.toString();
  }

  get price(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class studentCreated extends ethereum.Event {
  get params(): studentCreated__Params {
    return new studentCreated__Params(this);
  }
}

export class studentCreated__Params {
  _event: studentCreated;

  constructor(event: studentCreated) {
    this._event = event;
  }

  get batch(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get studentId(): string {
    return this._event.parameters[1].value.toString();
  }

  get name(): string {
    return this._event.parameters[2].value.toString();
  }

  get image(): string {
    return this._event.parameters[3].value.toString();
  }

  get studentAdd(): Address {
    return this._event.parameters[4].value.toAddress();
  }
}

export class studentVerified extends ethereum.Event {
  get params(): studentVerified__Params {
    return new studentVerified__Params(this);
  }
}

export class studentVerified__Params {
  _event: studentVerified;

  constructor(event: studentVerified) {
    this._event = event;
  }

  get batch(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get studentId(): string {
    return this._event.parameters[1].value.toString();
  }

  get name(): string {
    return this._event.parameters[2].value.toString();
  }

  get verifyStatus(): boolean {
    return this._event.parameters[3].value.toBoolean();
  }
}

export class tokenTransfer extends ethereum.Event {
  get params(): tokenTransfer__Params {
    return new tokenTransfer__Params(this);
  }
}

export class tokenTransfer__Params {
  _event: tokenTransfer;

  constructor(event: tokenTransfer) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get reciever(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Manage__getDataResultValue0Struct extends ethereum.Tuple {
  get image(): string {
    return this[0].toString();
  }

  get studentId(): string {
    return this[1].toString();
  }

  get name(): string {
    return this[2].toString();
  }

  get batch(): BigInt {
    return this[3].toBigInt();
  }

  get balance(): BigInt {
    return this[4].toBigInt();
  }

  get verified(): boolean {
    return this[5].toBoolean();
  }
}

export class Manage__productsResult {
  value0: BigInt;
  value1: string;
  value2: string;
  value3: BigInt;

  constructor(value0: BigInt, value1: string, value2: string, value3: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromString(this.value1));
    map.set("value2", ethereum.Value.fromString(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    return map;
  }

  getProductId(): BigInt {
    return this.value0;
  }

  getImageUrl(): string {
    return this.value1;
  }

  getName(): string {
    return this.value2;
  }

  getPrice(): BigInt {
    return this.value3;
  }
}

export class Manage__studentAddressToDetailResult {
  value0: string;
  value1: string;
  value2: string;
  value3: BigInt;
  value4: BigInt;
  value5: boolean;

  constructor(
    value0: string,
    value1: string,
    value2: string,
    value3: BigInt,
    value4: BigInt,
    value5: boolean
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromString(this.value0));
    map.set("value1", ethereum.Value.fromString(this.value1));
    map.set("value2", ethereum.Value.fromString(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromBoolean(this.value5));
    return map;
  }

  getImage(): string {
    return this.value0;
  }

  getStudentId(): string {
    return this.value1;
  }

  getName(): string {
    return this.value2;
  }

  getBatch(): BigInt {
    return this.value3;
  }

  getBalance(): BigInt {
    return this.value4;
  }

  getVerified(): boolean {
    return this.value5;
  }
}

export class Manage extends ethereum.SmartContract {
  static bind(address: Address): Manage {
    return new Manage("Manage", address);
  }

  getData(_studentAddress: Address): Manage__getDataResultValue0Struct {
    let result = super.call(
      "getData",
      "getData(address):((string,string,string,uint256,uint256,bool))",
      [ethereum.Value.fromAddress(_studentAddress)]
    );

    return changetype<Manage__getDataResultValue0Struct>(result[0].toTuple());
  }

  try_getData(
    _studentAddress: Address
  ): ethereum.CallResult<Manage__getDataResultValue0Struct> {
    let result = super.tryCall(
      "getData",
      "getData(address):((string,string,string,uint256,uint256,bool))",
      [ethereum.Value.fromAddress(_studentAddress)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<Manage__getDataResultValue0Struct>(value[0].toTuple())
    );
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  products(param0: BigInt): Manage__productsResult {
    let result = super.call(
      "products",
      "products(uint256):(uint256,string,string,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new Manage__productsResult(
      result[0].toBigInt(),
      result[1].toString(),
      result[2].toString(),
      result[3].toBigInt()
    );
  }

  try_products(param0: BigInt): ethereum.CallResult<Manage__productsResult> {
    let result = super.tryCall(
      "products",
      "products(uint256):(uint256,string,string,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Manage__productsResult(
        value[0].toBigInt(),
        value[1].toString(),
        value[2].toString(),
        value[3].toBigInt()
      )
    );
  }

  studentAddressToDetail(
    param0: Address
  ): Manage__studentAddressToDetailResult {
    let result = super.call(
      "studentAddressToDetail",
      "studentAddressToDetail(address):(string,string,string,uint256,uint256,bool)",
      [ethereum.Value.fromAddress(param0)]
    );

    return new Manage__studentAddressToDetailResult(
      result[0].toString(),
      result[1].toString(),
      result[2].toString(),
      result[3].toBigInt(),
      result[4].toBigInt(),
      result[5].toBoolean()
    );
  }

  try_studentAddressToDetail(
    param0: Address
  ): ethereum.CallResult<Manage__studentAddressToDetailResult> {
    let result = super.tryCall(
      "studentAddressToDetail",
      "studentAddressToDetail(address):(string,string,string,uint256,uint256,bool)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Manage__studentAddressToDetailResult(
        value[0].toString(),
        value[1].toString(),
        value[2].toString(),
        value[3].toBigInt(),
        value[4].toBigInt(),
        value[5].toBoolean()
      )
    );
  }

  tokenAddress(): Address {
    let result = super.call("tokenAddress", "tokenAddress():(address)", []);

    return result[0].toAddress();
  }

  try_tokenAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall("tokenAddress", "tokenAddress():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _tokenAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class BuyMerchCall extends ethereum.Call {
  get inputs(): BuyMerchCall__Inputs {
    return new BuyMerchCall__Inputs(this);
  }

  get outputs(): BuyMerchCall__Outputs {
    return new BuyMerchCall__Outputs(this);
  }
}

export class BuyMerchCall__Inputs {
  _call: BuyMerchCall;

  constructor(call: BuyMerchCall) {
    this._call = call;
  }

  get _price(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class BuyMerchCall__Outputs {
  _call: BuyMerchCall;

  constructor(call: BuyMerchCall) {
    this._call = call;
  }
}

export class CreateStudentCall extends ethereum.Call {
  get inputs(): CreateStudentCall__Inputs {
    return new CreateStudentCall__Inputs(this);
  }

  get outputs(): CreateStudentCall__Outputs {
    return new CreateStudentCall__Outputs(this);
  }
}

export class CreateStudentCall__Inputs {
  _call: CreateStudentCall;

  constructor(call: CreateStudentCall) {
    this._call = call;
  }

  get _image(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _studentId(): string {
    return this._call.inputValues[1].value.toString();
  }

  get _name(): string {
    return this._call.inputValues[2].value.toString();
  }

  get _batch(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class CreateStudentCall__Outputs {
  _call: CreateStudentCall;

  constructor(call: CreateStudentCall) {
    this._call = call;
  }
}

export class ListProductCall extends ethereum.Call {
  get inputs(): ListProductCall__Inputs {
    return new ListProductCall__Inputs(this);
  }

  get outputs(): ListProductCall__Outputs {
    return new ListProductCall__Outputs(this);
  }
}

export class ListProductCall__Inputs {
  _call: ListProductCall;

  constructor(call: ListProductCall) {
    this._call = call;
  }

  get _image(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _name(): string {
    return this._call.inputValues[1].value.toString();
  }

  get _price(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class ListProductCall__Outputs {
  _call: ListProductCall;

  constructor(call: ListProductCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SendTokenToAddressCall extends ethereum.Call {
  get inputs(): SendTokenToAddressCall__Inputs {
    return new SendTokenToAddressCall__Inputs(this);
  }

  get outputs(): SendTokenToAddressCall__Outputs {
    return new SendTokenToAddressCall__Outputs(this);
  }
}

export class SendTokenToAddressCall__Inputs {
  _call: SendTokenToAddressCall;

  constructor(call: SendTokenToAddressCall) {
    this._call = call;
  }

  get _to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class SendTokenToAddressCall__Outputs {
  _call: SendTokenToAddressCall;

  constructor(call: SendTokenToAddressCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class VerifyCall extends ethereum.Call {
  get inputs(): VerifyCall__Inputs {
    return new VerifyCall__Inputs(this);
  }

  get outputs(): VerifyCall__Outputs {
    return new VerifyCall__Outputs(this);
  }
}

export class VerifyCall__Inputs {
  _call: VerifyCall;

  constructor(call: VerifyCall) {
    this._call = call;
  }

  get _studentAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class VerifyCall__Outputs {
  _call: VerifyCall;

  constructor(call: VerifyCall) {
    this._call = call;
  }
}
