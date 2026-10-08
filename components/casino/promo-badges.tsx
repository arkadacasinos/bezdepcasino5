const badges = [
  { src: '/img/badge-crypto.jpg', name: 'Crypto', alt: 'Промо-раздел Crypto' },
  { src: '/img/badge-start.jpg', name: 'Start', alt: 'Промо-раздел Start' },
  { src: '/img/badge-arena.jpg', name: 'Arena', alt: 'Промо-раздел Arena' },
  { src: '/img/badge-vip.jpg', name: 'VIP', alt: 'Промо-раздел VIP' },
]

export function PromoBadges() {
  return (
    <section className="q8v3-promo" aria-label="Быстрые промо-разделы">
      {badges.map((badge) => (
        <figure key={badge.name}>
          <img src={badge.src} alt={badge.alt} width={68} height={68} />
          <figcaption>{badge.name}</figcaption>
        </figure>
      ))}
    </section>
  )
}
