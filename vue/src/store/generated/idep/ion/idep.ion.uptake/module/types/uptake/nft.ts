/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "idep.ion.uptake";

/** BaseNFT defines a non-fungible token */
export interface BaseNFT {
  id: string;
  name: string;
  uri: string;
  data: string;
  owner: string;
}

/** Denom defines a type of NFT */
export interface Denom {
  id: string;
  name: string;
  schema: string;
  creator: string;
  symbol: string;
  mint_restricted: boolean;
  update_restricted: boolean;
}

/** IDCollection defines a type of collection with specified ID */
export interface IDCollection {
  denom_id: string;
  token_ids: string[];
}

/** Owner defines a type of owner */
export interface Owner {
  address: string;
  id_collections: IDCollection[];
}

/** Collection defines a type of collection */
export interface Collection {
  denom: Denom | undefined;
  nfts: BaseNFT[];
}

const baseBaseNFT: object = { id: "", name: "", uri: "", data: "", owner: "" };

export const BaseNFT = {
  encode(message: BaseNFT, writer: Writer = Writer.create()): Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.uri !== "") {
      writer.uint32(26).string(message.uri);
    }
    if (message.data !== "") {
      writer.uint32(34).string(message.data);
    }
    if (message.owner !== "") {
      writer.uint32(42).string(message.owner);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): BaseNFT {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBaseNFT } as BaseNFT;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.uri = reader.string();
          break;
        case 4:
          message.data = reader.string();
          break;
        case 5:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BaseNFT {
    const message = { ...baseBaseNFT } as BaseNFT;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.uri !== undefined && object.uri !== null) {
      message.uri = String(object.uri);
    } else {
      message.uri = "";
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = String(object.data);
    } else {
      message.data = "";
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner);
    } else {
      message.owner = "";
    }
    return message;
  },

  toJSON(message: BaseNFT): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.uri !== undefined && (obj.uri = message.uri);
    message.data !== undefined && (obj.data = message.data);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial(object: DeepPartial<BaseNFT>): BaseNFT {
    const message = { ...baseBaseNFT } as BaseNFT;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.uri !== undefined && object.uri !== null) {
      message.uri = object.uri;
    } else {
      message.uri = "";
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = object.data;
    } else {
      message.data = "";
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    } else {
      message.owner = "";
    }
    return message;
  },
};

const baseDenom: object = {
  id: "",
  name: "",
  schema: "",
  creator: "",
  symbol: "",
  mint_restricted: false,
  update_restricted: false,
};

export const Denom = {
  encode(message: Denom, writer: Writer = Writer.create()): Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.schema !== "") {
      writer.uint32(26).string(message.schema);
    }
    if (message.creator !== "") {
      writer.uint32(34).string(message.creator);
    }
    if (message.symbol !== "") {
      writer.uint32(42).string(message.symbol);
    }
    if (message.mint_restricted === true) {
      writer.uint32(48).bool(message.mint_restricted);
    }
    if (message.update_restricted === true) {
      writer.uint32(56).bool(message.update_restricted);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Denom {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDenom } as Denom;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.schema = reader.string();
          break;
        case 4:
          message.creator = reader.string();
          break;
        case 5:
          message.symbol = reader.string();
          break;
        case 6:
          message.mint_restricted = reader.bool();
          break;
        case 7:
          message.update_restricted = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Denom {
    const message = { ...baseDenom } as Denom;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.schema !== undefined && object.schema !== null) {
      message.schema = String(object.schema);
    } else {
      message.schema = "";
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = String(object.symbol);
    } else {
      message.symbol = "";
    }
    if (
      object.mint_restricted !== undefined &&
      object.mint_restricted !== null
    ) {
      message.mint_restricted = Boolean(object.mint_restricted);
    } else {
      message.mint_restricted = false;
    }
    if (
      object.update_restricted !== undefined &&
      object.update_restricted !== null
    ) {
      message.update_restricted = Boolean(object.update_restricted);
    } else {
      message.update_restricted = false;
    }
    return message;
  },

  toJSON(message: Denom): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.schema !== undefined && (obj.schema = message.schema);
    message.creator !== undefined && (obj.creator = message.creator);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.mint_restricted !== undefined &&
      (obj.mint_restricted = message.mint_restricted);
    message.update_restricted !== undefined &&
      (obj.update_restricted = message.update_restricted);
    return obj;
  },

  fromPartial(object: DeepPartial<Denom>): Denom {
    const message = { ...baseDenom } as Denom;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.schema !== undefined && object.schema !== null) {
      message.schema = object.schema;
    } else {
      message.schema = "";
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = object.symbol;
    } else {
      message.symbol = "";
    }
    if (
      object.mint_restricted !== undefined &&
      object.mint_restricted !== null
    ) {
      message.mint_restricted = object.mint_restricted;
    } else {
      message.mint_restricted = false;
    }
    if (
      object.update_restricted !== undefined &&
      object.update_restricted !== null
    ) {
      message.update_restricted = object.update_restricted;
    } else {
      message.update_restricted = false;
    }
    return message;
  },
};

