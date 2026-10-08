import { Bitcoin, ChevronDown, Crown, Dices, Headphones, Joystick, Star, Ticket, Trophy, Volleyball } from 'lucide-react'

export function MenuRail() {
  return (
    <nav className="q8v3-rail" id="menu" aria-label="Меню казино">
      <a href="#games">
        <Joystick size={17} />
        Слоты
        <ChevronDown size={16} className="q8v3-chev" />
      </a>
      <a href="#games">
        <Dices size={17} />
        Лайв казино
        <ChevronDown size={16} className="q8v3-chev" />
      </a>
      <a href="#games">
        <Volleyball size={17} />
        Спорт
        <ChevronDown size={16} className="q8v3-chev" />
      </a>
      <a href="#games">
        <Headphones size={17} />
        Киберспорт
      </a>
      <a href="#sec-9">
        <Star size={17} />
        Промо
      </a>
      <a href="#sec-9">
        <Trophy size={17} />
        Турниры
      </a>
      <a href="#sec-9">
        <Ticket size={17} />
        Лотереи
      </a>
      <a href="#sec-9">
        <Crown size={17} />
        Программа лояльности
      </a>
      <a href="#sec-9">
        <Bitcoin size={17} />
        Купить крипту
      </a>
    </nav>
  )
}
