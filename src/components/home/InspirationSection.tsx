import React from 'react'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function InspirationSection() {
  return (
    <section className="py-16 bg-dark-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <div><h2 className="text-2xl font-display font-bold text-dark-100 mb-2">Inspiration du jour</h2><p className="text-dark-500 text-sm">Découvrez des créations de la communauté</p></div>
          <Button variant="ghost" size="sm" rightIcon={<ArrowRight className="w-4 h-4"/>}>Explorer</Button>
        </div>
        <div className="flex gap-2 mb-6 overflow-x-auto scrollbar-hide pb-2">
          {['Moderne','Minimaliste','Scandinave','Industriel','Boho'].map((s,i)=><button key={s} className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${i===0?'bg-primary-500 text-white shadow-glow':'bg-dark-800 text-dark-400 hover:bg-dark-700'}`}>{s}</button>)}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array(4).fill(null).map((_,i)=>(
            <div key={i} className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-dark-800 cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-dark-700 to-dark-800 flex items-center justify-center"><svg className="w-12 h-12 text-dark-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg></div>
              <div className="absolute inset-0 bg-primary-500/10 opacity-0 group-hover:opacity-100 transition-opacity"/>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
