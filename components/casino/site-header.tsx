import { Dices, Joystick, Menu, Volleyball } from 'lucide-react'

export function SiteHeader() {
  return (
    <header className="q8v3-head">
      <a className="q8v3-burger" href="#menu" aria-label="Открыть меню разделов">
        <Menu size={22} />
      </a>
      <a className="q8v3-brand" href="#top">
        <img src="/img/logo.jpg" alt="Логотип казино RAMENBET" width={34} height={34} />
        <b>RAMENBET</b>
      </a>
      <nav className="q8v3-headnav" aria-label="Основные разделы">
        <a href="#games">
          <Joystick size={16} />
          Слоты
        </a>
        <a href="#games">
          <Dices size={16} />
          Лайв казино
        </a>
        <a href="#games">
          <Volleyball size={16} />
          Спорт
        </a>
      </nav>
      <div className="q8v3-headact">
        <a className="q8v3-btn q8v3-btn-ghost" href="#reg">
          Логин
        </a>
        <a className="q8v3-btn q8v3-btn-pink" href="#reg">
          Зарегистрироваться
        </a>
      </div>
    </header>
  )
}
