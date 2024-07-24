import LiveBlocksProvider from "@/components/providers/liveblocks-provider"
import { ReactNode } from "react"

const DocumentLayout = ({ children }: { children: ReactNode }) => {
  return (
      <LiveBlocksProvider>
        {children}
      </LiveBlocksProvider>
  )
}
export default DocumentLayout