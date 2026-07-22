const stay = {
  id: "stay",
  title: "우리 숙소",
  category: "stay",
  categoryLabel: "숙소",
  region: "속초 · 청초호반",
  lat: 38.2011249757169,
  lng: 128.586462583316,
  address: "강원특별자치도 속초시 청초호반로 267 12층 1205",
  short: "청초호와 시장 사이에 둔 가족 여행의 중심점",
  tags: ["여행 거점", "청초호 인접"],
  family: true,
  pet: "숙소 규정 확인",
  hours: "체크인·체크아웃은 예약 내역 확인",
  costs: [{ label: "숙박비", value: "예약 내역 기준", status: "check" }],
  description: "속초 시내와 청초호를 기준으로 동선을 시작하기 좋은 숙소 위치입니다. 해변과 고성·양양 이동 전후에 아이들 휴식 시간을 넣기 좋게 지도 중심점으로 표시했습니다.",
  sourceLabel: "주소는 여행자가 제공한 숙소 정보",
  sourceUrl: "https://www.world-sky.kr/kor/index",
  coordStatus: "provided"
};

const places = [
  stay,
  { id: "sokcho-beach", title: "속초해수욕장", category: "beach", categoryLabel: "해수욕장", region: "속초", lat: 38.190571, lng: 128.602025, address: "강원특별자치도 속초시 해오름로 190", short: "숙소에서 가까운 대표 해변, 짧은 물놀이에 좋아요", tags: ["아이 추천", "샤워장", "야간 개장"], family: true, pet: "해수욕장 입수·동반 규정 확인", hours: "2026 운영·입수 시간은 속초시 공지 확인", costs: [{ label: "파라솔", value: "10,000원 / 일반 참고", status: "reference" }, { label: "샤워장", value: "1,000원 + 추가 500원 / 참고", status: "reference" }, { label: "주차", value: "2,000원부터 / 참고", status: "reference" }], description: "백사장 접근성이 좋고 주변 편의시설이 많은 첫 물놀이 후보입니다. 영유아는 그늘·수분·낮잠 시간을 먼저 확보하고, 비용은 2026 현장 운영표를 다시 확인하세요.", sourceLabel: "속초시 해수욕장 운영 안내 · 비용은 2026 참고값", sourceUrl: "https://www.sokcho.go.kr/ct/tour/tour_guide/tour_policy/beach", coordStatus: "public" },
  { id: "songjeon-beach", title: "송전해수욕장", category: "beach", categoryLabel: "해수욕장", region: "양양", lat: 38.087, lng: 128.644, address: "강원특별자치도 양양군 손양면 송전리", short: "비교적 여유로운 양양 해변 후보", tags: ["아이 추천", "한적한 편", "양양"], family: true, pet: "반려견 동반 가능 구역·입수 확인", hours: "해수욕장 운영 기간은 양양군 공지 확인", costs: [{ label: "파라솔", value: "2026 요금 현장 확인", status: "check" }, { label: "샤워장", value: "2026 요금 현장 확인", status: "check" }, { label: "주차", value: "현장 안내 확인", status: "check" }], description: "추천받은 양양 해변입니다. 가족 물놀이 후보로 저장하되, 아이와 강아지가 함께 움직일 때는 해수욕장 경계·그늘·샤워 운영을 당일 확인하는 편이 안전합니다.", sourceLabel: "양양군 관광·해수욕장 공지 확인 필요", sourceUrl: "https://tour.yangyang.go.kr/", coordStatus: "map-center" },
  { id: "gwangjin-beach", title: "광진해변", category: "beach", categoryLabel: "해수욕장", region: "양양", lat: 37.973, lng: 128.738, address: "강원특별자치도 양양군 현남면 광진리", short: "2026 반려견 해변 후보로 우선 확인할 곳", tags: ["강아지 메모", "양양", "아이와 확인"], family: true, pet: "2026 일부·전 구간 운영 공지 확인", hours: "2026 양양 반려견 해변 운영 안내 확인", costs: [{ label: "파라솔", value: "2026 요금 현장 확인", status: "check" }, { label: "샤워장", value: "2026 요금 현장 확인", status: "check" }], description: "양양의 반려견 동반 해변 후보로 조사했습니다. 2026 공지상 광진해변은 반려견 해변 운영 대상에 포함된 것으로 안내됐지만, 아이 동반 물놀이 구역과 실제 운영 범위는 현장에서 재확인하세요.", sourceLabel: "양양군 2026 해수욕장·반려견 운영 공지", sourceUrl: "https://blog.naver.com/likeyyang/224331888541", coordStatus: "map-center" },
  { id: "naksan-beach", title: "낙산해수욕장", category: "beach", categoryLabel: "해수욕장", region: "양양", lat: 38.126, lng: 128.636, address: "강원특별자치도 양양군 강현면 해맞이길 59", short: "넓은 편의시설과 산책 동선을 함께 보는 후보", tags: ["아이 추천", "편의시설", "행사"], family: true, pet: "해변 반려견 규정 확인", hours: "2026 운영 기간·시간 공지 확인", costs: [{ label: "파라솔", value: "2026 요금 현장 확인", status: "check" }, { label: "샤워장", value: "2026 요금 현장 확인", status: "check" }], description: "양양 일정에 넣기 쉬운 대표 해변입니다. 양양 서머 페스티벌과 동선이 겹칠 수 있어 행사 기간에는 주차와 혼잡도를 함께 고려하세요.", sourceLabel: "양양관광 공식 낙산 안내", sourceUrl: "https://tour.yangyang.go.kr/pub/vs_naksan.do", coordStatus: "map-center" },
  { id: "ayajin-beach", title: "아야진해수욕장", category: "beach", categoryLabel: "해수욕장", region: "고성", lat: 38.265, lng: 128.565, address: "강원특별자치도 고성군 토성면 아야진해변길 157", short: "고성 북쪽 드라이브에 넣기 좋은 가족 해변", tags: ["아이 추천", "고성", "바위 포인트"], family: true, pet: "반려견 동반 구역 확인", hours: "2026 고성군 운영 공지 확인", costs: [{ label: "파라솔", value: "운영자·현장 확인", status: "check" }, { label: "샤워장", value: "운영자·현장 확인", status: "check" }], description: "고성으로 올라가는 날 해변 산책과 짧은 물놀이를 묶기 좋은 후보입니다. 파도와 바위 지형이 있는 구간은 유아 이동 시 손을 잡고 확인하세요.", sourceLabel: "아야진해수욕장 공식 안내", sourceUrl: "https://ayajinbeach.co.kr/", coordStatus: "map-center" },
  { id: "songjiho-beach", title: "송지호해수욕장", category: "beach", categoryLabel: "해수욕장", region: "고성", lat: 38.309, lng: 128.517, address: "강원특별자치도 고성군 죽왕면 심층수길 85", short: "호수·해변을 한 번에 보는 고성 코스", tags: ["아이 추천", "고성", "산책"], family: true, pet: "반려견 해변 규정 확인", hours: "2026 운영 기간 확인", costs: [{ label: "파라솔", value: "2026 요금 현장 확인", status: "check" }, { label: "샤워장", value: "2026 요금 현장 확인", status: "check" }], description: "해변만 오래 머물기 힘든 아이와 함께라면 송지호 주변 산책을 조합할 수 있습니다. 이동 거리가 있으니 낮잠 후 출발하는 날에 적합합니다.", sourceLabel: "고성군 해수욕장 안내 확인 필요", sourceUrl: "https://www.gwgs.go.kr/", coordStatus: "map-center" },
  { id: "hwajinpo", title: "화진포해변·호수", category: "attraction", categoryLabel: "관광지", region: "고성", lat: 38.475, lng: 128.429, address: "강원특별자치도 고성군 현내면 화진포길 280", short: "고성 북쪽 하루 코스의 대표 풍경", tags: ["고성", "자연", "긴 이동"], family: true, pet: "시설별 반려견 규정 확인", hours: "시설별 운영 시간 확인", costs: [{ label: "입장·체험", value: "시설별 확인", status: "check" }], description: "속초에서 거리가 있어 하루 일정으로 묶는 편이 좋습니다. 호수와 해변 풍경을 보고, 실내 시설은 아이 컨디션에 따라 선택하세요.", sourceLabel: "고성군 관광 안내 확인 필요", sourceUrl: "https://www.gwgs.go.kr/", coordStatus: "map-center" },
  { id: "dmz-museum", title: "DMZ박물관", category: "attraction", categoryLabel: "관광지", region: "고성", lat: 38.511, lng: 128.379, address: "강원특별자치도 고성군 현내면 통일전망대로 369", short: "고성 북쪽의 실내·역사 목적지", tags: ["실내", "고성", "운영 확인"], family: false, pet: "반려동물 입장 규정 확인", hours: "월요일 휴관 여부 등 운영 확인", costs: [{ label: "관람료", value: "공식 운영 안내 확인", status: "check" }], description: "날씨가 좋지 않을 때 고려할 수 있는 실내 목적지입니다. 4살 아이에게는 관람 시간이 길 수 있어 짧게 보고 주변 코스와 조합하는 것을 권합니다.", sourceLabel: "고성군 공식 관광 안내 확인 필요", sourceUrl: "https://www.gwgs.go.kr/", coordStatus: "map-center" },
  { id: "yeonggeumjeong", title: "영금정·등대전망대", category: "attraction", categoryLabel: "관광지", region: "속초", lat: 38.214, lng: 128.6003, address: "강원특별자치도 속초시 영금정로 43", short: "아침 바다를 짧게 보고 오는 산책 포인트", tags: ["짧은 산책", "속초", "일출"], family: true, pet: "야외 산책 동반 가능", hours: "상시 개방 구간 중심", costs: [{ label: "이용료", value: "무료 구간", status: "official" }], description: "유모차보다 아기띠가 편한 구간이 있을 수 있어 짧은 산책으로 계획하세요. 숙소에서 이른 아침 움직이기 좋은 속초 도심 포인트입니다.", sourceLabel: "속초시 관광 안내", sourceUrl: "https://www.sokcho.go.kr/sc/portal", coordStatus: "map-center" },
  { id: "yeongnangho", title: "영랑호 산책로", category: "attraction", categoryLabel: "관광지", region: "속초", lat: 38.2169, lng: 128.5773, address: "강원특별자치도 속초시 영랑호반길 140", short: "강아지와 유모차가 함께 걷기 좋은 호수 코스", tags: ["강아지 메모", "유모차", "산책"], family: true, pet: "야외 산책 동반 추천", hours: "상시 이용 구간", costs: [{ label: "이용료", value: "무료", status: "official" }], description: "바다 대신 바람이 덜한 산책이 필요할 때 좋은 후보입니다. 한 바퀴 완주보다 컨디션에 맞춰 일부 구간만 걸어도 충분합니다.", sourceLabel: "속초시 관광 안내 확인", sourceUrl: "https://www.sokcho.go.kr/sc/portal", coordStatus: "map-center" },
  { id: "seorak-botanical", title: "설악산자생식물원", category: "attraction", categoryLabel: "관광지", region: "속초", lat: 38.176, lng: 128.540, address: "강원특별자치도 속초시 바람꽃마을길 164", short: "그늘·식물·짧은 산책을 조합하는 곳", tags: ["아이 추천", "그늘", "산책"], family: true, pet: "반려견 동반 규정 확인", hours: "계절별 운영 시간 확인", costs: [{ label: "입장료", value: "공식 공지 확인", status: "check" }], description: "한낮 해변이 부담스러운 날, 식물원 산책과 카페를 묶어 쉬어가기 좋은 후보입니다.", sourceLabel: "속초시 관광 안내 확인 필요", sourceUrl: "https://www.sokcho.go.kr/sc/portal", coordStatus: "map-center" },
  { id: "sokcho-market", title: "속초관광수산시장", category: "market", categoryLabel: "시장", region: "속초", lat: 38.205509, lng: 128.589294, address: "강원특별자치도 속초시 중앙로147번길 12", short: "포장 음식과 간식, 저녁 장보기를 한 번에", tags: ["포장", "간식", "속초"], family: true, pet: "실내 동반보다 포장·교대 추천", hours: "점포별 영업 시간 상이", costs: [{ label: "주차", value: "시장·공영주차장별 확인", status: "check" }, { label: "먹거리", value: "점포별 상이", status: "check" }], description: "아이들이 잠든 뒤에도 가족 식사를 준비하기 좋은 대표 시장입니다. 강아지와 함께라면 실내 동반보다 포장과 교대 방문을 권합니다.", sourceLabel: "속초관광수산시장 공식 안내", sourceUrl: "https://www.sokcho.go.kr/ct/tour/pleasure/shopping?contentSeq=131", coordStatus: "public" },
  { id: "yangyang-market", title: "양양전통시장", category: "market", categoryLabel: "시장", region: "양양", lat: 38.075, lng: 128.619, address: "강원특별자치도 양양군 양양읍 남문5길 9", short: "양양 해변 일정에 붙이는 장보기 코스", tags: ["포장", "양양", "장날 확인"], family: true, pet: "포장·야외 중심 추천", hours: "장날과 점포별 영업 확인", costs: [{ label: "먹거리", value: "점포별 상이", status: "check" }], description: "양양 해변을 다녀오는 길에 포장 간식이나 아침거리를 마련하기 좋은 후보입니다.", sourceLabel: "양양군 관광 안내 확인 필요", sourceUrl: "https://tour.yangyang.go.kr/", coordStatus: "map-center" },
  { id: "88-grilled-fish", title: "88생선구이", category: "food", categoryLabel: "식당", region: "속초", lat: 38.2064, lng: 128.5898, address: "속초관광수산시장 인근", short: "속초식 생선구이를 먹는 대표 후보", tags: ["가족 식사", "시장 인근", "대기 확인"], family: true, pet: "실내 동반 여부 확인", hours: "영업·대기 시간 당일 확인", costs: [{ label: "식사", value: "메뉴별 확인", status: "check" }], description: "아이와 함께 먹기 쉬운 메뉴를 고르기 좋은 식사 후보입니다. 유아 의자와 대기 시간을 전화로 먼저 확인하면 동선이 편합니다.", sourceLabel: "매장 운영 정보는 방문 전 확인 필요", sourceUrl: "https://map.kakao.com/", coordStatus: "map-center" },
  { id: "dancheon", title: "단천식당", category: "food", categoryLabel: "식당", region: "속초", lat: 38.2044, lng: 128.5905, address: "아바이마을 인근", short: "아바이순대·함흥냉면 식사 후보", tags: ["가족 식사", "포장 가능 여부", "아바이마을"], family: true, pet: "실내 동반 여부 확인", hours: "영업 시간 당일 확인", costs: [{ label: "식사", value: "메뉴별 확인", status: "check" }], description: "아바이마을 산책과 함께 넣기 좋은 식사 후보입니다. 4살 아이용 메뉴와 간을 미리 확인하세요.", sourceLabel: "매장 운영 정보는 방문 전 확인 필요", sourceUrl: "https://map.kakao.com/", coordStatus: "map-center" },
  { id: "seaside-garden", title: "바다정원", category: "cafe", categoryLabel: "카페", region: "고성", lat: 38.255, lng: 128.564, address: "강원특별자치도 고성군 토성면 버리깨길 23", short: "고성 드라이브 중 쉬어가는 대형 카페 후보", tags: ["아이와 휴식", "고성", "정원"], family: true, pet: "반려견 동반 규정 확인", hours: "영업 시간·휴무 확인", costs: [{ label: "음료", value: "메뉴별 확인", status: "check" }], description: "고성 해변과 묶어 쉬어가기 좋은 카페 후보입니다. 유아 수유·기저귀 교체 공간은 방문 전 확인하세요.", sourceLabel: "바다정원 공식 홈페이지", sourceUrl: "https://www.seasidemall.co.kr/index", coordStatus: "map-center" },
  { id: "cafe-gid", title: "카페 긷", category: "cafe", categoryLabel: "카페", region: "속초", lat: 38.195, lng: 128.586, address: "속초 청초호 인근", short: "숙소 주변에서 짧게 쉬는 카페 후보", tags: ["숙소 인근", "낮잠 동선", "속초"], family: true, pet: "반려견 동반 여부 확인", hours: "영업 시간 당일 확인", costs: [{ label: "음료", value: "메뉴별 확인", status: "check" }], description: "멀리 이동하지 않고 숙소 근처에서 휴식할 때 넣기 좋은 후보입니다. 실제 위치·영업은 출발 전 지도 앱에서 확인하세요.", sourceLabel: "방문 전 지도·매장 채널 확인 필요", sourceUrl: "https://map.kakao.com/", coordStatus: "map-center" }
];

