const carDatabase = [
    { name: "현대 아반떼", price: 2500, category: "준중형", fuelEfficiency: 13.1, fuelType: "gasoline", image: "https://via.placeholder.com/400x300/cccccc/666666?text=현대+아반떼" },
    { name: "기아 K3", price: 2400, category: "준중형", fuelEfficiency: 13.5, fuelType: "gasoline", image: "https://via.placeholder.com/400x300/cccccc/666666?text=기아+K3" },
    { name: "현대 쏘나타", price: 3500, category: "중형", fuelEfficiency: 12.3, fuelType: "gasoline", image: "https://via.placeholder.com/400x300/cccccc/666666?text=현대+쏘나타" },
    { name: "기아 K5", price: 3300, category: "중형", fuelEfficiency: 12.5, fuelType: "gasoline", image: "https://via.placeholder.com/400x300/cccccc/666666?text=기아+K5" },
    { name: "현대 그랜저", price: 4500, category: "준대형", fuelEfficiency: 10.2, fuelType: "gasoline", image: "https://via.placeholder.com/400x300/cccccc/666666?text=현대+그랜저" },
    { name: "기아 K8", price: 4200, category: "준대형", fuelEfficiency: 10.5, fuelType: "gasoline", image: "https://via.placeholder.com/400x300/cccccc/666666?text=기아+K8" },
    { name: "제네시스 G70", price: 5000, category: "프리미엄 중형", fuelEfficiency: 9.8, fuelType: "gasoline", image: "https://via.placeholder.com/400x300/cccccc/666666?text=제네시스+G70" },
    { name: "제네시스 G80", price: 6500, category: "프리미엄 대형", fuelEfficiency: 9.2, fuelType: "gasoline", image: "https://via.placeholder.com/400x300/cccccc/666666?text=제네시스+G80" },
    { name: "제네시스 G90", price: 9000, category: "플래그십", fuelEfficiency: 8.1, fuelType: "gasoline", image: "https://via.placeholder.com/400x300/cccccc/666666?text=제네시스+G90" },
    { name: "현대 투싼", price: 3500, category: "중형 SUV", fuelEfficiency: 11.2, fuelType: "gasoline", image: "https://via.placeholder.com/400x300/cccccc/666666?text=현대+투싼" },
    { name: "기아 스포티지", price: 3400, category: "중형 SUV", fuelEfficiency: 11.5, fuelType: "gasoline", image: "https://via.placeholder.com/400x300/cccccc/666666?text=기아+스포티지" },
    { name: "현대 싼타페", price: 4200, category: "대형 SUV", fuelEfficiency: 9.8, fuelType: "diesel", image: "https://via.placeholder.com/400x300/cccccc/666666?text=현대+싼타페" },
    { name: "기아 쏘렌토", price: 4000, category: "대형 SUV", fuelEfficiency: 10.1, fuelType: "diesel", image: "https://via.placeholder.com/400x300/cccccc/666666?text=기아+쏘렌토" },
    { name: "현대 팰리세이드", price: 5000, category: "대형 SUV", fuelEfficiency: 8.9, fuelType: "gasoline", image: "https://via.placeholder.com/400x300/cccccc/666666?text=현대+팰리세이드" },
    { name: "기아 모하비", price: 5500, category: "대형 SUV", fuelEfficiency: 7.8, fuelType: "diesel", image: "https://via.placeholder.com/400x300/cccccc/666666?text=기아+모하비" },
    { name: "쉐보레 스파크", price: 1500, category: "경차", fuelEfficiency: 15.2, fuelType: "gasoline", image: "https://via.placeholder.com/400x300/cccccc/666666?text=쉐보레+스파크" },
    { name: "기아 모닝", price: 1400, category: "경차", fuelEfficiency: 15.7, fuelType: "gasoline", image: "https://via.placeholder.com/400x300/cccccc/666666?text=기아+모닝" },
    { name: "기아 레이", price: 1600, category: "경차", fuelEfficiency: 14.9, fuelType: "gasoline", image: "https://via.placeholder.com/400x300/cccccc/666666?text=기아+레이" },
    { name: "현대 베뉴", price: 2200, category: "소형 SUV", fuelEfficiency: 12.8, fuelType: "gasoline", image: "https://via.placeholder.com/400x300/cccccc/666666?text=현대+베뉴" },
    { name: "기아 셀토스", price: 2500, category: "소형 SUV", fuelEfficiency: 12.2, fuelType: "gasoline", image: "https://via.placeholder.com/400x300/cccccc/666666?text=기아+셀토스" },
    { name: "쉐보레 트레일블레이저", price: 3000, category: "중형 SUV", fuelEfficiency: 11.0, fuelType: "gasoline", image: "https://via.placeholder.com/400x300/cccccc/666666?text=쉐보레+트레일블레이저" },
    { name: "쌍용 토레스", price: 3200, category: "중형 SUV", fuelEfficiency: 10.8, fuelType: "gasoline", image: "https://via.placeholder.com/400x300/cccccc/666666?text=쌍용+토레스" },
    { name: "BMW 3시리즈", price: 6000, category: "수입 중형", fuelEfficiency: 10.5, fuelType: "gasoline", image: "https://via.placeholder.com/400x300/cccccc/666666?text=BMW+3시리즈" },
    { name: "벤츠 C클래스", price: 6500, category: "수입 중형", fuelEfficiency: 10.2, fuelType: "gasoline", image: "https://via.placeholder.com/400x300/cccccc/666666?text=벤츠+C클래스" },
    { name: "아우디 A4", price: 6200, category: "수입 중형", fuelEfficiency: 10.8, fuelType: "gasoline", image: "https://via.placeholder.com/400x300/cccccc/666666?text=아우디+A4" },
    { name: "BMW 5시리즈", price: 8500, category: "수입 대형", fuelEfficiency: 9.2, fuelType: "gasoline", image: "https://via.placeholder.com/400x300/cccccc/666666?text=BMW+5시리즈" },
    { name: "벤츠 E클래스", price: 9000, category: "수입 대형", fuelEfficiency: 8.9, fuelType: "gasoline", image: "https://via.placeholder.com/400x300/cccccc/666666?text=벤츠+E클래스" },
    { name: "테슬라 모델3", price: 6000, category: "전기차", fuelEfficiency: 5.5, fuelType: "electric", image: "https://via.placeholder.com/400x300/cccccc/666666?text=테슬라+모델3" },
    { name: "현대 아이오닉5", price: 5500, category: "전기차", fuelEfficiency: 5.2, fuelType: "electric", image: "https://via.placeholder.com/400x300/cccccc/666666?text=현대+아이오닉5" },
    { name: "기아 EV6", price: 5400, category: "전기차", fuelEfficiency: 5.3, fuelType: "electric", image: "https://via.placeholder.com/400x300/cccccc/666666?text=기아+EV6" },
    
    // 프리미엄 수입차 추가 (고연봉 대상)
    { name: "BMW 7시리즈", price: 15000, category: "수입 플래그십", fuelEfficiency: 8.5, fuelType: "gasoline", image: "https://via.placeholder.com/400x300/cccccc/666666?text=BMW+7시리즈" },
    { name: "벤츠 S클래스", price: 16500, category: "수입 플래그십", fuelEfficiency: 8.2, fuelType: "gasoline", image: "https://via.placeholder.com/400x300/cccccc/666666?text=벤츠+S클래스" },
    { name: "아우디 A8", price: 14800, category: "수입 플래그십", fuelEfficiency: 8.7, fuelType: "gasoline", image: "https://via.placeholder.com/400x300/cccccc/666666?text=아우디+A8" },
    { name: "렉서스 LS", price: 13500, category: "수입 플래그십", fuelEfficiency: 9.1, fuelType: "gasoline", image: "https://via.placeholder.com/400x300/cccccc/666666?text=렉서스+LS" },
    { name: "제네시스 GV80", price: 7500, category: "국산 대형 SUV", fuelEfficiency: 8.8, fuelType: "gasoline", image: "https://via.placeholder.com/400x300/cccccc/666666?text=제네시스+GV80" },
    { name: "제네시스 GV70", price: 6000, category: "국산 중형 SUV", fuelEfficiency: 9.5, fuelType: "gasoline", image: "https://via.placeholder.com/400x300/cccccc/666666?text=제네시스+GV70" },
    
    // 럭셔리 SUV
    { name: "BMW X5", price: 11000, category: "수입 대형 SUV", fuelEfficiency: 8.9, fuelType: "gasoline", image: "https://via.placeholder.com/400x300/cccccc/666666?text=BMW+X5" },
    { name: "BMW X7", price: 14500, category: "수입 초대형 SUV", fuelEfficiency: 8.2, fuelType: "gasoline", image: "https://via.placeholder.com/400x300/cccccc/666666?text=BMW+X7" },
    { name: "벤츠 GLE", price: 10500, category: "수입 대형 SUV", fuelEfficiency: 8.7, fuelType: "gasoline", image: "https://via.placeholder.com/400x300/cccccc/666666?text=벤츠+GLE" },
    { name: "벤츠 GLS", price: 13800, category: "수입 초대형 SUV", fuelEfficiency: 8.0, fuelType: "gasoline", image: "https://via.placeholder.com/400x300/cccccc/666666?text=벤츠+GLS" },
    { name: "아우디 Q7", price: 10200, category: "수입 대형 SUV", fuelEfficiency: 8.6, fuelType: "gasoline", image: "https://via.placeholder.com/400x300/cccccc/666666?text=아우디+Q7" },
    { name: "아우디 Q8", price: 12500, category: "수입 대형 SUV", fuelEfficiency: 8.4, fuelType: "gasoline", image: "https://via.placeholder.com/400x300/cccccc/666666?text=아우디+Q8" },
    { name: "렉서스 GX", price: 11800, category: "수입 대형 SUV", fuelEfficiency: 7.9, fuelType: "gasoline", image: "https://via.placeholder.com/400x300/cccccc/666666?text=렉서스+GX" },
    { name: "렉서스 LX", price: 15500, category: "수입 초대형 SUV", fuelEfficiency: 7.2, fuelType: "gasoline", image: "https://via.placeholder.com/400x300/cccccc/666666?text=렉서스+LX" },
    
    // 프리미엄 전기차
    { name: "테슬라 모델S", price: 12000, category: "프리미엄 전기차", fuelEfficiency: 4.8, fuelType: "electric", image: "https://via.placeholder.com/400x300/cccccc/666666?text=테슬라+모델S" },
    { name: "테슬라 모델X", price: 14000, category: "전기 SUV", fuelEfficiency: 5.1, fuelType: "electric", image: "https://via.placeholder.com/400x300/cccccc/666666?text=테슬라+모델X" },
    { name: "BMW iX", price: 13500, category: "전기 SUV", fuelEfficiency: 5.0, fuelType: "electric", image: "https://via.placeholder.com/400x300/cccccc/666666?text=BMW+iX" },
    { name: "벤츠 EQS", price: 15800, category: "프리미엄 전기차", fuelEfficiency: 4.5, fuelType: "electric", image: "https://via.placeholder.com/400x300/cccccc/666666?text=벤츠+EQS" },
    { name: "아우디 e-tron GT", price: 13200, category: "프리미엄 전기차", fuelEfficiency: 4.9, fuelType: "electric", image: "https://via.placeholder.com/400x300/cccccc/666666?text=아우디+e-tron+GT" },
    
    // 스포츠카/슈퍼카 (초고연봉 대상)
    { name: "포르쉐 911", price: 18000, category: "스포츠카", fuelEfficiency: 8.5, fuelType: "gasoline", image: "https://via.placeholder.com/400x300/cccccc/666666?text=포르쉐+911" },
    { name: "포르쉐 카이엔", price: 12800, category: "스포츠 SUV", fuelEfficiency: 8.3, fuelType: "gasoline", image: "https://via.placeholder.com/400x300/cccccc/666666?text=포르쉐+카이엔" },
    { name: "포르쉐 마칸", price: 8500, category: "스포츠 SUV", fuelEfficiency: 9.2, fuelType: "gasoline", image: "https://via.placeholder.com/400x300/cccccc/666666?text=포르쉐+마칸" },
    { name: "페라리 포르토피노", price: 35000, category: "슈퍼카", fuelEfficiency: 6.5, fuelType: "gasoline", image: "https://via.placeholder.com/400x300/cccccc/666666?text=페라리+포르토피노" },
    { name: "람보르기니 우라칸", price: 32000, category: "슈퍼카", fuelEfficiency: 6.2, fuelType: "gasoline", image: "https://via.placeholder.com/400x300/cccccc/666666?text=람보르기니+우라칸" },
    { name: "맥라렌 570S", price: 28000, category: "슈퍼카", fuelEfficiency: 6.8, fuelType: "gasoline", image: "https://via.placeholder.com/400x300/cccccc/666666?text=맥라렌+570S" },
    { name: "벤틀리 컨티넨탈", price: 25000, category: "울트라 럭셔리", fuelEfficiency: 7.1, fuelType: "gasoline", image: "https://via.placeholder.com/400x300/cccccc/666666?text=벤틀리+컨티넨탈" },
    { name: "롤스로이스 고스트", price: 45000, category: "울트라 럭셔리", fuelEfficiency: 6.8, fuelType: "gasoline", image: "https://via.placeholder.com/400x300/cccccc/666666?text=롤스로이스+고스트" },
    
    // 추가 중고가 차량들
    { name: "BMW 6시리즈", price: 10500, category: "수입 쿠페", fuelEfficiency: 8.8, fuelType: "gasoline", image: "https://via.placeholder.com/400x300/cccccc/666666?text=BMW+6시리즈" },
    { name: "벤츠 CLS", price: 11200, category: "수입 쿠페", fuelEfficiency: 8.6, fuelType: "gasoline", image: "https://via.placeholder.com/400x300/cccccc/666666?text=벤츠+CLS" },
    { name: "아우디 A6", price: 9800, category: "수입 대형", fuelEfficiency: 9.0, fuelType: "gasoline", image: "https://via.placeholder.com/400x300/cccccc/666666?text=아우디+A6" },
    { name: "볼보 XC90", price: 9500, category: "수입 대형 SUV", fuelEfficiency: 9.1, fuelType: "gasoline", image: "https://via.placeholder.com/400x300/cccccc/666666?text=볼보+XC90" },
    { name: "재규어 XF", price: 8800, category: "수입 대형", fuelEfficiency: 8.9, fuelType: "gasoline", image: "https://via.placeholder.com/400x300/cccccc/666666?text=재규어+XF" },
    { name: "재규어 F-PACE", price: 9200, category: "수입 중형 SUV", fuelEfficiency: 8.7, fuelType: "gasoline", image: "https://via.placeholder.com/400x300/cccccc/666666?text=재규어+F-PACE" },
    { name: "랜드로버 레인지로버", price: 16800, category: "수입 초대형 SUV", fuelEfficiency: 7.5, fuelType: "gasoline", image: "https://via.placeholder.com/400x300/cccccc/666666?text=랜드로버+레인지로버" },
    { name: "랜드로버 디스커버리", price: 12000, category: "수입 대형 SUV", fuelEfficiency: 8.2, fuelType: "gasoline", image: "https://via.placeholder.com/400x300/cccccc/666666?text=랜드로버+디스커버리" }
];

