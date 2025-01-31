"use server";

import { auth } from "@clerk/nextjs/server";
import { adminDb } from "../firebase/firebase-admin";
import liveblocks from "../liveblocks/liveblocks";

export const createNewDocument = async () => {
    auth().protect();
    const { sessionClaims } = await auth();
    const docCollectionRef = adminDb.collection('documents');
    const docRef = await docCollectionRef.add({
        title: "New Doc",

    })
    await adminDb
      .collection("users")
      .doc(sessionClaims?.email!)
      .collection("rooms")
      .doc(docRef.id)
      .set({
        userId: sessionClaims?.email!,
        role: "owner",
        createdAt: new Date(),
        roomId: docRef.id,
      });
      return { docId: docRef.id };


};
export const deleteDocument = async (roomId: string) => {
  auth().protect();
  try {
    //cascade and delete all references to document
    await adminDb.collection("documents").doc(roomId).delete();
    const query = await adminDb
      .collectionGroup("rooms")
      .where("roomId", "==", roomId)
      .get();
      const batch = adminDb.batch();
      query.docs.forEach(doc=>{
        batch.delete(doc.ref);
      })
      await batch.commit();
      await liveblocks.deleteRoom(roomId);
      return { success: true };
  } catch (error) { 
    console.log(error);
    return {success:false}
  }
};