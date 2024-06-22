import { 
  Cell,
  Slice, 
  Address, 
  Builder, 
  beginCell, 
  ComputeError, 
  TupleItem, 
  TupleReader, 
  Dictionary, 
  contractAddress, 
  ContractProvider, 
  Sender, 
  Contract, 
  ContractABI, 
  ABIType,
  ABIGetter,
  ABIReceiver,
  TupleBuilder,
  DictionaryValue
} from '@ton/core';

export type StateInit = {
    $$type: 'StateInit';
    code: Cell;
    data: Cell;
}

export function storeStateInit(src: StateInit) {
  return (builder: Builder) => {
    const b_0 = builder;
    b_0.storeRef(src.code);
    b_0.storeRef(src.data);
  };
}

export function loadStateInit(slice: Slice) {
  const sc_0 = slice;
  const _code = sc_0.loadRef();
  const _data = sc_0.loadRef();
  return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function loadTupleStateInit(source: TupleReader) {
  const _code = source.readCell();
  const _data = source.readCell();
  return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function storeTupleStateInit(source: StateInit) {
  const builder = new TupleBuilder();
  builder.writeCell(source.code);
  builder.writeCell(source.data);
  return builder.build();
}

function dictValueParserStateInit(): DictionaryValue<StateInit> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeStateInit(src)).endCell());
    },
    parse: (src) => {
      return loadStateInit(src.loadRef().beginParse());
    }
  }
}

export type Context = {
    $$type: 'Context';
    bounced: boolean;
    sender: Address;
    value: bigint;
    raw: Cell;
}

export function storeContext(src: Context) {
  return (builder: Builder) => {
    const b_0 = builder;
    b_0.storeBit(src.bounced);
    b_0.storeAddress(src.sender);
    b_0.storeInt(src.value, 257);
    b_0.storeRef(src.raw);
  };
}

export function loadContext(slice: Slice) {
  const sc_0 = slice;
  const _bounced = sc_0.loadBit();
  const _sender = sc_0.loadAddress();
  const _value = sc_0.loadIntBig(257);
  const _raw = sc_0.loadRef();
  return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function loadTupleContext(source: TupleReader) {
  const _bounced = source.readBoolean();
  const _sender = source.readAddress();
  const _value = source.readBigNumber();
  const _raw = source.readCell();
  return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function storeTupleContext(source: Context) {
  const builder = new TupleBuilder();
  builder.writeBoolean(source.bounced);
  builder.writeAddress(source.sender);
  builder.writeNumber(source.value);
  builder.writeSlice(source.raw);
  return builder.build();
}

function dictValueParserContext(): DictionaryValue<Context> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeContext(src)).endCell());
    },
    parse: (src) => {
      return loadContext(src.loadRef().beginParse());
    }
  }
}

export type SendParameters = {
    $$type: 'SendParameters';
    bounce: boolean;
    to: Address;
    value: bigint;
    mode: bigint;
    body: Cell | null;
    code: Cell | null;
    data: Cell | null;
}

export function storeSendParameters(src: SendParameters) {
  return (builder: Builder) => {
    const b_0 = builder;
    b_0.storeBit(src.bounce);
    b_0.storeAddress(src.to);
    b_0.storeInt(src.value, 257);
    b_0.storeInt(src.mode, 257);
    if (src.body !== null && src.body !== undefined) { b_0.storeBit(true).storeRef(src.body); } else { b_0.storeBit(false); }
    if (src.code !== null && src.code !== undefined) { b_0.storeBit(true).storeRef(src.code); } else { b_0.storeBit(false); }
    if (src.data !== null && src.data !== undefined) { b_0.storeBit(true).storeRef(src.data); } else { b_0.storeBit(false); }
  };
}

export function loadSendParameters(slice: Slice) {
  const sc_0 = slice;
  const _bounce = sc_0.loadBit();
  const _to = sc_0.loadAddress();
  const _value = sc_0.loadIntBig(257);
  const _mode = sc_0.loadIntBig(257);
  const _body = sc_0.loadBit() ? sc_0.loadRef() : null;
  const _code = sc_0.loadBit() ? sc_0.loadRef() : null;
  const _data = sc_0.loadBit() ? sc_0.loadRef() : null;
  return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function loadTupleSendParameters(source: TupleReader) {
  const _bounce = source.readBoolean();
  const _to = source.readAddress();
  const _value = source.readBigNumber();
  const _mode = source.readBigNumber();
  const _body = source.readCellOpt();
  const _code = source.readCellOpt();
  const _data = source.readCellOpt();
  return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function storeTupleSendParameters(source: SendParameters) {
  const builder = new TupleBuilder();
  builder.writeBoolean(source.bounce);
  builder.writeAddress(source.to);
  builder.writeNumber(source.value);
  builder.writeNumber(source.mode);
  builder.writeCell(source.body);
  builder.writeCell(source.code);
  builder.writeCell(source.data);
  return builder.build();
}

function dictValueParserSendParameters(): DictionaryValue<SendParameters> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeSendParameters(src)).endCell());
    },
    parse: (src) => {
      return loadSendParameters(src.loadRef().beginParse());
    }
  }
}

export type Deploy = {
    $$type: 'Deploy';
    queryId: bigint;
}

export function storeDeploy(src: Deploy) {
  return (builder: Builder) => {
    const b_0 = builder;
    b_0.storeUint(2490013878, 32);
    b_0.storeUint(src.queryId, 64);
  };
}

export function loadDeploy(slice: Slice) {
  const sc_0 = slice;
  if (sc_0.loadUint(32) !== 2490013878) { throw Error('Invalid prefix'); }
  const _queryId = sc_0.loadUintBig(64);
  return { $$type: 'Deploy' as const, queryId: _queryId };
}

function loadTupleDeploy(source: TupleReader) {
  const _queryId = source.readBigNumber();
  return { $$type: 'Deploy' as const, queryId: _queryId };
}

