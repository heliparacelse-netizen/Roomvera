'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, PlusCircle, FolderOpen, Lightbulb, User } from 'lucide-react'
import { cn } from '@/lib/utils'

const nav = [{name:'Accueil',href:'/',icon:Home},{name:'Créer',href:'/create',icon:PlusCircle},{name:'Créations',href:'/gallery',icon:FolderOpen},{name:'Idées',href:'/inspiration',icon:Lightbulb},{name:'Profil',href:'/profile',icon:User}]

export function MobileNav() {
  const path = usePathname()
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden glass-effect border-t border-dark-800/50">
      <div className="flex items-center justify-around px-2 py-2">
        {nav.map(n=>(
          <Link key={n.name} href={n.href} className={cn('flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition-all min-w-[64px]',path===n.href&&!n.name.startsWith('Cré')?'text-primary-400':'text-dark-500')}>
            <div className={cn('flex items-center justify-center w-10 h-10 rounded-xl transition-all',n.name==='Créer'?'bg-gradient-to-br from-primary-500 to-purple-600 text-white shadow-glow -mt-4':path===n.href&&n.name!=='Créer'?'bg-primary-500/10':'')}>
              <n.icon className={n.name==='Créer'?'w-6 h-6':'w-5 h-5'}/>
            </div>
            <span className="text-[10px] font-medium">{n.name}</span>
          </Link>
        ))}
      </div>
    </nav>
  )
}
