import { getChatConnectStatusSelector, getChatMessagesSelector, isFetchingSelector } from '../selectors/chatSelector'
import { TGlobalState } from '../reduxStore'

const state = {
    profilePage: { posts: [], updateInput: '' },
    dialogsPage: { opponents: [], messages: [], currentOpponent: {}, sendMessageError: false },
    friendsSection: { friends: [], totalFriends: 0 },
    newsPage: { news: [], isFetching: true, hasContent: [], nextPage: 1, scrollFetching: true, catregories: ['technology'] },
    usersPage: { users: [], totalCount: 10, pageSize: 10, currentPage: 1, isFetching: true, inProgressFollow: [], searchTerm: '' },
    userProfilePage: { userProfile: { aboutMe: null, contacts: { facebook: null, website: null, vk: null, twitter: null, instagram: null, youtube: null, github: null, mainLink: null }, lookingForAJob: false, lookingForAJobDescription: null, fullName: 'const', userId: 23718, photos: { small: null, large: null } }, status: null },
    auth: { id: 23718, email: 'constantine.sex@mail.ru', login: 'const', isLogged: true, errorMessage: null, captchaURL: null, isNavMenu: false },
    app: { initialized: true },
    chat: {
        messages: [{
            userId: 14506,
            userName: "Vadim S",
            message: "dawd",
            photo: "https://social-network.samuraijs.com/activecontent/images/users/14506/user-small.jpg?v=23"
        }], connectStatus: 'OK', isFetching: false
    }
} as TGlobalState

describe('CHAT SELECTOR', () => {
    test('gets messages', () => {
        expect(getChatMessagesSelector(state)).toEqual(
            [{
                userId: 14506,
                userName: "Vadim S",
                message: "dawd",
                photo: "https://social-network.samuraijs.com/activecontent/images/users/14506/user-small.jpg?v=23"
            }]
        )
    })

    test('gets connect-status', () => {
        expect(getChatConnectStatusSelector(state)).toEqual(
            'OK'
        )
    })

    test('gets isFetching', () => {
        expect(isFetchingSelector(state)).toEqual(
            false
        )
    })
})