function calculateAfterTaxIncome(annualSalary) {
    const salaryInWon = annualSalary * 10000;
    
    // 2024년 근로소득세 과세표준 구간
    const taxBrackets = [
        { min: 0, max: 14000000, rate: 0.06 },
        { min: 14000000, max: 50000000, rate: 0.15 },
        { min: 50000000, max: 88000000, rate: 0.24 },
        { min: 88000000, max: 150000000, rate: 0.35 },
        { min: 150000000, max: 300000000, rate: 0.38 },
        { min: 300000000, max: 500000000, rate: 0.40 },
        { min: 500000000, max: 1000000000, rate: 0.42 },
        { min: 1000000000, max: Infinity, rate: 0.45 }
    ];
    
    // 누진공제
    const deductions = [
        { max: 14000000, deduction: 0 },
        { max: 50000000, deduction: 1260000 },
        { max: 88000000, deduction: 5760000 },
        { max: 150000000, deduction: 13360000 },
        { max: 300000000, deduction: 28360000 },
        { max: 500000000, deduction: 37360000 },
        { max: 1000000000, deduction: 47360000 },
        { max: Infinity, deduction: 77360000 }
    ];
    
    // 근로소득공제 계산 (간소화된 버전)
    let incomeDeduction = 0;
    if (salaryInWon <= 5000000) {
        incomeDeduction = salaryInWon * 0.7;
    } else if (salaryInWon <= 15000000) {
        incomeDeduction = 3500000 + (salaryInWon - 5000000) * 0.4;
    } else if (salaryInWon <= 45000000) {
        incomeDeduction = 7500000 + (salaryInWon - 15000000) * 0.15;
    } else if (salaryInWon <= 100000000) {
        incomeDeduction = 12000000 + (salaryInWon - 45000000) * 0.05;
    } else {
        incomeDeduction = 14750000 + (salaryInWon - 100000000) * 0.02;
    }
    
    // 과세표준 = 총급여 - 근로소득공제
    const taxableIncome = Math.max(0, salaryInWon - incomeDeduction);
    
    // 소득세 계산
    let incomeTax = 0;
    let progressiveDeduction = 0;
    
    for (let i = 0; i < taxBrackets.length; i++) {
        if (taxableIncome > taxBrackets[i].min) {
            if (taxableIncome <= taxBrackets[i].max) {
                incomeTax = taxableIncome * taxBrackets[i].rate;
                progressiveDeduction = deductions[i].deduction;
                break;
            }
        }
    }
    
    incomeTax -= progressiveDeduction;
    
    // 지방소득세 (소득세의 10%)
    const localIncomeTax = incomeTax * 0.1;
    
    // 4대보험료 계산 (간소화)
    const nationalPension = Math.min(salaryInWon * 0.045, 248850 * 12); // 상한선 적용
    const healthInsurance = salaryInWon * 0.03545;
    const longTermCare = healthInsurance * 0.1295;
    const employmentInsurance = salaryInWon * 0.009;
    
    const totalDeductions = incomeTax + localIncomeTax + nationalPension + 
                          healthInsurance + longTermCare + employmentInsurance;
    
    const afterTaxIncome = salaryInWon - totalDeductions;
    
    return {
        gross: salaryInWon,
        afterTax: afterTaxIncome,
        afterTaxInManwon: Math.round(afterTaxIncome / 10000),
        incomeTax: incomeTax,
        localIncomeTax: localIncomeTax,
        nationalPension: nationalPension,
        healthInsurance: healthInsurance,
        longTermCare: longTermCare,
        employmentInsurance: employmentInsurance,
        totalDeductions: totalDeductions,
        effectiveTaxRate: (totalDeductions / salaryInWon * 100).toFixed(1)
    };
}

function getFixedExpenses() {
    const housing = parseInt(document.getElementById('housing').value) || 0;
    const insurance = parseInt(document.getElementById('insurance').value) || 0;
    const loan = parseInt(document.getElementById('loan').value) || 0;
    const education = parseInt(document.getElementById('education').value) || 0;
    const utilities = parseInt(document.getElementById('utilities').value) || 0;
    const other = parseInt(document.getElementById('other').value) || 0;
    
    const totalMonthly = housing + insurance + loan + education + utilities + other;
    const totalAnnual = totalMonthly * 12;
    
    return {
        housing,
        insurance,
        loan,
        education,
        utilities,
        other,
        totalMonthly,
        totalAnnual
    };
}

function getInstallmentInfo() {
    const installmentMonthsInput = document.getElementById('installmentMonths').value;
    const interestRateInput = document.getElementById('interestRate').value;
    const downPaymentPercentInput = document.getElementById('downPaymentPercent').value;
    
    const installmentMonths = installmentMonthsInput ? parseInt(installmentMonthsInput) : 0;
    const interestRate = interestRateInput ? parseFloat(interestRateInput) : 0;
    const downPaymentPercent = downPaymentPercentInput ? parseFloat(downPaymentPercentInput) : 0;
    
    return {
        months: Math.max(0, installmentMonths),
        annualRate: Math.max(0, interestRate),
        downPaymentPercent: Math.max(0, Math.min(100, downPaymentPercent))
    };
}

// 취등록세 계산 함수
function calculateRegistrationTax(carPriceManwon, fuelType) {
    const carPriceWon = carPriceManwon * 10000;
    
    // 취득세 (차량가격의 7%, 전기차는 140만원 한도 감면)
    let acquisitionTax = carPriceWon * 0.07;
    if (fuelType === 'electric') {
        acquisitionTax = Math.max(0, acquisitionTax - 1400000); // 140만원 감면
    }
    
    // 등록세 (취득세의 40%)
    const registrationTax = acquisitionTax * 0.4;
    
    // 공채매수 (지역별 차이가 있지만 평균적으로 취득세의 20% 수준)
    const bondPurchase = acquisitionTax * 0.2;
    
    const totalTax = acquisitionTax + registrationTax + bondPurchase;
    
    return {
        acquisitionTax: Math.round(acquisitionTax),
        registrationTax: Math.round(registrationTax),
        bondPurchase: Math.round(bondPurchase),
        totalTax: Math.round(totalTax),
        totalTaxManwon: Math.round(totalTax / 10000)
    };
}

