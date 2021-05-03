import { DEFAULT_TIMEOUT_MS, timeout } from "./timeout";

describe("timeout unit test", () => {
  const spy = jest.fn();

  beforeEach(() => {
    fetchMock.resetMocks();
    fetchMock.doMock();
    jest.useFakeTimers();
    timeout(new Promise(() => {})).catch(spy);
  });
  afterEach(() => {
    jest.useRealTimers();
  });

  test("fetch advance less than 5000ms(timeout)", async () => {
    jest.advanceTimersByTime(DEFAULT_TIMEOUT_MS / 2);
    await Promise.resolve();
    expect(spy).not.toHaveBeenCalled();
  });

  it("fetch advance the rest of the time", async () => {
    jest.advanceTimersByTime(DEFAULT_TIMEOUT_MS + 100);
    await Promise.resolve();
    expect(spy).toHaveBeenCalled();
  });
});
