import { Bell, Settings } from 'lucide-react'
import { ModeToggle } from './theme/mode-toggle'

import { Utensils } from 'lucide-react'
import { Link } from 'react-router-dom'
import { AccountMenu } from './account-menu'

export function Header() {
  return (
    <header className="h-36 flex items-center justify-between px-4 py-2 border-b">
      <div className="flex items-center">
        <Link to="/" className="text-xl font-bold text-accent-foreground">
          Divina Picanha
        </Link>
        <Utensils className="pl-2" width={26}/>
      </div>

      <div className="flex items-center gap-6">
        <ModeToggle />
        <Link  to="/notifications" className="inline-block mr-4">
          <Bell className="w-10 h-10 dark:text-white hover:bg-muted border rounded-full p-2" />
        </Link>
        <Link to="/settings" className="inline-block mr-4">
          <Settings className="w-10 h-10 dark:text-white hover:bg-muted border rounded-full p-2"  />
        </Link>
        
          <div className="flex items-center gap-4">
            <div className="flex flex-col">
              <span className="text-sm text-accent-foreground">Lucas Freire</span>
              <span className="text-xs text-center text-muted-foreground">admin</span>
            </div>
            <AccountMenu />
          </div>
      </div>
    </header>
  )
}
