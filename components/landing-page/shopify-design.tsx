import Image from "next/image"

const stores = [
  {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=815&auto=format&fit=crop",
    quote: "Shopify has transformed our online business. The platform is easy to use and the results speak for themselves.",
    author: "Jason Scer",
  },
  {
    image: "https://images.unsplash.com/photo-1643513208375-df314b16347a?q=80&w=387&auto=format&fit=crop",
    quote: "Working with this team was a game-changer for our Shopify store. They truly understand what it takes to create a successful online business.",
    author: "Sarah Johnson",
  },
  {
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=870&auto=format&fit=crop",
    quote: "The attention to detail and creative approach they brought to our Shopify store exceeded our expectations.",
    author: "Michael Brown",
  },
]

export default function ShopifyDesign() {
  return (
    <div id="shopify">

      {/* Hero */}
      <section className="text-center py-24 px-6">
        <h1
          className="text-5xl md:text-7xl font-semibold
          bg-linear-to-b from-violet-500 via-violet-300 to-violet-100
          bg-clip-text text-transparent leading-tight mb-6"
        >
          Shopify Stores
        </h1>
        <p className="mx-auto max-w-lg text-base font-light text-neutral-400 leading-relaxed">
          We create stunning Shopify stores that are designed to convert visitors into
          customers. Our team of experts will work with you to bring your vision to life.
        </p>
      </section>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-6 pb-20">
        {stores.map((store, index) => (
          <div
            key={index}
            className="group bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden
            hover:-translate-y-1.5 hover:border-violet-400/60 transition-all duration-300"
          >
            {/* Image */}
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={store.image}
                fill
                alt={`Store ${index + 1}`}
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-5">
              <span className="text-3xl text-violet-400 leading-none block mb-2">
                &#34;
              </span>
              <p className="italic text-sm text-neutral-300 leading-relaxed mb-4">
                {store.quote}
              </p>
              <div className="border-t border-neutral-800 pt-3 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                <span className="text-xs font-medium tracking-widest uppercase text-neutral-500">
                  {store.author}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}