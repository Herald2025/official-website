export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  images?: string[];
  tags: string[];
  link?: string;
  github?: string;
}

export const projects: Project[] = [
  // {
  //   id: 'project-1',
  //   title: '小猴偷米 App',
  //   description: '东南大学校园生活服务平台，提供课表查询、成绩查询、图书馆预约等功能',
  //   fullDescription: '小猴偷米是东南大学最受欢迎的校园生活服务App，集成了课表查询、成绩查询、图书馆座位预约、校园卡充值等多种功能。自2015年上线以来，累计服务超过10万东大师生，日活跃用户超过2万人。',
  //   image: '/images/assets/xuegong.png',
  //   tags: ['iOS', 'Android', 'Node.js', 'MongoDB'],
  // },
  {
    id: 'project-2',
    title: '前沿前端工程',
    description: '接触多种 UI 框架、组件库、前沿 JavaScript 基建工具的内部实践',
    fullDescription: '工作室前端工程实践项目：学工系统前端 - Vue.js 框架实战，心理中心前端 - React 框架实战，机关党委官网 - 前端工具链深度定制。接触多种 UI 框架、组件库、前沿 JavaScript 基建工具的内部实践',
    image: '/images/assets/img-frontend.png',
    tags: ['React', 'Vue', 'Astro'],
  },
  {
    id: 'project-3',
    title: 'AI Agent',
    description: '探索 AI 技术在实际场景中的应用，让智能融入各行各业与生活。',
    fullDescription: '工作室在 AI Agent 领域的实践项目：导向标 - AI 智能导师信息平台，畅行线 - AI Agent 赋能企业管理，信小息 - AI 就业简历分析。探索 AI 技术在实际场景中的应用，让智能融入各行各业与生活。',
    image: '/images/assets/img-agent2.png',
    images: ['/images/assets/img-agent2.png', '/images/assets/img-agent.png'],
    tags: [],
  },
  {
    id: 'project-4',
    title: '企业级后端应用',
    description: '深入 Spring Boot 生态与 Node.js 技术栈，构建高可用后端服务。',
    fullDescription: '工作室后端开发实践项目：心理中心后端 - Spring Boot 企业级架构，学工部后端 - Koa 搭建 Node.js 高性能后端，导师会客厅后端 - Spring Boot 微服务设计。深入 Spring Boot 生态与 Node.js 技术栈，构建高可用后端服务。',
    image: '/images/assets/img-backend.png',
    tags: ['Spring Boot', 'Node.js', 'MySQL'],
  },
  {
    id: 'project-5',
    title: '高性能数据库设计',
    description: '亲手设计服务全校师生的数据库结构，掌握企业级数据库技能',
    fullDescription: '工作室数据库设计实践：几乎所有项目都需要数据库设计！MySQL / PostgreSQL - 关系型数据库，MongoDB / Redis - NoSQL 与缓存方案，性能优化 - 索引设计、查询优化。亲手设计服务全校师生的数据库结构，掌握企业级数据库技能。',
    image: '/images/assets/img-db.jpeg',
    tags: ['MySQL', 'PostgreSQL', 'MongoDB'],
  },
  {
    id: 'project-6',
    title: 'Linux 与 DevOps',
    description: '接触生产环境服务器，掌握 DevOps 核心技能。',
    fullDescription: '工作室运维实践：多台生产服务器管理 - 实际环境运维经验、服务器状态监控，现代化 CI/CD - 企业级自动化测试、构建、部署全流程。接触生产环境服务器，掌握 DevOps 核心技能。',
    image: '/images/assets/img-ssh.png',
    images: ['/images/assets/img-ssh.png', '/images/assets/img-cicd.png'],
    tags: ['Linux', 'DevOps', 'CI/CD'],
  }
];

export function getProjectById(id: string): Project | undefined {
  return projects.find(p => p.id === id);
}
