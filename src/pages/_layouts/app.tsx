import { Outlet } from 'react-router-dom'

export const AppLayout = () => {
  return (
    <main className='h-screen min-w-full bg-neutral-900 text-neutral-50 antialiased'>
      <Outlet />
    </main>
  )
}