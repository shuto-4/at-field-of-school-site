import Image from 'next/image'
import Link from 'next/link'

const goods = [
  {
    id: 1,
    name: 'at field of school Tシャツ',
    price: '¥3,500',
    description: 'バンドロゴをあしらったオリジナルTシャツ。綿100%の着心地の良い素材を使用しています。',
    sizes: ['S', 'M', 'L', 'XL'],
    image: '/images/goods/tshirt.jpg',
    isNew: true,
  },
  {
    id: 2,
    name: 'at field of school タオル',
    price: '¥1,500',
    description: 'バンドカラーのグラデーションを使用したオリジナルタオル。吸水性に優れた素材を使用しています。',
    image: '/images/goods/towel.jpg',
    isNew: false,
  },
  {
    id: 3,
    name: 'at field of school ステッカー',
    price: '¥500',
    description: 'バンドロゴのステッカー。スマートフォンやノートPCなどに貼って使用できます。',
    image: '/images/goods/sticker.jpg',
    isNew: false,
  },
]

export default function Goods() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
            グッズ紹介
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            オリジナルグッズのご紹介です。ライブ会場での販売も行っています。
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {goods.map((item) => (
            <article key={item.id} className="group relative flex flex-col items-start transition-all duration-300 hover:scale-105">
              <div className="relative w-full overflow-hidden rounded-2xl shadow-lg">
                <div className="aspect-square w-full bg-gradient-to-br from-purple-100 to-pink-100">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="transform object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                {item.isNew && (
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center rounded-full bg-pink-600 px-3 py-1 text-sm font-medium text-white">
                      NEW
                    </span>
                  </div>
                )}
              </div>
              <div className="relative mt-8 w-full rounded-xl bg-white/80 p-6 backdrop-blur-sm shadow-lg">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600">
                    {item.name}
                  </h3>
                  <p className="text-lg font-semibold text-pink-600">{item.price}</p>
                </div>
                <p className="mt-4 text-sm text-gray-600">{item.description}</p>
                {item.sizes && (
                  <div className="mt-4">
                    <p className="text-sm font-medium text-gray-900">サイズ</p>
                    <div className="mt-2 flex gap-2">
                      {item.sizes.map((size) => (
                        <span
                          key={size}
                          className="inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-700"
                        >
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                <div className="mt-6">
                  <Link
                    href={`/goods/${item.id}`}
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