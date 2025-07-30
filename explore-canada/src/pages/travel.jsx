import React from "react";

const TravelLog = () => {
    // 여행 로그 데이터 (실제 프로젝트에서는 API에서 불러옵니다)
    const travelLogs = [
        {
            id: 1,
            data: '2025-07-03',
            location: '벤프, 앨버타',
            title: '벤프 국립공원 첫날',
            content: '레이크 루이스의 에메랄드빛 호수와 설산을 감상하곤 곤돌라를 타고 산 정상에서 절경을 즐겼습니다.',
            weather: '맑음, 23 C',
            image: '/images/canada/bnaff.jpg'
        },
        {
            id: 2,
            data: '2025-07-07',
            location: '퀘백 시티, 퀘백',
            title: '올드 퀘백 산책',
            content: '고풍스러운 성채와 석조 거리들을 걸으며 프랑스풍의 정취를 만끽했습니다. 샤토 프롱트낙이 특히 인상 깊었어요.',
            weather: '구름 조금, 21 C',
            image: '/images/canada/quebec.jpg'
        },
        {
            id: 3,
            data: '2025-07-10',
            location: '벤쿠버, 브리티시컬럼비아',
            title: '그랜빌 아일랜드의 예술 감상',
            content: '그랜빌 아일랜드에서 현지 예술품과 농산물 마켓을 즐기고, 스탠리 파크에서 자전거를 타며 여유를 느꼈습니다.',
            weather: '맑음, 26 C',
            image: '/images/canada/vancouver.jpg'
        }
    ];

    return (
        <div className="min-h-screen bg-amber-50 py-12 px-4 sm:px-6">
            <div className="max-w-3xl mx-auto">
                <header className="text-center mb-16">
                    <h1 className="text-4xl font-serif font-bold text-amber-800 mb-2">여행 일지</h1>
                    <p className="text-amber-600 max-w-md mx-auto">캐나다 여행에서의 추억을 모아둔 공간</p>
                    <div className="mt-8 w-24 h-1 bg-amber-300 mx-auto"></div>
                </header>
                
                <div className="space-y-16">
                    {travelLogs.map((log) => (
                        <div key={log.id} className="relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
                            <div className="absolute left-0 top-0 bottom-0 w-2 bg-amber-400"></div>

                            <div className="ml-8 py-6 pr-6">
                                <div className="flex flex-wrap items-baseline gap-3 mb-4">
                                    <span className="text-amber-700 bg-amber-100 px-3 py-1 rounded-full text-sm font-medium">
                                        {log.data}
                                    </span>
                                    <h2 className="text-xl font-bold text-gray-800">{log.title}</h2>
                                </div>

                                <div className="flex items-center text-gray-600 mb-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1"viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="mr-4">{log.location}</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1"viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M5 3a1 1 0 000 2c5.523 0 10 4.477 10 10a1 1 0 102 0C17 8.373 11.627 3 5 3z" />
                                        <path d="M5 7a1 1 0 000 2 5 5 0 015 5 1 1 0 102 0 7 7 0 00-7-7z" />
                                        <path d="M5 11a1 1 0 100 2 1 1 0 000 2z" />
                                    </svg>
                                    <span>{log.weather}</span>
                                </div>

                                <p className="text-gray-700 mb-6 leading-relaxed">
                                    {log.content}
                                </p>

                                <div className="rounded-lg overflow-hidden border-2 border-amber-100">
                                    <img src={log.image} alt={log.title} className="w-full h-48 object-cover" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button className="inline-flex items-center px-5 py-3 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-lg transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                        </svg>
                        새 항목 추가
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TravelLog;