import { DocumentData } from "firebase/firestore";

export type User = {
  fullName: string;
  email: string;
  image: string;
};
export interface RoomDocument extends DocumentData {
  createdAt: string;
  role: "owner" | "editor";
  roomId: string;
  userId: string;
}