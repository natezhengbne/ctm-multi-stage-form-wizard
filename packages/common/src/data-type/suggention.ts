export type SuburbSuggestions = {
  _embedded: {
    suggestions: Suburb[];
  };
};

export type Suburb = {
  display: {
    text: string;
  };
  source: {
    postcode?: string;
    name?: string;
    state?: string;
  };
};
