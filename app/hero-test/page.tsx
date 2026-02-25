import fs from 'fs';
import path from 'path';

export default function HeroTest() {
    const imagesDir = path.join(process.cwd(), 'public/images');
    const files = fs.readdirSync(imagesDir).filter(file => file.endsWith('.jpg') || file.endsWith('.jpeg'));

    return (
        <div className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {files.map(file => (
                <div key={file} className="border p-4 flex flex-col items-center">
                    <h2 className="text-xl mb-4 font-bold break-all">{file}</h2>
                    <img src={`/images/${file}`} alt={file} className="max-w-full h-auto object-cover max-h-64" />
                </div>
            ))}
        </div>
    );
}
