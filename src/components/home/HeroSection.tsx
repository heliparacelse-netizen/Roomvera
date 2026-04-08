import React from 'react'
import Link from 'next/link'
import { ArrowRight, Sparkles, Play } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-950/40 via-dark-950 to-purple-950/30"/>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow"/>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow delay-1000"/>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 md:pt-24 md:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium"><Sparkles className="w-4 h-4"/>Propulsé par l&apos;IA</div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight">Transformez <span className="gradient-text">votre intérieur</span> avec l&apos;IA</h1>
            <p className="text-lg text-dark-400 max-w-lg">Découvrez votre vision, notre IA la rend réalité. Créez, visualisez et perfectionnez vos espaces en quelques clics.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/create"><Button size="lg" leftIcon={<Sparkles className="w-5 h-5"/>} rightIcon={<ArrowRight className="w-5 h-5"/>}>Commencer</Button></Link>
              <Button variant="secondary" size="lg" leftIcon={<Play className="w-5 h-5"/>}>Voir un exemple</Button>
            </div>
            <div className="flex items-center gap-8 pt-4">
              {[{v:'50K+',l:'Créations'},{v:'4.9★',l:'Note'},{v:'100+',l:'Styles'}].map(s=><div key={s.l}><div className="text-2xl font-bold text-dark-100">{s.v}</div><div className="text-sm text-dark-500">{s.l}</div></div>)}
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary-500/20 border border-dark-800/50 aspect-[4/3] bg-gradient-to-br from-dark-800 to-dark-900 flex items-center justify-center">
              <div className="text-center space-y-4 p-8">
                <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center shadow-glow"><svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg></div>
                <p className="text-dark-400 text-sm">Aperçu de création IA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
