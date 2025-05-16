import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const goods = [
  {
    id: 1,
    name: 'at field of school Tシャツ',
    price: '¥3,500',
    description: 'バンドロゴをあしらったオリジナルTシャツ。綿100%の着心地の良い素材を使用しています。',
    sizes: ['S', 'M', 'L', 'XL'],
    image: '/images/goods/tshirt.jpg',
    isNew: true,
    details: [
      '素材: 綿100%',
      'サイズ: S(身幅48cm/着丈66cm)、M(身幅52cm/着丈69cm)、L(身幅56cm/着丈72cm)、XL(身幅60cm/着丈75cm)',
      'カラー: ホワイト',
      '製造: 日本製',
    ],
  },
  {
    id: 2,
    name: 'at field of school タオル',
    price: '¥1,500',
    description: 'バンドカラーのグラデーションを使用したオリジナルタオル。吸水性に優れた素材を使用しています。',
    image: '/images/goods/towel.jpg',
    isNew: false,
    details: [
      '素材: 綿100%',
      'サイズ: 約30cm × 80cm',
      'カラー: パープル×ピンクグラデーション',
      '製造: 日本製',
    ],
  },
  {
    id: 3,
    name: 'at field of school ステッカー',
    price: '¥500',
    description: 'バンドロゴのステッカー。スマートフォンやノートPCなどに貼って使用できます。',
    image: '/images/goods/sticker.jpg',
    isNew: false,
    details: [
      '素材: ビニール',
      'サイズ: 約5cm × 5cm',
      'カラー: シルバー',
      '製造: 日本製',
    ],
  },
]

export default function GoodsDetail({ params }: { params: { id: string } }) {
  const item = goods.find((item) => item.id === Number(params.id))

  if (!item) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <Link
            href="/goods"
            className="inline-flex items-center text-sm font-medium text-purple-600 hover:text-purple-500"
          >
            ← グッズ一覧に戻る
          </Link>
        </div>
        <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="relative aspect-square overflow-hidden rounded-2xl shadow-lg">
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover"
              priority
            />
            {item.isNew && (
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center rounded-full bg-pink-600 px-3 py-1 text-sm font-medium text-white">
                  NEW
                </span>
              </div>
            )}
          </div>
          <div className="lg:pl-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {item.name}
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                {item.description}
              </p>
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900">商品詳細</h3>
                <ul className="mt-4 space-y-2">
                  {item.details.map((detail, index) => (
                    <li key={index} className="text-sm text-gray-600">
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
              {item.sizes && (
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-gray-900">サイズ</h3>
                  <div className="mt-4 flex gap-2">
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
              <div className="mt-8 flex items-center justify-between">
                <p className="text-2xl font-bold text-pink-600">{item.price}</p>
                <button
                  type="button"
                  className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:from-purple-500 hover:to-pink-500 hover:shadow-lg"
                >
                  購入する
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 