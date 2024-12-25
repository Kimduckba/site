const calendarGrid = document.getElementById('calendar-grid');
const monthYear = document.getElementById('month-year');
const prevMonthBtn = document.getElementById('prev-month');
const nextMonthBtn = document.getElementById('next-month');
const weeklyReview = document.getElementById('weekly-review');
const reviewContent = document.getElementById('review-content');
const closeReviewBtn = document.getElementById('close-review');
const weeklyReviewsContainer = document.getElementById('weekly-reviews');

let currentDate = new Date();

// 첫 번째 주 시작일: 2024-12-16
const firstWeekStart = new Date(2024, 11, 16);  // 12월 16일 (2024년 12월은 11월 인덱스)

// 월을 변경할 때마다 캘린더를 업데이트하는 함수
function updateCalendar() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    // 캘린더 헤더에 현재 년도와 월 표시
    monthYear.textContent = `${year}년 ${month + 1}월`;

    // 첫째 날의 요일 구하기
    const firstDayOfMonth = new Date(year, month, 1);
    const firstDay = firstDayOfMonth.getDay();

    // 첫 번째 날이 일요일이라면, 공백을 추가하여 월요일이 첫번째로 오도록 조정
    const adjustedFirstDay = (firstDay === 0) ? 6 : firstDay - 1; // 일요일(0)을 토요일(6)로 바꿈

    // 해당 월의 마지막 날 구하기
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const lastDate = lastDayOfMonth.getDate();

    // 캘린더 그리드 초기화
    calendarGrid.innerHTML = '';

    // 첫 번째 날 앞에 공백 추가
    for (let i = 0; i < adjustedFirstDay; i++) {
        const emptyCell = document.createElement('div');
        calendarGrid.appendChild(emptyCell);
    }

    // 날짜 추가
    for (let date = 1; date <= lastDate; date++) {
        const dateCell = document.createElement('div');
        dateCell.textContent = date;
        dateCell.addEventListener('click', () => showWeeklyReview(year, month, date));
        calendarGrid.appendChild(dateCell);
    }
}

// 해당 날짜의 주차 회고를 표시하는 함수
function showWeeklyReview(year, month, date) {
    // 해당 날짜의 주차 계산 (12월 16일부터 7일씩 간격)
    const currentDate = new Date(year, month, date);
    
    // 첫 번째 주 시작일부터 현재 날짜까지의 날짜 차이 계산
    const diffTime = currentDate - firstWeekStart;
    
    // 7일씩 차이를 나누어 몇 번째 주인지 계산
    const weekNumber = Math.floor(diffTime / (7 * 24 * 60 * 60 * 1000)) + 1;
    
    // 해당 주의 회고 내용 ID를 찾아서 표시
    const reviewId = `week-${weekNumber}-review`;
    const reviewElement = document.getElementById(reviewId);

    if (reviewElement) {
        // 회고 내용을 가져와서 표시
        reviewContent.innerHTML = reviewElement.innerHTML;

        // 주간 회고 박스를 화면에 표시
        weeklyReview.style.display = 'block';
    } else {
        // 회고 내용이 없으면 기본 메시지 표시
        reviewContent.textContent = "회고 내용이 없습니다.";

        // 주간 회고 박스를 화면에 표시
        weeklyReview.style.display = 'block';
    }
}

// 회고 닫기 버튼 클릭 시 팝업 닫기
closeReviewBtn.addEventListener('click', () => {
    weeklyReview.style.display = 'none';
});

// 이전 월로 이동
prevMonthBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    updateCalendar();
});

// 다음 월로 이동
nextMonthBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    updateCalendar();
});

// 페이지 로딩 시 캘린더 초기화
updateCalendar();
