'use client'
import React, { useState } from 'react'
import { Search, Grid3X3, LayoutList, Heart, Eye } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

const mockCreations = [
  { id: '1', name: 'Salon scandinave minimaliste', style: 'Scandinave', likes: 234, views: 1200 },
  { id: '2', name: 'Bureau industriel loft', style: 'Industriel', likes: 189, views: 890 },
  { id: '3', name: 'Chambre bohème cosy', style: 'Bohème', likes: 312, views: 1560 },
  { id: '4', name: 'Cuisine moderne épurée', style: 'Moderne', likes: 156, views: 720 },
  { id: '5', name: 'Salle à manger classique', style: 'Classique', likes: 98, views: 450 },
  { id: '6', name: 'Salle de bain spa', style: 'Minimaliste', likes: 267, views: 1100 },
]

export default function GalleryPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [searchQuery, setSearchQuery] = useState('')
  const filteredCreations = mockCreations.filter(c => c.name.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <div className="min-h-screen bg-dark-950 pb-20 md:pb-0">
      <header className="border-b border-dark-800/50 bg-dark-950/80 backdrop-blur-xl sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div><h1 className="text-2xl font-display font-bold text-dark-100">Mes créations</h1><p className="text-sm text-dark-500 mt-1">{filteredCreations.length} projets</p></div>
            <div className="flex items-center gap-3">
              <div className="relative flex-1 md:w-72"><Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-dark-500" /><input type="text" placeholder="Rechercher..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="input-field pl-10 py-2 text-sm" /></div>
              <div className="hidden md:flex items-center bg-dark-900 rounded-lg p-1">
                <button onClick={() => setViewMode('grid')} className={`p-2 rounded-md ${viewMode === 'grid' ? 'bg-primary-500 text-white' : 'text-dark-400'}`}><Grid3X3 className="w-4 h-4" /></button>
                <button onClick={() => setViewMode('list')} className={`p-2 rounded-md ${viewMode === 'list' ? 'bg-primary-500 text-white' : 'text-dark-400'}`}><LayoutList className="w-4 h-4" /></button>
              </div>
              <Link href="/create"><Button leftIcon={<span>+</span>}>Nouveau</Button></Link>
            </div>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredCreations.map(c => (
            <div key={c.id} className="card-interactive group cursor-pointer">
              <div className="aspect-[4/3] bg-gradient-to-br from-dark-800 to-dark-900 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center"><svg className="w-16 h-16 text-dark-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"><div className="absolute bottom-3 left-3 right-3 flex justify-end"><Link href="/editor"><button className="px-3 py-1.5 rounded-lg bg-primary-500 text-white text-xs font-medium">Éditer</button></Link></div></div>
              </div>
              <div className="p-4"><h3 className="font-semibold text-dark-100 text-sm mb-1 truncate group-hover:text-primary-400">{c.name}</h3><div className="flex items-center justify-between text-xs text-dark-500"><span>{c.style}</span><div className="flex gap-3"><span><Heart className="w-3 inline" />{c.likes}</span><span><Eye className="w-3 inline" />{c.views}</span></div></div></div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
