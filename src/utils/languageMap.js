// languageMap 데이터
export const languageMap = {
    PHP: '#777BB4',
    Laravel: '#FF2D20',
    'YII Framework': '#D8583E',
    'CodeIgniter': '#EF4223',
    Java: '#B07219',
    'Spring Boot': '#6DB33F',
    'Node.js': '#339933',
    'Express.js': '#000000',
    MySQL: '#00758F',
    HTML: '#E34F26',
    CSS: '#1572B6',
    'Tailwind CSS': '#06B6D4',
    'Daisy UI': '#5A4BDA',
    JavaScript: '#E5B425',
    jQuery: '#0769AD',
    'Vue.js': '#4FC08D',
    AWS: '#FF9900',
    GCP: '#4285F4',
    Docker: '#2496ED',
    Jenkins: '#D24939',
    Nginx: '#009639',
    GitHub: '#000000',
};

// 언어에 해당하는 색상을 반환하는 함수
export function getLanguageColor(name) {
    return languageMap[name] || '#CCCCCC';
}
