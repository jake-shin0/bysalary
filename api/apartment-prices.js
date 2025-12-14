// Vercel Serverless Function - 국토교통부 실거래가 API 프록시

const REGION_CODES = {
    'seoul-gangnam': '11680',
    'seoul-seocho': '11650',
    'seoul-songpa': '11710',
    'seoul-yongsan': '11170',
    'seoul-jung': '11140',
    'seoul-jongno': '11110',
    'seoul-seodaemun': '11410',
    'seoul-mapo': '11440',
    'seoul-geumcheon': '11545',
    'seoul-guro': '11530',
    'seoul-yeongdeungpo': '11560',
    'seoul-dongjak': '11590',
    'seoul-gwanak': '11620',
    'seoul-eunpyeong': '11380',
    'seoul-seongbuk': '11290',
    'seoul-dobong': '11320',
    'seoul-nowon': '11350',
    'seoul-dongdaemun': '11230',
    'seoul-jungnang': '11260',
    'seoul-seongdong': '11200',
    'seoul-gwangjin': '11215',
    'gyeonggi-seongnam': '41130',
    'gyeonggi-suwon': '41110',
    'gyeonggi-goyang': '41280',
    'gyeonggi-yongin': '41460',
    'gyeonggi-bucheon': '41190',
    'gyeonggi-ansan': '41270',
    'gyeonggi-anyang': '41170',
    'gyeonggi-namyangju': '41360',
    'gyeonggi-hwaseong': '41590',
    'gyeonggi-pyeongtaek': '41220',
    'incheon-yeonsu': '28185',
    'incheon-namdong': '28200',
    'incheon-bupyeong': '28125',
    'incheon-seo': '28140',
    'incheon-jung': '28110'
};

export default async function handler(req, res) {
    // CORS 헤더 설정
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');

    const { region, yearMonth } = req.query;

    if (!region || !yearMonth) {
        return res.status(400).json({ error: '지역과 년월 정보가 필요합니다.' });
    }

    const regionCode = REGION_CODES[region];
    if (!regionCode) {
        return res.status(400).json({ error: '유효하지 않은 지역입니다.' });
    }

    // Vercel 환경변수에서 API 키 가져오기
    const API_KEY = process.env.MOLIT_API_KEY;
    if (!API_KEY) {
        return res.status(500).json({ error: 'API 키가 설정되지 않았습니다.' });
    }

    try {
        const apiUrl = `https://apis.data.go.kr/1613000/RTMSDataSvcAptTradeDev/getRTMSDataSvcAptTradeDev?serviceKey=${API_KEY}&LAWD_CD=${regionCode}&DEAL_YMD=${yearMonth}&numOfRows=100&pageNo=1`;

        const response = await fetch(apiUrl, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
            }
        });

        const text = await response.text();

        let data;
        let items = [];

        // XML인지 JSON인지 확인
        if (text.trim().startsWith('<?xml') || text.trim().startsWith('<response>')) {
            // XML 파싱 (간단한 정규식 사용)
            const itemMatches = text.match(/<item>([\s\S]*?)<\/item>/g) || [];
            items = itemMatches.map(itemXml => {
                const getValue = (tag) => {
                    const match = itemXml.match(new RegExp(`<${tag}>([^<]*)</${tag}>`));
                    return match ? match[1] : '';
                };
                return {
                    aptNm: getValue('aptNm'),
                    aptDong: getValue('aptDong'),
                    umdNm: getValue('umdNm'),
                    jibun: getValue('jibun'),
                    dealAmount: getValue('dealAmount'),
                    excluUseAr: getValue('excluUseAr'),
                    floor: getValue('floor'),
                    dealYear: getValue('dealYear'),
                    dealMonth: getValue('dealMonth'),
                    dealDay: getValue('dealDay'),
                    buildYear: getValue('buildYear'),
                    dealingGbn: getValue('dealingGbn'),
                    estateAgentSggNm: getValue('estateAgentSggNm'),
                    cdealDay: getValue('cdealDay'),
                    cdealType: getValue('cdealType')
                };
            });
        } else {
            // JSON 파싱
            data = JSON.parse(text);
            items = data.response?.body?.items?.item || [];
            if (!Array.isArray(items)) items = [items];
        }

        // 응답 데이터 파싱
        const apartments = Array.isArray(items) ? items : [items];

        // 데이터 정제
        const processedData = apartments.map(apt => {
            let price = apt.dealAmount;
            if (typeof price === 'string') {
                price = parseInt(price.replace(/,/g, '').trim());
            }

            return {
                name: apt.aptNm,
                dong: apt.aptDong,
                location: `${apt.umdNm} ${apt.jibun}`,
                price: price,
                size: apt.excluUseAr,
                floor: apt.floor,
                year: apt.dealYear,
                month: apt.dealMonth,
                day: apt.dealDay,
                buildYear: apt.buildYear,
                dealType: apt.dealingGbn,
                dealerAddress: apt.estateAgentSggNm,
                cancelDate: apt.cdealDay,
                cancelYn: apt.cdealType
            };
        });

        res.status(200).json({
            success: true,
            data: processedData,
            totalCount: processedData.length
        });

    } catch (error) {
        console.error('API 호출 에러:', error);
        res.status(500).json({
            success: false,
            error: '실거래가 데이터를 가져오는데 실패했습니다.'
        });
    }
}