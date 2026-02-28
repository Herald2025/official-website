export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  tags: string[];
  link?: string;
  github?: string;
}

export const projects: Project[] = [
  {
    id: 'project-1',
    title: '小猴偷米 App',
    description: '东南大学校园生活服务平台，提供课表查询、成绩查询、图书馆预约等功能',
    fullDescription: '小猴偷米是东南大学最受欢迎的校园生活服务App，集成了课表查询、成绩查询、图书馆座位预约、校园卡充值等多种功能。自2015年上线以来，累计服务超过10万东大师生，日活跃用户超过2万人。',
    image: '/images/project1.jpg',
    tags: ['iOS', 'Android', 'Node.js', 'MongoDB'],
  },
  {
    id: 'project-2',
    title: 'AI Agent',
    description: '探索 AI 技术在实际场景中的应用，让智能融入各行各业与生活。',
    fullDescription: '工作室在 AI Agent 领域的实践项目：导向标 - AI 智能导师信息平台，畅行线 - AI Agent 赋能企业管理，信小息 - AI 就业简历分析。探索 AI 技术在实际场景中的应用，让智能融入各行各业与生活。',
    image: '/images/project2.jpg',
    tags: [],
  },
  {
    id: 'project-3',
    title: '课程评价系统',
    description: '学生自主课程评价平台，帮助选课决策',
    fullDescription: '课程评价系统是一个由学生维护的课程信息共享平台。同学们可以在这里查看往届学生对课程的评价，也可以分享自己的上课体验，帮助其他同学做出更好的选课决策。',
    image: '/images/project3.jpg',
    tags: ['React', 'Django', 'PostgreSQL'],
    github: 'https://github.com',
  },
  {
    id: 'project-4',
    title: '实验室管理系统',
    description: '智能化实验室预约与设备管理平台',
    fullDescription: '实验室管理系统为东南大学各实验室提供预约管理、设备借用、安全培训等一体化解决方案。系统支持在线预约实验室工位、借用仪器设备、查看实验室安全规范等功能。',
    image: '/images/project4.jpg',
    tags: ['Python', 'Flask', 'MySQL', 'Redis'],
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find(p => p.id === id);
}
