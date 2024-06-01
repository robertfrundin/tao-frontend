import { beginCell } from "@ton/ton";
import 'buffer';

export const convertToBase64 = (value: string)=>beginCell().storeUint(0, 32).storeStringTail(value).endCell().toBoc().toString("base64")
