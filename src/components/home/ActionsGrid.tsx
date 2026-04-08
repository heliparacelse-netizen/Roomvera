import React from 'react'
import { Wand2, Eraser, ScanLine, Palette, SunMoon, Maximize2 } from 'lucide-react'
import { cn } from '@/lib/utils'

const actions = [
  {i:Wand2,l:'Ajouter des meubles',d:'Parcourir le catalogue',c:'from-blue-500 to-cyan-500'},
  {i:Eraser,l:'Retirer des meubles',d:'Supprimer facilement',c:'from-red-500 to-orange-500'},
  {i:ScanLine,l:'Désencombrer',d:'Optimiser l\'espace',c:'from-green-500 to-emerald-500'},
  {i:Palette,l:'Changer le style',d:'Nouvelle ambiance',c:'from-purple-500 to-pink-500'},
  {i:SunMoon,l:'Météo & saisons',d:'Éclairage adapté',c:'from-amber-500 to-yellow-500'},
  {i:Maximize2,l:'Améliorer',d:'Qualité HD',c:'from-indigo-500 to-blue-500'},
]

export function ActionsGrid() {
  return (
    <div>
      <h2 className="text-2xl font-display font-bold text-dark-100 mb-6">Actions rapides</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {actions.map((a,i)=>(
          <button key={i} className="group card-interactive p-4 text-left">
            <div className={cn('w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300',a.c)}><a.i className="w-6 h-6 text-white"/></div>
            <h3 className="font-semibold text-dark-100 text-sm mb-1 group-hover:text-primary-400">{a.l}</h3>
            <p className="text-xs text-dark-500">{a.d}</p>
          </button>
        ))}
      </div>
    </div>
  )
}