function storeTupleDeploy(source: Deploy) {
  const builder = new TupleBuilder();
  builder.writeNumber(source.queryId);
  return builder.build();
}

function dictValueParserDeploy(): DictionaryValue<Deploy> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeDeploy(src)).endCell());
    },
    parse: (src) => {
      return loadDeploy(src.loadRef().beginParse());
    }
  }
}

export type DeployOk = {
    $$type: 'DeployOk';
    queryId: bigint;
}

export function storeDeployOk(src: DeployOk) {
  return (builder: Builder) => {
    const b_0 = builder;
    b_0.storeUint(2952335191, 32);
    b_0.storeUint(src.queryId, 64);
  };
}

export function loadDeployOk(slice: Slice) {
  const sc_0 = slice;
  if (sc_0.loadUint(32) !== 2952335191) { throw Error('Invalid prefix'); }
  const _queryId = sc_0.loadUintBig(64);
  return { $$type: 'DeployOk' as const, queryId: _queryId };
}

function loadTupleDeployOk(source: TupleReader) {
  const _queryId = source.readBigNumber();
  return { $$type: 'DeployOk' as const, queryId: _queryId };
}

function storeTupleDeployOk(source: DeployOk) {
  const builder = new TupleBuilder();
  builder.writeNumber(source.queryId);
  return builder.build();
}

function dictValueParserDeployOk(): DictionaryValue<DeployOk> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeDeployOk(src)).endCell());
    },
    parse: (src) => {
      return loadDeployOk(src.loadRef().beginParse());
    }
  }
}

export type FactoryDeploy = {
    $$type: 'FactoryDeploy';
    queryId: bigint;
    cashback: Address;
}

export function storeFactoryDeploy(src: FactoryDeploy) {
  return (builder: Builder) => {
    const b_0 = builder;
    b_0.storeUint(1829761339, 32);
    b_0.storeUint(src.queryId, 64);
    b_0.storeAddress(src.cashback);
  };
}

export function loadFactoryDeploy(slice: Slice) {
  const sc_0 = slice;
  if (sc_0.loadUint(32) !== 1829761339) { throw Error('Invalid prefix'); }
  const _queryId = sc_0.loadUintBig(64);
  const _cashback = sc_0.loadAddress();
  return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
}

function loadTupleFactoryDeploy(source: TupleReader) {
  const _queryId = source.readBigNumber();
  const _cashback = source.readAddress();
  return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
}

function storeTupleFactoryDeploy(source: FactoryDeploy) {
  const builder = new TupleBuilder();
  builder.writeNumber(source.queryId);
  builder.writeAddress(source.cashback);
  return builder.build();
}

function dictValueParserFactoryDeploy(): DictionaryValue<FactoryDeploy> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeFactoryDeploy(src)).endCell());
    },
    parse: (src) => {
      return loadFactoryDeploy(src.loadRef().beginParse());
    }
  }
}

export type ChangeOwner = {
    $$type: 'ChangeOwner';
    queryId: bigint;
    newOwner: Address;
}

export function storeChangeOwner(src: ChangeOwner) {
  return (builder: Builder) => {
    const b_0 = builder;
    b_0.storeUint(2174598809, 32);
    b_0.storeUint(src.queryId, 64);
    b_0.storeAddress(src.newOwner);
  };
}

export function loadChangeOwner(slice: Slice) {
  const sc_0 = slice;
  if (sc_0.loadUint(32) !== 2174598809) { throw Error('Invalid prefix'); }
  const _queryId = sc_0.loadUintBig(64);
  const _newOwner = sc_0.loadAddress();
  return { $$type: 'ChangeOwner' as const, queryId: _queryId, newOwner: _newOwner };
}

function loadTupleChangeOwner(source: TupleReader) {
  const _queryId = source.readBigNumber();
  const _newOwner = source.readAddress();
  return { $$type: 'ChangeOwner' as const, queryId: _queryId, newOwner: _newOwner };
}

function storeTupleChangeOwner(source: ChangeOwner) {
  const builder = new TupleBuilder();
  builder.writeNumber(source.queryId);
  builder.writeAddress(source.newOwner);
  return builder.build();
}

function dictValueParserChangeOwner(): DictionaryValue<ChangeOwner> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeChangeOwner(src)).endCell());
    },
    parse: (src) => {
      return loadChangeOwner(src.loadRef().beginParse());
    }
  }
}

export type ChangeOwnerOk = {
    $$type: 'ChangeOwnerOk';
    queryId: bigint;
    newOwner: Address;
}

export function storeChangeOwnerOk(src: ChangeOwnerOk) {
  return (builder: Builder) => {
    const b_0 = builder;
    b_0.storeUint(846932810, 32);
    b_0.storeUint(src.queryId, 64);
    b_0.storeAddress(src.newOwner);
  };
}

export function loadChangeOwnerOk(slice: Slice) {
  const sc_0 = slice;
  if (sc_0.loadUint(32) !== 846932810) { throw Error('Invalid prefix'); }
  const _queryId = sc_0.loadUintBig(64);
  const _newOwner = sc_0.loadAddress();
  return { $$type: 'ChangeOwnerOk' as const, queryId: _queryId, newOwner: _newOwner };
}

function loadTupleChangeOwnerOk(source: TupleReader) {
  const _queryId = source.readBigNumber();
  const _newOwner = source.readAddress();
  return { $$type: 'ChangeOwnerOk' as const, queryId: _queryId, newOwner: _newOwner };
}

function storeTupleChangeOwnerOk(source: ChangeOwnerOk) {
  const builder = new TupleBuilder();
  builder.writeNumber(source.queryId);
  builder.writeAddress(source.newOwner);
  return builder.build();
}

function dictValueParserChangeOwnerOk(): DictionaryValue<ChangeOwnerOk> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeChangeOwnerOk(src)).endCell());
    },
    parse: (src) => {
      return loadChangeOwnerOk(src.loadRef().beginParse());
    }
  }
}

