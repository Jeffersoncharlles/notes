import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'

export const AppLayout = () => {
  return (
    <main className='h-[90%] min-w-full bg-neutral-900 text-neutral-50 antialiased '>
      <div className='mx-auto max-w-6xl my-12 space-y-6'>
        <Header />
        <div className='h-px bg-neutral-700' />
        <Outlet />
      </div>
    </main>
  )
}