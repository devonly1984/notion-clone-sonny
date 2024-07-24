import RoomProvider from "@/components/providers/room-provider";
import { auth } from "@clerk/nextjs/server";
import { ReactNode } from "react";

const DocLayout = ({ children, params: { id } }: { children: ReactNode, params: { id: string } }) => {
    auth().protect();
  return (
    <RoomProvider roomId={id}>{children}</RoomProvider>
  )
}
export default DocLayout