export interface Member {
  id: string;
  name: string;
  role: string;
  avatar: string;
  description?: string;
}

export const members: Member[] = [
  {
    id: 'member-1',
    name: '张三',
    role: '创始人',
    avatar: '/images/avatar1.jpg',
    description: '工作室创始人，全栈开发工程师',
  },
  {
    id: 'member-2',
    name: '李四',
    role: '技术负责人',
    avatar: '/images/avatar2.jpg',
    description: '负责技术架构设计',
  },
  {
    id: 'member-3',
    name: '王五',
    role: '前端开发',
    avatar: '/images/avatar3.jpg',
    description: '专注于用户体验设计',
  },
  {
    id: 'member-4',
    name: '赵六',
    role: '后端开发',
    avatar: '/images/avatar4.jpg',
    description: '负责服务端开发',
  },
  {
    id: 'member-5',
    name: '钱七',
    role: '产品经理',
    avatar: '/images/avatar5.jpg',
    description: '负责产品规划与设计',
  },
  {
    id: 'member-6',
    name: '孙八',
    role: 'UI设计师',
    avatar: '/images/avatar6.jpg',
    description: '负责视觉设计',
  },
  {
    id: 'member-7',
    name: '周九',
    role: '移动开发',
    avatar: '/images/avatar7.jpg',
    description: 'iOS/Android开发',
  },
  {
    id: 'member-8',
    name: '吴十',
    role: '测试工程师',
    avatar: '/images/avatar8.jpg',
    description: '负责质量保证',
  },
];
