const carDatabase = [
    { name: "현대 아반떼", price: 2500, category: "준중형", fuelEfficiency: 13.1, fuelType: "gasoline" },
    { name: "기아 K3", price: 2400, category: "준중형", fuelEfficiency: 13.5, fuelType: "gasoline" },
    { name: "현대 쏘나타", price: 3500, category: "중형", fuelEfficiency: 12.3, fuelType: "gasoline" },
    { name: "기아 K5", price: 3300, category: "중형", fuelEfficiency: 12.5, fuelType: "gasoline" },
    { name: "현대 그랜저", price: 4500, category: "준대형", fuelEfficiency: 10.2, fuelType: "gasoline" },
    { name: "기아 K8", price: 4200, category: "준대형", fuelEfficiency: 10.5, fuelType: "gasoline" },
    { name: "제네시스 G70", price: 5000, category: "프리미엄 중형", fuelEfficiency: 9.8, fuelType: "gasoline" },
    { name: "제네시스 G80", price: 6500, category: "프리미엄 대형", fuelEfficiency: 9.2, fuelType: "gasoline" },
    { name: "제네시스 G90", price: 9000, category: "플래그십", fuelEfficiency: 8.1, fuelType: "gasoline" },
    { name: "현대 투싼", price: 3500, category: "중형 SUV", fuelEfficiency: 11.2, fuelType: "gasoline" },
    { name: "기아 스포티지", price: 3400, category: "중형 SUV", fuelEfficiency: 11.5, fuelType: "gasoline" },
    { name: "현대 싼타페", price: 4200, category: "대형 SUV", fuelEfficiency: 9.8, fuelType: "diesel" },
    { name: "기아 쏘렌토", price: 4000, category: "대형 SUV", fuelEfficiency: 10.1, fuelType: "diesel" },
    { name: "현대 팰리세이드", price: 5000, category: "대형 SUV", fuelEfficiency: 8.9, fuelType: "gasoline" },
    { name: "기아 모하비", price: 5500, category: "대형 SUV", fuelEfficiency: 7.8, fuelType: "diesel" },
    { name: "쉐보레 스파크", price: 1500, category: "경차", fuelEfficiency: 15.2, fuelType: "gasoline" },
    { name: "기아 모닝", price: 1400, category: "경차", fuelEfficiency: 15.7, fuelType: "gasoline" },
    { name: "기아 레이", price: 1600, category: "경차", fuelEfficiency: 14.9, fuelType: "gasoline" },
    { name: "현대 베뉴", price: 2200, category: "소형 SUV", fuelEfficiency: 12.8, fuelType: "gasoline" },
    { name: "기아 셀토스", price: 2500, category: "소형 SUV", fuelEfficiency: 12.2, fuelType: "gasoline" },
    { name: "쉐보레 트레일블레이저", price: 3000, category: "중형 SUV", fuelEfficiency: 11.0, fuelType: "gasoline" },
    { name: "쌍용 토레스", price: 3200, category: "중형 SUV", fuelEfficiency: 10.8, fuelType: "gasoline" },
    { name: "BMW 3시리즈", price: 6000, category: "수입 중형", fuelEfficiency: 10.5, fuelType: "gasoline" },
    { name: "벤츠 C클래스", price: 6500, category: "수입 중형", fuelEfficiency: 10.2, fuelType: "gasoline" },
    { name: "아우디 A4", price: 6200, category: "수입 중형", fuelEfficiency: 10.8, fuelType: "gasoline" },
    { name: "BMW 5시리즈", price: 8500, category: "수입 대형", fuelEfficiency: 9.2, fuelType: "gasoline" },
    { name: "벤츠 E클래스", price: 9000, category: "수입 대형", fuelEfficiency: 8.9, fuelType: "gasoline" },
    { name: "테슬라 모델3", price: 6000, category: "전기차", fuelEfficiency: 5.5, fuelType: "electric" },
    { name: "현대 아이오닉5", price: 5500, category: "전기차", fuelEfficiency: 5.2, fuelType: "electric" },
    { name: "기아 EV6", price: 5400, category: "전기차", fuelEfficiency: 5.3, fuelType: "electric" },
    
    // 프리미엄 수입차 추가 (고연봉 대상)
    { name: "BMW 7시리즈", price: 15000, category: "수입 플래그십", fuelEfficiency: 8.5, fuelType: "gasoline" },
    { name: "벤츠 S클래스", price: 16500, category: "수입 플래그십", fuelEfficiency: 8.2, fuelType: "gasoline" },
    { name: "아우디 A8", price: 14800, category: "수입 플래그십", fuelEfficiency: 8.7, fuelType: "gasoline" },
    { name: "렉서스 LS", price: 13500, category: "수입 플래그십", fuelEfficiency: 9.1, fuelType: "gasoline" },
    { name: "제네시스 GV80", price: 7500, category: "국산 대형 SUV", fuelEfficiency: 8.8, fuelType: "gasoline" },
    { name: "제네시스 GV70", price: 6000, category: "국산 중형 SUV", fuelEfficiency: 9.5, fuelType: "gasoline" },
    
    // 럭셔리 SUV
    { name: "BMW X5", price: 11000, category: "수입 대형 SUV", fuelEfficiency: 8.9, fuelType: "gasoline" },
    { name: "BMW X7", price: 14500, category: "수입 초대형 SUV", fuelEfficiency: 8.2, fuelType: "gasoline" },
    { name: "벤츠 GLE", price: 10500, category: "수입 대형 SUV", fuelEfficiency: 8.7, fuelType: "gasoline" },
    { name: "벤츠 GLS", price: 13800, category: "수입 초대형 SUV", fuelEfficiency: 8.0, fuelType: "gasoline" },
    { name: "아우디 Q7", price: 10200, category: "수입 대형 SUV", fuelEfficiency: 8.6, fuelType: "gasoline" },
    { name: "아우디 Q8", price: 12500, category: "수입 대형 SUV", fuelEfficiency: 8.4, fuelType: "gasoline" },
    { name: "렉서스 GX", price: 11800, category: "수입 대형 SUV", fuelEfficiency: 7.9, fuelType: "gasoline" },
    { name: "렉서스 LX", price: 15500, category: "수입 초대형 SUV", fuelEfficiency: 7.2, fuelType: "gasoline" },
    
    // 프리미엄 전기차
    { name: "테슬라 모델S", price: 12000, category: "프리미엄 전기차", fuelEfficiency: 4.8, fuelType: "electric" },
    { name: "테슬라 모델X", price: 14000, category: "전기 SUV", fuelEfficiency: 5.1, fuelType: "electric" },
    { name: "BMW iX", price: 13500, category: "전기 SUV", fuelEfficiency: 5.0, fuelType: "electric" },
    { name: "벤츠 EQS", price: 15800, category: "프리미엄 전기차", fuelEfficiency: 4.5, fuelType: "electric" },
    { name: "아우디 e-tron GT", price: 13200, category: "프리미엄 전기차", fuelEfficiency: 4.9, fuelType: "electric" },
    
    // 스포츠카/슈퍼카 (초고연봉 대상)
    { name: "포르쉐 911", price: 18000, category: "스포츠카", fuelEfficiency: 8.5, fuelType: "gasoline" },
    { name: "포르쉐 카이엔", price: 12800, category: "스포츠 SUV", fuelEfficiency: 8.3, fuelType: "gasoline" },
    { name: "포르쉐 마칸", price: 8500, category: "스포츠 SUV", fuelEfficiency: 9.2, fuelType: "gasoline" },
    { name: "페라리 포르토피노", price: 35000, category: "슈퍼카", fuelEfficiency: 6.5, fuelType: "gasoline" },
    { name: "람보르기니 우라칸", price: 32000, category: "슈퍼카", fuelEfficiency: 6.2, fuelType: "gasoline" },
    { name: "맥라렌 570S", price: 28000, category: "슈퍼카", fuelEfficiency: 6.8, fuelType: "gasoline" },
    { name: "벤틀리 컨티넨탈", price: 25000, category: "울트라 럭셔리", fuelEfficiency: 7.1, fuelType: "gasoline" },
    { name: "롤스로이스 고스트", price: 45000, category: "울트라 럭셔리", fuelEfficiency: 6.8, fuelType: "gasoline" },
    
    // 추가 중고가 차량들
    { name: "BMW 6시리즈", price: 10500, category: "수입 쿠페", fuelEfficiency: 8.8, fuelType: "gasoline" },
    { name: "벤츠 CLS", price: 11200, category: "수입 쿠페", fuelEfficiency: 8.6, fuelType: "gasoline" },
    { name: "아우디 A6", price: 9800, category: "수입 대형", fuelEfficiency: 9.0, fuelType: "gasoline" },
    { name: "볼보 XC90", price: 9500, category: "수입 대형 SUV", fuelEfficiency: 9.1, fuelType: "gasoline" },
    { name: "재규어 XF", price: 8800, category: "수입 대형", fuelEfficiency: 8.9, fuelType: "gasoline" },
    { name: "재규어 F-PACE", price: 9200, category: "수입 중형 SUV", fuelEfficiency: 8.7, fuelType: "gasoline" },
    { name: "랜드로버 레인지로버", price: 16800, category: "수입 초대형 SUV", fuelEfficiency: 7.5, fuelType: "gasoline" },
    { name: "랜드로버 디스커버리", price: 12000, category: "수입 대형 SUV", fuelEfficiency: 8.2, fuelType: "gasoline" }
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
    
    // 네비게이션 활성화 상태 업데이트
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // 클릭된 메뉴 활성화
    event.target.classList.add('active');
    
    // 모바일에서 사이드바 닫기
    if (window.innerWidth <= 768) {
        toggleSidebar();
    }
}

// 사이드바 토글 (모바일용)
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    const menuIcon = document.getElementById('menu-icon');
    const body = document.body;
    
    sidebar.classList.toggle('open');
    
    if (sidebar.classList.contains('open')) {
        overlay.style.display = 'block';
        setTimeout(() => overlay.classList.add('active'), 10);
        menuIcon.textContent = '✕';
        body.style.overflow = 'hidden';
    } else {
        overlay.classList.remove('active');
        setTimeout(() => overlay.style.display = 'none', 300);
        menuIcon.textContent = '☰';
        body.style.overflow = '';
    }
}

// 전역으로 함수 노출
window.toggleDetail = toggleDetail;
window.showPage = showPage;
window.toggleSidebar = toggleSidebar;

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