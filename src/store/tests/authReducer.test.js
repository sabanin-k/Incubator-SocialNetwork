import authReducer from '../reducers/authReducer';


let initialState;

beforeEach(() => {
    initialState = {
        id: null,
        email: null,
        login: null,
        isLogged: false,
        error: null,
        captchaURL: null
    }
})

test('Reduce works right', () => {
    expect(authReducer(initialState, {
        type: 'SET-AUTH-USER-DATA', payload: {
            id: 235,
            email: 'asas@sas.as',
            login: 'asasa',
            isLogged: true
        }
    })).toEqual({
        id: 235,
        email: 'asas@sas.as',
        login: 'asasa',
        isLogged: true,
        error: null,
        captchaURL: null
    })
})

test('with wrong Action type', () => {
    expect(authReducer(initialState, {
        type: '', payload: {
            id: 235,
            email: 'asas@sas.as',
            login: 'asasa',
            isLogged: true
        }
    })).toEqual({
        id: null,
        email: null,
        login: null,
        isLogged: false,
        error: null,
        captchaURL: null
    })
})

test('with right Action type, but wrong Props', () => {
    expect(authReducer(initialState, {
        type: 'SET-AUTH-USER-DATA', payload: {}
    })).toEqual({
        id: null,
        email: null,
        login: null,
        isLogged: false,
        error: null,
        captchaURL: null
    })
})