export type SafeParameters = {
    $$type: 'SafeParameters';
    timeout: bigint;
    requestPrice: bigint;
    timelock: bigint;
}

export function storeSafeParameters(src: SafeParameters) {
  return (builder: Builder) => {
    const b_0 = builder;
    b_0.storeUint(src.timeout, 32);
    b_0.storeCoins(src.requestPrice);
    b_0.storeUint(src.timelock, 32);
  };
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

function dictValueParserSafeParameters(): DictionaryValue<SafeParameters> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeSafeParameters(src)).endCell());
    },
    parse: (src) => {
      return loadSafeParameters(src.loadRef().beginParse());
    }
  }
}

export type SafeOperations = {
    $$type: 'SafeOperations';
    ops: Dictionary<number, SafeOperation>;
    count: bigint;
}

export function storeSafeOperations(src: SafeOperations) {
  return (builder: Builder) => {
    const b_0 = builder;
    b_0.storeDict(src.ops, Dictionary.Keys.Uint(8), dictValueParserSafeOperation());
    b_0.storeUint(src.count, 8);
  };
}

export function loadSafeOperations(slice: Slice) {
  const sc_0 = slice;
  const _ops = Dictionary.load(Dictionary.Keys.Uint(8), dictValueParserSafeOperation(), sc_0);
  const _count = sc_0.loadUintBig(8);
  return { $$type: 'SafeOperations' as const, ops: _ops, count: _count };
}

function loadTupleSafeOperations(source: TupleReader) {
  const _ops = Dictionary.loadDirect(Dictionary.Keys.Uint(8), dictValueParserSafeOperation(), source.readCellOpt());
  const _count = source.readBigNumber();
  return { $$type: 'SafeOperations' as const, ops: _ops, count: _count };
}

function storeTupleSafeOperations(source: SafeOperations) {
  const builder = new TupleBuilder();
  builder.writeCell(source.ops.size > 0 ? beginCell().storeDictDirect(source.ops, Dictionary.Keys.Uint(8), dictValueParserSafeOperation()).endCell() : null);
  builder.writeNumber(source.count);
  return builder.build();
}

function dictValueParserSafeOperations(): DictionaryValue<SafeOperations> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeSafeOperations(src)).endCell());
    },
    parse: (src) => {
      return loadSafeOperations(src.loadRef().beginParse());
    }
  }
}

export type SafeOperation = {
    $$type: 'SafeOperation';
    transfer: SafeOperationTransfer | null;
    parameters: SafeOperationUpdateParameters | null;
    add: SafeOperationAdd | null;
    remove: SafeOperationRemove | null;
    replace: SafeOperationReplace | null;
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

function loadTupleSafeOperation(source: TupleReader) {
  const _transfer_p = source.readTupleOpt();
  const _transfer = _transfer_p ? loadTupleSafeOperationTransfer(_transfer_p) : null;
  const _parameters_p = source.readTupleOpt();
  const _parameters = _parameters_p ? loadTupleSafeOperationUpdateParameters(_parameters_p) : null;
  const _add_p = source.readTupleOpt();
  const _add = _add_p ? loadTupleSafeOperationAdd(_add_p) : null;
  const _remove_p = source.readTupleOpt();
  const _remove = _remove_p ? loadTupleSafeOperationRemove(_remove_p) : null;
  const _replace_p = source.readTupleOpt();
  const _replace = _replace_p ? loadTupleSafeOperationReplace(_replace_p) : null;
  return { $$type: 'SafeOperation' as const, transfer: _transfer, parameters: _parameters, add: _add, remove: _remove, replace: _replace };
}

function storeTupleSafeOperation(source: SafeOperation) {
  const builder = new TupleBuilder();
  if (source.transfer !== null && source.transfer !== undefined) {
    builder.writeTuple(storeTupleSafeOperationTransfer(source.transfer));
  } else {
    builder.writeTuple(null);
  }
  if (source.parameters !== null && source.parameters !== undefined) {
    builder.writeTuple(storeTupleSafeOperationUpdateParameters(source.parameters));
  } else {
    builder.writeTuple(null);
  }
  if (source.add !== null && source.add !== undefined) {
    builder.writeTuple(storeTupleSafeOperationAdd(source.add));
  } else {
    builder.writeTuple(null);
  }
  if (source.remove !== null && source.remove !== undefined) {
    builder.writeTuple(storeTupleSafeOperationRemove(source.remove));
  } else {
    builder.writeTuple(null);
  }
  if (source.replace !== null && source.replace !== undefined) {
    builder.writeTuple(storeTupleSafeOperationReplace(source.replace));
  } else {
    builder.writeTuple(null);
  }
  return builder.build();
}

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

export type SafeOperationAdd = {
    $$type: 'SafeOperationAdd';
    owner: Address;
}

export function storeSafeOperationAdd(src: SafeOperationAdd) {
  return (builder: Builder) => {
    const b_0 = builder;
    b_0.storeAddress(src.owner);
  };
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

function dictValueParserSafeOperationAdd(): DictionaryValue<SafeOperationAdd> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeSafeOperationAdd(src)).endCell());
    },
    parse: (src) => {
      return loadSafeOperationAdd(src.loadRef().beginParse());
    }
  }
}

export type SafeOperationRemove = {
    $$type: 'SafeOperationRemove';
    owner: Address;
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

function storeTupleSafeOperationRemove(source: SafeOperationRemove) {
  const builder = new TupleBuilder();
  builder.writeAddress(source.owner);
  return builder.build();
}

function dictValueParserSafeOperationRemove(): DictionaryValue<SafeOperationRemove> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeSafeOperationRemove(src)).endCell());
    },
    parse: (src) => {
      return loadSafeOperationRemove(src.loadRef().beginParse());
    }
  }
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

