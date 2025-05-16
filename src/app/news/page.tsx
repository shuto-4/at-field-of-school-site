import Image from 'next/image'
import Link from 'next/link'

const news = [
  {
    id: 1,
    title: '新曲「at field」リリース',
    date: '2024年5月15日',
    description: '新曲「at field」をリリースしました。各種音楽配信サービスで聴くことができます。',
    image: '/images/news/new-song.jpg',
    links: [
      {
        name: 'Spotify',
        url: 'https://open.spotify.com/artist/atfieldofschool',
      },
      {
        name: 'Apple Music',
        url: 'https://music.apple.com/jp/artist/at-field-of-school',
      },
    ],
  },
  {
    id: 2,
    title: 'ワンマンライブ開催決定',
    date: '2024年4月20日',
    description: '2024年4月15日に渋谷CLUB QUATTROにてワンマンライブを開催します。チケットは3月1日より発売開始。',
    image: '/images/news/one-man.jpg',
    links: [
      {
        name: 'チケット購入',
        url: 'https://ticket.spacecraft.co.jp/atfieldofschool',
      },
    ],
  },
  {
    id: 3,
    title: '新グッズ発売',
    date: '2024年3月10日',
    description: '新デザインのTシャツとタオルを発売しました。ライブ会場での販売も行っています。',
    image: '/images/news/new-goods.jpg',
    links: [
      {
        name: 'グッズ一覧',
        url: '/goods',
      },
    ],
  },
]

export default function News() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
            最新ニュース
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            at field of schoolの最新情報をお知らせします。
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {news.map((item) => (
            <article key={item.id} className="group relative flex flex-col items-start">
              <div className="relative w-full overflow-hidden rounded-2xl shadow-lg">
                <div className="aspect-[16/9] w-full bg-gradient-to-br from-purple-100 to-pink-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="transform object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="relative mt-8 w-full rounded-xl bg-white/80 p-6 backdrop-blur-sm shadow-lg">
                <div className="flex items-center gap-x-4 text-sm">
                  <time dateTime={item.date} className="text-gray-500">
                    {item.date}
                  </time>
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm text-gray-600">{item.description}</p>
                </div>
                {item.links && (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.links.map((link) => (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-700 hover:bg-purple-200"
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
} 