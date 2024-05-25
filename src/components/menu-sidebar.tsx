import { LogOut, HomeIcon, LucideWorkflow } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
export function MenuSidebar() {
  const location = useLocation();

  const getLinkClass = (path:string) => {
    return location.pathname === path ? 'flex items-center pl-2 bg-red-500 h-12 text-white border-l-4 border-red-900' : 'flex items-center pl-2 h-12 hover:bg-muted dark:hover:bg-muted/50';
  };
  return (
    <div className="w-1/6 bg-background shadow-lg z-50 flex flex-col">
      <div className="flex justify-center p-6">
        <img className="w-20 h-20" src="/img/logomarca.svg" alt="Logomarca" />
      </div>

      <div className="flex-grow flex flex-col justify-between">
        <div className="flex flex-col mt-4">
          <Link className={getLinkClass('/')} to='/'>
            <div className='flex items-center'>
            <HomeIcon className="mr-2 h-4 w-4" />

            Início
            </div>
          </Link>
          <Link className={getLinkClass('/vacanaices')} to='/vacanaices'>
            <div className="flex items-center">
              <LucideWorkflow className="mr-2 h-4 w-4" />

              Vagas
            </div>
          </Link>
          {/* <Link className={getLinkClass('/delivery')} to='/delivery'>Entregas</Link> */}
          {/* <Link className={getLinkClass('/minha-conta')} to='/minha-conta'>Minha conta</Link> */}
        </div>
      </div>
    </div>
  )
}