function loadTupleSafeOperationReplace(source: TupleReader) {
  const _old = source.readAddress();
  const _new = source.readAddress();
  return { $$type: 'SafeOperationReplace' as const, old: _old, new: _new };
}

function storeTupleSafeOperationReplace(source: SafeOperationReplace) {
  const builder = new TupleBuilder();
  builder.writeAddress(source.old);
  builder.writeAddress(source.new);
  return builder.build();
}

function dictValueParserSafeOperationReplace(): DictionaryValue<SafeOperationReplace> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeSafeOperationReplace(src)).endCell());
    },
    parse: (src) => {
      return loadSafeOperationReplace(src.loadRef().beginParse());
    }
  }
}

export type SafeOperationTransfer = {
    $$type: 'SafeOperationTransfer';
    to: Address;
    value: bigint;
    mode: bigint;
    bounce: boolean;
    body: Cell | null;
}

export function storeSafeOperationTransfer(src: SafeOperationTransfer) {
  return (builder: Builder) => {
    const b_0 = builder;
    b_0.storeAddress(src.to);
    b_0.storeCoins(src.value);
    b_0.storeUint(src.mode, 8);
    b_0.storeBit(src.bounce);
    if (src.body !== null && src.body !== undefined) { b_0.storeBit(true).storeRef(src.body); } else { b_0.storeBit(false); }
  };
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

function dictValueParserSafeOperationTransfer(): DictionaryValue<SafeOperationTransfer> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeSafeOperationTransfer(src)).endCell());
    },
    parse: (src) => {
      return loadSafeOperationTransfer(src.loadRef().beginParse());
    }
  }
}

export type SafeOperationUpdateParameters = {
    $$type: 'SafeOperationUpdateParameters';
    parameters: SafeParameters;
}

export function storeSafeOperationUpdateParameters(src: SafeOperationUpdateParameters) {
  return (builder: Builder) => {
    const b_0 = builder;
    b_0.store(storeSafeParameters(src.parameters));
  };
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

function dictValueParserSafeOperationUpdateParameters(): DictionaryValue<SafeOperationUpdateParameters> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeSafeOperationUpdateParameters(src)).endCell());
    },
    parse: (src) => {
      return loadSafeOperationUpdateParameters(src.loadRef().beginParse());
    }
  }
}

export type EventSafeDeployed = {
    $$type: 'EventSafeDeployed';
    by: Address;
    address: Address;
}

export function storeEventSafeDeployed(src: EventSafeDeployed) {
  return (builder: Builder) => {
    const b_0 = builder;
    b_0.storeUint(1369732164, 32);
    b_0.storeAddress(src.by);
    b_0.storeAddress(src.address);
  };
}

export function loadEventSafeDeployed(slice: Slice) {
  const sc_0 = slice;
  if (sc_0.loadUint(32) !== 1369732164) { throw Error('Invalid prefix'); }
  const _by = sc_0.loadAddress();
  const _address = sc_0.loadAddress();
  return { $$type: 'EventSafeDeployed' as const, by: _by, address: _address };
}

function loadTupleEventSafeDeployed(source: TupleReader) {
  const _by = source.readAddress();
  const _address = source.readAddress();
  return { $$type: 'EventSafeDeployed' as const, by: _by, address: _address };
}

function storeTupleEventSafeDeployed(source: EventSafeDeployed) {
  const builder = new TupleBuilder();
  builder.writeAddress(source.by);
  builder.writeAddress(source.address);
  return builder.build();
}

function dictValueParserEventSafeDeployed(): DictionaryValue<EventSafeDeployed> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeEventSafeDeployed(src)).endCell());
    },
    parse: (src) => {
      return loadEventSafeDeployed(src.loadRef().beginParse());
    }
  }
}

export type EventVote = {
    $$type: 'EventVote';
    yes: boolean;
    address: Address;
}

export function storeEventVote(src: EventVote) {
  return (builder: Builder) => {
    const b_0 = builder;
    b_0.storeUint(2646988345, 32);
    b_0.storeBit(src.yes);
    b_0.storeAddress(src.address);
  };
}

export function loadEventVote(slice: Slice) {
  const sc_0 = slice;
  if (sc_0.loadUint(32) !== 2646988345) { throw Error('Invalid prefix'); }
  const _yes = sc_0.loadBit();
  const _address = sc_0.loadAddress();
  return { $$type: 'EventVote' as const, yes: _yes, address: _address };
}

function loadTupleEventVote(source: TupleReader) {
  const _yes = source.readBoolean();
  const _address = source.readAddress();
  return { $$type: 'EventVote' as const, yes: _yes, address: _address };
}

function storeTupleEventVote(source: EventVote) {
  const builder = new TupleBuilder();
  builder.writeBoolean(source.yes);
  builder.writeAddress(source.address);
  return builder.build();
}

function dictValueParserEventVote(): DictionaryValue<EventVote> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeEventVote(src)).endCell());
    },
    parse: (src) => {
      return loadEventVote(src.loadRef().beginParse());
    }
  }
}

export type EventVoteCompleted = {
    $$type: 'EventVoteCompleted';
    success: boolean;
}

export function storeEventVoteCompleted(src: EventVoteCompleted) {
  return (builder: Builder) => {
    const b_0 = builder;
    b_0.storeUint(3890299004, 32);
    b_0.storeBit(src.success);
  };
}

export function loadEventVoteCompleted(slice: Slice) {
  const sc_0 = slice;
  if (sc_0.loadUint(32) !== 3890299004) { throw Error('Invalid prefix'); }
  const _success = sc_0.loadBit();
  return { $$type: 'EventVoteCompleted' as const, success: _success };
}

function loadTupleEventVoteCompleted(source: TupleReader) {
  const _success = source.readBoolean();
  return { $$type: 'EventVoteCompleted' as const, success: _success };
}

function storeTupleEventVoteCompleted(source: EventVoteCompleted) {
  const builder = new TupleBuilder();
  builder.writeBoolean(source.success);
  return builder.build();
}

