import { Header } from '@/components/header'
import { MenuSidebar } from '@/components/menu-sidebar'
import { Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    // <div className=" flex min-h-screen flex-col antialiased">
    //   <Header />
    //   <MenuSidebar />
    //   <div className="flex flex-1 flex-col gap-4 p-8 pt-6">
    //     <Outlet />
    //   </div>
    // </div>

    <div className="flex h-screen">
      {/*MenuSidebar */}
      <MenuSidebar />

      {/* Conteúdo principal */}
      <div className="flex-grow flex flex-col">
        <Header />
        <Outlet />
      </div>
    </div>

  )
}

