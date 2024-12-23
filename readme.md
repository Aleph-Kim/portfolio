# Aleph Kim's Portfolio Website

## 🖥️ 프로젝트 소개
Aleph Kim의 포트폴리오 웹사이트는 개발자의 역량과 프로젝트를 효과적으로 소개하기 위해 제작된 개인 웹사이트입니다.
이 프로젝트는 **데이터와 UI를 철저히 분리하여** 사용자에게 커스터마이징과 확장성을 극대화할 수 있도록 제작하였습니다.

## 🚀 주요 강점: 데이터 분리 구조
이 웹사이트는 데이터를 독립적으로 관리하는 구조를 채택하여 개발, 유지보수, 확장성에서 많은 이점을 제공합니다.

## 🛠️ 사용 기술
- **Frontend**: Vue.js (컴포넌트 기반 설계)
- **Styling**: Tailwind CSS (유틸리티 기반 스타일링)
- **Build Tool**: Vite (빠른 빌드 및 개발 환경 제공)
- **Hosting**: Netlify (지속적 배포 및 SSL 지원)

## 🌟 프로젝트 특징
- **데이터 중심 설계**: 데이터와 UI를 분리하여 콘텐츠 관리가 쉽고 효율적입니다.
- **커스터마이징 용이**: 데이터를 간단히 수정하여 누구나 자신의 콘텐츠로 웹사이트를 변환 가능.
- **확장성**: 프로젝트가 성장함에 따라 새로운 기능이나 데이터를 손쉽게 추가 가능.

## 🔗 웹사이트
[포트폴리오 웹사이트 바로가기](https://aleph-kim.netlify.app/)

## 🗂️ 프로젝트 구조
```
portfolio/
├── public/                          # 정적 파일 및 공개 데이터
│   ├── data/                        # 데이터 폴더
│   │   ├── about.js                 # 개인 소개 데이터
│   │   ├── career.js                # 경력 데이터
│   │   ├── home.js                  # 홈 화면 데이터
│   │   ├── projects.js              # 프로젝트 데이터
│   │   ├── skills.js                # 기술 데이터
│   │   └── languageColor.js         # 언어 색상 데이터
│   ├── images/                      # 이미지 파일
│   │   └── id-picture.jpg
│   │   └── project/                 # 프로젝트 관련 이미지
│   │       ├── aws-bot.png
│   │       ├── github-discord.png
│   │       ├── korean-quote.png
│   │       └── timer.png
│   ├── favicon.ico                  # 파비콘
│   └── index.html                   # 메인 HTML 파일
├── src/                             # 주요 소스 코드
│   ├── assets/                      # 스타일과 공통 자원
│   │   ├── css/
│   │   │   ├── base.css             # 공통 스타일
│   │   │   └── main.css             # 메인 스타일
│   │   └── utils.js                 # 공통 유틸리티 파일
│   ├── components/                  # Vue 컴포넌트
│   │   ├── About.vue
│   │   ├── Career.vue
│   │   ├── Project.vue
│   │   ├── Skill.vue
│   │   ├── Skills.vue
│   │   └── JobCard.vue
│   ├── App.vue                      # 메인 Vue 컴포넌트
│   └── main.js                      # 엔트리 포인트
├── .gitignore                       # Git 무시 파일 설정
├── package.json                     # 프로젝트 의존성 및 스크립트 설정
├── vite.config.js                   # Vite 설정 파일
└── README.md                        # 프로젝트 설명 파일
```

---

**🎉 본 레포지토리에서 제공하는 모든 코드는 저작권법에 의하여 보호받는 저작물이지만 이에 대한 무단 복제 및 배포를 환영합니다. 🎉**