function dictValueParserEventVoteCompleted(): DictionaryValue<EventVoteCompleted> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeEventVoteCompleted(src)).endCell());
    },
    parse: (src) => {
      return loadEventVoteCompleted(src.loadRef().beginParse());
    }
  }
}

export type SafeDeployment = {
    $$type: 'SafeDeployment';
    remaining: Address;
}

export function storeSafeDeployment(src: SafeDeployment) {
  return (builder: Builder) => {
    const b_0 = builder;
    b_0.storeUint(1857061459, 32);
    b_0.storeAddress(src.remaining);
  };
}

export function loadSafeDeployment(slice: Slice) {
  const sc_0 = slice;
  if (sc_0.loadUint(32) !== 1857061459) { throw Error('Invalid prefix'); }
  const _remaining = sc_0.loadAddress();
  return { $$type: 'SafeDeployment' as const, remaining: _remaining };
}

function loadTupleSafeDeployment(source: TupleReader) {
  const _remaining = source.readAddress();
  return { $$type: 'SafeDeployment' as const, remaining: _remaining };
}

function storeTupleSafeDeployment(source: SafeDeployment) {
  const builder = new TupleBuilder();
  builder.writeAddress(source.remaining);
  return builder.build();
}

function dictValueParserSafeDeployment(): DictionaryValue<SafeDeployment> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeSafeDeployment(src)).endCell());
    },
    parse: (src) => {
      return loadSafeDeployment(src.loadRef().beginParse());
    }
  }
}

export type SafeRequestOperation = {
    $$type: 'SafeRequestOperation';
    ops: SafeOperations;
}

export function storeSafeRequestOperation(src: SafeRequestOperation) {
  return (builder: Builder) => {
    const b_0 = builder;
    b_0.storeUint(2758425149, 32);
    b_0.store(storeSafeOperations(src.ops));
  };
}

export function loadSafeRequestOperation(slice: Slice) {
  const sc_0 = slice;
  if (sc_0.loadUint(32) !== 2758425149) { throw Error('Invalid prefix'); }
  const _ops = loadSafeOperations(sc_0);
  return { $$type: 'SafeRequestOperation' as const, ops: _ops };
}

function loadTupleSafeRequestOperation(source: TupleReader) {
  const _ops = loadTupleSafeOperations(source.readTuple());
  return { $$type: 'SafeRequestOperation' as const, ops: _ops };
}

function storeTupleSafeRequestOperation(source: SafeRequestOperation) {
  const builder = new TupleBuilder();
  builder.writeTuple(storeTupleSafeOperations(source.ops));
  return builder.build();
}

function dictValueParserSafeRequestOperation(): DictionaryValue<SafeRequestOperation> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeSafeRequestOperation(src)).endCell());
    },
    parse: (src) => {
      return loadSafeRequestOperation(src.loadRef().beginParse());
    }
  }
}

export type VoteSuccess = {
    $$type: 'VoteSuccess';
    args: VoteArgs;
}

export function storeVoteSuccess(src: VoteSuccess) {
  return (builder: Builder) => {
    const b_0 = builder;
    b_0.storeUint(1956838505, 32);
    b_0.store(storeVoteArgs(src.args));
  };
}

export function loadVoteSuccess(slice: Slice) {
  const sc_0 = slice;
  if (sc_0.loadUint(32) !== 1956838505) { throw Error('Invalid prefix'); }
  const _args = loadVoteArgs(sc_0);
  return { $$type: 'VoteSuccess' as const, args: _args };
}

function loadTupleVoteSuccess(source: TupleReader) {
  const _args = loadTupleVoteArgs(source.readTuple());
  return { $$type: 'VoteSuccess' as const, args: _args };
}

function storeTupleVoteSuccess(source: VoteSuccess) {
  const builder = new TupleBuilder();
  builder.writeTuple(storeTupleVoteArgs(source.args));
  return builder.build();
}

function dictValueParserVoteSuccess(): DictionaryValue<VoteSuccess> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeVoteSuccess(src)).endCell());
    },
    parse: (src) => {
      return loadVoteSuccess(src.loadRef().beginParse());
    }
  }
}

export type VoteFailure = {
    $$type: 'VoteFailure';
    args: VoteArgs;
}

export function storeVoteFailure(src: VoteFailure) {
  return (builder: Builder) => {
    const b_0 = builder;
    b_0.storeUint(1081778690, 32);
    b_0.store(storeVoteArgs(src.args));
  };
}

export function loadVoteFailure(slice: Slice) {
  const sc_0 = slice;
  if (sc_0.loadUint(32) !== 1081778690) { throw Error('Invalid prefix'); }
  const _args = loadVoteArgs(sc_0);
  return { $$type: 'VoteFailure' as const, args: _args };
}

function loadTupleVoteFailure(source: TupleReader) {
  const _args = loadTupleVoteArgs(source.readTuple());
  return { $$type: 'VoteFailure' as const, args: _args };
}

function storeTupleVoteFailure(source: VoteFailure) {
  const builder = new TupleBuilder();
  builder.writeTuple(storeTupleVoteArgs(source.args));
  return builder.build();
}

function dictValueParserVoteFailure(): DictionaryValue<VoteFailure> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeVoteFailure(src)).endCell());
    },
    parse: (src) => {
      return loadVoteFailure(src.loadRef().beginParse());
    }
  }
}

export type VoteArgs = {
    $$type: 'VoteArgs';
    safe: Address;
    owners: Dictionary<Address, boolean>;
    ownersCount: bigint;
    treshold: bigint;
    timeout: bigint;
    ops: SafeOperations;
}

export function storeVoteArgs(src: VoteArgs) {
  return (builder: Builder) => {
    const b_0 = builder;
    b_0.storeAddress(src.safe);
    b_0.storeDict(src.owners, Dictionary.Keys.Address(), Dictionary.Values.Bool());
    b_0.storeUint(src.ownersCount, 32);
    b_0.storeUint(src.treshold, 32);
    b_0.storeUint(src.timeout, 64);
    b_0.store(storeSafeOperations(src.ops));
  };
}

