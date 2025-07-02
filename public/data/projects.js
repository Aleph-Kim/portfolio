export const projectsData = [
    // {
    //     "id": 1,
    //     "title": "Korean Quote Open API",
    //     "image": "/image/project/korean-quote.png",
    //     "description": "한글 명언을 제공하는 Open API",
    //     "skills": ["Node.js", "Express.js", "Tailwind CSS", "PostgreSQL", "Docker", "Nginx", "GCP", "GitHub"],
    //     "link": "https://quote.aleph.kr/api-docs/",
    //     "github": "https://github.com/Aleph-Kim/korean-quote"
    // },
    // {
    //     "id": 2,
    //     "title": "IMG host server",
    //     "image": "/image/project/img-host-server.png",
    //     "description": "파일 호스트 서버 프로젝트",
    //     "skills": ["Go", "Docker", "Nginx", "GCP", "GitHub"],
    //     "link": "https://img.aleph.kr/files/admin/readme.md",
    //     "github": "https://github.com/Aleph-Kim/img-host-server"
    // },
    // {
    //     "id": 3,
    //     "title": "Share Timer",
    //     "image": "/image/project/timer.png",
    //     "description": "함께 실시간으로 타이머를 공유하고 확인할 수 있는 기능을 제공하는 웹사이트",
    //     "skills": ["Node.js", "Express.js", "Tailwind CSS", "Daisy UI", "PostgreSQL", "Docker", "Nginx", "GCP", "GitHub"],
    //     "github": "https://github.com/Aleph-Kim/share-timer",
    //     "link": "https://timer.aleph.kr/"
    // },
    // {
    //     "id": 4,
    //     "title": "Discord Github Notification",
    //     "image": "/image/project/github-discord.png",
    //     "description": "discord로 github 알림을 받을 수 있게하는 GitHub Actions 마켓플레이스 action",
    //     "skills": ["YAML", "Bash", "GitHub"],
    //     "github": "https://github.com/Aleph-Kim/discord-github-notification",
    //     "link": "https://github.com/marketplace/actions/discord-github-notification"
    // },
    // {
    //     "id": 5,
    //     "title": "Discord AWS cost bot",
    //     "image": "/image/project/aws-bot.png",
    //     "description": "매일 00시에 디스코드 채널에 이번 달 aws 서버 비용을 발송하는 디스코드 봇",
    //     "skills": ["Python", "YAML", "Docker", "GitHub"],
    //     "github": "https://github.com/Aleph-Kim/discord-aws-cost-bot"
    // },
    {
        "title": "Onochu",
        "image": "/image/project/onochu.png",
        "description": "추천 노래 공유 서비스",
        "skills": ["PHP", "JavaScript", "Redis", "MySQL", "Docker", "OCI", "GitHub"],
        "link": "https://onochu.aleph.kr/",
        "github": "https://github.com/Aleph-Kim/onochu",
        "summary": "지인에게 노래를 공유할때 공유 과정을 더 간편하게 만들기 위해 개발한 추천 노래 공유 서비스. 프레임워크에 의존하지 않고 순수 PHP만을 사용하여 서버 개발 전반을 직접 구현함으로써 PHP의 기본 구조와 동작 원리를 심화 학습하는 데 초점을 맞춘 프로젝트.",
        "people": "1인 개발 프로젝트",
        "period": "2025.03 ~ 2025.05 (약 3개월)",
        "features": [
            {
                "title": "전체 프로젝트 기획 및 디자인",
                "description": [
                    "노래 추천 과정을 자동화하고 간편하게 공유할 수 있는 웹서비스로 기획",
                    "사용자 흐름, 주요 기능, 인터페이스를 직접 설계"
                ]
            },
            {
                "title": "FLO Music API를 활용한 음원 정보 수집 및 편집 기능",
                "description": [
                    "사용자가 입력한 키워드로 FLO API에서 음원 및 앨범 정보를 검색",
                    "곡명, 아티스트, 앨범 커버, 발매일, 장르 등의 데이터를 수집",
                    "가공한 음원 데이터를 자체 DB에 저장하여 서비스 내에서 재사용"
                ]
            },
            {
                "title": "다양한 음원 플랫폼 앱 링크 호환 및 원클릭 이동 기능",
                "description": [
                    "Android, IOS, windows, macOS 접속 환경에서 유튜브 뮤직, FLO, Spotify 등 다양한 음원 플랫폼의 링크로 포맷 자동 변환",
                    "카카오톡 템플릿 메시지 안에서 각 플랫폼의 노래 상세 페이지로 바로 이동 가능한 링크 구성",
                    "서비스 내부에서 사용자가 선택한 플랫폼 앱으로 곡 정보를 원클릭으로 연동 가능하도록 설계"
                ]
            },
            {
                "title": "Redis를 활용한 음원 정보 캐싱",
                "description": [
                    "FLO API 호출 결과를 Redis에 캐싱하여 API 요청 수 최소화",
                    "최대 2.5s 이상 소요되던 검색 결과 응답 속도를 0.7s 미만으로 최적화",
                    "일 평균 300회 이상 발생하던 FLO API 사용량을 50회 미만으로 최적화"
                ]
            },
            {
                "title": "카카오 SNS 로그인을 기반으로 한 회원 시스템 구현",
                "description": [
                    "카카오 OAuth2 인증 플로우를 직접 구현하여 사용자 인증 처리",
                    "인증된 사용자 정보를 기반으로 회원가입, 로그인, 세션 관리 기능 구성",
                    "사용자 정보 편집, 추천 기록 저장 등 실제 서비스 운영에 필요한 회원 기능으로 확장"
                ]
            },            
            {
                "title": "카카오 메시지 API를 이용한 추천 노래 공유 기능",
                "description": [
                    "추천 곡을 카카오톡 친구에게 템플릿 메시지 형식으로 전송",
                    "사용자 맞춤 메시지 템플릿 구성"
                ]
            },
            {
                "title": "서버 모니터링 및 로그 수집 시스템 구축",
                "link": "https://dev-kimchi.tistory.com/entry/PHP-Docker-Prometheus-Grafana-%EB%AA%A8%EB%8B%88%ED%84%B0%EB%A7%81",
                "description": [
                    "Prometheus로 서버 자원(CPU, 메모리, 트래픽 등) 메트릭 수집",
                    "Grafana 대시보드를 통한 실시간 시각화 및 과부하 대응 체계 마련",
                    "애플리케이션 로그를 수집하고, 모니터링을 위한 로그 관리 환경 구성"
                ]
            },
            {
                "title": "Go 기반 이미지 호스팅 서버 구축",
                "link": "https://dev-kimchi.tistory.com/entry/Go-%ED%8C%8C%EC%9D%BC-%ED%98%B8%EC%8A%A4%ED%8C%85-%EC%84%9C%EB%B2%84-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EA%B8%B0%EC%88%A0-%EC%84%A4%EB%AA%85%EC%84%9C",
                "description": [
                    "앨범 커버 이미지를 직접 저장하고 제공하기 위한 경량 이미지 서버 구현",
                    "Go 언어로 HTTP 파일 업로드 및 CDN 대체 역할 수행"
                ]
            },
            {
                "title": "CI/CD 파이프라인 구축",
                "description": [
                    "GitHub Action을 활용한 빌드 자동화",
                    "Docker 이미지 생성 후 서버로 자동 배포"
                ]
            },
        ]
    },
    {
        "title": "Aleph's Portfoilo Website",
        "image": "/image/meta-preview.png",
        "description": "김채민 개발자의 포트폴리오 웹사이트",
        "skills": ["Vue.js", "Tailwind CSS", "GitHub"],
        "link": "https://portfolio.aleph.kr/",
        "github": "https://github.com/Aleph-Kim/portfolio",
        "summary": "기존 이력서나 문서 기반 포트폴리오의 한계를 느끼고, 더 유연하고 주도적인 표현 방식을 갖춘 개발자 포트폴리오 사이트가 필요하다고 판단해 직접 개발한 개인 도메인 기반의 포트폴리오 웹사이트",
        "people": "1인 개발 프로젝트",
        "period": "2024.11 ~ 2024.12 (약 2개월)",
        "features": [
            {
                "title": "전체 프로젝트 기획 및 디자인",
                "link": "https://dev-kimchi.tistory.com/entry/vue-%EA%B0%9C%EB%B0%9C%EC%9E%90-%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4-%EC%9B%B9%EC%82%AC%EC%9D%B4%ED%8A%B8",
                "description": [
                    "프로젝트 목적 및 기능 구성 기획",
                    "Home, About, Skill, Career, Project 총 5개의 섹션으로 구성하여 정보 전달 흐름을 구조화",
                    "각 섹션의 콘텐츠와 기능 구성에 대한 기획 및 화면 디자인"
                ]
            },
            {
                "title": "퍼블리싱 및 컴포넌트 기반 개발",
                "description": [
                    "Tailwind CSS를 사용한 반응형 퍼블리싱",
                    "Vue 컴포넌트를 기반으로한 재사용성 높은 UI 구조 설계 및 구현",
                    "meta 태그, Open Graph 설정 등을 활용한 검색엔진 최적화(SEO)",
                    "Google PageSpeed 기준 접근성 93점, 검색엔진 최적화 100점 달성"            
                ]
            },
            {
                "title": "콘텐츠 분리 및 확장 가능한 구조 설계",
                "description": [
                    "유지보수성과 확장성을 고려한 정적 콘텐츠(JSON)와 프레젠테이션 레이어 분리 구조 개발",
                    "사용자가 자신의 정보만 수정하면 그대로 활용 가능하도록 템플릿 구조로 개발",
                ]
            },
            {
                "title": "배포 및 운영 환경 구성",
                "description": [
                    "정적 자산 기반의 포트폴리오를 Netlify를 통해 배포",
                    "GitHub와 연동하여 코드 푸시 시 자동 배포되는 CI 환경 구성",
                    "사용자 도메인 연결 및 HTTPS 설정 등 운영 환경 최적화"
                ]
            }
        ]
    },
    {
        "title": "Itzip",
        "image": "/image/project/itzip.png",
        "description": "개발자 취준생 플랫폼",
        "skills": ["Java", "Spring Boot", "MySQL", "Redis", "Docker", "Nginx", "AWS", "GCP", "Jenkins", "GitHub"],
        "link": "http://itzip.co.kr/api",
        "github": "https://github.com/iTZipProject/itzip_back",
        "summary": "개발자 취업 준비 과정에서 느꼈던 여러 불편함을 해결하고, 더 나은 경험을 제공하기 위해 개발한 개발자 취업 준비생 플랫폼",
        "people": "백엔드 4명 , 프론트 4명 , 디자이너 2명",
        "period": "2024.06 ~ 2024.12 (약 6개월)",
        "features": [
            {
                "title": "프로젝트 협업 환경 구축",
                "description": [
                    "요구 사항 정의서, 전체 ERD 구축",
                    "Discord, Github Wiki, Notion 커뮤니케이션 및 협업 환경 구축",
                    "백엔드 github convention, wiki, issue 관리 방법 작성 및 적용",
                ]
            },
            {
                "title": "배포 시 에러 발생율 저하를 위한 테스트 코드 도입",
                "description": [
                    "테스트 코드 가이드라인 작성",
                    "단위 테스트 및 Repository 테스트 코드 작성",
                    "배포 시, github action에서 테스트 동작을 자동으로 진행하여 배포 후 에러 발생율 저하",
                ]
            },
            {
                "title": "백엔드 회원 기능 담당",
                "description": [
                    "회원가입, 이메일 인증, 로그인, 회원 정보 수정, 비밀번호 재설정 등 기본 회원 기능 구현",
                    "JWT 토큰 발급 및 검증 기능 구현",
                    "SNS 로그인(깃허브, 구글) 기능 구현"
                ]
            },
            {
                "title": "로그 모니터링 시스템 구축",
                "description": [
                    "로그를 효과적으로 수집, 분석, 시각화하기 위해 Elasticsearch와 Kibana를 활용한 고급 모니터링 시스템을 구축",
                ]
            },
            {
                "title": "프로젝트 Github 알림 봇 개발",
                "link": "https://dev-kimchi.tistory.com/entry/Github-%EB%94%94%EC%8A%A4%EC%BD%94%EB%93%9C-%EA%B9%83%ED%97%88%EB%B8%8C-%EC%95%8C%EB%A6%BC-actionDiscord-Github-Notification-%EC%84%A4%EB%AA%85%EC%84%9C",
                "description": [
                    "GitHub 레포지토리에서 이슈가 발생하거나 업데이트될 때 이를 실시간으로 감지하고 Discord 채널에 즉각적으로 알림을 전송하는 봇 개발",
                ]
            },
            {
                "title": "프로젝트 AWS 요금 봇 개발",
                "link": "https://dev-kimchi.tistory.com/entry/Discord-AWS-%EC%9A%94%EA%B8%88-%EC%95%8C%EB%A6%BC-%EB%B4%87",
                "description": [
                    "AWS 비용을 매일 자동으로 모니터링하고 Discord 채널에 알림을 전송하는 봇 개발",
                ]
            }
        ],
    },
]