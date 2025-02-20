import io from "socket.io-client"

export const socket = io("http://localhost:4444", {
    transports: ['websocket'],
    autoConnect: true
});
