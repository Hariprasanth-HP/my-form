import { ADD_USER_DETAIL } from "./constants";
import { adduser } from "./action";
import configureStore from "redux-mock-store";
const initialState = { name: "", email: "" };
const mockStore = configureStore();
const store = mockStore();
const testState = { name: "hari", email: "hari16205@gmail" };
describe("select_actions", () => {
  beforeEach(() => {
    // store = mockStore(initialState);
    store.clearActions();
  });
  describe("Add user action", () => {
    test("Dispatches the correct action and payload", () => {
      const expectedActions = [
        {
          payload: testState,
          type: ADD_USER_DETAIL,
        },
      ];

      store.dispatch(adduser(testState));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
