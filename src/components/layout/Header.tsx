'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, PlusCircle, FolderOpen, Lightbulb, Menu, X, Search, Crown, User } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

const nav = [{ name:'Accueil', href:'/', icon:Home },{ name:'Créer', href:'/create', icon:PlusCircle },{ name:'Créations', href:'/gallery', icon:FolderOpen },{ name:'Inspiration', href:'/inspiration', icon:Lightbulb }]

export function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 glass-effect border-b border-dark-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center shadow-glow"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg></div>
          <span className="text-xl font-display font-bold text-dark-100">Room<span className="text-primary-400">vera</span></span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {nav.map(n => (<Link key={n.name} href={n.href} className={cn('flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all', pathname===n.href?'bg-primary-500/10 text-primary-400':'text-dark-400 hover:text-dark-200 hover:bg-dark-800/50')}><n.icon className="w-4 h-4"/>{n.name}</Link>))}
        </nav>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="hidden md:flex"><Search className="w-5 h-5"/></Button>
          <span className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 text-amber-400 text-xs"><Crown className="w-3.5 h-3.5"/>PRO</span>
          <button className="w-9 h-9 rounded-full bg-gradient-to-br from-primary-500 to-pink-500 flex items-center justify-center text-white text-sm shadow-glow"><User className="w-4 h-4"/></button>
          <button onClick={()=>setOpen(!open)} className="md:hidden p-2 rounded-lg hover:bg-dark-800/50 text-dark-400">{open?<X className="w-6 h-6"/>:<Menu className="w-6 h-6"/>}</button>
        </div>
      </div>
      {open && (<nav className="md:hidden border-t border-dark-800/50 animate-fade-in px-4 py-3 space-y-1">{nav.map(n=>(<Link key={n.name} href={n.href} onClick={()=>setOpen(false)} className={cn('flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium', pathname===n.href?'bg-primary-500/10 text-primary-400':'text-dark-400 hover:text-dark-200 hover:bg-dark-800/50')}><n.icon className="w-5 h-5"/>{n.name}</Link>))}</nav>)}
    </header>
  )
}
