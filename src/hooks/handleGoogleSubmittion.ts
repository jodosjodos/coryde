import { signInWithGoogle } from "../config/firebase"

export const handleGoogleSubmition=async()=>{
   const {user:{displayName,email}}=await signInWithGoogle()
   return { displayName,email}
    
}