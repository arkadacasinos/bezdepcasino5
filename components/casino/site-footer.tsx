const tags = [
  { label: '#бездепозитныебонусы', href: '#sec-1' },
  { label: '#бездепозитныйбонус', href: '#sec-2' },
  { label: '#бездепозитныйбонусзарегистрацию', href: '#sec-2' },
  { label: '#бездепозитныебонусызарегистрацию', href: '#sec-3' },
  { label: '#бездеп', href: '#sec-4' },
  { label: '#бездепы', href: '#sec-4' },
  { label: '#бездепбонусы', href: '#sec-5' },
  { label: '#бездепбонус', href: '#sec-5' },
  { label: '#бездепызарегистрацию', href: '#sec-6' },
  { label: '#бездепзарегистрацию', href: '#sec-6' },
  { label: '#бездепозитныйбонусказино', href: '#sec-7' },
  { label: '#бездепывказино', href: '#sec-8' },
  { label: '#бездепыказино', href: '#sec-8' },
  { label: '#бонусказино', href: '#sec-9' },
  { label: '#бонусывказино', href: '#sec-9' },
]

export function SiteFooter() {
  return (
    <footer className="q8v3-foot">
      <nav className="q8v3-tags" aria-label="Теги по теме">
        {tags.map((tag) => (
          <a key={tag.label} href={tag.href}>
            {tag.label}
          </a>
        ))}
      </nav>
      <p className="q8v3-footnote">
        18+ Азартные игры могут вызывать зависимость. Играйте ответственно: бездепозитные бонусы начисляются согласно
        правилам промо-раздела RAMENBET. Материалы сайта носят информационный характер. © 2026 RAMENBET.
      </p>
    </footer>
  )
}