const baseIDCollection: object = { denom_id: "", token_ids: "" };

export const IDCollection = {
  encode(message: IDCollection, writer: Writer = Writer.create()): Writer {
    if (message.denom_id !== "") {
      writer.uint32(10).string(message.denom_id);
    }
    for (const v of message.token_ids) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): IDCollection {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseIDCollection } as IDCollection;
    message.token_ids = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom_id = reader.string();
          break;
        case 2:
          message.token_ids.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IDCollection {
    const message = { ...baseIDCollection } as IDCollection;
    message.token_ids = [];
    if (object.denom_id !== undefined && object.denom_id !== null) {
      message.denom_id = String(object.denom_id);
    } else {
      message.denom_id = "";
    }
    if (object.token_ids !== undefined && object.token_ids !== null) {
      for (const e of object.token_ids) {
        message.token_ids.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: IDCollection): unknown {
    const obj: any = {};
    message.denom_id !== undefined && (obj.denom_id = message.denom_id);
    if (message.token_ids) {
      obj.token_ids = message.token_ids.map((e) => e);
    } else {
      obj.token_ids = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<IDCollection>): IDCollection {
    const message = { ...baseIDCollection } as IDCollection;
    message.token_ids = [];
    if (object.denom_id !== undefined && object.denom_id !== null) {
      message.denom_id = object.denom_id;
    } else {
      message.denom_id = "";
    }
    if (object.token_ids !== undefined && object.token_ids !== null) {
      for (const e of object.token_ids) {
        message.token_ids.push(e);
      }
    }
    return message;
  },
};

const baseOwner: object = { address: "" };

export const Owner = {
  encode(message: Owner, writer: Writer = Writer.create()): Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.id_collections) {
      IDCollection.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Owner {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOwner } as Owner;
    message.id_collections = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.id_collections.push(
            IDCollection.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Owner {
    const message = { ...baseOwner } as Owner;
    message.id_collections = [];
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.id_collections !== undefined && object.id_collections !== null) {
      for (const e of object.id_collections) {
        message.id_collections.push(IDCollection.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: Owner): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    if (message.id_collections) {
      obj.id_collections = message.id_collections.map((e) =>
        e ? IDCollection.toJSON(e) : undefined
      );
    } else {
      obj.id_collections = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Owner>): Owner {
    const message = { ...baseOwner } as Owner;
    message.id_collections = [];
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (object.id_collections !== undefined && object.id_collections !== null) {
      for (const e of object.id_collections) {
        message.id_collections.push(IDCollection.fromPartial(e));
      }
    }
    return message;
  },
};

const baseCollection: object = {};

export const Collection = {
  encode(message: Collection, writer: Writer = Writer.create()): Writer {
    if (message.denom !== undefined) {
      Denom.encode(message.denom, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.nfts) {
      BaseNFT.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Collection {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCollection } as Collection;
    message.nfts = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = Denom.decode(reader, reader.uint32());
          break;
        case 2:
          message.nfts.push(BaseNFT.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Collection {
    const message = { ...baseCollection } as Collection;
    message.nfts = [];
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = Denom.fromJSON(object.denom);
    } else {
      message.denom = undefined;
    }
    if (object.nfts !== undefined && object.nfts !== null) {
      for (const e of object.nfts) {
        message.nfts.push(BaseNFT.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: Collection): unknown {
    const obj: any = {};
    message.denom !== undefined &&
      (obj.denom = message.denom ? Denom.toJSON(message.denom) : undefined);
    if (message.nfts) {
      obj.nfts = message.nfts.map((e) => (e ? BaseNFT.toJSON(e) : undefined));
    } else {
      obj.nfts = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Collection>): Collection {
    const message = { ...baseCollection } as Collection;
    message.nfts = [];
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = Denom.fromPartial(object.denom);
    } else {
      message.denom = undefined;
    }
    if (object.nfts !== undefined && object.nfts !== null) {
      for (const e of object.nfts) {
        message.nfts.push(BaseNFT.fromPartial(e));
      }
    }
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
