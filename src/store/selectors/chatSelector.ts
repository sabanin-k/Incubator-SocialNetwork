import { TGlobalState } from "../reduxStore"

export const getChatMessagesSelector = (state: TGlobalState) => state.chat.messages