// src/lib/socket.js
import { io } from "socket.io-client";

const SOCKET_URL = "http://3.36.51.2:3000";

let socket = null;

export function initSocket() {
    
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1OGIyZmUyMS1lZDlhLTRhMDctODY4Zi1iOWM2NDEzM2ZhOTAiLCJyb2xlIjoiVVNFUiIsInR5cCI6ImFjY2VzcyIsInRva2VuX3R5cGUiOiJhY2Nlc3MiLCJpYXQiOjE3NjM4MTAyOTcsImV4cCI6MTc5NTM0NjI5NywiYXVkIjoid2ViIiwiaXNzIjoibXktYmFja2VuZC1hcGkifQ.IqcRquANqPend0843pWGqyIglxdEE6JJA5N-wLgimbc"

    if (socket) {
        socket.disconnect();
        socket = null;
    }

      socket = io(SOCKET_URL, {
        transports: ["websocket"],
        auth: {
            token : `Bearer ${token}`
        }
    });


    socket.on("connect", () => {
        console.log("[socket] connected:", socket.id);
    });

    socket.on("disconnect", (reason) => {
        console.log("[socket] disconnected:", reason);
    });

    socket.on("connect_error", (err) => {
        console.error("[socket] connect_error:", err.message);
    });

    return socket;
    }

export function getSocket() {

    if (!socket) {
        socket = initSocket();
    }

    return socket;
}

export function disconnectSocket() {

    if (socket) {
        socket.disconnect();
        socket = null;
    }
}