export function loadVoteArgs(slice: Slice) {
  const sc_0 = slice;
  const _safe = sc_0.loadAddress();
  const _owners = Dictionary.load(Dictionary.Keys.Address(), Dictionary.Values.Bool(), sc_0);
  const _ownersCount = sc_0.loadUintBig(32);
  const _treshold = sc_0.loadUintBig(32);
  const _timeout = sc_0.loadUintBig(64);
  const _ops = loadSafeOperations(sc_0);
  return { $$type: 'VoteArgs' as const, safe: _safe, owners: _owners, ownersCount: _ownersCount, treshold: _treshold, timeout: _timeout, ops: _ops };
}

function loadTupleVoteArgs(source: TupleReader) {
  const _safe = source.readAddress();
  const _owners = Dictionary.loadDirect(Dictionary.Keys.Address(), Dictionary.Values.Bool(), source.readCellOpt());
  const _ownersCount = source.readBigNumber();
  const _treshold = source.readBigNumber();
  const _timeout = source.readBigNumber();
  const _ops = loadTupleSafeOperations(source.readTuple());
  return { $$type: 'VoteArgs' as const, safe: _safe, owners: _owners, ownersCount: _ownersCount, treshold: _treshold, timeout: _timeout, ops: _ops };
}

function storeTupleVoteArgs(source: VoteArgs) {
  const builder = new TupleBuilder();
  builder.writeAddress(source.safe);
  builder.writeCell(source.owners.size > 0 ? beginCell().storeDictDirect(source.owners, Dictionary.Keys.Address(), Dictionary.Values.Bool()).endCell() : null);
  builder.writeNumber(source.ownersCount);
  builder.writeNumber(source.treshold);
  builder.writeNumber(source.timeout);
  builder.writeTuple(storeTupleSafeOperations(source.ops));
  return builder.build();
}

function dictValueParserVoteArgs(): DictionaryValue<VoteArgs> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeVoteArgs(src)).endCell());
    },
    parse: (src) => {
      return loadVoteArgs(src.loadRef().beginParse());
    }
  }
}

export type VoteDeploy = {
    $$type: 'VoteDeploy';
    queryId: bigint;
}

export function storeVoteDeploy(src: VoteDeploy) {
  return (builder: Builder) => {
    const b_0 = builder;
    b_0.storeUint(1444115989, 32);
    b_0.storeUint(src.queryId, 64);
  };
}

export function loadVoteDeploy(slice: Slice) {
  const sc_0 = slice;
  if (sc_0.loadUint(32) !== 1444115989) { throw Error('Invalid prefix'); }
  const _queryId = sc_0.loadUintBig(64);
  return { $$type: 'VoteDeploy' as const, queryId: _queryId };
}

function loadTupleVoteDeploy(source: TupleReader) {
  const _queryId = source.readBigNumber();
  return { $$type: 'VoteDeploy' as const, queryId: _queryId };
}

function storeTupleVoteDeploy(source: VoteDeploy) {
  const builder = new TupleBuilder();
  builder.writeNumber(source.queryId);
  return builder.build();
}

function dictValueParserVoteDeploy(): DictionaryValue<VoteDeploy> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeVoteDeploy(src)).endCell());
    },
    parse: (src) => {
      return loadVoteDeploy(src.loadRef().beginParse());
    }
  }
}

export type SafeDeployParams = {
    $$type: 'SafeDeployParams';
    deploy: bigint;
    devFee: bigint;
}

export function storeSafeDeployParams(src: SafeDeployParams) {
  return (builder: Builder) => {
    const b_0 = builder;
    b_0.storeCoins(src.deploy);
    b_0.storeCoins(src.devFee);
  };
}

export function loadSafeDeployParams(slice: Slice) {
  const sc_0 = slice;
  const _deploy = sc_0.loadCoins();
  const _devFee = sc_0.loadCoins();
  return { $$type: 'SafeDeployParams' as const, deploy: _deploy, devFee: _devFee };
}

function loadTupleSafeDeployParams(source: TupleReader) {
  const _deploy = source.readBigNumber();
  const _devFee = source.readBigNumber();
  return { $$type: 'SafeDeployParams' as const, deploy: _deploy, devFee: _devFee };
}

function storeTupleSafeDeployParams(source: SafeDeployParams) {
  const builder = new TupleBuilder();
  builder.writeNumber(source.deploy);
  builder.writeNumber(source.devFee);
  return builder.build();
}

function dictValueParserSafeDeployParams(): DictionaryValue<SafeDeployParams> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeSafeDeployParams(src)).endCell());
    },
    parse: (src) => {
      return loadSafeDeployParams(src.loadRef().beginParse());
    }
  }
}

 type SafeContract_init_args = {
    $$type: 'SafeContract_init_args';
    owner: Address;
    id: bigint;
}

function initSafeContract_init_args(src: SafeContract_init_args) {
  return (builder: Builder) => {
    const b_0 = builder;
    b_0.storeAddress(src.owner);
    b_0.storeInt(src.id, 257);
  };
}

async function SafeContract_init(owner: Address, id: bigint) {
  const __code = Cell.fromBase64('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');
  const __system = Cell.fromBase64('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');
  const builder = beginCell();
  builder.storeRef(__system);
  builder.storeUint(0, 1);
  initSafeContract_init_args({ $$type: 'SafeContract_init_args', owner, id })(builder);
  const __data = builder.endCell();
  return { code: __code, data: __data };
}

