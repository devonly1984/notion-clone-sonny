"use client"
import { useTransition } from "react";
import { Button } from "./ui/button"
import { createNewDocument } from "@/lib/actions/document.actions";
import { useRouter } from "next/navigation";

const NewDocumentButton = () => {
    const [isPending,startTransition] = useTransition()
    const router = useRouter();
    const handleCreateNewDocument = ()=>{
        startTransition(async () => {
          const { docId } = await createNewDocument();

          router.push(`/doc/${docId}`);
        });   
    }
  return (
    <Button disabled={isPending} onClick={handleCreateNewDocument}>
      {isPending ? "Creating..." : "New Document"}
    </Button>
  );
}
export default NewDocumentButton