function calculateMonthlyPayment(carPrice, installmentInfo, fuelType = 'gasoline') {
    if (!installmentInfo.months || installmentInfo.months <= 0) {
        return null;
    }
    
    // 취등록세 계산
    const registrationTax = calculateRegistrationTax(carPrice, fuelType);
    const totalCarCost = carPrice + registrationTax.totalTaxManwon; // 차량가격 + 취등록세
    
    const downPayment = totalCarCost * (installmentInfo.downPaymentPercent / 100);
    const loanAmount = totalCarCost - downPayment;
    
    if (loanAmount <= 0) {
        return {
            carPrice: carPrice,
            registrationTax: registrationTax,
            totalCarCost: totalCarCost,
            downPayment: totalCarCost,
            loanAmount: 0,
            monthlyPayment: 0,
            totalPayment: totalCarCost,
            totalInterest: 0
        };
    }
    
    if (installmentInfo.annualRate === 0) {
        // 무이자 할부
        return {
            carPrice: carPrice,
            registrationTax: registrationTax,
            totalCarCost: totalCarCost,
            downPayment: downPayment,
            loanAmount: loanAmount,
            monthlyPayment: loanAmount / installmentInfo.months,
            totalPayment: totalCarCost,
            totalInterest: 0
        };
    }
    
    // 월 이자율
    const monthlyRate = installmentInfo.annualRate / 100 / 12;
    
    // 월 납입금 계산 (원리금균등상환 방식)
    const monthlyPayment = loanAmount * 
        (monthlyRate * Math.pow(1 + monthlyRate, installmentInfo.months)) / 
        (Math.pow(1 + monthlyRate, installmentInfo.months) - 1);
    
    const totalPayment = downPayment + (monthlyPayment * installmentInfo.months);
    const totalInterest = totalPayment - totalCarCost;
    
    return {
        carPrice: carPrice,
        registrationTax: registrationTax,
        totalCarCost: totalCarCost,
        downPayment: downPayment,
        loanAmount: loanAmount,
        monthlyPayment: monthlyPayment,
        totalPayment: totalPayment,
        totalInterest: totalInterest
    };
}

function calculateMaintenanceCost(car, monthlyKm = 1000) {
    // 연료비 계산 (원 단위)
    let fuelCostWon = 0;
    const gasolinePriceWon = 1700; // 원/리터
    const dieselPriceWon = 1600; // 원/리터  
    const electricPriceWon = 350; // 원/kWh
    
    if (car.fuelType === "gasoline") {
        fuelCostWon = (monthlyKm / car.fuelEfficiency) * gasolinePriceWon;
    } else if (car.fuelType === "diesel") {
        fuelCostWon = (monthlyKm / car.fuelEfficiency) * dieselPriceWon;
    } else if (car.fuelType === "electric") {
        fuelCostWon = (monthlyKm / car.fuelEfficiency) * electricPriceWon;
    }
    
    // 보험료 계산 (원 단위, 차량 가격 manwon에 따른 추정)
    let insuranceCostAnnualWon = 0;
    const carPriceManwon = car.price; // 명시적으로 단위 표시
    if (carPriceManwon < 2000) {
        insuranceCostAnnualWon = 400000; // 연 40만원
    } else if (carPriceManwon < 3000) {
        insuranceCostAnnualWon = 600000; // 연 60만원
    } else if (carPriceManwon < 4000) {
        insuranceCostAnnualWon = 800000; // 연 80만원
    } else if (carPriceManwon < 5000) {
        insuranceCostAnnualWon = 1000000; // 연 100만원
    } else if (carPriceManwon < 7000) {
        insuranceCostAnnualWon = 1300000; // 연 130만원
    } else if (carPriceManwon < 10000) {
        insuranceCostAnnualWon = 1800000; // 연 180만원
    } else if (carPriceManwon < 15000) {
        insuranceCostAnnualWon = 2500000; // 연 250만원
    } else if (carPriceManwon < 20000) {
        insuranceCostAnnualWon = 3500000; // 연 350만원
    } else if (carPriceManwon < 30000) {
        insuranceCostAnnualWon = 5000000; // 연 500만원
    } else {
        insuranceCostAnnualWon = 8000000; // 연 800만원 (슈퍼카)
    }
    
    const insuranceCostMonthlyWon = insuranceCostAnnualWon / 12;
    
    // 기타 유지비 (정비, 소모품 등) - 차량 가격의 월 0.2% (원 단위)
    const otherCostsWon = carPriceManwon * 10000 * 0.002; // 만원을 원으로 변환 후 월 0.2% 적용
    
    return {
        fuelWon: Math.round(fuelCostWon),
        insuranceWon: Math.round(insuranceCostMonthlyWon),
        otherWon: Math.round(otherCostsWon),
        totalWon: Math.round(fuelCostWon + insuranceCostMonthlyWon + otherCostsWon)
    };
}

function recommendCar() {
    const salaryInput = document.getElementById('salary');
    const salary = parseInt(salaryInput.value);
    const button = document.querySelector('button[onclick="recommendCar()"]');
    const resultSection = document.getElementById('result');
    
    if (!salary || salary <= 0) {
        alert('올바른 연봉을 입력해주세요.');
        return;
    }
    
    // 버튼 로딩 상태 표시
    const originalText = button.innerHTML;
    button.innerHTML = '🔄 계산 중...';
    button.disabled = true;
    button.style.opacity = '0.7';
    
    // 기존 결과 페이드 아웃
    if (!resultSection.classList.contains('hidden')) {
        resultSection.style.opacity = '0.3';
        resultSection.style.transition = 'opacity 0.3s ease';
    }
    
    const taxInfo = calculateAfterTaxIncome(salary);
    const afterTaxSalary = taxInfo.afterTaxInManwon;
    
    const fixedExpenses = getFixedExpenses();
    const installmentInfo = getInstallmentInfo();
    const availableIncomeManwon = Math.max(0, afterTaxSalary - fixedExpenses.totalAnnual);
    
    let recommendedCars, affordableCars;
    
    if (installmentInfo.months > 0) {
        // 할부 구매 시: 월 가용 소득 기준으로 차량 추천 (유지비 포함)
        const monthlyAvailableIncomeManwon = (availableIncomeManwon / 12) - fixedExpenses.totalMonthly;
        const maxMonthlyCarCostManwon = monthlyAvailableIncomeManwon * 0.35; // 월 가용 소득의 35%까지 (할부금 + 유지비)
        const minMonthlyCarCostManwon = monthlyAvailableIncomeManwon * 0.25; // 월 가용 소득의 25%부터
        
        recommendedCars = carDatabase.filter(car => {
            const payment = calculateMonthlyPayment(car.price, installmentInfo, car.fuelType);
            const maintenance = calculateMaintenanceCost(car);
            // 단위 통일: payment.monthlyPayment (만원) + maintenance.totalWon (원을 만원으로 변환)
            const totalMonthlyCostManwon = payment ? payment.monthlyPayment + (maintenance.totalWon / 10000) : 0;
            return payment && totalMonthlyCostManwon >= minMonthlyCarCostManwon && totalMonthlyCostManwon <= maxMonthlyCarCostManwon;
        });
        
        affordableCars = carDatabase.filter(car => {
            const payment = calculateMonthlyPayment(car.price, installmentInfo, car.fuelType);
            const maintenance = calculateMaintenanceCost(car);
            // 단위 통일: payment.monthlyPayment (만원) + maintenance.totalWon (원을 만원으로 변환)
            const totalMonthlyCostManwon = payment ? payment.monthlyPayment + (maintenance.totalWon / 10000) : 0;
            return payment && totalMonthlyCostManwon < minMonthlyCarCostManwon && totalMonthlyCostManwon >= minMonthlyCarCostManwon * 0.7;
        });
    } else {
        // 일시불 구매 시: 연간 가용 소득 기준 (유지비 고려)
        const monthlyAvailableIncomeManwon = (availableIncomeManwon / 12) - fixedExpenses.totalMonthly;
        const maxMonthlyMaintenanceManwon = monthlyAvailableIncomeManwon * 0.15; // 유지비만으로 월 가용 소득의 15%까지
        
        recommendedCars = carDatabase.filter(car => {
            const maintenance = calculateMaintenanceCost(car);
            const registrationTax = calculateRegistrationTax(car.price, car.fuelType);
            const totalCarCostManwon = car.price + registrationTax.totalTaxManwon; // 차량가격 + 취등록세
            return totalCarCostManwon >= availableIncomeManwon * 0.5 && 
                   totalCarCostManwon <= availableIncomeManwon * 0.7 &&
                   maintenance.totalWon <= maxMonthlyMaintenanceManwon * 10000; // 만원을 원으로 변환하여 비교
        });
        
        affordableCars = carDatabase.filter(car => {
            const maintenance = calculateMaintenanceCost(car);
            const registrationTax = calculateRegistrationTax(car.price, car.fuelType);
            const totalCarCostManwon = car.price + registrationTax.totalTaxManwon; // 차량가격 + 취등록세
            return totalCarCostManwon < availableIncomeManwon * 0.5 && 
                   totalCarCostManwon >= availableIncomeManwon * 0.35 &&
                   maintenance.totalWon <= maxMonthlyMaintenanceManwon * 10000; // 만원을 원으로 변환하여 비교
        });
    }
    
    // 약간의 지연 후 결과 표시 (로딩 효과)
    setTimeout(() => {
        displayResults(recommendedCars, affordableCars, salary, taxInfo, fixedExpenses, installmentInfo, button, originalText);
    }, 500);
}

