import Image from "next/image";

const images = [
  [
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
  ],
  [
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
  ],
  [
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg",
  ],
  [
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg",
  ],
];

export default function WebsiteDesign() {
    return(
        <div id="website">
            <main className="w-full mx-auto text-center h-[60vh] content-center p-4">
                <div 
                    className="text-4xl md:text-7xl bg-clip-text text-transparent
                    bg-linear-to-b from-purple-600 to bg-purple-100"
                >
                    Website Design <br/> that works
                </div>
                
                <p className="mx-auto text-center max-w-lg my-6 text-lg font-normal text-neutral-300">
                    Creating, designing and developing websites that works for your business.
                </p>
            </main>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {images.map((column, colIndex) => (
                    <div key={colIndex} className="grid gap-4">
                        {column.map((src, index) => (
                            <div 
                                key={index}
                                className="group relative overflow-hidden rounded-2xl"
                            >
                                <Image
                                    src={src}
                                    alt={`gallery-image-${colIndex}-${index}`}
                                    width={500}
                                    height={500}
                                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}