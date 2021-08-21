import { auth } from 'src/boot/firebase';
const authentication ={
  login: async (email: string, password: string): Promise<void> => {
    try {
      await auth.signInWithEmailAndPassword(email, password)
    } catch (error) {
      
    }
  }
}

export default authentication;