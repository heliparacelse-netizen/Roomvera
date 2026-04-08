import React from 'react'
import Link from 'next/link'
import { ArrowRight, Heart, Eye } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const creations = [
  {id:'1',n:'Salon scandinave',s:'Scandinave',l:234,v:1200},
  {id:'2',n:'Bureau minimaliste',s:'Minimaliste',l:189,v:890},
  {id:'3',n:'Chambre bohème',s:'Bohème',l:312,v:1560},
  {id:'4',n:'Cuisine industrielle',s:'Industriel',l:156,v:720},
]

export function RecentCreations() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-display font-bold text-dark-100">Mes créations récentes</h2>
        <Link href="/gallery"><Button variant="ghost" size="sm" rightIcon={<ArrowRight className="w-4 h-4"/>}>Voir tout</Button></Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {creations.map(c=>(
          <div key={c.id} className="card-interactive group cursor-pointer">
            <div className="aspect-[4/3] bg-gradient-to-br from-dark-800 to-dark-900 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center"><svg className="w-16 h-16 text-dark-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity"><div className="absolute bottom-3 left-3 right-3 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity"><Link href="/editor"><button className="px-3 py-1.5 rounded-lg bg-primary-500 text-white text-xs font-medium">Éditer</button></Link></div></div>
            </div>
            <div className="p-3"><h3 className="font-semibold text-dark-100 text-sm mb-1 truncate group-hover:text-primary-400">{c.n}</h3><div className="flex items-center justify-between text-xs text-dark-500"><span>{c.s}</span><div className="flex gap-3"><span><Heart className="w-3 inline"/>{c.l}</span><span><Eye className="w-3 inline"/>{c.v}</span></div></div></div>
          </div>
        ))}
      </div>
    </div>
  )
}
