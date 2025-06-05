document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        {
            title: 'Project One',
            image: 'https://via.placeholder.com/800x600',
            description: 'This is a detailed description for Project One. It includes information about the process, tools used, and outcomes.',
            report: {
                date: '2023-10-27',
                weather: 'Sunny',
                event: 'Project Completion Meeting'
            }
        },
        {
            title: 'Project Two',
            image: 'https://via.placeholder.com/800x600',
            description: 'This is a detailed description for Project Two, focusing on its unique features and challenges.',
            report: {
                date: '2023-11-15',
                weather: 'Cloudy',
                event: 'Client Presentation'
            }
        },
        {
            title: 'Project Three',
            image: 'https://via.placeholder.com/800x600',
            description: 'Details about Project Three, including the design process and user feedback.',
            report: {
                date: '2024-01-20',
                weather: 'Rainy',
                event: 'Development Milestone Review'
            }
        },
        {
            title: 'Project Four',
            image: 'https://via.placeholder.com/800x600',
            description: 'An overview of Project Four, highlighting its impact and future potential.',
            report: {
                date: '2024-03-10',
                weather: 'Windy',
                event: 'Final Demo'
            }
        }
    ];

    const projectItems = document.querySelectorAll('.project-item');
    const projectTitle = document.getElementById('project-title');
    const projectImage = document.getElementById('project-image');

    const reportModal = document.getElementById('report-modal');
    const modalClose = reportModal.querySelector('.modal-close');
    const modalOverlay = reportModal.querySelector('.modal-overlay');
    const reportDate = document.getElementById('report-date');
    const reportWeather = document.getElementById('report-weather');
    const reportEvent = document.getElementById('report-event');
    const reportDescription = document.getElementById('report-description');

    let currentProjectIndex = 0; // Keep track of the currently displayed project index

    function updateProject(index) {
        currentProjectIndex = index; // Update the current index
        // Update active state in sidebar
        projectItems.forEach(item => item.classList.remove('active'));
        projectItems[index].classList.add('active');

        // Update content
        const project = projects[index];
        projectTitle.textContent = project.title;
        projectImage.src = project.image;
        projectImage.alt = project.title;
    }

    function openReportModal() {
        const project = projects[currentProjectIndex];
        reportDate.textContent = project.report.date;
        reportWeather.textContent = project.report.weather;
        reportEvent.textContent = project.report.event;
        reportDescription.textContent = project.description;
        reportModal.classList.remove('hidden');
    }

    function closeReportModal() {
        reportModal.classList.add('hidden');
    }

    projectItems.forEach(item => {
        item.addEventListener('click', () => {
            const index = parseInt(item.getAttribute('data-project'));
            updateProject(index);
        });
    });

    // Add event listener to the project image to open the modal
    projectImage.addEventListener('click', openReportModal);

    // Add event listeners to close the modal
    modalClose.addEventListener('click', closeReportModal);
    modalOverlay.addEventListener('click', closeReportModal);

    // Close modal on escape key press
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeReportModal();
        }
    });

    // Initialize with first project
    updateProject(0);

    // Data structures for photos and documents
    const streetPhotos = [
        {
            src: 'https://via.placeholder.com/1200x800/d3d3d3/555?text=Street+Photo+Placeholder+1',
            alt: 'Street Photo 1',
            hotspots: [
                {
                    id: 'building-a',
                    coords: { top: '10%', left: '5%', width: '20%', height: '50%' },
                    report: {
                        title: '건물 A 분석 보고서',
                        ref: 'OBJ-B-2024-001',
                        date: '2024-07-20',
                        agency: '건축물 안전 관리국',
                        body: '<p>본 보고서는 [지역명]에 위치한 건물 A의 안전 진단 결과를 포함합니다. 최근 점검 결과, 구조적 문제는 발견되지 않았으며, 외벽 상태는 양호합니다. 내부 시설 중 일부 노후 부품에 대한 교체 권고가 있습니다. 정기적인 유지보수 계획 준수가 중요합니다.</p>',
                        signature: '최지훈 (안전 진단사)'
                    }
                },
                {
                    id: 'traffic-light-1',
                    coords: { top: '40%', left: '30%', width: '5%', height: '15%' },
                    report: {
                        title: '신호등 1 작동 보고서',
                        ref: 'OBJ-TL-2024-003',
                        date: '2024-07-19',
                        agency: '교통 시스템 관리팀',
                        body: '<p>본 보고서는 [교차로명]에 설치된 신호등 1의 작동 상태를 기록합니다. 시스템 로그 분석 결과, 정상적으로 작동 중이며 오류 기록은 없습니다. 전력 공급 및 통신 상태도 안정적입니다. 주기적인 점검을 통해 지속적인 성능 유지를 관리할 예정입니다.</p>',
                        signature: '윤성호 (시스템 엔지니어)'
                    }
                }
                // Add more hotspots as needed for photo 1
            ]
        },
        {
            src: 'https://via.placeholder.com/1200x800/cccccc/444?text=Street+Photo+Placeholder+2',
            alt: 'Street Photo 2',
            hotspots: [
                 {
                    id: 'person-walking',
                    coords: { top: '60%', left: '50%', width: '10%', height: '30%' },
                    report: {
                        title: '개인 동선 관찰 기록',
                        ref: 'OBJ-P-2024-010',
                        date: '2024-07-20',
                        agency: '지역 분석 연구소',
                        body: '<p>특정 시간대에 관찰된 개인의 동선 기록입니다. [시간]에 [위치]에서 포착되었으며, [이동 방향]으로 이동하는 것이 관찰되었습니다. 특이 행동 패턴은 발견되지 않았습니다. 해당 정보는 군집 동선 분석 자료에 통합될 예정입니다.</p>',
                        signature: '한아름 (연구 보조원)'
                    }
                }
                // Add more hotspots as needed for photo 2
            ]
        },
        {
            src: 'https://via.placeholder.com/1200x800/bbbbbb/333?text=Street+Photo+Placeholder+3',
            alt: 'Street Photo 3',
            hotspots: [
                 // Add hotspots for photo 3
            ]
        },
        {
            src: 'https://via.placeholder.com/1200x800/aaaaaa/222?text=Street+Photo+Placeholder+4',
            alt: 'Street Photo 4',
            hotspots: [
                 // Add hotspots for photo 4
            ]
        }
    ];

    const documents = { // Main documents for top nav
        doc1: {
            title: '지역 총괄 정보기록서',
            ref: 'REF-REC-2023-001',
            date: '2023-10-27',
            agency: '지역 기록 관리국',
            body: '<p>본 기록서는 [지역명]의 총괄 정보를 담고 있습니다. 최근 실시된 현장 조사에 따르면, 해당 지역의 인구 밀도는 안정적인 수준을 유지하고 있으며, 주요 기반 시설은 양호한 상태를 보입니다. 특히 [특정 시설]의 경우, 최근의 개선 공사를 통해 효율성이 증대되었습니다. 다만, [다른 시설] 주변의 교통 체증 문제가 지속적으로 관찰되고 있어 이에 대한 추가적인 분석 및 대책 마련이 시급합니다.</p><p>환경 분석 결과, 대기 질은 전반적으로 보통 수준이나, 특정 공업 단지 인근에서는 미세먼지 농도가 다소 높게 측정되었습니다. 수질은 대부분의 측정 지점에서 기준치를 충족하고 있으나, [특정 하천] 하류에서는 미량의 오염 물질이 검출되었습니다. 생태계 변화는 크지 않으나, [특정 동식물]의 개체 수 감소가 보고되었습니다. 이에 대한 원인 규명 및 보호 조치 검토가 필요합니다.</p><p>경제 활동 지표는 완만한 성장세를 보이며, 신규 사업체 수가 증가 추세에 있습니다. [주요 산업] 분야의 활약이 두드러지며, 고용률 또한 긍정적인 변화를 보이고 있습니다. 그러나 [다른 산업] 분야는 다소 침체된 모습을 보이고 있어, 이에 대한 지원 방안 모색이 요구됩니다. 지역 주민들의 만족도는 대체로 높은 편이나, 문화 및 편의 시설 확충에 대한 요구가 있습니다. 향후 지역 개발 계획 수립 시 이러한 주민 의견을 적극 반영할 필요가 있습니다.</p>',
            signature: '김민준 (선임 연구원)'
        },
        doc2: {
            title: '시각 자료 평가 보고서',
            ref: 'REF-EVA-2023-005',
            date: '2023-11-15',
            agency: '시각 자료 분석팀',
            body: '<p>본 보고서는 최근 수집된 시각 자료에 대한 평가 결과를 제시합니다. 분석 대상은 [자료 종류]이며, 수집 기간은 [기간]입니다. 자료의 해상도와 명확성은 분석 목적에 부합하는 수준이며, 특이 사항은 발견되지 않았습니다. 전반적으로 자료의 신뢰도는 높다고 판단됩니다.</p><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p><p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>',
            signature: '박서연 (책임 분석관)'
        },
        doc3: {
            title: '기록 목적 및 문서 생산 내역서',
            ref: 'REF-PRO-2024-010',
            date: '2024-01-20',
            agency: '기록 관리 기획과',
            body: '<p>본 문서는 [특정 프로젝트/업무]와 관련된 기록의 목적과 해당 과정에서 생산된 문서의 내역을 명시합니다. 기록의 주된 목적은 [목적 1], [목적 2], 그리고 [목적 3]을 달성하기 위함입니다. 이는 향후 [활용 분야]에서의 참고 및 활용을 염두에 둔 것입니다. 모든 기록 활동은 관련 규정 및 절차에 따라 수행되었습니다.</p><p>문서 생산 내역은 다음과 같습니다. 총 [숫자]건의 보고서, [숫자]건의 회의록, [숫자]건의 데이터 시트, 그리고 [숫자]건의 기타 문서가 생산되었습니다. 각 문서는 [생산 일자], [문서 제목], [작성자], 그리고 [보관 경로]에 대한 정보를 포함하고 있습니다. 모든 생산 문서는 지정된 기록 시스템에 전자적으로 등록 및 보관되었습니다. 물리적 문서는 [보관 장소]에 안전하게 이관되었습니다.</p><p>문서 생산 과정 중 [특이 사항]이 일부 발생하였으나, 이는 기록의 완전성 및 정확성에 영향을 미치지 않도록 적절히 관리되었습니다. 본 내역서는 생산된 기록의 투명성을 확보하고, 향후 기록의 검색 및 활용을 용이하게 하는 데 기여할 것입니다. 추가적인 문서 생산이 발생할 경우 본 내역서에 업데이트될 예정입니다.</p>',
            signature: '이준호 (기록 관리 담당자)'
        }
    };

    // Get elements
    const topNavItems = document.querySelectorAll('.top-nav li');
    const sidebarItems = document.querySelectorAll('.sidebar-item');
    const photoArea = document.getElementById('photo-area');
    const streetImage = document.getElementById('street');
    const clickableAreasOverlay = document.getElementById('clickable-areas-overlay');
    const documentArea = document.getElementById('document-area'); // For main documents
    const docRef = document.getElementById('doc-ref');
    const docDate = document.getElementById('doc-date');
    const docAgency = document.getElementById('doc-agency');
    const docTitle = document.getElementById('doc-title');
    const documentBody = document.querySelector('#document-area .document-body');
    const docSignature = document.getElementById('doc-signature');

    const objectReportModal = document.getElementById('object-report-modal'); // For object reports
    const objReportRef = document.getElementById('obj-report-ref');
    const objReportDate = document.getElementById('obj-report-date');
    const objReportAgency = document.getElementById('obj-report-agency');
    const objReportBody = document.getElementById('obj-report-body');
    const objReportSignature = document.getElementById('obj-report-signature');
    const objModalCloseButton = objectReportModal.querySelector('.modal-close');
    const objModalOverlay = objectReportModal.querySelector('.modal-overlay');

    // Function to display document (main document area)
    function displayDocument(docId) {
        const doc = documents[docId];
        if (doc) {
            docRef.textContent = doc.ref;
            docDate.textContent = doc.date;
            docAgency.textContent = doc.agency;
            docTitle.textContent = doc.title;
            documentBody.innerHTML = doc.body; // Use innerHTML to render paragraphs
            docSignature.textContent = doc.signature;

            photoArea.classList.add('hidden');
            documentArea.classList.remove('hidden');
            // Hide any open object report modal
            closeObjectReportModal();
        }
    }

    // Function to display photo and clickable areas
    function displayPhoto(index) {
        const photoData = streetPhotos[index];
        streetImage.src = photoData.src;
        streetImage.alt = photoData.alt;

        // Clear existing clickable areas
        clickableAreasOverlay.innerHTML = '';

        // Create and add new clickable areas
        photoData.hotspots.forEach(hotspot => {
            const area = document.createElement('div');
            area.classList.add('clickable-area');
            area.style.top = hotspot.coords.top;
            area.style.left = hotspot.coords.left;
            area.style.width = hotspot.coords.width;
            area.style.height = hotspot.coords.height;
            area.setAttribute('data-hotspot-id', hotspot.id);
            clickableAreasOverlay.appendChild(area);

            // Add click listener to open object report modal
            area.addEventListener('click', () => {
                openObjectReportModal(hotspot.report);
            });
        });

        documentArea.classList.add('hidden');
        photoArea.classList.remove('hidden');
         // Hide any open object report modal
         closeObjectReportModal();
    }

    // Function to open object report modal
    function openObjectReportModal(reportData) {
        objReportRef.textContent = reportData.ref;
        objReportDate.textContent = reportData.date;
        objReportAgency.textContent = reportData.agency;
        objReportBody.innerHTML = reportData.body;
        objReportSignature.textContent = reportData.signature;
        objectReportModal.classList.remove('hidden');
    }

    // Function to close object report modal
    function closeObjectReportModal() {
        objectReportModal.classList.add('hidden');
    }

    // Function to hide all content areas
    function hideAllContent() {
        photoArea.style.display = 'none';
        documents.forEach(doc => {
            doc.style.display = 'none';
        });
    }

    // Function to show a specific content area
    function showContent(elementToShow) {
        hideAllContent();
        elementToShow.classList.remove('hidden');
    }

    // Function to manage active class for a menu
    function setActive(items, activeItem) {
        items.forEach(item => item.classList.remove('active'));
        if (activeItem) {
            activeItem.classList.add('active');
        }
    }

    // Add event listeners to top nav items
    topNavItems.forEach(item => {
        item.addEventListener('click', () => {
            const docId = item.getAttribute('data-doc');
            if (docId) {
                showDocument(docId);
                setActive(topNavItems, item);
                // Remove active state from all sidebar items
                sidebarItems.forEach(sidebarItem => sidebarItem.classList.remove('active'));
            }
        });
    });

    // Add event listeners to sidebar items
    sidebarItems.forEach(item => {
        item.addEventListener('click', () => {
            showPhotoArea();
            setActive(sidebarItems, item);
            // Remove active state from all top nav items
            topNavItems.forEach(topNavItem => topNavItem.classList.remove('active'));
        });
    });

    // Event listeners to close object report modal
    objModalCloseButton.addEventListener('click', closeObjectReportModal);
    objModalOverlay.addEventListener('click', closeObjectReportModal);

    // Close object report modal on escape key press
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeObjectReportModal();
        }
    });

    // Initialization: Show photo area and activate the first sidebar item on page load
    showPhotoArea();
    if (sidebarItems.length > 0) {
        setActive(sidebarItems, sidebarItems[0]);
    }

    // Function to hide all content
    function hideAllContent() {
        photoArea.style.display = 'none';
        documents.forEach(doc => doc.style.display = 'none');
    }

    // Function to show photo area
    function showPhotoArea() {
        hideAllContent();
        photoArea.style.display = 'block';
    }

    // Function to show a specific document
    function showDocument(docId) {
        hideAllContent();
        const targetDoc = document.getElementById(docId);
        if (targetDoc) {
            targetDoc.style.display = 'block';
        }
    }

    // Set a placeholder image source if none is set or if the path is invalid
    if (streetImage && (!streetImage.src || streetImage.src.includes('your-image.jpg'))) {
        streetImage.src = 'https://via.placeholder.com/1200x800/d3d3d3/555?text=Street+Photo+Placeholder';
    }
}); 