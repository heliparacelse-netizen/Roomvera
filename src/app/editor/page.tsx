'use client'
import React, { useState } from 'react'
import { Undo2, Redo2, ZoomIn, ZoomOut, RotateCcw, Save, Download, ChevronLeft, ChevronRight, PanelLeftClose, PanelRightClose, MousePointer2, Hand, Maximize2, Layers, Palette, Sun, Grid3X3 as GridIcon } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

const furnitureCategories = [
  { id: 'sofas', name: 'Canapés', emoji: '🛋️' }, { id: 'chairs', name: 'Fauteuils', emoji: '🪑' },
  { id: 'tables', name: 'Tables', emoji: '🔲' }, { id: 'beds', name: 'Lits', emoji: '🛏️' },
  { id: 'storage', name: 'Rangements', emoji: '🗄️' }, { id: 'lighting', name: 'Luminaires', emoji: '💡' },
  { id: 'plants', name: 'Plantes', emoji: '🌿' }, { id: 'decor', name: 'Déco', emoji: '🖼️' },
]
type Tool = 'select' | 'move' | 'rotate' | 'scale'

export default function EditorPage() {
  const [activeTool, setActiveTool] = useState<Tool>('select')
  const [zoom, setZoom] = useState(100)
  const [leftPanelOpen, setLeftPanelOpen] = useState(true)
  const [rightPanelOpen, setRightPanelOpen] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState('sofas')
  const [showGrid, setShowGrid] = useState(true)

  return (
    <div className="h-screen bg-dark-950 flex flex-col overflow-hidden">
      <header className="h-14 bg-dark-900 border-b border-dark-800 flex items-center justify-between px-4 flex-shrink-0">
        <div className="flex items-center gap-4">
          <Link href="/gallery" className="p-2 rounded-lg hover:bg-dark-800 text-dark-400"><ChevronLeft className="w-5 h-5" /></Link>
          <div className="h-6 w-px bg-dark-800" />
          <button className="p-2 rounded-lg hover:bg-dark-800 text-dark-400"><Undo2 className="w-4 h-4" /></button>
          <button className="p-2 rounded-lg hover:bg-dark-800 text-dark-400"><Redo2 className="w-4 h-4" /></button>
          <div className="h-6 w-px bg-dark-800" />
          {[{id:'select' as Tool,icon:MousePointer2},{id:'move' as Tool,icon:Hand},{id:'rotate' as Tool,icon:RotateCcw},{id:'scale' as Tool,icon:Maximize2}].map(t=>(<button key={t.id} onClick={()=>setActiveTool(t.id)} className={`p-2 rounded-lg ${activeTool===t.id?'bg-primary-500/20 text-primary-400':'hover:bg-dark-800 text-dark-400'}`}>{<t.icon className="w-4 h-4"/>}</button>))}
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 bg-dark-800 rounded-lg p-1">
            <button onClick={()=>setZoom(z=>Math.max(25,z-25))} className="p-1.5 rounded hover:bg-dark-700 text-dark-400"><ZoomOut className="w-4 h-4"/></button>
            <span className="text-xs text-dark-300 font-mono w-12 text-center">{zoom}%</span>
            <button onClick={()=>setZoom(z=>Math.min(200,z+25))} className="p-1.5 rounded hover:bg-dark-700 text-dark-400"><ZoomIn className="w-4 h-4"/></button>
          </div>
          <button onClick={()=>setShowGrid(!showGrid)} className={`p-2 rounded-lg ${showGrid?'bg-primary-500/20 text-primary-400':'text-dark-400 hover:bg-dark-800'}`}><GridIcon className="w-4 h-4"/></button>
          <Button variant="ghost" size="sm" leftIcon={<Save className="w-4 h-4"/>}>Save</Button>
          <Button size="sm" leftIcon={<Download className="w-4 h-4"/>}>Export</Button>
        </div>
      </header>
      <div className="flex-1 flex overflow-hidden">
        {leftPanelOpen && (<aside className="w-64 bg-dark-900 border-r border-dark-800 flex flex-col flex-shrink-0">
          <div className="p-4 border-b border-dark-800 flex items-center justify-between"><h2 className="font-semibold text-dark-200 text-sm">Meubles</h2><button onClick={()=>setLeftPanelOpen(false)} className="p-1 rounded hover:bg-dark-800 text-dark-500"><PanelLeftClose className="w-4 h-4"/></button></div>
          <div className="p-2 border-b border-dark-800"><div className="grid grid-cols-4 gap-1">{furnitureCategories.map(cat=><button key={cat.id} onClick={()=>setSelectedCategory(cat.id)} className={`flex flex-col items-center gap-1 p-2 rounded-lg ${selectedCategory===cat.id?'bg-primary-500/20 text-primary-400':'hover:bg-dark-800 text-dark-400'}`}><span className="text-lg">{cat.emoji}</span><span className="text-[10px] leading-tight">{cat.name}</span></button>)}</div></div>
          <div className="flex-1 p-3 border-t border-dark-800 space-y-2"><Button variant="secondary" size="sm" fullWidth leftIcon={<Layers className="w-4 h-4"/>}>Calques</Button><Button variant="secondary" size="sm" fullWidth leftIcon={<Palette className="w-4 h-4"/>}>Couleurs</Button></div>
        </aside>)}
        {!leftPanelOpen && <button onClick={()=>setLeftPanelOpen(true)} className="w-8 bg-dark-900 border-r border-dark-800 flex items-center justify-center hover:bg-dark-800 text-dark-500"><ChevronRight className="w-4 h-4"/></button>}
        <main className="flex-1 relative overflow-hidden bg-dark-950" style={{backgroundImage:showGrid?'radial-gradient(circle,#374151 1px,transparent 1px)':'none',backgroundSize:'20px 20px'}}>
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <div className="relative w-[800px] h-[600px] bg-gradient-to-br from-dark-800/50 to-dark-900/50 rounded-2xl border-2 border-dashed border-dark-700 shadow-2xl">
              <div className="absolute top-20 left-20 w-48 h-24 bg-blue-900/30 rounded-lg border-2 border-blue-500/50 flex items-center justify-center cursor-move text-4xl">🛋️</div>
              <div className="absolute top-56 right-32 w-20 h-20 bg-amber-900/30 rounded-lg border-2 border-amber-500/50 flex items-center justify-center cursor-move text-3xl">🪑</div>
              <div className="absolute bottom-24 left-1/2 -translate-x-1/2 w-32 h-16 bg-orange-900/30 rounded-lg border-2 border-orange-500/50 flex items-center justify-center cursor-move text-3xl">🟫</div>
              <div className="absolute top-16 right-20 w-16 h-20 bg-green-900/30 rounded-lg border-2 border-green-500/50 flex items-center justify-center cursor-move text-3xl">🌿</div>
            </div>
          </div>
        </main>
        {rightPanelOpen && (<aside className="w-72 bg-dark-900 border-l border-dark-800 flex flex-col flex-shrink-0">
          <div className="p-4 border-b border-dark-800 flex items-center justify-between"><h2 className="font-semibold text-dark-200 text-sm">Propriétés</h2><button onClick={()=>setRightPanelOpen(false)} className="p-1 rounded hover:bg-dark-800 text-dark-500"><PanelRightClose className="w-4 h-4"/></button></div>
          <div className="flex-1 overflow-y-auto p-4 space-y-6">
            <div className="space-y-3"><h3 className="text-xs font-semibold text-dark-500 uppercase">Position</h3><div className="grid grid-cols-2 gap-3"><div><label className="text-xs text-dark-500 mb-1 block">X</label><input type="number" defaultValue={245} className="input-field py-2 text-sm"/></div><div><label className="text-xs text-dark-500 mb-1 block">Y</label><input type="number" defaultValue={180} className="input-field py-2 text-sm"/></div></div></div>
            <div className="space-y-3"><h3 className="text-xs font-semibold text-dark-500 uppercase">Rotation</h3><input type="range" min="0" max="360" defaultValue={0} className="w-full accent-primary-500"/></div>
            <div className="space-y-3"><h3 className="text-xs font-semibold text-dark-500 uppercase">Éclairage</h3><input type="range" min="0" max="100" defaultValue={85} className="w-full accent-primary-500"/></div>
          </div>
          <div className="p-4 border-t border-dark-800 space-y-2"><Button variant="secondary" size="sm" fullWidth leftIcon={<Sun className="w-4 h-4"/>}>Éclairage IA</Button><Button size="sm" fullWidth leftIcon={<Palette className="w-4 h-4"/>}>Recolorier IA</Button></div>
        </aside>)}
      </div>
    </div>
  )
}
