let subscribers = [] as TSubscribers[]

let ws: WebSocket | null

const handleClose = () => {
    console.log('WS CLOSED');
    setTimeout(createChanel, 5000)
}
const handleMessage = (event: MessageEvent) => {
    const newMessages = JSON.parse(event.data)
    subscribers.forEach(s => s(newMessages))
}
const createChanel = () => {
    ws?.removeEventListener('close', handleClose)
    ws?.close()
    ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
    ws.addEventListener('close', handleClose)
    ws.addEventListener('message', handleMessage)
}

export const webSocket = {
    start: () => createChanel(),
    stop: () => {
        subscribers = []
        ws?.removeEventListener('close', handleClose)
        ws?.removeEventListener('message', handleMessage)
        ws?.close()
    },
    subscribe: (callback: TSubscribers) => {
        subscribers.push(callback)
    },
    unsubscribe: (callback: TSubscribers) => {
        subscribers = subscribers.filter(s => s !== callback)
    },
    sendMessage: (message: string) => {
        ws?.send(message)
    }
}


export type TMessages = {
    userId: number
    userName: string
    message: string
    photo: string
}
type TSubscribers = (messages: TMessages[]) => void