import { clsx, type ClassValue } from 'clsx'
export function cn(...inputs: ClassValue[]) { return clsx(inputs) }
export function formatDate(date: Date | string): string { return new Date(date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' }) }
export function generateId(): string { return Date.now() + '-' + Math.random().toString(36).substr(2, 9) }
