import { beginCell } from "@ton/ton";
import 'buffer';

export const convertToBoc = (value: string)=>beginCell().storeUint(0, 32).storeStringTail(value).endCell().toBoc()

export const convertToBase64 = (value: string)=>convertToBoc(value).toString("base64")

