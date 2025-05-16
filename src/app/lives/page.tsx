import Image from 'next/image'


import Link from 'next/link'

const lives = [
  {
    id: 1,
    title: 'at field of school ワンマンライブ',
    date: '2024年4月15日',
    time: '開場 18:00 / 開演 19:00',
    venue: '渋谷CLUB QUATTRO',
    address: '東京都渋谷区宇田川町32-13',
    price: '前売り ¥3,500 / 当日 ¥4,000',
    image: '/images/live1.jpg',
  },
  {
    id: 2,
    title: 'at field of school ツアーファイナル',
    date: '2024年5月20日',
    time: '開場 17:00 / 開演 18:00',
    venue: '名古屋CLUB QUATTRO',
    address: '愛知県名古屋市中区栄3-29-1',
    price: '前売り ¥3,500 / 当日 ¥4,000',
    image: '/images/live2.jpg',
  },
]

export default function Lives() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
            ライブ情報
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            今後のライブスケジュールをお知らせします。
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {lives.map((live) => (
            <article key={live.id} className="group relative flex flex-col items-start transition-all duration-300 hover:scale-105">
              <div className="relative w-full overflow-hidden rounded-2xl shadow-lg">
                <div className="aspect-[16/9] w-full bg-gradient-to-br from-purple-100 to-pink-100">
                  <Image
                    src={live.image}
                    alt={live.title}
                    fill
                    className="transform object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <div className="relative mt-8 w-full rounded-xl bg-white/80 p-6 backdrop-blur-sm shadow-lg">
                <div className="flex items-center gap-x-4 text-sm">
                  <time dateTime={live.date} className="rounded-full bg-purple-100 px-3 py-1 text-purple-700">
                    {live.date}
                  </time>
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600">
                    {live.title}
                  </h3>
                  <div className="mt-4 space-y-2 text-sm text-gray-600">
                    <p className="flex items-center gap-2">
                      <span className="font-medium text-purple-600">会場:</span> {live.venue}
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="font-medium text-purple-600">住所:</span> {live.address}
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="font-medium text-purple-600">時間:</span> {live.time}
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="font-medium text-purple-600">料金:</span> {live.price}
                    </p>
                  </div>
                </div>
                <div className="mt-6">
                  <Link
                    href={`/lives/${live.id}`}
                    className="inline-block rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:from-purple-500 hover:to-pink-500 hover:shadow-lg"
                  >
                    詳細を見る
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
} 