const SafeContract_errors: { [key: number]: { message: string } } = {
  2: { message: `Stack undeflow` },
  3: { message: `Stack overflow` },
  4: { message: `Integer overflow` },
  5: { message: `Integer out of expected range` },
  6: { message: `Invalid opcode` },
  7: { message: `Type check error` },
  8: { message: `Cell overflow` },
  9: { message: `Cell underflow` },
  10: { message: `Dictionary error` },
  13: { message: `Out of gas error` },
  32: { message: `Method ID not found` },
  34: { message: `Action is invalid or not supported` },
  37: { message: `Not enough TON` },
  38: { message: `Not enough extra-currencies` },
  128: { message: `Null reference exception` },
  129: { message: `Invalid serialization prefix` },
  130: { message: `Invalid incoming message` },
  131: { message: `Constraints error` },
  132: { message: `Access denied` },
  133: { message: `Contract stopped` },
  134: { message: `Invalid argument` },
  135: { message: `Code of a contract was not found` },
  136: { message: `Invalid address` },
  137: { message: `Masterchain support is not enabled for this contract` },
  3094: { message: `Already signed or not an owner` },
  4755: { message: `Timeout` },
  5165: { message: `Not enough value` },
  7464: { message: `Request price must be less or equals than 10 TON` },
  8884: { message: `Wrong owners` },
  17702: { message: `Not timeouted` },
  25849: { message: `Not enough value to deploy a Safe` },
  31822: { message: `Timeout must be less than a year` },
  32453: { message: `Wrong safe address` },
  35981: { message: `Timeout must be more than an hour` },
  36682: { message: `Sender is not safe` },
  37479: { message: `Wrong treshold` },
  38009: { message: `Request price must be more or equals than 1 TON` },
  40810: { message: `Completed` },
  44757: { message: `Exactly one operation must be specified` },
  45379: { message: `Wrong signer address` },
  46307: { message: `Not a member` },
  62638: { message: `Wrong owners count` },
}

