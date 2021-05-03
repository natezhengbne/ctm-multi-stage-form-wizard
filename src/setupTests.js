import { configure } from "enzyme";
import failOnConsole from "jest-fail-on-console";
import Adapter from "enzyme-adapter-react-16";

require('jest-fetch-mock').enableMocks();
fetchMock.dontMock();

configure({ adapter: new Adapter() });

failOnConsole();
