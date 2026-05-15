import { Layers, ArrowUpRight, Plus } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

const offers = [
  { name: "Кэшбэк 10% на услуги", company: "ТехСервис", code: "CPS", color: "bg-violet-700" },
  { name: "Подписка за лид", company: "СофтПро", code: "CPL", color: "bg-teal-600" },
  { name: "Фикс за заявку", company: "МаркетГрупп", code: "CPA", color: "bg-amber-600" },
  { name: "Реферальная программа", company: "CloudBase", code: "REF", color: "bg-blue-600" },
]

export function LinkAccountsCard() {
  return (
    <div className="rounded-2xl bg-[#141414] border border-[#262626] p-6 flex flex-col">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1f1f1f] border border-[#2a2a2a]">
        <Layers className="h-5 w-5 text-gray-400" />
      </div>

      <h3 className="mb-2 text-lg font-semibold text-white">Каталог офферов</h3>
      <p className="mb-4 text-sm text-gray-400">Все актуальные партнёрские предложения в одном месте — фильтруй, выбирай и подключай</p>

      <a href="#" className="mb-6 inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors">
        Смотреть все <ArrowUpRight className="ml-1 h-4 w-4" />
      </a>

      <div className="mt-auto space-y-2 rounded-xl bg-[#1a1a1a] border border-[#262626] p-3">
        {offers.map((offer, index) => (
          <div key={index} className="flex items-center justify-between rounded-lg bg-[#0f0f0f] px-3 py-2">
            <div className="flex items-center gap-3">
              <Avatar className="h-9 w-9">
                <AvatarFallback className={`${offer.color} text-white text-xs`}>
                  {offer.code}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium text-white">{offer.name}</p>
                <p className="text-xs text-gray-500">{offer.company}</p>
              </div>
            </div>
            <span className="text-xs text-violet-400 cursor-pointer hover:text-violet-300">Подать заявку</span>
          </div>
        ))}

        <Button
          variant="ghost"
          className="w-full justify-center text-gray-500 hover:text-white hover:bg-[#1f1f1f] mt-2"
        >
          <Plus className="mr-2 h-4 w-4" /> Разместить свой оффер
        </Button>
      </div>
    </div>
  )
}