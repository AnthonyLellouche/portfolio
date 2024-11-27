// Mock global pour window.matchMedia
global.window.matchMedia = jest.fn().mockImplementation((query) => ({
    matches: query.includes("(prefers-color-scheme: dark)"),
    media: query,
    onchange: null,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
  }));