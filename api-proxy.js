// 국토교통부 실거래가 API 프록시 서버
// CORS 문제 해결을 위한 서버사이드 프록시

const express = require('express');
const axios = require('axios');
const cors = require('cors');
const xml2js = require('xml2js');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// API 키는 환경변수로 관리
const API_KEY = process.env.MOLIT_API_KEY || 'YOUR_API_KEY_HERE';
// 상세 자료 API 사용 (더 많은 정보 제공)
const BASE_URL = 'https://apis.data.go.kr/1613000/RTMSDataSvcAptTradeDev/getRTMSDataSvcAptTradeDev';

// 지역코드 매핑
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

// 실거래가 조회 API
app.get('/api/apartment-prices', async (req, res) => {
    try {
        const { region, yearMonth } = req.query;
        
        if (!region || !yearMonth) {
            return res.status(400).json({ error: '지역과 년월 정보가 필요합니다.' });
        }

        const regionCode = REGION_CODES[region];
        if (!regionCode) {
            return res.status(400).json({ error: '유효하지 않은 지역입니다.' });
        }

        // API 호출 (Encoding Key는 이미 URL 인코딩되어 있으므로 직접 URL에 붙임)
        const apiUrl = `${BASE_URL}?serviceKey=${API_KEY}&LAWD_CD=${regionCode}&DEAL_YMD=${yearMonth}&numOfRows=100&pageNo=1`;
        console.log('API 호출 URL:', apiUrl);

        const response = await axios.get(apiUrl, {
            headers: {
                'User-Agent': 'Mozilla/5.0'
            }
        });

        let result;

        // 응답이 JSON인지 XML인지 확인
        if (typeof response.data === 'object') {
            // 이미 JSON으로 파싱된 경우
            result = response.data;
        } else if (typeof response.data === 'string' && response.data.trim().startsWith('{')) {
            // JSON 문자열인 경우
            result = JSON.parse(response.data);
        } else {
            // XML인 경우
            const parser = new xml2js.Parser({ explicitArray: false });
            result = await parser.parseStringPromise(response.data);
        }

        // 응답 데이터 파싱
        const items = result.response?.body?.items?.item || [];
        const apartments = Array.isArray(items) ? items : [items];
        
        // 데이터 정제 (JSON 응답은 영문 필드명 사용)
        const processedData = apartments.map(apt => {
            // 거래금액 파싱 (문자열이면 콤마 제거, 숫자면 그대로)
            let price = apt.dealAmount || apt.거래금액;
            if (typeof price === 'string') {
                price = parseInt(price.replace(/,/g, '').trim());
            }

            return {
                name: apt.aptNm || apt.아파트명 || apt.아파트,
                dong: apt.aptDong || apt.동,
                location: `${apt.umdNm || apt.법정동} ${apt.jibun || apt.지번}`,
                price: price,
                size: apt.excluUseAr || apt.전용면적,
                floor: apt.floor || apt.층,
                year: apt.dealYear || apt.년,
                month: apt.dealMonth || apt.월,
                day: apt.dealDay || apt.일,
                buildYear: apt.buildYear || apt.건축년도,
                // 상세 자료에만 있는 추가 정보
                dealType: apt.dealingGbn || apt.거래유형,
                dealerAddress: apt.estateAgentSggNm || apt.중개사소재지,
                cancelDate: apt.cdealDay || apt.해제사유발생일,
                cancelYn: apt.cdealType || apt.해제여부
            };
        });

        res.json({
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
});

// 서버 시작
app.listen(PORT, () => {
    console.log(`프록시 서버가 포트 ${PORT}에서 실행중입니다.`);
    console.log(`API 키 설정: ${API_KEY ? '완료' : '필요'}`);
});