const SafeContract_types: ABIType[] = [
  {"name":"StateInit","header":null,"fields":[{"name":"code","type":{"kind":"simple","type":"cell","optional":false}},{"name":"data","type":{"kind":"simple","type":"cell","optional":false}}]},
  {"name":"Context","header":null,"fields":[{"name":"bounced","type":{"kind":"simple","type":"bool","optional":false}},{"name":"sender","type":{"kind":"simple","type":"address","optional":false}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"raw","type":{"kind":"simple","type":"slice","optional":false}}]},
  {"name":"SendParameters","header":null,"fields":[{"name":"bounce","type":{"kind":"simple","type":"bool","optional":false}},{"name":"to","type":{"kind":"simple","type":"address","optional":false}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"mode","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"body","type":{"kind":"simple","type":"cell","optional":true}},{"name":"code","type":{"kind":"simple","type":"cell","optional":true}},{"name":"data","type":{"kind":"simple","type":"cell","optional":true}}]},
  {"name":"Deploy","header":2490013878,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
  {"name":"DeployOk","header":2952335191,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
  {"name":"FactoryDeploy","header":1829761339,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"cashback","type":{"kind":"simple","type":"address","optional":false}}]},
  {"name":"ChangeOwner","header":2174598809,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"newOwner","type":{"kind":"simple","type":"address","optional":false}}]},
  {"name":"ChangeOwnerOk","header":846932810,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"newOwner","type":{"kind":"simple","type":"address","optional":false}}]},
  {"name":"SafeParameters","header":null,"fields":[{"name":"timeout","type":{"kind":"simple","type":"uint","optional":false,"format":32}},{"name":"requestPrice","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"timelock","type":{"kind":"simple","type":"uint","optional":false,"format":32}}]},
  {"name":"SafeOperations","header":null,"fields":[{"name":"ops","type":{"kind":"dict","key":"uint","keyFormat":8,"value":"SafeOperation","valueFormat":"ref"}},{"name":"count","type":{"kind":"simple","type":"uint","optional":false,"format":8}}]},
  {"name":"SafeOperation","header":null,"fields":[{"name":"transfer","type":{"kind":"simple","type":"SafeOperationTransfer","optional":true}},{"name":"parameters","type":{"kind":"simple","type":"SafeOperationUpdateParameters","optional":true}},{"name":"add","type":{"kind":"simple","type":"SafeOperationAdd","optional":true}},{"name":"remove","type":{"kind":"simple","type":"SafeOperationRemove","optional":true}},{"name":"replace","type":{"kind":"simple","type":"SafeOperationReplace","optional":true}}]},
  {"name":"SafeOperationAdd","header":null,"fields":[{"name":"owner","type":{"kind":"simple","type":"address","optional":false}}]},
  {"name":"SafeOperationRemove","header":null,"fields":[{"name":"owner","type":{"kind":"simple","type":"address","optional":false}}]},
  {"name":"SafeOperationReplace","header":null,"fields":[{"name":"old","type":{"kind":"simple","type":"address","optional":false}},{"name":"new","type":{"kind":"simple","type":"address","optional":false}}]},
  {"name":"SafeOperationTransfer","header":null,"fields":[{"name":"to","type":{"kind":"simple","type":"address","optional":false}},{"name":"value","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"mode","type":{"kind":"simple","type":"uint","optional":false,"format":8}},{"name":"bounce","type":{"kind":"simple","type":"bool","optional":false}},{"name":"body","type":{"kind":"simple","type":"cell","optional":true}}]},
  {"name":"SafeOperationUpdateParameters","header":null,"fields":[{"name":"parameters","type":{"kind":"simple","type":"SafeParameters","optional":false}}]},
  {"name":"EventSafeDeployed","header":1369732164,"fields":[{"name":"by","type":{"kind":"simple","type":"address","optional":false}},{"name":"address","type":{"kind":"simple","type":"address","optional":false}}]},
  {"name":"EventVote","header":2646988345,"fields":[{"name":"yes","type":{"kind":"simple","type":"bool","optional":false}},{"name":"address","type":{"kind":"simple","type":"address","optional":false}}]},
  {"name":"EventVoteCompleted","header":3890299004,"fields":[{"name":"success","type":{"kind":"simple","type":"bool","optional":false}}]},
  {"name":"SafeDeployment","header":1857061459,"fields":[{"name":"remaining","type":{"kind":"simple","type":"address","optional":false}}]},
  {"name":"SafeRequestOperation","header":2758425149,"fields":[{"name":"ops","type":{"kind":"simple","type":"SafeOperations","optional":false}}]},
  {"name":"VoteSuccess","header":1956838505,"fields":[{"name":"args","type":{"kind":"simple","type":"VoteArgs","optional":false}}]},
  {"name":"VoteFailure","header":1081778690,"fields":[{"name":"args","type":{"kind":"simple","type":"VoteArgs","optional":false}}]},
  {"name":"VoteArgs","header":null,"fields":[{"name":"safe","type":{"kind":"simple","type":"address","optional":false}},{"name":"owners","type":{"kind":"dict","key":"address","value":"bool"}},{"name":"ownersCount","type":{"kind":"simple","type":"uint","optional":false,"format":32}},{"name":"treshold","type":{"kind":"simple","type":"uint","optional":false,"format":32}},{"name":"timeout","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"ops","type":{"kind":"simple","type":"SafeOperations","optional":false}}]},
  {"name":"VoteDeploy","header":1444115989,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
  {"name":"SafeDeployParams","header":null,"fields":[{"name":"deploy","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"devFee","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}}]},
]

const SafeContract_getters: ABIGetter[] = [
  {"name":"parameters","arguments":[],"returnType":{"kind":"simple","type":"SafeParameters","optional":false}},
  {"name":"treshold","arguments":[],"returnType":{"kind":"simple","type":"int","optional":false,"format":257}},
  {"name":"timenow","arguments":[],"returnType":{"kind":"simple","type":"int","optional":false,"format":257}},
  {"name":"seqno","arguments":[],"returnType":{"kind":"simple","type":"int","optional":false,"format":257}},
  {"name":"isOwner","arguments":[{"name":"address","type":{"kind":"simple","type":"address","optional":false}}],"returnType":{"kind":"simple","type":"bool","optional":false}},
  {"name":"owners","arguments":[],"returnType":{"kind":"dict","key":"address","value":"bool"}},
]

const SafeContract_receivers: ABIReceiver[] = [
  {"receiver":"internal","message":{"kind":"typed","type":"SafeDeployment"}},
  {"receiver":"internal","message":{"kind":"typed","type":"SafeRequestOperation"}},
  {"receiver":"internal","message":{"kind":"typed","type":"VoteFailure"}},
  {"receiver":"internal","message":{"kind":"typed","type":"VoteSuccess"}},
  {"receiver":"internal","message":{"kind":"typed","type":"Deploy"}},
]

export class SafeContract implements Contract {
    
  static async init(owner: Address, id: bigint) {
    return await SafeContract_init(owner, id);
  }
    
  static async fromInit(owner: Address, id: bigint) {
    const init = await SafeContract_init(owner, id);
    const address = contractAddress(0, init);
    return new SafeContract(address, init);
  }
    
  static fromAddress(address: Address) {
    return new SafeContract(address);
  }
    
  readonly address: Address; 
  readonly init?: { code: Cell, data: Cell };
  readonly abi: ContractABI = {
    types:  SafeContract_types,
    getters: SafeContract_getters,
    receivers: SafeContract_receivers,
    errors: SafeContract_errors,
  };
    
  private constructor(address: Address, init?: { code: Cell, data: Cell }) {
    this.address = address;
    this.init = init;
  }
    
  async send(provider: ContractProvider, via: Sender, args: { value: bigint, bounce?: boolean| null | undefined }, message: SafeDeployment | SafeRequestOperation | VoteFailure | VoteSuccess | Deploy) {
        
    let body: Cell | null = null;
    if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'SafeDeployment') {
      body = beginCell().store(storeSafeDeployment(message)).endCell();
    }
    if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'SafeRequestOperation') {
      body = beginCell().store(storeSafeRequestOperation(message)).endCell();
    }
    if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'VoteFailure') {
      body = beginCell().store(storeVoteFailure(message)).endCell();
    }
    if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'VoteSuccess') {
      body = beginCell().store(storeVoteSuccess(message)).endCell();
    }
    if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'Deploy') {
      body = beginCell().store(storeDeploy(message)).endCell();
    }
    if (body === null) { throw new Error('Invalid message type'); }
        
    await provider.internal(via, { ...args, body: body });
        
  }
    
  async getParameters(provider: ContractProvider) {
    const builder = new TupleBuilder();
    const source = (await provider.get('parameters', builder.build())).stack;
    const result = loadTupleSafeParameters(source);
    return result;
  }
    
  async getTreshold(provider: ContractProvider) {
    const builder = new TupleBuilder();
    const source = (await provider.get('treshold', builder.build())).stack;
    const result = source.readBigNumber();
    return result;
  }
    
  async getTimenow(provider: ContractProvider) {
    const builder = new TupleBuilder();
    const source = (await provider.get('timenow', builder.build())).stack;
    const result = source.readBigNumber();
    return result;
  }
    
  async getSeqno(provider: ContractProvider) {
    const builder = new TupleBuilder();
    const source = (await provider.get('seqno', builder.build())).stack;
    const result = source.readBigNumber();
    return result;
  }
    
  async getIsOwner(provider: ContractProvider, address: Address) {
    const builder = new TupleBuilder();
    builder.writeAddress(address);
    const source = (await provider.get('isOwner', builder.build())).stack;
    const result = source.readBoolean();
    return result;
  }
    
  async getOwners(provider: ContractProvider) {
    const builder = new TupleBuilder();
    const source = (await provider.get('owners', builder.build())).stack;
    const result = Dictionary.loadDirect(Dictionary.Keys.Address(), Dictionary.Values.Bool(), source.readCellOpt());
    return result;
  }
    
}
