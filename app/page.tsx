import { SiteHeader } from '@/components/casino/site-header'
import { MenuRail } from '@/components/casino/menu-rail'
import { HeroBanner } from '@/components/casino/hero-banner'
import { PromoBadges } from '@/components/casino/promo-badges'
import { GamesRow } from '@/components/casino/games-row'
import { SeoArticle } from '@/components/casino/seo-article'
import { SiteFooter } from '@/components/casino/site-footer'

export default function Page() {
  return (
    <div className="q8v3-shell">
      <SiteHeader />
      <MenuRail />
      <main className="q8v3-main">
        <HeroBanner />
        <PromoBadges />
        <GamesRow />
        <SeoArticle />
      </main>
      <SiteFooter />
    </div>
  )
}
