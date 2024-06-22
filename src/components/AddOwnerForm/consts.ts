import { Address, Builder, Cell, Dictionary, DictionaryValue, Slice, TupleBuilder, TupleReader, beginCell } from "@ton/core";
import { SafeOperation, SafeOperations } from "src/common/api/ton/types";

export type SafeOperationTransfer = {
    $$type: 'SafeOperationTransfer';
    to: Address;
    value: bigint;
    mode: bigint;
    bounce: boolean;
    body: Cell | null;
}

export type SafeParameters = {
    $$type: 'SafeParameters';
    timeout: bigint;
    requestPrice: bigint;
    timelock: bigint;
}

export type SafeOperationRemove = {
    $$type: 'SafeOperationRemove';
    owner: Address;
}

export type SafeOperationUpdateParameters = {
    $$type: 'SafeOperationUpdateParameters';
    parameters: SafeParameters;
}

export type SafeOperationAdd = {
    $$type: 'SafeOperationAdd';
    owner: Address;
}

export type SafeOperationReplace = {
    $$type: 'SafeOperationReplace';
    old: Address;
    new: Address;
}

export function storeSafeOperationReplace(src: SafeOperationReplace) {
  return (builder: Builder) => {
    const b_0 = builder;
    b_0.storeAddress(src.old);
    b_0.storeAddress(src.new);
  };
}

export function loadSafeOperationReplace(slice: Slice) {
  const sc_0 = slice;
  const _old = sc_0.loadAddress();
  const _new = sc_0.loadAddress();
  return { $$type: 'SafeOperationReplace' as const, old: _old, new: _new };
}

export function storeSafeOperationAdd(src: SafeOperationAdd) {
  return (builder: Builder) => {
    const b_0 = builder;
    b_0.storeAddress(src.owner);
  };
}

export function storeSafeOperationRemove(src: SafeOperationRemove) {
  return (builder: Builder) => {
    const b_0 = builder;
    b_0.storeAddress(src.owner);
  };
}

export function loadSafeOperationRemove(slice: Slice) {
  const sc_0 = slice;
  const _owner = sc_0.loadAddress();
  return { $$type: 'SafeOperationRemove' as const, owner: _owner };
}

function loadTupleSafeOperationRemove(source: TupleReader) {
  const _owner = source.readAddress();
  return { $$type: 'SafeOperationRemove' as const, owner: _owner };
}

export function loadSafeOperationAdd(slice: Slice) {
  const sc_0 = slice;
  const _owner = sc_0.loadAddress();
  return { $$type: 'SafeOperationAdd' as const, owner: _owner };
}

function loadTupleSafeOperationAdd(source: TupleReader) {
  const _owner = source.readAddress();
  return { $$type: 'SafeOperationAdd' as const, owner: _owner };
}

function storeTupleSafeOperationAdd(source: SafeOperationAdd) {
  const builder = new TupleBuilder();
  builder.writeAddress(source.owner);
  return builder.build();
}

function storeTupleSafeOperationRemove(source: SafeOperationRemove) {
  const builder = new TupleBuilder();
  builder.writeAddress(source.owner);
  return builder.build();
}

export function loadSafeParameters(slice: Slice) {
  const sc_0 = slice;
  const _timeout = sc_0.loadUintBig(32);
  const _requestPrice = sc_0.loadCoins();
  const _timelock = sc_0.loadUintBig(32);
  return { $$type: 'SafeParameters' as const, timeout: _timeout, requestPrice: _requestPrice, timelock: _timelock };
}

function loadTupleSafeParameters(source: TupleReader) {
  const _timeout = source.readBigNumber();
  const _requestPrice = source.readBigNumber();
  const _timelock = source.readBigNumber();
  return { $$type: 'SafeParameters' as const, timeout: _timeout, requestPrice: _requestPrice, timelock: _timelock };
}

function storeTupleSafeParameters(source: SafeParameters) {
  const builder = new TupleBuilder();
  builder.writeNumber(source.timeout);
  builder.writeNumber(source.requestPrice);
  builder.writeNumber(source.timelock);
  return builder.build();
}

export function loadSafeOperationUpdateParameters(slice: Slice) {
  const sc_0 = slice;
  const _parameters = loadSafeParameters(sc_0);
  return { $$type: 'SafeOperationUpdateParameters' as const, parameters: _parameters };
}

