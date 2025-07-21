// 더미 데이터 (나중에 Supabase로 교체)
const tempPhotos = [
    {
        id: 1,
        imageUrl: "images/banff.jpg",
        title: "Banff National Park",
        location: "Alberta"
    },
        {
        id: 2,
        imageUrl: "images/niagara.jpg",
        title: "Niagara Falls",
        location: "Ontario"
    }
];

export default function TravelGallery() {
    return (
        <section>
            <h2 className=" text-2xl font-semibold mb-4">Photo Gallery</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tempPhotos.map((photo) => (
                    <div key={photo.id} className="border rounded-lg overflow-hidden">
                        <img src={photo.imageUrl} alt={photo.title} className="w-full h-48 object-cover" loading="lazy" />
                        <div className="p-4">
                            <h3 className="font-bold">{photo.title}</h3>
                            <p className="text-sm text-gray-600">{photo.location}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}