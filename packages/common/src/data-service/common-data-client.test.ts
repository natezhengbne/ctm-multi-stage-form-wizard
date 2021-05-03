import { getSuggestions } from "./common-data-client";
import fetch from "jest-fetch-mock";
import { SuburbSuggestions } from "../data-type/suggention";

describe("common-data-client unit test", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
    fetchMock.doMock();
  });

  describe("getSuggestions", () => {
    it("fetches suburb suggestions", async () => {
      const fetchRequest =
        "https://suggest.realestate.com.au/consumer-suggest/suggestions?max=7&query=indoor&type=suburb%2Cprecinct%2Cregion%2Cstate%2Cpostcode&src=homepage";
      const mockResponse: SuburbSuggestions = {
        _embedded: {
          suggestions: [],
        },
      };
      fetch.mockResponse(JSON.stringify(mockResponse));

      const suburbSuggestions = await getSuggestions("indoor");

      expect(suburbSuggestions).toEqual(mockResponse);
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(fetch).toHaveBeenCalledWith(fetchRequest);
    });
  });
});