function displayResults(recommendedCars, affordableCars, salary, taxInfo, fixedExpenses, installmentInfo, button, originalText) {
    const resultSection = document.getElementById('result');
    const carList = document.getElementById('carList');
    
    carList.innerHTML = '';
    
    // 세금 정보 표시
    carList.innerHTML = `
        <div class="tax-info-box">
            <h3>📊 세금 계산 결과</h3>
            <div class="tax-details">
                <div class="tax-row">
                    <span>세전 연봉:</span>
                    <span>${salary.toLocaleString()}만원</span>
                </div>
                <div class="tax-row">
                    <span>소득세:</span>
                    <span>${Math.round(taxInfo.incomeTax / 10000).toLocaleString()}만원</span>
                </div>
                <div class="tax-row">
                    <span>지방소득세:</span>
                    <span>${Math.round(taxInfo.localIncomeTax / 10000).toLocaleString()}만원</span>
                </div>
                <div class="tax-row">
                    <span>국민연금:</span>
                    <span>${Math.round(taxInfo.nationalPension / 10000).toLocaleString()}만원</span>
                </div>
                <div class="tax-row">
                    <span>건강보험:</span>
                    <span>${Math.round(taxInfo.healthInsurance / 10000).toLocaleString()}만원</span>
                </div>
                <div class="tax-row">
                    <span>고용보험:</span>
                    <span>${Math.round(taxInfo.employmentInsurance / 10000).toLocaleString()}만원</span>
                </div>
                <div class="tax-row total">
                    <span>세후 연봉:</span>
                    <span>${taxInfo.afterTaxInManwon.toLocaleString()}만원</span>
                </div>
                <div class="tax-row">
                    <span>실효세율:</span>
                    <span>${taxInfo.effectiveTaxRate}%</span>
                </div>
            </div>
        </div>
    `;
    
    // 고정 지출 정보가 있는 경우 예산 요약 표시
    if (fixedExpenses.totalMonthly > 0) {
        const availableIncomeManwon = Math.max(0, taxInfo.afterTaxInManwon - fixedExpenses.totalAnnual);
        carList.innerHTML += `
            <div class="budget-summary">
                <h3>💸 고정 지출 및 가용 예산</h3>
                <div class="budget-details">
                    ${fixedExpenses.housing > 0 ? `<div class="budget-row">
                        <span>🏠 주거비:</span>
                        <span>월 ${fixedExpenses.housing.toLocaleString()}만원</span>
                    </div>` : ''}
                    ${fixedExpenses.insurance > 0 ? `<div class="budget-row">
                        <span>🛡️ 보험료:</span>
                        <span>월 ${fixedExpenses.insurance.toLocaleString()}만원</span>
                    </div>` : ''}
                    ${fixedExpenses.loan > 0 ? `<div class="budget-row">
                        <span>💳 대출 상환:</span>
                        <span>월 ${fixedExpenses.loan.toLocaleString()}만원</span>
                    </div>` : ''}
                    ${fixedExpenses.education > 0 ? `<div class="budget-row">
                        <span>📚 교육비:</span>
                        <span>월 ${fixedExpenses.education.toLocaleString()}만원</span>
                    </div>` : ''}
                    ${fixedExpenses.utilities > 0 ? `<div class="budget-row">
                        <span>📱 통신/구독:</span>
                        <span>월 ${fixedExpenses.utilities.toLocaleString()}만원</span>
                    </div>` : ''}
                    ${fixedExpenses.other > 0 ? `<div class="budget-row">
                        <span>🔧 기타:</span>
                        <span>월 ${fixedExpenses.other.toLocaleString()}만원</span>
                    </div>` : ''}
                    <div class="budget-row">
                        <span>월 총 고정 지출:</span>
                        <span>${fixedExpenses.totalMonthly.toLocaleString()}만원</span>
                    </div>
                    <div class="budget-row">
                        <span>연간 총 고정 지출:</span>
                        <span>${fixedExpenses.totalAnnual.toLocaleString()}만원</span>
                    </div>
                    <div class="budget-row available">
                        <span>차량 구매 가용 예산:</span>
                        <span>${availableIncomeManwon.toLocaleString()}만원</span>
                    </div>
                </div>
            </div>
        `;
    }
    
    const availableIncomeForDisplayManwon = Math.max(0, taxInfo.afterTaxInManwon - fixedExpenses.totalAnnual);
    
    if (recommendedCars.length === 0 && affordableCars.length === 0) {
        carList.innerHTML += `
            <div class="car-item">
                <p>${fixedExpenses.totalMonthly > 0 
                    ? `고정 지출 제외 후 가용 예산 ${availableIncomeForDisplayManwon.toLocaleString()}만원에 적합한 차량을 찾지 못했습니다.`
                    : `세후 연봉 ${taxInfo.afterTaxInManwon.toLocaleString()}만원에 적합한 차량을 찾지 못했습니다.`
                }</p>
                <p>더 많은 옵션을 보려면 연봉을 다시 입력해주세요.</p>
            </div>
        `;
    } else {
        if (recommendedCars.length > 0) {
            carList.innerHTML += `<h3 style="margin-bottom: 15px; color: #27ae60;">💚 추천 차량 ${installmentInfo.months > 0 ? '(월 납입금 기준)' : '(가용 예산의 50~70%)'}</h3>`;
            recommendedCars.forEach(car => {
                carList.innerHTML += createCarItem(car, true, installmentInfo);
            });
        }
        
        if (affordableCars.length > 0) {
            carList.innerHTML += '<h3 style="margin: 25px 0 15px; color: #f39c12;">💛 대안 차량 (조금 더 저렴한 옵션)</h3>';
            affordableCars.forEach(car => {
                carList.innerHTML += createCarItem(car, false, installmentInfo);
            });
        }
    }
    
    // 결과 섹션 표시 및 애니메이션
    resultSection.classList.remove('hidden');
    resultSection.style.opacity = '1';
    resultSection.style.transition = 'opacity 0.5s ease';
    
    // 버튼 상태 복원
    if (button && originalText) {
        button.innerHTML = originalText;
        button.disabled = false;
        button.style.opacity = '1';
    }
    
    // 성공 피드백과 함께 부드러운 스크롤
    setTimeout(() => {
        // 버튼을 잠깐 하이라이트
        button.style.backgroundColor = '#27ae60';
        button.innerHTML = '✅ 완료!';
        
        setTimeout(() => {
            button.style.backgroundColor = '#3498db';
            button.innerHTML = originalText;
            button.style.transition = 'background-color 0.3s ease';
        }, 1000);
        
        // 결과로 부드럽게 스크롤
        resultSection.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
        });
    }, 100);
}