function loadTupleSafeOperationUpdateParameters(source: TupleReader) {
  const _parameters = loadTupleSafeParameters(source.readTuple());
  return { $$type: 'SafeOperationUpdateParameters' as const, parameters: _parameters };
}

function storeTupleSafeOperationUpdateParameters(source: SafeOperationUpdateParameters) {
  const builder = new TupleBuilder();
  builder.writeTuple(storeTupleSafeParameters(source.parameters));
  return builder.build();
}

export function loadSafeOperationTransfer(slice: Slice) {
  const sc_0 = slice;
  const _to = sc_0.loadAddress();
  const _value = sc_0.loadCoins();
  const _mode = sc_0.loadUintBig(8);
  const _bounce = sc_0.loadBit();
  const _body = sc_0.loadBit() ? sc_0.loadRef() : null;
  return { $$type: 'SafeOperationTransfer' as const, to: _to, value: _value, mode: _mode, bounce: _bounce, body: _body };
}

function loadTupleSafeOperationTransfer(source: TupleReader) {
  const _to = source.readAddress();
  const _value = source.readBigNumber();
  const _mode = source.readBigNumber();
  const _bounce = source.readBoolean();
  const _body = source.readCellOpt();
  return { $$type: 'SafeOperationTransfer' as const, to: _to, value: _value, mode: _mode, bounce: _bounce, body: _body };
}

function storeTupleSafeOperationTransfer(source: SafeOperationTransfer) {
  const builder = new TupleBuilder();
  builder.writeAddress(source.to);
  builder.writeNumber(source.value);
  builder.writeNumber(source.mode);
  builder.writeBoolean(source.bounce);
  builder.writeCell(source.body);
  return builder.build();
}

export function loadSafeOperation(slice: Slice) {
  const sc_0 = slice;
  const _transfer = sc_0.loadBit() ? loadSafeOperationTransfer(sc_0) : null;
  const _parameters = sc_0.loadBit() ? loadSafeOperationUpdateParameters(sc_0) : null;
  const _add = sc_0.loadBit() ? loadSafeOperationAdd(sc_0) : null;
  const sc_1 = sc_0.loadRef().beginParse();
  const _remove = sc_1.loadBit() ? loadSafeOperationRemove(sc_1) : null;
  const _replace = sc_1.loadBit() ? loadSafeOperationReplace(sc_1) : null;
  return { $$type: 'SafeOperation' as const, transfer: _transfer, parameters: _parameters, add: _add, remove: _remove, replace: _replace };
}

export function storeSafeOperation(src: SafeOperation) {
  return (builder: Builder) => {
    const b_0 = builder;
    if (src.transfer !== null && src.transfer !== undefined) { b_0.storeBit(true); b_0.store(storeSafeOperationTransfer(src.transfer)); } else { b_0.storeBit(false); }
    if (src.parameters !== null && src.parameters !== undefined) { b_0.storeBit(true); b_0.store(storeSafeOperationUpdateParameters(src.parameters)); } else { b_0.storeBit(false); }
    if (src.add !== null && src.add !== undefined) { b_0.storeBit(true); b_0.store(storeSafeOperationAdd(src.add)); } else { b_0.storeBit(false); }
    const b_1 = new Builder();
    if (src.remove !== null && src.remove !== undefined) { b_1.storeBit(true); b_1.store(storeSafeOperationRemove(src.remove)); } else { b_1.storeBit(false); }
    if (src.replace !== null && src.replace !== undefined) { b_1.storeBit(true); b_1.store(storeSafeOperationReplace(src.replace)); } else { b_1.storeBit(false); }
    b_0.storeRef(b_1.endCell());
  };

  function dictValueParserSafeOperation(): DictionaryValue<SafeOperation> {
    return {
      serialize: (src, buidler) => {
        buidler.storeRef(beginCell().store(storeSafeOperation(src)).endCell());
      },
      parse: (src) => {
        return loadSafeOperation(src.loadRef().beginParse());
      }
    }
  }

  function storeSafeOperations(src: SafeOperations) {
    return (builder: Builder) => {
      const b_0 = builder;
      b_0.storeDict(src.ops, Dictionary.Keys.Uint(8), dictValueParserSafeOperation());
      b_0.storeUint(src.count, 8);
    };
  }
}
