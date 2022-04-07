import reduceDialogs from "./reduceDialogs"
import reduceProfile from "./reduceProfile"

let store = {
    _reRenderAll() { },

    _state: {
        dialogsPage: {
            friends: [
                { name: 'Friend1', id: 1, avaLink: 'https://image.shutterstock.com/image-vector/vector-male-face-avatar-logo-260nw-426321556.jpg' },
                { name: 'Friend2', id: 2, avaLink: 'https://image.shutterstock.com/image-vector/vector-male-face-avatar-logo-260nw-426321556.jpg' },
                { name: 'Friend3', id: 3, avaLink: 'https://image.shutterstock.com/image-vector/vector-male-face-avatar-logo-260nw-426321556.jpg' },
                { name: 'Friend4', id: 4, avaLink: 'https://image.shutterstock.com/image-vector/vector-male-face-avatar-logo-260nw-426321556.jpg' },
                { name: 'Friend5', id: 5, avaLink: 'https://image.shutterstock.com/image-vector/vector-male-face-avatar-logo-260nw-426321556.jpg' }
            ],
            messages: [
                { message: 'Lorem ipsum dolor sit amet.', id: 1 },
                { message: 'Lorem ipsum dolor amet.', id: 2 },
                { message: 'Lorem ipsum dolor.', id: 3 }
            ],
            updateInput: ''
        },

        profilePage: {
            posts: [
                { text: 'Lorem ipsum dolor sit amet.', likes: '19' },
                { text: 'Lorem ipsum dolor', likes: '15' }
            ],
            updateInput: ''
        },

        friendsSection: {
            friends: [
                { name: 'Friend1', avaLink: 'https://image.shutterstock.com/image-vector/vector-male-face-avatar-logo-260nw-426321556.jpg' },
                { name: 'Friend2', avaLink: 'https://image.shutterstock.com/image-vector/vector-male-face-avatar-logo-260nw-426321556.jpg' },
                { name: 'Friend3', avaLink: 'https://image.shutterstock.com/image-vector/vector-male-face-avatar-logo-260nw-426321556.jpg' }
            ]
        }
    },

    getState() {
        return this._state
    },

    subscribe(observer) {
        this._reRenderAll = observer;
    },

    dispatch(action) {
        this._state.profilePage = reduceProfile(this._state.profilePage, action);
        this._state.dialogsPage = reduceDialogs(this._state.dialogsPage, action);

        this._reRenderAll(this._state);
    },

}

export default store;