function createCarItem(car, isRecommended, installmentInfo) {
    const maintenance = calculateMaintenanceCost(car);
    let payment = null;
    let monthlyPaymentHtml = '';
    let maintenanceSummaryHtml = '';
    let toggleButtonsHtml = '';
    let installmentDetailHtml = '';
    let maintenanceDetailHtml = '';
    
    // 유니크한 ID 생성 (차 이름 기반)
    const carId = car.name.replace(/\s+/g, '-').toLowerCase();
    
    // 연료 타입에 따른 아이콘과 색상
    let fuelTypeIcon = '';
    let fuelTypeClass = '';
    let borderColor = '';
    
    if (car.fuelType === 'electric') {
        fuelTypeIcon = '⚡';
        fuelTypeClass = 'electric-car';
        borderColor = '#2ecc71'; // 녹색
    } else if (car.fuelType === 'diesel') {
        fuelTypeIcon = '🛢️';
        fuelTypeClass = 'diesel-car';
        borderColor = '#34495e'; // 어두운 회색
    } else {
        fuelTypeIcon = '⛽';
        fuelTypeClass = 'gasoline-car';
        borderColor = '#e74c3c'; // 빨간색
    }
    
    if (installmentInfo && installmentInfo.months > 0) {
        payment = calculateMonthlyPayment(car.price, installmentInfo, car.fuelType);
        if (payment) {
            monthlyPaymentHtml = `<div style="font-weight: 600; color: #e74c3c; margin-top: 5px;">💳 월 납입금: ${Math.round(payment.monthlyPayment).toLocaleString()}만원</div>`;
            
            installmentDetailHtml = `
                <div id="installment-${carId}" class="toggle-content" style="display: none;">
                    <div class="installment-info-box">
                        <div class="installment-details">
                            <div class="installment-row">
                                <span>차량 가격:</span>
                                <span>${car.price.toLocaleString()}만원</span>
                            </div>
                            <div class="installment-row">
                                <span>취등록세:</span>
                                <span>${payment.registrationTax.totalTaxManwon.toLocaleString()}만원</span>
                            </div>
                            <div class="installment-row" style="font-weight: 600; border-top: 1px solid #ddd; padding-top: 8px; margin-top: 5px;">
                                <span>총 차량비용:</span>
                                <span>${Math.round(payment.totalCarCost).toLocaleString()}만원</span>
                            </div>
                            <div class="installment-row">
                                <span>선납금 (${installmentInfo.downPaymentPercent}%):</span>
                                <span>${Math.round(payment.downPayment).toLocaleString()}만원</span>
                            </div>
                            <div class="installment-row">
                                <span>대출 원금:</span>
                                <span>${Math.round(payment.loanAmount).toLocaleString()}만원</span>
                            </div>
                            <div class="installment-row">
                                <span>할부 개월:</span>
                                <span>${installmentInfo.months}개월</span>
                            </div>
                            <div class="installment-row">
                                <span>연 이자율:</span>
                                <span>${installmentInfo.annualRate}%</span>
                            </div>
                            <div class="installment-row monthly-payment">
                                <span>월 납입금:</span>
                                <span>${Math.round(payment.monthlyPayment).toLocaleString()}만원</span>
                            </div>
                            <div class="installment-row">
                                <span>총 납입금:</span>
                                <span>${Math.round(payment.totalPayment).toLocaleString()}만원</span>
                            </div>
                            <div class="installment-row">
                                <span>총 이자:</span>
                                <span>${Math.round(payment.totalInterest).toLocaleString()}만원</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }
    }
    
    // 유지비 요약
    maintenanceSummaryHtml = `<div style="font-weight: 600; color: #3498db; margin-top: 5px;">🔧 월 유지비: ${(maintenance.totalWon / 10000).toFixed(1)}만원</div>`;
    
    // 유지비 상세 정보
    maintenanceDetailHtml = `
        <div id="maintenance-${carId}" class="toggle-content" style="display: none;">
            <div class="maintenance-info-box">
                <div class="maintenance-details">
                    <div class="maintenance-row">
                        <span>⛽ 연료비 (월 1,000km 기준):</span>
                        <span>${(maintenance.fuelWon / 10000).toFixed(1)}만원</span>
                    </div>
                    <div class="maintenance-row">
                        <span>🛡️ 보험료:</span>
                        <span>${(maintenance.insuranceWon / 10000).toFixed(1)}만원</span>
                    </div>
                    <div class="maintenance-row">
                        <span>🔧 기타 유지비:</span>
                        <span>${(maintenance.otherWon / 10000).toFixed(1)}만원</span>
                    </div>
                    <div class="maintenance-row total-maintenance">
                        <span>총 월 유지비:</span>
                        <span>${(maintenance.totalWon / 10000).toFixed(1)}만원</span>
                    </div>
                    ${installmentInfo && installmentInfo.months > 0 && payment ? `
                    <div class="maintenance-row total-cost">
                        <span>💰 월 총 비용 (할부금 + 유지비):</span>
                        <span>${Math.round((payment.monthlyPayment + maintenance.totalWon / 10000)).toLocaleString()}만원</span>
                    </div>
                    ` : ''}
                </div>
            </div>
        </div>
    `;
    
    // 토글 버튼 생성
    toggleButtonsHtml = `
        <div class="toggle-buttons" style="margin-top: 15px; display: flex; gap: 10px;">
            ${installmentInfo && installmentInfo.months > 0 && payment ? 
                `<button onclick="toggleDetail('installment-${carId}')" class="toggle-btn">
                    💳 할부 상세보기 <span id="arrow-installment-${carId}">▼</span>
                </button>` : ''
            }
            <button onclick="toggleDetail('maintenance-${carId}')" class="toggle-btn">
                🔧 유지비 상세보기 <span id="arrow-maintenance-${carId}">▼</span>
            </button>
        </div>
    `;
    
    return `
        <div class="car-item ${fuelTypeClass}" style="border-left-color: ${borderColor};">
            <div class="car-content-wrapper">
                <div class="car-image">
                    <img src="${car.image || 'https://via.placeholder.com/400x300/cccccc/666666?text=차량+이미지'}" 
                         alt="${car.name}" 
                         loading="lazy"
                         onerror="this.src='https://via.placeholder.com/400x300/cccccc/666666?text=차량+이미지'">
                </div>
                <div class="car-info">
                    <div class="car-header">
                        <div class="car-name">${car.name}</div>
                        <div class="fuel-type-badge">
                            <span class="fuel-icon">${fuelTypeIcon}</span>
                            <span class="fuel-text">${car.fuelType === 'electric' ? '전기차' : car.fuelType === 'diesel' ? '디젤' : '가솔린'}</span>
                        </div>
                    </div>
                    <div class="car-price">
                        ${car.price.toLocaleString()}만원 
                        <span class="tax-info">(+취등록세 ${calculateRegistrationTax(car.price, car.fuelType).totalTaxManwon.toLocaleString()}만원)</span>
                    </div>
                    <div class="car-category">${car.category}</div>
                    ${monthlyPaymentHtml}
                    ${maintenanceSummaryHtml}
                    ${toggleButtonsHtml}
                    ${installmentDetailHtml}
                    ${maintenanceDetailHtml}
                </div>
            </div>
        </div>
    `;
}

// 토글 기능
function toggleDetail(elementId) {
    const element = document.getElementById(elementId);
    const arrow = document.getElementById(`arrow-${elementId}`);
    
    if (element.style.display === 'none' || element.style.display === '') {
        element.style.display = 'block';
        arrow.textContent = '▲';
    } else {
        element.style.display = 'none';
        arrow.textContent = '▼';
    }
}

// 페이지 전환 기능
function showPage(pageType) {
    // 모든 페이지 숨기기
    document.getElementById('car-page').style.display = 'none';
    document.getElementById('apartment-page').style.display = 'none';
    
    // SEO 콘텐츠 제어
    const carSeoContent = document.getElementById('car-seo-content');
    if (pageType === 'car') {
        carSeoContent.style.display = 'block';
    } else {
        carSeoContent.style.display = 'none';
    }
    
    // 선택된 페이지 보이기
    document.getElementById(pageType + '-page').style.display = 'block';
    
    // 탭 활성화 상태 업데이트
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // 클릭된 탭 찾아서 활성화
    document.querySelectorAll('.nav-tab').forEach(tab => {
        if ((pageType === 'car' && tab.textContent.includes('차량')) || 
            (pageType === 'apartment' && tab.textContent.includes('아파트'))) {
            tab.classList.add('active');
        }
    });
}

// 전역으로 함수 노출
window.toggleDetail = toggleDetail;
window.showPage = showPage;

document.getElementById('salary').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        recommendCar();
    }
});

// 사이드바 외부 클릭 시 닫기 (모바일)
document.addEventListener('click', function(event) {
    const sidebar = document.getElementById('sidebar');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    
    if (window.innerWidth <= 768 && 
        !sidebar.contains(event.target) && 
        !menuBtn.contains(event.target) && 
        sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
    }
});

// 아파트 추천 기능
// 임시 아파트 데이터베이스 (실거래가 API 연동 전까지 사용)
const apartmentDatabase = [
    // 서울 강남권
    { name: "래미안 강남", location: "서울시 강남구 도곡동", price: 250000, size: "34평", year: 2018, floors: 35, image: "https://via.placeholder.com/400x300/cccccc/666666?text=래미안+강남" },
    { name: "아크로리버파크", location: "서울시 성동구 성수동", price: 180000, size: "33평", year: 2021, floors: 40, image: "https://via.placeholder.com/400x300/cccccc/666666?text=아크로리버파크" },
    { name: "롯데캐슬", location: "서울시 송파구 잠실동", price: 220000, size: "35평", year: 2019, floors: 38, image: "https://via.placeholder.com/400x300/cccccc/666666?text=롯데캐슬+잠실" },
    
    // 서울 강북권
    { name: "북한산 아이파크", location: "서울시 은평구 불광동", price: 95000, size: "30평", year: 2017, floors: 25, image: "https://via.placeholder.com/400x300/cccccc/666666?text=북한산+아이파크" },
    { name: "성북동 래미안", location: "서울시 성북구 성북동", price: 120000, size: "32평", year: 2020, floors: 20, image: "https://via.placeholder.com/400x300/cccccc/666666?text=성북동+래미안" },
    
    // 경기도
    { name: "판교 아크로", location: "경기도 성남시 분당구 판교동", price: 150000, size: "33평", year: 2019, floors: 35, image: "https://via.placeholder.com/400x300/cccccc/666666?text=판교+아크로" },
    { name: "동탄 메타폴리스", location: "경기도 화성시 동탄", price: 80000, size: "28평", year: 2021, floors: 30, image: "https://via.placeholder.com/400x300/cccccc/666666?text=동탄+메타폴리스" },
    { name: "일산 자이", location: "경기도 고양시 일산동구", price: 70000, size: "25평", year: 2018, floors: 25, image: "https://via.placeholder.com/400x300/cccccc/666666?text=일산+자이" },
    
    // 중저가 아파트
    { name: "수원 영통 아이파크", location: "경기도 수원시 영통구", price: 60000, size: "24평", year: 2016, floors: 20, image: "https://via.placeholder.com/400x300/cccccc/666666?text=영통+아이파크" },
    { name: "안산 센트럴파크", location: "경기도 안산시 상록구", price: 45000, size: "22평", year: 2015, floors: 18, image: "https://via.placeholder.com/400x300/cccccc/666666?text=안산+센트럴파크" },
    { name: "부천 중동 신도시", location: "경기도 부천시 중동", price: 50000, size: "23평", year: 2014, floors: 22, image: "https://via.placeholder.com/400x300/cccccc/666666?text=부천+중동" },
    
    // 초저가 아파트
    { name: "인천 청라 호반", location: "인천시 서구 청라동", price: 38000, size: "20평", year: 2013, floors: 25, image: "https://via.placeholder.com/400x300/cccccc/666666?text=청라+호반" },
    { name: "김포 한강신도시", location: "경기도 김포시", price: 35000, size: "19평", year: 2012, floors: 20, image: "https://via.placeholder.com/400x300/cccccc/666666?text=김포+한강신도시" }
];

// 실거래가 API를 통해 실제 데이터 가져오기
async function fetchRealApartmentData(region, maxPrice) {
    try {
        // 현재 날짜 기준으로 최근 3개월 데이터 조회
        const now = new Date();
        const yearMonth = now.getFullYear() + String(now.getMonth() + 1).padStart(2, '0');
        
        // Vercel Serverless Function을 통해 실거래가 데이터 조회
        const response = await fetch(`/api/apartment-prices?region=${region}&yearMonth=${yearMonth}`);
        
        if (!response.ok) {
            throw new Error('API 호출 실패');
        }
        
        const data = await response.json();
        
        if (data.success && data.data.length > 0) {
            // 가격 범위에 맞는 아파트만 필터링
            return data.data
                .filter(apt => apt.price <= maxPrice * 1.2 && apt.cancelYn !== 'O') // 취소되지 않은 거래만
                .map(apt => ({
                    name: apt.dong ? `${apt.name} ${apt.dong}` : apt.name,
                    location: apt.location,
                    price: apt.price,
                    size: Math.round(apt.size * 0.3025) + "평", // ㎡를 평으로 변환
                    year: apt.buildYear,
                    floors: apt.floor,
                    image: "https://via.placeholder.com/400x300/cccccc/666666?text=" + encodeURIComponent(apt.name),
                    isRealData: true, // 실제 데이터 표시
                    dealDate: `${apt.year}.${apt.month}.${apt.day}`, // 거래일자
                    dealType: apt.dealType // 거래유형
                }))
                .sort((a, b) => b.price - a.price); // 가격 내림차순 정렬
        }
    } catch (error) {
        console.error('실거래가 API 호출 실패:', error);
    }
    
    // API 호출 실패시 기존 데이터베이스 반환
    return apartmentDatabase;
}

// 매매/갭투자 선택
function selectPurchaseType(type) {
    const purchaseForm = document.getElementById('purchase-form');
    const gapInvestmentForm = document.getElementById('gap-investment-form');
    const purchaseBtns = document.querySelectorAll('.purchase-type-btn');
    
    purchaseBtns.forEach(btn => btn.classList.remove('active'));
    
    if (type === 'purchase') {
        purchaseForm.style.display = 'block';
        gapInvestmentForm.style.display = 'none';
        purchaseBtns[0].classList.add('active');
    } else {
        purchaseForm.style.display = 'none';
        gapInvestmentForm.style.display = 'block';
        purchaseBtns[1].classList.add('active');
    }
}

// 아파트 추천 기능
async function recommendApartment() {
    const availableCash = parseInt(document.getElementById('available-cash').value) || 0;
    const salary = parseInt(document.getElementById('apt-salary').value) || 0;
    
    if (!availableCash || !salary) {
        alert('가용 현금과 연봉을 입력해주세요.');
        return;
    }
    
    // 로딩 표시
    const aptResult = document.getElementById('apt-result');
    const aptList = document.getElementById('aptList');
    aptResult.classList.remove('hidden');
    aptList.innerHTML = '<div class="loading-message" style="text-align: center; padding: 40px;"><div class="spinner"></div><p>실거래가 데이터를 조회중입니다...</p></div>';
    
    // 대출 가능 금액 계산 (DSR 40% 기준)
    const monthlyIncome = salary / 12;
    const maxMonthlyPayment = monthlyIncome * 0.4; // DSR 40%
    const interestRate = 0.045; // 연 4.5% 가정
    const loanTerm = 30; // 30년 대출
    
    // 기존 부채의 월 상환액 계산
    let totalExistingMonthlyPayment = 0;
    debtList.forEach(debt => {
        if (debt.amount > 0 && debt.rate > 0 && debt.term > 0) {
            const monthlyPayment = calculateMonthlyPaymentForApt(debt.amount, debt.rate / 100, debt.term);
            totalExistingMonthlyPayment += monthlyPayment;
        }
    });
    
    const availableMonthlyPayment = Math.max(0, maxMonthlyPayment - totalExistingMonthlyPayment);
    
    // DSR 기준 최대 대출 가능 금액
    const maxLoanByDSR = calculateMaxLoanForApt(availableMonthlyPayment, interestRate, loanTerm);
    
    // 선택된 지역 정보 가져오기
    const selectedRegion = document.getElementById('preferred-region').value;
    
    // LTV 기준 계산 (지역에 따라 다름)
    let ltvRatio = 0.7; // 기본값: 비규제지역 70%
    if (selectedRegion && regionMapping[selectedRegion]) {
        ltvRatio = regionMapping[selectedRegion].ltv / 100;
    }
    const ltvMaxLoan = 60000; // LTV 최대 한도 6억(만원)
    
    // LTV를 고려한 최대 주택 가격 계산
    let maxPriceByLTV;
    let maxLoanByLTV;
    let isLTVCapped = false;
    
    // DSR로 계산한 대출 가능액이 LTV 한도(6억)보다 큰 경우
    if (maxLoanByDSR > ltvMaxLoan) {
        // LTV 한도 6억을 최대한 활용
        isLTVCapped = true;
        maxLoanByLTV = ltvMaxLoan;
        // 6억 대출받을 때 필요한 최소 주택가격 계산
        const minHousePriceForMaxLTV = Math.ceil(ltvMaxLoan / ltvRatio);
        // 가용현금 + 6억으로 살 수 있는 최대 주택가격
        maxPriceByLTV = availableCash + ltvMaxLoan;
    } else {
        // DSR 대출 가능액이 LTV 한도보다 작은 경우 기존 로직 적용
        maxPriceByLTV = Math.floor(availableCash / (1 - ltvRatio));
        maxLoanByLTV = Math.floor(maxPriceByLTV * ltvRatio);
    }
    
    // DSR과 LTV 중 더 작은 대출금액 적용
    const maxLoanAmount = Math.min(maxLoanByDSR, maxLoanByLTV);
    
    // 최종 구매 가능 아파트 금액 (취득세 고려 전)
    let maxApartmentPriceBeforeTax;
    let limitingFactor;
    
    if (maxLoanByDSR < maxLoanByLTV) {
        // DSR이 제약사항인 경우
        maxApartmentPriceBeforeTax = availableCash + maxLoanByDSR;
        limitingFactor = 'DSR';
    } else if (isLTVCapped && maxLoanByDSR > ltvMaxLoan) {
        // LTV 6억 한도가 제약사항인 경우
        maxApartmentPriceBeforeTax = availableCash + ltvMaxLoan;
        limitingFactor = 'LTV_CAPPED';
    } else {
        // LTV 비율이 제약사항인 경우
        maxApartmentPriceBeforeTax = maxPriceByLTV;
        limitingFactor = 'LTV';
    }
    
    // 취득세를 고려한 실질 구매 가능 금액 계산
    // 주택가격 + 취득세 = 가용현금 + 대출금액
    // 이진 탐색으로 실제 구매 가능한 주택가격 찾기
    let low = 0;
    let high = maxApartmentPriceBeforeTax;
    let maxApartmentPrice = 0;
    let finalTaxInfo = null;
    
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const taxInfo = calculateAcquisitionTax(mid);
        const totalNeeded = mid + taxInfo.totalTax;
        
        if (totalNeeded <= maxApartmentPriceBeforeTax) {
            maxApartmentPrice = mid;
            finalTaxInfo = taxInfo;
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    
    // 선택된 지역의 실거래가 데이터 가져오기
    let apartmentData = apartmentDatabase; // 기본값
    
    if (selectedRegion && regionMapping[selectedRegion]) {
        // 실거래가 API 호출
        const realData = await fetchRealApartmentData(selectedRegion, maxApartmentPrice);
        if (realData && realData.length > 0) {
            apartmentData = realData;
        }
    }
    
    // 추천 아파트 필터링
    const affordableApts = apartmentData.filter(apt => apt.price <= maxApartmentPrice * 1.1); // 10% 여유
    const recommendedApts = apartmentData.filter(apt => 
        apt.price <= maxApartmentPrice && apt.price >= maxApartmentPrice * 0.7
    );
    
    // 결과 표시
    displayApartmentResults(recommendedApts, affordableApts, {
        availableCash,
        maxLoanAmount,
        maxApartmentPrice,
        maxApartmentPriceBeforeTax,
        monthlyPayment: availableMonthlyPayment,
        salary,
        totalExistingPayment: totalExistingMonthlyPayment,
        maxLoanByDSR,
        maxLoanByLTV,
        maxPriceByLTV,
        ltvRatio,
        limitingFactor,
        isLTVCapped,
        ltvMaxLoan,
        acquisitionTaxInfo: finalTaxInfo,
        selectedRegion: selectedRegion,
        regionInfo: selectedRegion && regionMapping[selectedRegion] ? regionMapping[selectedRegion] : null
    });
}

// 최대 대출 가능 금액 계산
function calculateMaxLoanForApt(monthlyPayment, annualRate, years) {
    const monthlyRate = annualRate / 12;
    const totalMonths = years * 12;
    
    if (monthlyRate === 0) return monthlyPayment * totalMonths;
    
    const maxLoan = monthlyPayment * ((1 - Math.pow(1 + monthlyRate, -totalMonths)) / monthlyRate);
    return Math.round(maxLoan);
}

// 아파트 결과 표시
function displayApartmentResults(recommendedApts, affordableApts, loanInfo) {
    const aptResult = document.getElementById('apt-result');
    const aptList = document.getElementById('aptList');
    
    aptResult.classList.remove('hidden');
    aptList.innerHTML = '';
    
    // 대출 정보 요약
    const monthlyIncome = loanInfo.salary / 12;
    const existingDebtPayment = Math.round(loanInfo.totalExistingPayment);
    
    // 지역 유형 정보
    let areaTypeDisplay = '지역 미선택';
    let regionName = '지역을 선택해주세요';
    if (loanInfo.regionInfo) {
        areaTypeDisplay = loanInfo.regionInfo.type;
        regionName = loanInfo.regionInfo.name;
    }
    const ltvPercentage = Math.round(loanInfo.ltvRatio * 100);

    aptList.innerHTML += `
        <div class="area-type-info" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 12px; margin-bottom: 20px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <h3 style="margin: 0 0 15px 0; font-size: 1.2em; display: flex; align-items: center; gap: 10px;">
                🏘️ 선택한 지역 정보
            </h3>
            <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 15px; margin-bottom: 15px;">
                <div style="background: rgba(255,255,255,0.2); padding: 15px; border-radius: 8px;">
                    <div style="font-size: 0.9em; opacity: 0.9; margin-bottom: 5px;">선택 지역</div>
                    <div style="font-size: 1.1em; font-weight: 600;">${regionName}</div>
                </div>
                <div style="background: rgba(255,255,255,0.2); padding: 15px; border-radius: 8px;">
                    <div style="font-size: 0.9em; opacity: 0.9; margin-bottom: 5px;">지역 구분</div>
                    <div style="font-size: 1.1em; font-weight: 600;">${areaTypeDisplay}</div>
                </div>
                <div style="background: rgba(255,255,255,0.2); padding: 15px; border-radius: 8px;">
                    <div style="font-size: 0.9em; opacity: 0.9; margin-bottom: 5px;">적용 LTV 비율</div>
                    <div style="font-size: 1.1em; font-weight: 600;">${ltvPercentage}%</div>
                </div>
            </div>
            <div style="background: rgba(255,255,255,0.2); padding: 15px; border-radius: 8px; text-align: center;">
                <div style="font-size: 0.9em; opacity: 0.9; margin-bottom: 5px;">최대 대출 한도</div>
                <div style="font-size: 1.3em; font-weight: 700; color: #ffd700;">6억원 (60,000만원)</div>
                <div style="font-size: 0.8em; opacity: 0.8; margin-top: 5px;">정부 정책에 의한 절대 한도</div>
            </div>
        </div>

        <div class="loan-summary budget-summary">
            <h3>💰 매수 가능 금액 분석</h3>
            <div class="budget-details">
                <div class="budget-row">
                    <span>보유 현금:</span>
                    <span>${loanInfo.availableCash.toLocaleString()}만원</span>
                </div>
                
                <div style="margin: 15px 0; padding: 15px 0; border-top: 1px solid #ddd; border-bottom: 1px solid #ddd;">
                    <div style="font-weight: 600; color: #2c3e50; margin-bottom: 10px;">📊 DSR 기준 (소득 대비)</div>
                    <div class="budget-row">
                        <span>월 소득:</span>
                        <span>${Math.round(monthlyIncome).toLocaleString()}만원</span>
                    </div>
                    <div class="budget-row">
                        <span>DSR 한도 (40%):</span>
                        <span>${Math.round(monthlyIncome * 0.4).toLocaleString()}만원</span>
                    </div>
                    ${existingDebtPayment > 0 ? `
                    <div class="budget-row" style="color: #e74c3c;">
                        <span>기존 부채 상환:</span>
                        <span>-${existingDebtPayment.toLocaleString()}만원</span>
                    </div>
                    ` : ''}
                    <div class="budget-row">
                        <span>신규 대출 가능 상환액:</span>
                        <span>${Math.round(loanInfo.monthlyPayment).toLocaleString()}만원</span>
                    </div>
                    <div class="budget-row" style="background-color: #e8f5e9; padding: 5px; border-radius: 4px;">
                        <span>DSR 기준 최대 대출:</span>
                        <span style="font-weight: 600;">${loanInfo.maxLoanByDSR.toLocaleString()}만원</span>
                    </div>
                </div>
                
                <div style="margin: 15px 0; padding: 15px 0; border-bottom: 1px solid #ddd;">
                    <div style="font-weight: 600; color: #2c3e50; margin-bottom: 10px;">🏦 LTV 기준 (주택가격 대비) - ${areaTypeDisplay}</div>
                    <div class="budget-row" style="background-color: #e3f2fd; padding: 8px; border-radius: 4px; font-weight: 600;">
                        <span>${areaTypeDisplay} LTV 한도:</span>
                        <span style="color: #1976d2;">${Math.round(loanInfo.ltvRatio * 100)}%</span>
                    </div>
                    <div class="budget-row" style="background-color: #fff3e0; padding: 8px; border-radius: 4px; border-left: 4px solid #ff9800;">
                        <span>🚨 정책 최대 한도:</span>
                        <span style="font-weight: 700; color: #e65100;">${loanInfo.ltvMaxLoan.toLocaleString()}만원 (6억원)</span>
                    </div>
                    <div class="budget-row">
                        <span>LTV 기준 최대 주택가격:</span>
                        <span>${loanInfo.maxPriceByLTV.toLocaleString()}만원</span>
                    </div>
                    <div class="budget-row" style="background-color: #e8f5e9; padding: 5px; border-radius: 4px;">
                        <span>LTV 기준 최대 대출:</span>
                        <span style="font-weight: 600;">${loanInfo.maxLoanByLTV.toLocaleString()}만원${loanInfo.isLTVCapped ? ' (한도적용)' : ''}</span>
                    </div>
                </div>
                
                <div style="margin: 15px 0; padding: 15px 0; border-bottom: 1px solid #ddd;">
                    <div style="font-weight: 600; color: #2c3e50; margin-bottom: 10px;">💸 취득세 계산</div>
                    ${loanInfo.acquisitionTaxInfo ? `
                    <div class="budget-row">
                        <span>주택 가격:</span>
                        <span>${loanInfo.maxApartmentPrice.toLocaleString()}만원</span>
                    </div>
                    <div class="budget-row">
                        <span>취득세율:</span>
                        <span>${loanInfo.acquisitionTaxInfo.taxRate}%</span>
                    </div>
                    <div class="budget-row" style="font-size: 0.9em; color: #666;">
                        <span>취득세:</span>
                        <span>${loanInfo.acquisitionTaxInfo.acquisitionTax.toLocaleString()}만원</span>
                    </div>
                    <div class="budget-row" style="font-size: 0.9em; color: #666;">
                        <span>지방교육세:</span>
                        <span>${loanInfo.acquisitionTaxInfo.educationTax.toLocaleString()}만원</span>
                    </div>
                    ${loanInfo.acquisitionTaxInfo.specialTax > 0 ? `
                    <div class="budget-row" style="font-size: 0.9em; color: #666;">
                        <span>농어촌특별세:</span>
                        <span>${loanInfo.acquisitionTaxInfo.specialTax.toLocaleString()}만원</span>
                    </div>
                    ` : ''}
                    <div class="budget-row" style="background-color: #fff3e0; padding: 5px; border-radius: 4px;">
                        <span>총 취득세:</span>
                        <span style="font-weight: 600;">${loanInfo.acquisitionTaxInfo.totalTax.toLocaleString()}만원</span>
                    </div>
                    ` : ''}
                </div>
                
                <div class="budget-row available" style="font-size: 1.1em;">
                    <span>실질 구매 가능 금액:</span>
                    <span>${loanInfo.maxApartmentPrice.toLocaleString()}만원</span>
                </div>
                ${loanInfo.maxApartmentPriceBeforeTax > loanInfo.maxApartmentPrice ? `
                <div style="text-align: center; color: #e67700; font-size: 0.9em; margin-top: 5px;">
                    ※ 취득세 ${loanInfo.acquisitionTaxInfo.totalTax.toLocaleString()}만원을 제외한 금액입니다
                </div>
                ` : ''}
                <div style="text-align: center; color: #666; font-size: 0.9em; margin-top: 10px;">
                    ${loanInfo.limitingFactor === 'DSR' 
                        ? '⚠️ 소득 대비 상환능력(DSR)이 제한요인입니다' 
                        : loanInfo.limitingFactor === 'LTV_CAPPED'
                        ? `⚠️ LTV 정책 한도(6억원)가 제한요인입니다 [${areaTypeDisplay}]`
                        : `⚠️ ${areaTypeDisplay} LTV ${ltvPercentage}% 비율이 제한요인입니다`}
                </div>
                ${loanInfo.limitingFactor === 'LTV_CAPPED' && loanInfo.maxLoanByDSR > loanInfo.ltvMaxLoan ? `
                <div style="background-color: #fff4e5; padding: 15px; border-radius: 8px; margin-top: 15px;">
                    <div style="font-weight: 600; color: #e67700; margin-bottom: 8px;">💡 추가 자금 조달 가이드</div>
                    <p style="margin: 5px 0; color: #666; font-size: 0.9em;">
                        DSR 기준으로는 ${loanInfo.maxLoanByDSR.toLocaleString()}만원까지 대출 가능하지만,<br>
                        LTV 한도로 인해 ${loanInfo.ltvMaxLoan.toLocaleString()}만원만 받을 수 있습니다.
                    </p>
                    <p style="margin: 5px 0; color: #666; font-size: 0.9em;">
                        추가 ${(loanInfo.maxLoanByDSR - loanInfo.ltvMaxLoan).toLocaleString()}만원은 다음 방법을 고려하세요:
                    </p>
                    <ul style="margin: 5px 0 0 20px; color: #666; font-size: 0.9em;">
                        <li>신용대출 또는 전세자금대출 활용</li>
                        <li>가족 간 증여 또는 차용</li>
                        <li>기존 자산 매각 (주식, 펀드 등)</li>
                    </ul>
                </div>
                ` : ''}
            </div>
        </div>
    `;
    
    
    // 스크롤
    aptResult.scrollIntoView({ behavior: 'smooth' });
}


// 월 상환액 계산
function calculateMonthlyPaymentForApt(principal, annualRate, years) {
    const monthlyRate = annualRate / 12;
    const totalMonths = years * 12;
    
    if (monthlyRate === 0) return principal / totalMonths;
    
    return principal * (monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / 
           (Math.pow(1 + monthlyRate, totalMonths) - 1);
}

// 주택 취득세 계산
function calculateAcquisitionTax(housePriceManwon) {
    const priceWon = housePriceManwon * 10000; // 만원을 원으로 변환
    let taxRate = 0;
    
    // 주택 취득세율 (2024년 기준)
    // 6억 이하: 1%
    // 6억 초과 9억 이하: 2%
    // 9억 초과: 3%
    if (priceWon <= 600000000) {
        taxRate = 0.01;
    } else if (priceWon <= 900000000) {
        taxRate = 0.02;
    } else {
        taxRate = 0.03;
    }
    
    // 취득세 = 주택가격 × 세율
    const acquisitionTax = priceWon * taxRate;
    
    // 지방교육세 = 취득세 × 10%
    const educationTax = acquisitionTax * 0.1;
    
    // 농어촌특별세 (취득세 2% 이상일 때만)
    let specialTax = 0;
    if (taxRate >= 0.02) {
        specialTax = acquisitionTax * 0.2;
    }
    
    // 총 세금
    const totalTax = acquisitionTax + educationTax + specialTax;
    
    return {
        acquisitionTax: Math.round(acquisitionTax / 10000), // 만원 단위
        educationTax: Math.round(educationTax / 10000),
        specialTax: Math.round(specialTax / 10000),
        totalTax: Math.round(totalTax / 10000),
        taxRate: taxRate * 100 // 퍼센트로 표시
    };
}

// 부채 리스트 관리
let debtList = [];
let debtCounter = 0;

function addDebtItem() {
    const debtListEl = document.getElementById('debt-list');
    const debtId = `debt-${debtCounter++}`;
    
    const debtItem = {
        id: debtId,
        amount: 0,
        rate: 0,
        term: 0
    };
    
    debtList.push(debtItem);
    
    // 빈 상태 제거
    const emptyState = debtListEl.querySelector('.debt-empty-state');
    if (emptyState) {
        emptyState.remove();
    }
    
    // 새 부채 아이템 추가
    const debtItemEl = document.createElement('div');
    debtItemEl.className = 'debt-item';
    debtItemEl.id = debtId;
    debtItemEl.innerHTML = `
        <div class="debt-item-header">
            <div class="debt-item-title">부채 ${debtList.length}</div>
            <button type="button" class="remove-debt-btn" onclick="removeDebtItem('${debtId}')">삭제</button>
        </div>
        <div class="debt-input-grid">
            <div class="debt-input-item">
                <label>대출 금액</label>
                <div class="input-wrapper">
                    <input type="number" id="${debtId}-amount" placeholder="10000" onchange="updateDebtItem('${debtId}', 'amount', this.value)" />
                    <span class="unit">만원</span>
                </div>
            </div>
            <div class="debt-input-item">
                <label>연이자율</label>
                <div class="input-wrapper">
                    <input type="number" id="${debtId}-rate" placeholder="5.5" step="0.1" onchange="updateDebtItem('${debtId}', 'rate', this.value)" />
                    <span class="unit">%</span>
                </div>
            </div>
            <div class="debt-input-item">
                <label>남은 상환기간</label>
                <div class="input-wrapper">
                    <input type="number" id="${debtId}-term" placeholder="20" onchange="updateDebtItem('${debtId}', 'term', this.value)" />
                    <span class="unit">년</span>
                </div>
            </div>
        </div>
    `;
    
    debtListEl.appendChild(debtItemEl);
}

function removeDebtItem(debtId) {
    debtList = debtList.filter(debt => debt.id !== debtId);
    document.getElementById(debtId).remove();
    
    if (debtList.length === 0) {
        const debtListEl = document.getElementById('debt-list');
        debtListEl.innerHTML = '<div class="debt-empty-state"><p>등록된 부채가 없습니다.</p></div>';
    }
}

function updateDebtItem(debtId, field, value) {
    const debt = debtList.find(d => d.id === debtId);
    if (debt) {
        debt[field] = parseFloat(value) || 0;
    }
}

// 시/도 구조 (계층형)
const cityStructure = {
    'seoul': {
        name: '서울시',
        districts: [
            { code: 'gangnam', name: '강남구', type: '규제지역', ltv: 40 },
            { code: 'gangdong', name: '강동구', type: '비규제지역', ltv: 70 },
            { code: 'gangbuk', name: '강북구', type: '비규제지역', ltv: 70 },
            { code: 'gangseo', name: '강서구', type: '비규제지역', ltv: 70 },
            { code: 'gwanak', name: '관악구', type: '비규제지역', ltv: 70 },
            { code: 'gwangjin', name: '광진구', type: '비규제지역', ltv: 70 },
            { code: 'guro', name: '구로구', type: '비규제지역', ltv: 70 },
            { code: 'geumcheon', name: '금천구', type: '비규제지역', ltv: 70 },
            { code: 'nowon', name: '노원구', type: '비규제지역', ltv: 70 },
            { code: 'dobong', name: '도봉구', type: '비규제지역', ltv: 70 },
            { code: 'dongdaemun', name: '동대문구', type: '비규제지역', ltv: 70 },
            { code: 'dongjak', name: '동작구', type: '비규제지역', ltv: 70 },
            { code: 'mapo', name: '마포구', type: '비규제지역', ltv: 70 },
            { code: 'seodaemun', name: '서대문구', type: '비규제지역', ltv: 70 },
            { code: 'seocho', name: '서초구', type: '규제지역', ltv: 40 },
            { code: 'seongdong', name: '성동구', type: '비규제지역', ltv: 70 },
            { code: 'seongbuk', name: '성북구', type: '비규제지역', ltv: 70 },
            { code: 'songpa', name: '송파구', type: '규제지역', ltv: 40 },
            { code: 'yangcheon', name: '양천구', type: '비규제지역', ltv: 70 },
            { code: 'yeongdeungpo', name: '영등포구', type: '비규제지역', ltv: 70 },
            { code: 'yongsan', name: '용산구', type: '규제지역', ltv: 40 },
            { code: 'eunpyeong', name: '은평구', type: '비규제지역', ltv: 70 },
            { code: 'jongno', name: '종로구', type: '비규제지역', ltv: 70 },
            { code: 'jung', name: '중구', type: '비규제지역', ltv: 70 },
            { code: 'jungnang', name: '중랑구', type: '비규제지역', ltv: 70 }
        ]
    },
    'gyeonggi': {
        name: '경기도',
        districts: [
            { code: 'seongnam', name: '성남시', type: '비규제지역', ltv: 70 },
            { code: 'suwon', name: '수원시', type: '비규제지역', ltv: 70 },
            { code: 'goyang', name: '고양시', type: '비규제지역', ltv: 70 },
            { code: 'yongin', name: '용인시', type: '비규제지역', ltv: 70 },
            { code: 'bucheon', name: '부천시', type: '비규제지역', ltv: 70 },
            { code: 'ansan', name: '안산시', type: '비규제지역', ltv: 70 },
            { code: 'anyang', name: '안양시', type: '비규제지역', ltv: 70 },
            { code: 'namyangju', name: '남양주시', type: '비규제지역', ltv: 70 },
            { code: 'hwaseong', name: '화성시', type: '비규제지역', ltv: 70 },
            { code: 'pyeongtaek', name: '평택시', type: '비규제지역', ltv: 70 }
        ]
    }
};

// 지역 정보 매핑 (기존 호환성 유지)
const regionMapping = {};
Object.entries(cityStructure).forEach(([cityCode, city]) => {
    city.districts.forEach(district => {
        const key = `${cityCode}-${district.code}`;
        regionMapping[key] = {
            name: cityCode === 'seoul' ? `서울 ${district.name}` : `경기 ${district.name}`,
            type: district.type,
            ltv: district.ltv
        };
    });
});

// 지역 정보 업데이트
function updateRegionInfo() {
    const selectedRegion = document.getElementById('preferred-region').value;
    const regionInfo = document.getElementById('region-info');

    if (!selectedRegion || !regionMapping[selectedRegion]) {
        regionInfo.innerHTML = '<p>시/도와 구/시를 선택해주세요.</p>';
        return;
    }

    const region = regionMapping[selectedRegion];
    const maxLoanAmount = '6억원';

    regionInfo.innerHTML = `
        <p>💡 <strong>${region.name}</strong>: ${region.type}, LTV ${region.ltv}% (최대 ${maxLoanAmount})</p>
    `;
}

// 구/시 드롭다운 업데이트 (구매 희망 지역용)
function updatePreferredDistricts() {
    const citySelect = document.getElementById('preferred-city');
    const districtSelect = document.getElementById('preferred-region');
    const cityCode = citySelect.value;

    districtSelect.innerHTML = '<option value="">구/시 선택</option>';

    if (cityCode && cityStructure[cityCode]) {
        const city = cityStructure[cityCode];
        city.districts.forEach(district => {
            const option = document.createElement('option');
            option.value = `${cityCode}-${district.code}`;
            const ltvInfo = district.ltv === 40 ? ' (규제)' : '';
            option.textContent = `${district.name}${ltvInfo}`;
            districtSelect.appendChild(option);
        });
    }

    updateRegionInfo();
}

// 구/시 드롭다운 업데이트 (랭킹용)
function updateRankingDistricts() {
    const citySelect = document.getElementById('ranking-city');
    const districtSelect = document.getElementById('ranking-district');
    const cityCode = citySelect.value;

    districtSelect.innerHTML = '<option value="">구/시 선택</option>';

    if (cityCode && cityStructure[cityCode]) {
        const city = cityStructure[cityCode];
        city.districts.forEach(district => {
            const option = document.createElement('option');
            option.value = `${cityCode}-${district.code}`;
            option.textContent = district.name;
            districtSelect.appendChild(option);
        });
    }
}

// 랭킹 지역 선택 시 호출
function onRankingDistrictChange() {
    // 필요 시 추가 동작
}

// 가격 변동 랭킹 기능
function getMonthsAgo(monthsAgo) {
    const date = new Date();
    date.setMonth(date.getMonth() - monthsAgo);
    return date.getFullYear() + String(date.getMonth() + 1).padStart(2, '0');
}

async function fetchMonthData(region, yearMonth) {
    try {
        const response = await fetch(`/api/apartment-prices?region=${region}&yearMonth=${yearMonth}`);
        if (!response.ok) return [];
        const data = await response.json();
        return data.success ? data.data : [];
    } catch (error) {
        console.error(`Failed to fetch data for ${yearMonth}:`, error);
        return [];
    }
}

async function loadVolatilityRanking() {
    const region = document.getElementById('ranking-district').value;
    const rankingList = document.getElementById('volatility-ranking-list');
    const loadBtn = document.querySelector('.ranking-load-btn');

    if (!region) {
        rankingList.innerHTML = '<div class="ranking-empty">시/도와 구/시를 선택해주세요.</div>';
        return;
    }

    // 로딩 표시
    rankingList.innerHTML = '<div class="ranking-loading">데이터 조회 중...</div>';
    loadBtn.disabled = true;

    try {
        // 최근 3개월 데이터 병렬 조회
        const months = [getMonthsAgo(0), getMonthsAgo(1), getMonthsAgo(2)];
        const [currentMonth, lastMonth, twoMonthsAgo] = await Promise.all(
            months.map(m => fetchMonthData(region, m))
        );

        // 아파트별 + 평수별 데이터 집계
        const aptData = {};

        // ㎡를 평으로 변환 후 5평 단위로 그룹핑
        const normalizeSize = (sizeStr) => {
            const sqm = parseFloat(sizeStr);
            if (isNaN(sqm)) return null;
            // ㎡ → 평 변환 (1평 = 3.3㎡)
            const pyeong = Math.round(sqm / 3.3);
            // 5평 단위로 반올림 (예: 23→25, 33→35)
            return Math.round(pyeong / 5) * 5;
        };

        const processMonth = (data, monthKey) => {
            data.forEach(apt => {
                if (!apt.name || apt.cancelYn === 'O') return;
                const sizeGroup = normalizeSize(apt.size);
                if (!sizeGroup) return;

                // 아파트명 + 평수로 고유 키 생성
                const key = `${apt.name}_${sizeGroup}평`;

                if (!aptData[key]) {
                    aptData[key] = {
                        name: apt.name,
                        size: `${sizeGroup}평형`,
                        months: {},
                        location: apt.location
                    };
                }
                if (!aptData[key].months[monthKey]) {
                    aptData[key].months[monthKey] = { prices: [], count: 0 };
                }
                aptData[key].months[monthKey].prices.push(apt.price);
                aptData[key].months[monthKey].count++;
            });
        };

        processMonth(currentMonth, 'current');
        processMonth(lastMonth, 'last');
        processMonth(twoMonthsAgo, 'twoAgo');

        // 변동률 계산
        const rankings = [];
        Object.values(aptData).forEach(apt => {
            const current = apt.months.current;
            const twoAgo = apt.months.twoAgo;

            // 현재월과 2개월전 데이터가 모두 있어야 계산 가능
            if (!current || !twoAgo || current.prices.length === 0 || twoAgo.prices.length === 0) return;

            const currentAvg = current.prices.reduce((a, b) => a + b, 0) / current.prices.length;
            const twoAgoAvg = twoAgo.prices.reduce((a, b) => a + b, 0) / twoAgo.prices.length;

            const changePercent = ((currentAvg - twoAgoAvg) / twoAgoAvg) * 100;

            rankings.push({
                name: apt.name,
                size: apt.size,
                location: apt.location,
                currentAvg: Math.round(currentAvg),
                twoAgoAvg: Math.round(twoAgoAvg),
                changePercent: changePercent,
                absChange: Math.abs(changePercent),
                txCount: current.count
            });
        });

        // 절대값 기준 정렬 (변동폭이 큰 순)
        rankings.sort((a, b) => b.absChange - a.absChange);

        // 상위 10개만 표시
        displayVolatilityRanking(rankings.slice(0, 10), months);

    } catch (error) {
        console.error('랭킹 조회 실패:', error);
        rankingList.innerHTML = '<div class="ranking-empty">데이터 조회에 실패했습니다.</div>';
    } finally {
        loadBtn.disabled = false;
    }
}

function displayVolatilityRanking(rankings, months) {
    const rankingList = document.getElementById('volatility-ranking-list');

    if (rankings.length === 0) {
        rankingList.innerHTML = '<div class="ranking-empty">비교 가능한 거래 데이터가 없습니다.<br><small>3개월간 거래 기록이 있는 단지만 표시됩니다.</small></div>';
        return;
    }

    const formatPrice = (price) => {
        if (price >= 10000) {
            return `${Math.floor(price / 10000)}억 ${price % 10000 > 0 ? (price % 10000) + '만' : ''}`;
        }
        return `${price.toLocaleString()}만원`;
    };

    // 상승/하락 분리
    const risingApts = rankings.filter(apt => apt.changePercent > 0)
        .sort((a, b) => b.changePercent - a.changePercent)
        .slice(0, 5);
    const fallingApts = rankings.filter(apt => apt.changePercent < 0)
        .sort((a, b) => a.changePercent - b.changePercent)
        .slice(0, 5);

    const renderTable = (apts, isRising) => {
        if (apts.length === 0) {
            return '<div class="ranking-empty-small">데이터 없음</div>';
        }
        return apts.map((apt, index) => {
            const arrow = isRising ? '↑' : '↓';
            const changeClass = isRising ? 'up' : 'down';
            const rankClass = index < 3 ? 'top3' : '';

            return `
                <div class="ranking-item">
                    <div class="ranking-rank ${rankClass}">${index + 1}</div>
                    <div class="ranking-info">
                        <div class="ranking-name">${apt.name} <span class="ranking-size">${apt.size || ''}</span></div>
                        <div class="ranking-detail">${apt.location || ''} · 거래 ${apt.txCount}건</div>
                    </div>
                    <div class="ranking-change ${changeClass}">
                        <div class="ranking-percent">
                            <span class="ranking-arrow">${arrow}</span>${Math.abs(apt.changePercent).toFixed(1)}%
                        </div>
                        <div class="ranking-price-info">${formatPrice(apt.twoAgoAvg)} → ${formatPrice(apt.currentAvg)}</div>
                    </div>
                </div>
            `;
        }).join('');
    };

    // 기간 표시
    const periodInfo = `<div class="ranking-period">
        기간: ${months[2].slice(0,4)}.${months[2].slice(4)} ~ ${months[0].slice(0,4)}.${months[0].slice(4)}
    </div>`;

    // 두 개의 테이블로 구성
    const html = `
        ${periodInfo}
        <div class="ranking-tables">
            <div class="ranking-table rising">
                <div class="ranking-table-header up">📈 상승 TOP 5</div>
                ${renderTable(risingApts, true)}
            </div>
            <div class="ranking-table falling">
                <div class="ranking-table-header down">📉 하락 TOP 5</div>
                ${renderTable(fallingApts, false)}
            </div>
        </div>
    `;

    rankingList.innerHTML = html;
}

// 전역 함수 추가
window.selectPurchaseType = selectPurchaseType;
window.recommendApartment = recommendApartment;
window.addDebtItem = addDebtItem;
window.removeDebtItem = removeDebtItem;
window.updateDebtItem = updateDebtItem;
window.updateRegionInfo = updateRegionInfo;
window.updatePreferredDistricts = updatePreferredDistricts;
window.updateRankingDistricts = updateRankingDistricts;
window.onRankingDistrictChange = onRankingDistrictChange;
window.loadVolatilityRanking = loadVolatilityRanking;

// Initialize dropdowns on page load
document.addEventListener('DOMContentLoaded', function() {
    // 구매 희망 지역 드롭다운 초기화 (서울시 선택 상태)
    updatePreferredDistricts();
});