const events = [
  { title: "속초 썸머페스티벌", meta: "7.31 — 8.2 · 속초해수욕장 · 무료", source: "https://www.mcst.go.kr/site/s_culture/festival/festivalView.jsp?pRo=12&pSeq=13468" },
  { title: "양양 서머 페스티벌", meta: "7.31 — 8.1 · 낙산해수욕장", source: "https://www.yycf.or.kr/contents/general_notices_view.html?bbs_idx=1&idx=1862&key=&page=18" },
  { title: "속초해수욕장 야간 프로그램", meta: "7.21 — 8.12 · 21:00 전후 운영 확인", source: "https://www.sokcho.go.kr/sc/portal/sokchonews/pressrelease" }
];

const categoryLabels = { all: "전체", beach: "해수욕장", attraction: "관광지", market: "시장", food: "식당", cafe: "카페", stay: "숙소" };
let activeCategory = "all";
let query = "";
let familyOnly = false;
let petOnly = false;
let selectedId = null;
let map;
const markerById = new Map();

const $ = (selector) => document.querySelector(selector);
const escapeHTML = (value) => String(value).replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[char]));
const sourceClass = (status) => status === "official" ? "official" : status === "reference" ? "reference" : "check";
const sourceLabel = (status) => status === "official" ? "확인됨" : status === "reference" ? "참고" : "현장 확인";
const matches = (place) => {
  const haystack = `${place.title} ${place.region} ${place.short} ${place.tags.join(" ")}`.toLowerCase();
  return (activeCategory === "all" || place.category === activeCategory || (activeCategory === "all" && place.category === "stay"))
    && (!query || haystack.includes(query.toLowerCase()))
    && (!familyOnly || place.family)
    && (!petOnly || place.pet.includes("확인") === false || place.tags.some((tag) => tag.includes("강아지")) || place.pet.includes("동반"));
};

