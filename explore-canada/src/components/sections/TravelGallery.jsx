import { useState } from "react";
import { FaFilter, FaMapMarkerAlt } from 'react-icons/fa'


const travelData = [
    {
        id: 1,
        location: "벤쿠버",
        title: "스텐리 공원의 일몰",
        image: "/images/travel/vancouver-sunset.jpg",
        date: "2025-07-18",
        tags: ["#자연", "#공원", "#일몰"],
        coordinates: { lat: 49.300054, lng: -123.155348 },
        description: "북미 최대 도시 공원에서 바라본 환상적인 석양 풍경"
    },
    {
        id: 2,
        location: "토론토",
        title: "CN 타워 전말",
        image: "/images/travel/cn-tower.jpg",
        date: "2025-07-20",
        tags: ["#랜드마크", "#도시", "#야경"],
        coordinates: { lat: 43.642566, lng: -79.387057 },
        description: "캐나다의 상징적 랜드마크에서 찍은 파노라마 사진"
    }
]

export default function TravelGallery(){
    const [activeFilter, setActiveFilter] = useState("all");

    return(
        <div></div>
    )
}