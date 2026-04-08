'use client'
import React, { useState } from 'react'
import { Wand2, Upload, Camera, Sparkles, ArrowLeft, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

const styles = [
  { id: 'modern', name: 'Moderne', emoji: '🏢', color: 'from-blue-500 to-cyan-500' },
  { id: 'minimalist', name: 'Minimaliste', emoji: '⬜', color: 'from-gray-500 to-slate-600' },
  { id: 'scandinavian', name: 'Scandinave', emoji: '🌲', color: 'from-amber-400 to-orange-500' },
  { id: 'industrial', name: 'Industriel', emoji: '🏭', color: 'from-zinc-600 to-zinc-800' },
  { id: 'bohemian', name: 'Bohème', emoji: '🌺', color: 'from-pink-500 to-rose-600' },
  { id: 'classic', name: 'Classique', emoji: '🏛️', color: 'from-amber-600 to-yellow-700' },
]

const roomTypes = [
  { id: 'living-room', name: 'Salon', emoji: '🛋️' }, { id: 'bedroom', name: 'Chambre', emoji: '🛏️' },
  { id: 'kitchen', name: 'Cuisine', emoji: '🍳' }, { id: 'bathroom', name: 'Salle de bain', emoji: '🚿' },
  { id: 'office', name: 'Bureau', emoji: '💼' }, { id: 'dining', name: 'Salle à manger', emoji: '🍽️' },
]

export default function CreatePage() {
  const [step, setStep] = useState(1)
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null)
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)

  const handleGenerate = async () => {
    setIsGenerating(true)
    await new Promise(resolve => setTimeout(resolve, 3000))
    setIsGenerating(false)
    window.location.href = '/editor'
  }

  return (
    <div className="min-h-screen bg-dark-950">
      <header className="border-b border-dark-800/50 bg-dark-950/80 backdrop-blur-xl sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-dark-400 hover:text-dark-200"><ArrowLeft className="w-5 h-5" /> Retour</Link>
          <div className="flex items-center gap-2">{[1, 2, 3].map(s => (<div key={s} className={`h-1.5 rounded-full transition-all ${s <= step ? 'w-16 bg-primary-500' : 'w-8 bg-dark-800'}`} />))}</div>
          <Button variant="ghost" size="sm" disabled={step === 3} onClick={() => setStep(s => Math.min(3, s + 1))}>Suivant <ArrowRight className="w-4 h-4 ml-1" /></Button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {step === 1 && (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center space-y-3"><h1 className="text-3xl md:text-4xl font-display font-bold text-dark-100">Quelle pièce voulez-vous créer ?</h1><p className="text-dark-400 text-lg">Sélectionnez le type d&apos;espace</p></div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {roomTypes.map(room => (<button key={room.id} onClick={() => setSelectedRoom(room.id)} className={`card p-6 text-center group ${selectedRoom === room.id ? 'ring-2 ring-primary-500 bg-primary-500/10' : ''}`}><span className="text-4xl mb-3 block group-hover:scale-110 transition-transform">{room.emoji}</span><span className="font-medium text-dark-200 text-sm">{room.name}</span></button>))}
            </div>
            <div className="flex justify-center pt-8"><Button size="lg" disabled={!selectedRoom} onClick={() => setStep(2)} rightIcon={<ArrowRight className="w-5 h-5" />}>Continuer</Button></div>
          </div>
        )}
        {step === 2 && (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center space-y-3"><h1 className="text-3xl md:text-4xl font-display font-bold text-dark-100">Choisissez votre style</h1><p className="text-dark-400 text-lg">L&apos;IA s&apos;adaptera à votre préférence</p></div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {styles.map(style => (<button key={style.id} onClick={() => setSelectedStyle(style.id)} className={`card overflow-hidden group ${selectedStyle === style.id ? 'ring-2 ring-primary-500' : ''}`}><div className={`aspect-[4/3] bg-gradient-to-br ${style.color} flex items-center justify-center`}><span className="text-6xl group-hover:scale-125 transition-transform duration-300">{style.emoji}</span></div><div className="p-4"><h3 className="font-semibold text-dark-100">{style.name}</h3></div></button>))}
            </div>
            <div className="flex justify-center gap-4 pt-8"><Button variant="secondary" onClick={() => setStep(1)}>Retour</Button><Button size="lg" disabled={!selectedStyle} onClick={() => setStep(3)} rightIcon={<ArrowRight className="w-5 h-5" />}>Continuer</Button></div>
          </div>
        )}
        {step === 3 && (
          <div className="max-w-3xl mx-auto space-y-8 animate-fade-in">
            <div className="text-center space-y-3"><h1 className="text-3xl md:text-4xl font-display font-bold text-dark-100">Derniers détails</h1><p className="text-dark-400 text-lg">Décrivez votre vision</p></div>
            <div className="card p-6 space-y-6">
              <div><label className="block text-sm font-medium text-dark-300 mb-2">Description (optionnel)</label><textarea placeholder="Ex: Un salon lumineux..." className="input-field min-h-[150px] resize-none" /></div>
              <div className="flex items-center justify-between p-4 rounded-xl bg-dark-900/50 border border-dark-800"><div className="flex items-center gap-3"><Camera className="w-5 h-5 text-primary-400" /><span className="text-sm text-dark-300">Importer une photo</span></div><Button variant="ghost" size="sm"><Upload className="w-4 h-4 mr-2" />Upload</Button></div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-dark-900/50 border border-dark-800"><div className="text-xs text-dark-500 mb-1">Pièce</div><div className="font-medium text-dark-200">{roomTypes.find(r => r.id === selectedRoom)?.name || '-'}</div></div>
                <div className="p-4 rounded-xl bg-dark-900/50 border border-dark-800"><div className="text-xs text-dark-500 mb-1">Style</div><div className="font-medium text-dark-200 capitalize">{selectedStyle || '-'}</div></div>
              </div>
            </div>
            <div className="flex justify-center gap-4 pt-4"><Button variant="secondary" onClick={() => setStep(2)}>Retour</Button><Button size="lg" isLoading={isGenerating} leftIcon={<Sparkles className="w-5 h-5" />} onClick={handleGenerate}>{isGenerating ? 'Génération...' : 'Générer avec l\'IA'}</Button></div>
          </div>
        )}
      </main>
    </div>
  )
}
