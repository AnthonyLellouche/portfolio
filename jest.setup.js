// Mock global pour window.matchMedia
global.window.matchMedia = jest.fn().mockImplementation((query) => ({
  matches: query.includes("(prefers-color-scheme: dark)"),
  media: query,
  onchange: null,
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
}));

// Polyfill pour TextEncoder et TextDecoder
import { TextEncoder, TextDecoder } from "util";

if (typeof global.TextEncoder === "undefined") {
  global.TextEncoder = TextEncoder;
}

if (typeof global.TextDecoder === "undefined") {
  global.TextDecoder = TextDecoder;
}
