import { Manrope, Unbounded } from 'next/font/google'
import './globals.css'

const manrope = Manrope({ subsets: ['cyrillic', 'latin'], variable: '--font-manrope', display: 'swap' })
const unbounded = Unbounded({ subsets: ['cyrillic', 'latin'], weight: ['700', '800'], variable: '--font-unbounded', display: 'swap' })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <head>
        <meta name="yandex-verification" content="1845c2b9551a415a" />
        <title>Бездепозитные бонусы за регистрацию в RAMENBET — бездеп бонусы и фриспины</title>
        <meta
          name="description"
          content="Бездепозитный бонус за регистрацию в казино RAMENBET: бездепы без депозита, фриспины и бонусы в казино новым игрокам. Как получить бездепозитные бонусы за регистрацию, условия и вейджер промо."
        />
        <link rel="canonical" href="https://bezdepcasino5.vercel.app/" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="RAMENBET" />
        <meta property="og:url" content="https://bezdepcasino5.vercel.app/" />
        <meta property="og:title" content="Бездепозитные бонусы за регистрацию в RAMENBET — бездеп бонусы и фриспины" />
        <meta
          property="og:description"
          content="Бездепозитный бонус за регистрацию в казино RAMENBET: бездепы без депозита, фриспины и бонусы в казино новым игрокам. Условия, вейджер и промо-календарь."
        />
        <meta property="og:image" content="https://bezdepcasino5.vercel.app/img/hero-ramen.jpg" />
        <meta property="og:locale" content="ru_RU" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Бездепозитные бонусы за регистрацию в RAMENBET — бездеп бонусы и фриспины" />
        <meta
          name="twitter:description"
          content="Бездепозитный бонус за регистрацию в казино RAMENBET: бездепы без депозита, фриспины и бонусы в казино новым игрокам."
        />
        <meta name="twitter:image" content="https://bezdepcasino5.vercel.app/img/hero-ramen.jpg" />
        <meta name="theme-color" content="#14161f" />
      </head>
      <body className={`${manrope.variable} ${unbounded.variable}`}>{children}</body>
    </html>
  )
}
