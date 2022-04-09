import appReducer from '../reducers/appReducer';

let initialState;

beforeEach(() => {
    initialState = {initialized: false}
})

test(`Reducer gets 'INITIAL-APP' and returns true`, () => {
    expect(appReducer(initialState, { type: 'INITIAL-APP' })).toEqual({initialized: true})
})

test(`Reducer gets anything as type, returns false`, () => {
    expect(appReducer(initialState, { type: '' })).toEqual({initialized: false})
})