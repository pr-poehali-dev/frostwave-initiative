import { Sparkles, TrendingUp, ShoppingBag, Globe, Cpu, Megaphone, Briefcase } from "lucide-react"

const partners = [
  { name: "E-commerce", icon: ShoppingBag },
  { name: "Финансы", icon: TrendingUp },
  { name: "IT & SaaS", icon: Cpu },
  { name: "Маркетинг", icon: Megaphone },
  { name: "Глобальный рынок", icon: Globe },
  { name: "Консалтинг", icon: Briefcase },
  { name: "Стартапы", icon: Sparkles },
]

export function PartnersSection() {
  return (
    <section className="px-4 py-8">
      <p className="text-center text-xs text-gray-600 uppercase tracking-widest mb-6">Категории офферов</p>
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
        {partners.map((partner) => (
          <div key={partner.name} className="flex items-center gap-2 text-gray-500 hover:text-gray-300 transition-colors cursor-pointer">
            <partner.icon className="h-4 w-4" />
            <span className="text-sm font-medium">{partner.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}