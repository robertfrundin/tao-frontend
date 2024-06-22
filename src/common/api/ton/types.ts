import { Address, Cell, Dictionary } from "@ton/ton";


type SafeParameters = {
    timeout: number
    requestPrice: number;
    timelock: number;
}

export type SafeOperations = {
    ops: Dictionary<number, SafeOperation>;

    count: number;
}

type SafeOperationAdd = {
    $$type: 'SafeOperationAdd';
    owner: Address;

}

type SafeOperationRemove = {
    owner: Address;
}

type SafeOperationReplace = {
    old: Address;
    new: Address;
}


type SafeOperationTransfer = {
    to: Address;
    value: number;
    mode: number;
    bounce: boolean;
    body?: Cell;
}

type SafeOperationUpdateParameters = {
    parameters: SafeParameters;
}

export type SafeOperation = {
    transfer?: SafeOperationTransfer;
    parameters?: SafeOperationUpdateParameters;
    add?: SafeOperationAdd;
    remove?: SafeOperationRemove;
    replace?: SafeOperationReplace;
}
