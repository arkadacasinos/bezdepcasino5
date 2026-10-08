import { Flame, Gift, LayoutGrid, Search, Star } from 'lucide-react'

const tiles = [
  { src: '/img/game-astronaut.jpg', name: 'Astronaut Cash' },
  { src: '/img/game-pinata.jpg', name: 'Pinata Fiesta' },
  { src: '/img/game-coin.jpg', name: 'Antique Gold' },
  { src: '/img/game-frog.jpg', name: 'Frog King' },
  { src: '/img/game-dice.jpg', name: 'Crystal Dice' },
  { src: '/img/game-rocket.jpg', name: 'Rocket Galaxy' },
]

export function GamesRow() {
  return (
    <section className="q8v3-games" id="games" aria-label="Каталог игр">
      <div className="q8v3-chips">
        <span className="q8v3-chip-search" aria-hidden="true">
          <Search size={17} />
        </span>
        <span className="q8v3-chip">
          <Flame size={15} />
          Новинки
        </span>
        <span className="q8v3-chip">
          <span className="q8v3-rmark" aria-hidden="true">
            R
          </span>
          Оригиналы
        </span>
        <span className="q8v3-chip">
          <LayoutGrid size={15} />
          Все игры
        </span>
        <span className="q8v3-chip">
          <Star size={15} />
          Мегавэйз
        </span>
        <span className="q8v3-chip">
          <Gift size={15} />
          Покупка бонуса
        </span>
      </div>
      <p className="q8v3-gameshead">
        <span className="q8v3-rmark" aria-hidden="true">
          R
        </span>
        Оригиналы
      </p>
      <div className="q8v3-grid">
        {tiles.map((tile) => (
          <figure key={tile.name}>
            <img src={tile.src} alt={`Слот ${tile.name}`} width={480} height={480} loading="lazy" />
            <figcaption>{tile.name}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
