'use client'
import React from 'react'
import { User, Crown, Settings, LogOut, ChevronRight, Shield, Palette, CreditCard, HelpCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const menuItems = [
  { section:'Compte', items:[{icon:User,label:'Profil public',href:'#'},{icon:Shield,label:'Sécurité',href:'#'}] },
  { section:'Préférences', items:[{icon:Palette,label:'Apparence',href:'#'}] },
  { section:'Abonnement', items:[{icon:Crown,label:'Passer à Pro',href:'#',highlight:true},{icon:CreditCard,label:'Facturation',href:'#'}] },
]

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-dark-950 pb-20 md:pb-0">
      <header className="border-b border-dark-800/50 bg-dark-950/80 backdrop-blur-xl sticky top-0 z-40">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-4"><h1 className="text-2xl font-display font-bold text-dark-100">Mon compte</h1></div>
      </header>
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <div className="card p-6">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-500 to-pink-500 flex items-center justify-center text-white text-2xl font-bold shadow-glow">HP</div>
            <div className="flex-1"><h2 className="text-xl font-semibold text-dark-100">heliparacelse-netizen</h2><p className="text-dark-500 text-sm">heliparacelse@example.com</p><span className="inline-block mt-2 px-2 py-0.5 rounded-full bg-dark-800 text-xs text-dark-400">Gratuit</span></div>
            <Button variant="ghost" size="icon"><Settings className="w-5 h-5"/></Button>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {[{l:'Créations',v:'12'},{l:'Likes reçus',v:'234'},{l:'Abonnés',v:'18'}].map(s=>(<div key={s.l} className="card p-4 text-center"><div className="text-2xl font-bold text-dark-100">{s.v}</div><div className="text-xs text-dark-500 mt-1">{s.l}</div></div>))}
        </div>
        {menuItems.map(sec=>(
          <div key={sec.section} className="space-y-2">
            <h3 className="text-xs font-semibold text-dark-500 uppercase tracking-wider px-1">{sec.section}</h3>
            <div className="card divide-y divide-dark-800/50">
              {sec.items.map(item=>(<a key={item.label} href={item.href} className={`flex items-center justify-between p-4 hover:bg-dark-800/30 transition-colors ${item.highlight?'bg-primary-500/5':''}`}><div className="flex items-center gap-3"><item.icon className={`w-5 h-5 ${item.highlight?'text-primary-400':'text-dark-500'}`}/><span className={`font-medium ${item.highlight?'text-primary-400':'text-dark-200'}`}>{item.label}</span></div><ChevronRight className="w-4 h-4 text-dark-600"/></a>))}
            </div>
          </div>
        ))}
        <div className="pt-4"><Button variant="ghost" className="text-red-500 hover:text-red-400 hover:bg-red-500/10" leftIcon={<LogOut className="w-4 h-4"/>}>Déconnexion</Button></div>
        <div className="text-center pt-8 pb-8"><a href="#" className="inline-flex items-center gap-2 text-sm text-dark-500 hover:text-dark-300"><HelpCircle className="w-4 h-4"/>Besoin d&apos;aide ?</a></div>
      </main>
    </div>
  )
}
