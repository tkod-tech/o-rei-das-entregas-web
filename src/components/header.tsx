import { Bell, Settings } from 'lucide-react'
import { ModeToggle } from './theme/mode-toggle'

import { Utensils } from 'lucide-react'
import { Link } from 'react-router-dom'
import { AccountMenu } from './account-menu'
import { useUser } from '@/context/UserContext'

export function Header() {
  const { user, loading } = useUser();

  return (
    <header className="h-36 flex items-center justify-between px-4 py-2 border-b">
      <div className="flex items-center">
        <Link to="/" className="text-xl font-bold text-accent-foreground">
          {user?.storeName}
        </Link>
        <Utensils className="pl-2" width={26}/>
      </div>

      <div className="flex items-center gap-6">
        <ModeToggle />
        <Link to="/notifications" className="inline-block mr-4">
          <Bell className="w-10 h-10 dark:text-white hover:bg-muted border rounded-full p-2" />
        </Link>
        <Link to="/settings" className="inline-block mr-4">
          <Settings className="w-10 h-10 dark:text-white hover:bg-muted border rounded-full p-2"  />
        </Link>
     
        {user && !loading && (
          <div className="flex items-center gap-4">
            <div className="flex flex-col">
              <span className="text-sm text-accent-foreground">{user?.name}</span>
              <span className="text-xs text-center text-muted-foreground">{user?.documento}</span>
            </div>
            <AccountMenu />
          </div>
        )}
      </div>
    </header>
  );
}

