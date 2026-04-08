'use client'
import React, { useState } from 'react'
import { Heart, Bookmark, Search, TrendingUp, Clock } from 'lucide-react'

const inspirations = [
  { id:'1', title:'Salon minimaliste japonais', author:'Marie D.', avatar:'👩‍🎨', likes:1234, style:'Minimaliste' },
  { id:'2', title:'Loft industriel', author:'Thomas L.', avatar:'👨‍💼', likes:987, style:'Industriel' },
  { id:'3', title:'Chambre bohème', author:'Sophie M.', avatar:'👩‍🦰', likes:2156, style:'Bohème' },
  { id:'4', title:'Cuisine scandinave', author:'Lucas P.', avatar:'👨‍🍳', likes:756, style:'Scandinave' },
  { id:'5', title:'Bureau élégant', author:'Emma R.', avatar:'👩‍💻', likes:543, style:'Classique' },
  { id:'6', title:'Suite parentale luxe', author:'Nicolas B.', avatar:'👨', likes:1876, style:'Moderne' },
]

export default function InspirationPage() {
  const [activeTab, setActiveTab] = useState<'trending'|'recent'>('trending')
  return (
    <div className="min-h-screen bg-dark-950 pb-20 md:pb-0">
      <header className="border-b border-dark-800/50 bg-dark-950/80 backdrop-blur-xl sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div><h1 className="text-2xl font-display font-bold text-dark-100">Inspiration</h1><p className="text-sm text-dark-500 mt-1">Créations de la communauté</p></div>
            <div className="relative"><Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-dark-500"/><input type="text" placeholder="Rechercher..." className="input-field pl-10 py-2 text-sm w-64"/></div>
          </div>
          <div className="flex items-center gap-1 mt-4">
            <button onClick={()=>setActiveTab('trending')} className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium ${activeTab==='trending'?'bg-primary-500/20 text-primary-400':'text-dark-400 hover:bg-dark-800/50'}`}><TrendingUp className="w-4 h-4"/>Tendances</button>
            <button onClick={()=>setActiveTab('recent')} className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium ${activeTab==='recent'?'bg-primary-500/20 text-primary-400':'text-dark-400 hover:bg-dark-800/50'}`}><Clock className="w-4 h-4"/>Récent</button>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {inspirations.map((item,i)=>(
            <article key={item.id} className="break-inside-avoid card group cursor-pointer" style={{height:i%3===0?'420px':i%3===1?'360px':'380px'}}>
              <div className="relative h-2/3 bg-gradient-to-br from-dark-800 to-dark-900 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-30">{['🏠','🛋️','🌿','🍳','💼','🛏️'][i%6]}</div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 flex gap-2"><button className="p-2 rounded-full bg-white/20 text-white"><Heart className="w-4 h-4"/></button><button className="p-2 rounded-full bg-white/20 text-white"><Bookmark className="w-4 h-4"/></button></div>
                </div>
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-dark-900/80 text-xs font-medium text-dark-200">{item.style}</div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-dark-100 mb-2 group-hover:text-primary-400">{item.title}</h3>
                <div className="flex items-center gap-2 mb-3"><span>{item.avatar}</span><span className="text-sm text-dark-400">{item.author}</span></div>
                <div className="text-xs text-dark-500"><Heart className="w-3.5 inline"/>{item.likes.toLocaleString()}</div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  )
}