function renderEvents() {
  $("#event-list").innerHTML = events.map((event) => `<a class="event-card" href="${event.source}" target="_blank" rel="noreferrer"><strong>${escapeHTML(event.title)}</strong><span>${escapeHTML(event.meta)}</span></a>`).join("");
}

function markerIcon(place, selected = false) {
  const letter = place.category === "stay" ? "집" : place.categoryLabel.slice(0, 1);
  return L.divIcon({ className: "", html: `<span class="custom-marker ${place.category} ${selected ? "is-selected" : ""}"><span>${letter}</span></span>`, iconSize: [30, 30], iconAnchor: [15, 30], popupAnchor: [0, -28] });
}

function initMap() {
  if (typeof L === "undefined") {
    $("#map").hidden = true;
    $("#map-fallback").hidden = false;
    return;
  }
  map = L.map("map", { zoomControl: false, scrollWheelZoom: false }).setView([38.2011, 128.5865], 11);
  L.control.zoom({ position: "bottomright" }).addTo(map);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { maxZoom: 19, attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>' }).addTo(map);
  places.forEach((place) => {
    const marker = L.marker([place.lat, place.lng], { icon: markerIcon(place) }).addTo(map);
    marker.on("click", () => selectPlace(place.id, true));
    marker.bindTooltip(place.title, { direction: "top", offset: [0, -22] });
    markerById.set(place.id, marker);
  });
  setTimeout(() => map.invalidateSize(), 150);
}

function renderList() {
  const filtered = places.filter(matches);
  $("#place-count").textContent = filtered.length;
  $("#place-list").innerHTML = filtered.length ? filtered.map((place) => {
    const tags = place.tags.slice(0, 3).map((tag) => `<span class="tag ${tag.includes("추천") || tag.includes("유모차") ? "good" : ""}">${escapeHTML(tag)}</span>`).join("");
    return `<button class="place-card ${selectedId === place.id ? "is-selected" : ""}" data-place-id="${place.id}" type="button"><span class="place-topline"><span class="category-dot ${place.category}" aria-hidden="true"></span><span class="place-category">${escapeHTML(place.region)} · ${escapeHTML(place.categoryLabel)}</span></span><h3>${escapeHTML(place.title)}</h3><p>${escapeHTML(place.short)}</p><span class="card-tags">${tags}</span></button>`;
  }).join("") : `<p class="no-results">조건에 맞는 장소가 없어요.<br />필터를 하나 끄거나 검색어를 지워보세요.</p>`;
  document.querySelectorAll("[data-place-id]").forEach((card) => card.addEventListener("click", () => selectPlace(card.dataset.placeId, true)));
}

function renderDetail(place) {
  const costs = place.costs.map((cost) => `<div class="cost-row"><span>${escapeHTML(cost.label)}</span><span>${escapeHTML(cost.value)}<small class="status ${sourceClass(cost.status)}">${sourceLabel(cost.status)}</small></span></div>`).join("");
  const tags = place.tags.map((tag) => `<span class="tag ${tag.includes("추천") || tag.includes("산책") ? "good" : tag.includes("확인") ? "warn" : ""}">${escapeHTML(tag)}</span>`).join("");
  const coordNote = place.coordStatus === "public" || place.coordStatus === "provided" ? "공개 주소 기반" : "지도 중심점";
  $("#detail-panel").innerHTML = `<div class="detail-content"><div class="detail-hero"><span class="eyebrow">${escapeHTML(place.region)} · ${escapeHTML(place.categoryLabel)}</span><h2 id="detail-title">${escapeHTML(place.title)}</h2><p class="detail-subline">${escapeHTML(place.short)}</p><div class="detail-actions"><a class="primary-button" href="https://map.kakao.com/?q=${encodeURIComponent(place.address)}" target="_blank" rel="noreferrer">길찾기 열기</a><button class="secondary-button" type="button" id="close-detail">목록으로</button></div></div><section class="detail-section"><h3>가족 메모</h3><p>${escapeHTML(place.description)}</p><div class="detail-tags" style="margin-top:14px">${tags}</div></section><section class="detail-section"><h3>기본 정보</h3><dl class="info-list"><div class="info-row"><dt>주소</dt><dd>${escapeHTML(place.address)}</dd></div><div class="info-row"><dt>운영</dt><dd>${escapeHTML(place.hours)}</dd></div><div class="info-row"><dt>강아지</dt><dd>${escapeHTML(place.pet)}</dd></div><div class="info-row"><dt>핀 기준</dt><dd>${coordNote}</dd></div></dl></section><section class="detail-section"><h3>2026 비용 체크</h3><div class="cost-list">${costs}</div><p class="source-note">비용 상태는 조사 시점 기준입니다. 현장 운영자·공식 공지와 달라질 수 있으니 방문 전 다시 확인하세요.</p></section><section class="detail-section"><h3>출처</h3><a class="source-link" href="${place.sourceUrl}" target="_blank" rel="noreferrer">${escapeHTML(place.sourceLabel)} ↗</a></section></div>`;
  $("#close-detail").addEventListener("click", () => { selectedId = null; history.replaceState(null, "", "#top"); renderList(); $("#detail-panel").innerHTML = `<div class="detail-empty"><span class="empty-kicker">PLACE NOTE</span><h2>지도의 핀을 눌러<br />여행지를 골라보세요.</h2><p>아이들과 가기 좋은 정도, 강아지 동반 메모, 2026년 비용 확인 상태를 함께 보여드려요.</p><div class="empty-line"><span></span><span></span><span></span></div></div>`; updateMarkers(); });
}

function updateMarkers() {
  markerById.forEach((marker, id) => {
    const place = places.find((item) => item.id === id);
    const visible = matches(place);
    if (visible) marker.addTo(map); else marker.remove();
    marker.setIcon(markerIcon(place, selectedId === id));
  });
}

function selectPlace(id, panTo = false) {
  const place = places.find((item) => item.id === id);
  if (!place) return;
  selectedId = id;
  history.replaceState(null, "", `#${id}`);
  renderList();
  renderDetail(place);
  updateMarkers();
  if (map && panTo) map.setView([place.lat, place.lng], Math.max(map.getZoom(), 12), { animate: true });
  const card = document.querySelector(`[data-place-id="${id}"]`);
  if (card) card.scrollIntoView({ block: "nearest" });
}

function resetFilters() {
  activeCategory = "all"; query = ""; familyOnly = false; petOnly = false; selectedId = null;
  $("#place-search").value = ""; $("#family-toggle").checked = false; $("#pet-toggle").checked = false;
  document.querySelectorAll(".filter-button").forEach((button) => button.classList.toggle("is-active", button.dataset.category === "all"));
  renderList(); updateMarkers();
  if (map) map.setView([38.2011, 128.5865], 11);
}

document.addEventListener("DOMContentLoaded", () => {
  renderEvents();
  initMap();
  renderList();
  const hashId = window.location.hash.slice(1);
  if (places.some((place) => place.id === hashId)) selectPlace(hashId, false);
  document.querySelectorAll(".filter-button").forEach((button) => button.addEventListener("click", () => { activeCategory = button.dataset.category; document.querySelectorAll(".filter-button").forEach((item) => item.classList.toggle("is-active", item === button)); renderList(); updateMarkers(); }));
  $("#place-search").addEventListener("input", (event) => { query = event.target.value.trim(); renderList(); updateMarkers(); });
  $("#family-toggle").addEventListener("change", (event) => { familyOnly = event.target.checked; renderList(); updateMarkers(); });
  $("#pet-toggle").addEventListener("change", (event) => { petOnly = event.target.checked; renderList(); updateMarkers(); });
  $("#reset-view").addEventListener("click", resetFilters);
  $("#locate-stay").addEventListener("click", () => { if (map) map.setView([stay.lat, stay.lng], 13); selectPlace(stay.id, false); });
  window.addEventListener("resize", () => map && map.invalidateSize());
});
