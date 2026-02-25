import Image from "next/image";

export default function LogoTest() {
    const logos = [
        "gallery-4.jpg",
        "gallery-5.jpg",
        "gallery-6.jpg",
        "marquee-2.jpg",
        "marquee-3.jpg",
        "logo.png"
    ];

    return (
        <div className="p-20 bg-gray-100 min-h-screen">
            <h1 className="text-4xl font-bold mb-10 text-black">Logo Identification Test</h1>
            <div className="grid grid-cols-3 gap-8">
                {logos.map((logo, i) => (
                    <div key={i} className="bg-white p-4 shadow-lg flex flex-col items-center">
                        <h2 className="text-xl font-mono mb-4 text-black">{logo}</h2>
                        <div className="relative w-full h-64 bg-gray-200 flex items-center justify-center">
                            <Image
                                src={`/images/${logo}`}
                                alt={logo}
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
