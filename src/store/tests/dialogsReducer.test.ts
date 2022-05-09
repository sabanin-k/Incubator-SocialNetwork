import { TOpponent, TOpponentMessages } from "../../api/dialogsAPI"
import dialogsReducer from "../reducers/dialogsReducer"

jest.mock('../../api/dialogsAPI')

let initialState = {
    opponents: [] as TOpponent[],
    messages: [] as TOpponentMessages[],
    currentOpponent: {} as TOpponent,
    sendMessageError: false
}

describe('DIALOGS REDUCER TESTS', () => {
    beforeEach(() => {
        initialState = {
            opponents: [] as TOpponent[],
            messages: [] as TOpponentMessages[],
            currentOpponent: {} as TOpponent,
            sendMessageError: false
        }
    })
    test('Reducer gets opponents', () => {
        expect(dialogsReducer(initialState, {
            type: "dialogs/GET-OPPONENTS", data: [
                {
                    "id": 23718,
                    "userName": "const",
                    "hasNewMessages": false,
                    "lastDialogActivityDate": "2022-05-08T07:44:14.567",
                    "lastUserActivityDate": "2022-05-04T15:00:55.233",
                    "newMessagesCount": 0,
                    "photos": {
                        "small": null,
                        "large": null
                    }
                },
                {
                    "id": 21033,
                    "userName": "aivan3d66",
                    "hasNewMessages": false,
                    "lastDialogActivityDate": "2022-05-07T20:23:32.207",
                    "lastUserActivityDate": "2022-05-07T20:25:01.957",
                    "newMessagesCount": 0,
                    "photos": {
                        "small": "https://social-network.samuraijs.com/activecontent/images/users/21033/user-small.jpg?v=1",
                        "large": "https://social-network.samuraijs.com/activecontent/images/users/21033/user.jpg?v=1"
                    }
                },
                {
                    "id": 20403,
                    "userName": "slavae222",
                    "hasNewMessages": false,
                    "lastDialogActivityDate": "2022-05-07T20:23:08.22",
                    "lastUserActivityDate": "2022-05-07T15:16:52.203",
                    "newMessagesCount": 0,
                    "photos": {
                        "small": "https://social-network.samuraijs.com/activecontent/images/users/20403/user-small.jpg?v=1",
                        "large": "https://social-network.samuraijs.com/activecontent/images/users/20403/user.jpg?v=1"
                    }
                }
            ]
        })).toEqual({
            opponents: [
                {
                    "id": 23718,
                    "userName": "const",
                    "hasNewMessages": false,
                    "lastDialogActivityDate": "2022-05-08T07:44:14.567",
                    "lastUserActivityDate": "2022-05-04T15:00:55.233",
                    "newMessagesCount": 0,
                    "photos": {
                        "small": null,
                        "large": null
                    }
                },
                {
                    "id": 21033,
                    "userName": "aivan3d66",
                    "hasNewMessages": false,
                    "lastDialogActivityDate": "2022-05-07T20:23:32.207",
                    "lastUserActivityDate": "2022-05-07T20:25:01.957",
                    "newMessagesCount": 0,
                    "photos": {
                        "small": "https://social-network.samuraijs.com/activecontent/images/users/21033/user-small.jpg?v=1",
                        "large": "https://social-network.samuraijs.com/activecontent/images/users/21033/user.jpg?v=1"
                    }
                },
                {
                    "id": 20403,
                    "userName": "slavae222",
                    "hasNewMessages": false,
                    "lastDialogActivityDate": "2022-05-07T20:23:08.22",
                    "lastUserActivityDate": "2022-05-07T15:16:52.203",
                    "newMessagesCount": 0,
                    "photos": {
                        "small": "https://social-network.samuraijs.com/activecontent/images/users/20403/user-small.jpg?v=1",
                        "large": "https://social-network.samuraijs.com/activecontent/images/users/20403/user.jpg?v=1"
                    }
                }
            ],
            messages: [] as TOpponentMessages[],
            currentOpponent: {} as TOpponent,
            sendMessageError: false
        })
    })

    test('Reducer gets messages', () => {
        expect(dialogsReducer(initialState, {
            type: 'dialogs/GET-DIALOG-WITH-OPPONENT',
            items: [
                {
                    id: 'string',
                    body: 'string',
                    translatedBody: null,
                    addedAt: 'string',
                    senderId: 1,
                    senderName: 'string',
                    recipientId: 2,
                    viewed: false
                }
            ]
        })).toEqual({
            opponents: [],
            messages: [
                {
                    id: 'string',
                    body: 'string',
                    translatedBody: null,
                    addedAt: 'string',
                    senderId: 1,
                    senderName: 'string',
                    recipientId: 2,
                    viewed: false
                }
            ],
            currentOpponent: {},
            sendMessageError: false
        })
    })
})