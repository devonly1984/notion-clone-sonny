"use client";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { useState, useTransition } from "react";
import { Button } from "./ui/button";
import { usePathname, useRouter } from "next/navigation";
import { deleteDocument } from "@/lib/actions/document.actions";
  

const DeleteDocument = () => {
    const [isOpen,setIsOpen] = useState(false);
    const [isPending,startTransition]  = useTransition()
    const pathName = usePathname();
    const router = useRouter()
    const handleDelete = ()=>{
        const roomId = pathName.split('/').pop()
        if (!roomId) {
            return;
        }
        startTransition(async()=>{
            const { success } = await deleteDocument(roomId)
            if (success) {
                setIsOpen(false);
                router.replace('');
                //toast.success("Room Deleted Successfully")
            }   else {
                //     toast.error("Failed to delete Room!")
            }
        })
    }
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <Button asChild variant="destructive">
              <DialogTrigger>Delete</DialogTrigger>
    </Button>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Are you absolutely sure you want to Delete?</DialogTitle>
        <DialogDescription>
                      This will delete this document and all its contents, removing all users from the document.
        </DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <Button type="button" variant="destructive" onClick={handleDelete} disabled={isPending}>
            {isPending ? "Deleting...":"Delete"}
        </Button>
        <DialogClose asChild>
            <Button type="button" variant="secondary">
                          Close
            </Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
  
  )
}
export default DeleteDocument