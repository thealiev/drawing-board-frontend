import { io } from "socket.io-client";
const URL =
  process.env.NODE_ENV === "production"
    ? "https://drawing-board-frontend-alpha.vercel.app/"
    : "http://localhost:5000";
export const socket = io(URL);