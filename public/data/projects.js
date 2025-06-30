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
        "id": 1,
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
        "id": 2,
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
                "description": [
                    "GitHub 레포지토리에서 이슈가 발생하거나 업데이트될 때 이를 실시간으로 감지하고 Discord 채널에 즉각적으로 알림을 전송하는 봇 개발",
                ]
            },
            {
                "title": "프로젝트 AWS 요금 봇 개발",
                "description": [
                    "AWS 비용을 매일 자동으로 모니터링하고 Discord 채널에 알림을 전송하는 봇 개발",
                ]
            }
        ],
    },
]