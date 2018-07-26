import { BigNumber } from "@0xproject/utils";

export const GANACHE_NETWORK_ID = 50;
export const GANACHE_RPC = "http://127.0.0.1:8545";
export const GANACHE_TX_DEFAULTS = { gas: 400000 };
export const KOVAN_NETWORK_ID = 42;
export const KOVAN_RPC = "https://kovan.infura.io/";
export const KOVAN_TX_DEFAULTS = { gas: 400000 };
export const MNEMONIC =
  process.env.NODE_ENV === "kovan"
    ? "topic concert ramp load argue harbor equip island couple clarify fence smart"
    : "concert load couple harbor equip island argue ramp clarify fence smart topic";
export const BASE_DERIVATION_PATH = `44'/60'/0'/0`;
export const UNLIMITED_ALLOWANCE_IN_BASE_UNITS = new BigNumber(2)
  .pow(256)
  .minus(1);
export const NULL_ADDRESS = "0x0000000000000000000000000000000000000000";
export const ZERO = new BigNumber(0);
// Ganache
export const RPC_URL =
  process.env.NODE_ENV === "kovan" ? KOVAN_RPC : GANACHE_RPC;
export const NETWORK_ID: number =
  process.env.NODE_ENV === "kovan" ? KOVAN_NETWORK_ID : GANACHE_NETWORK_ID;
export const TX_DEFAULTS =
  process.env.NODE_ENV === "kovan" ? KOVAN_TX_DEFAULTS : GANACHE_TX_DEFAULTS;
// Kovan
// export const RPC_URL = KOVAN_RPC;
// export const NETWORK_ID: number = KOVAN_NETWORK_ID;
// export const TX_DEFAULTS = KOVAN_TX_DEFAULTS;

export const stickers = [
  {
    id: 0,
    name: "Blacksmith",
    uri:
      "https://cdn.glitch.com/8a82e1d4-acae-4a25-96f3-7c4d602b8500%2FBlockstudios_Blacksmith.jpg?1532520144524"
  },
  {
    id: 1,
    name: "Hokkaido Melon",
    uri:
      "https://cdn.glitch.com/8a82e1d4-acae-4a25-96f3-7c4d602b8500%2FBlockstudios_HokkaidoMelon.jpg?1532520144781"
  },

  {
    id: 2,
    name: "Optician",
    uri:
      "https://cdn.glitch.com/8a82e1d4-acae-4a25-96f3-7c4d602b8500%2FBlockstudios_Optician_FanArt.jpg?1532520145184"
  },

  {
    id: 3,
    name: "Otterman",
    uri:
      "https://cdn.glitch.com/8a82e1d4-acae-4a25-96f3-7c4d602b8500%2FBlockstudios_OtterMan.jpg?1532520145239"
  },

  {
    id: 4,
    name: "CoinZuki",
    uri:
      "https://cdn.glitch.com/8a82e1d4-acae-4a25-96f3-7c4d602b8500%2FKnownOrigin_CoinZuki.jpg?1532520234241"
  },

  {
    id: 5,
    name: "Like a Human 1",
    uri:
      "https://cdn.glitch.com/8a82e1d4-acae-4a25-96f3-7c4d602b8500%2FKnownOrigin_Like%20a%20Human%201.jpg?1532520234767"
  },

  {
    id: 6,
    name: "Melt",
    uri:
      "https://cdn.glitch.com/8a82e1d4-acae-4a25-96f3-7c4d602b8500%2FKnownOrigin_Melt.jpg?1532520235200"
  },

  {
    id: 7,
    name: "Tempo",
    uri:
      "https://cdn.glitch.com/8a82e1d4-acae-4a25-96f3-7c4d602b8500%2FKnownOrigin_Tempo.jpg?1532520236125"
  },

  {
    id: 8,
    name: "Cells",
    uri:
      "https://cdn.glitch.com/8a82e1d4-acae-4a25-96f3-7c4d602b8500%2FKnownOrigin_Cells.jpg?1532520236416"
  },

  {
    id: 9,
    name: "Pebbles",
    uri:
      "https://cdn.glitch.com/8a82e1d4-acae-4a25-96f3-7c4d602b8500%2FKnownOrigin_Pebbles.jpg?1532520240265"
  }
];
