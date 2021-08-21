import { useAuth } from '@vueuse/firebase'
import { boot } from 'quasar/wrappers'
import { auth } from './firebase'

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ urlPath }) => {
  console.log(urlPath);
  const { isAuthenticated } = useAuth(auth);
  if (!isAuthenticated.value && !urlPath.startsWith('/login')) {
    return Promise.reject({ url: '/login' });
  }
})
