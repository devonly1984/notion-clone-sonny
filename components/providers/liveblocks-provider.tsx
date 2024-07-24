"use client"
import { ReactNode } from "react"
import {LiveblocksProvider} from '@liveblocks/react/suspense'
const LiveBlocksProvider = ({children}:{children:ReactNode}) => {
    const {NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY:PUBLIC_KEY} = process.env 
    if (!PUBLIC_KEY) {
        throw new Error("Liveblocks public key must be set")
    }
  return (
      <LiveblocksProvider throttle={16} authEndpoint="/auth-endpoint">
        {children}
    </LiveblocksProvider>
  )
}
export default LiveBlocksProvider