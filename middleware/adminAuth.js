export default function ({ store, redirect }) {
  if (!store.state?.user?.user?.isAdmin) {
    return redirect('/login')
  }
}
