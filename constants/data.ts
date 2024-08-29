'use client'

import { v4 as uuidv4 } from 'uuid'
import { ProjectColumn, ProjectDetail, TeamDetail } from '@/lib/models'

export const TEAM_DETAIL = {
  id: uuidv4(),
  name: 'Burks Dillon',
  logo: `https://robohash.org/${Math.random().toString(36).substring(7)}`,
  users: [
    {
      id: uuidv4(),
      userName: 'Kerri Landry',
      avatar: `https://robohash.org/${Math.random().toString(36).substring(7)}`,
    },
    {
      id: uuidv4(),
      userName: 'Susanne Chavez',
      avatar: `https://robohash.org/${Math.random().toString(36).substring(7)}`,
    },
    {
      id: uuidv4(),
      userName: 'Kent Jordan',
      avatar: `https://robohash.org/${Math.random().toString(36).substring(7)}`,
    },
    {
      id: uuidv4(),
      userName: 'Roseann Finch',
      avatar: `https://robohash.org/${Math.random().toString(36).substring(7)}`,
    },
    {
      id: uuidv4(),
      userName: 'Gibson Shaw',
      avatar: `https://robohash.org/${Math.random().toString(36).substring(7)}`,
    },
    {
      id: uuidv4(),
      userName: 'Vargas Bowen',
      avatar: `https://robohash.org/${Math.random().toString(36).substring(7)}`,
    },
    {
      id: uuidv4(),
      userName: 'Lorie Baxter',
      avatar: `https://robohash.org/${Math.random().toString(36).substring(7)}`,
    },
    {
      id: uuidv4(),
      userName: 'Lolita Parker',
      avatar: `https://robohash.org/${Math.random().toString(36).substring(7)}`,
    },
    {
      id: uuidv4(),
      userName: 'Melva Adkins',
      avatar: `https://robohash.org/${Math.random().toString(36).substring(7)}`,
    },
    {
      id: uuidv4(),
      userName: 'Esperanza Lyons',
      avatar: `https://robohash.org/${Math.random().toString(36).substring(7)}`,
    },
    {
      id: uuidv4(),
      userName: 'Everett Oneill',
      avatar: `https://robohash.org/${Math.random().toString(36).substring(7)}`,
    },
  ],
}

export const TEAM_DETAILS: TeamDetail[] = [
  {
    id: uuidv4(),
    name: 'Burks Dillon',
    logo: `https://robohash.org/${Math.random().toString(36).substring(7)}`,
    users: [
      {
        id: uuidv4(),
        userName: 'Kerri Landry',
        avatar: `https://robohash.org/${Math.random().toString(36).substring(7)}`,
      },
      {
        id: uuidv4(),
        userName: 'Susanne Chavez',
        avatar: `https://robohash.org/${Math.random().toString(36).substring(7)}`,
      },
      {
        id: uuidv4(),
        userName: 'Kent Jordan',
        avatar: `https://robohash.org/${Math.random().toString(36).substring(7)}`,
      },
      {
        id: uuidv4(),
        userName: 'Roseann Finch',
        avatar: `https://robohash.org/${Math.random().toString(36).substring(7)}`,
      },
      {
        id: uuidv4(),
        userName: 'Gibson Shaw',
        avatar: `https://robohash.org/${Math.random().toString(36).substring(7)}`,
      },
      {
        id: uuidv4(),
        userName: 'Vargas Bowen',
        avatar: `https://robohash.org/${Math.random().toString(36).substring(7)}`,
      },
      {
        id: uuidv4(),
        userName: 'Lorie Baxter',
        avatar: `https://robohash.org/${Math.random().toString(36).substring(7)}`,
      },
      {
        id: uuidv4(),
        userName: 'Lolita Parker',
        avatar: `https://robohash.org/${Math.random().toString(36).substring(7)}`,
      },
      {
        id: uuidv4(),
        userName: 'Melva Adkins',
        avatar: `https://robohash.org/${Math.random().toString(36).substring(7)}`,
      },
      {
        id: uuidv4(),
        userName: 'Esperanza Lyons',
        avatar: `https://robohash.org/${Math.random().toString(36).substring(7)}`,
      },
      {
        id: uuidv4(),
        userName: 'Everett Oneill',
        avatar: `https://robohash.org/${Math.random().toString(36).substring(7)}`,
      },
    ],
  },
  {
    id: uuidv4(),
    name: 'Sampson Woodard',
    logo: `https://robohash.org/${Math.random().toString(36).substring(7)}`,
    users: [
      {
        id: uuidv4(),
        userName: 'Brooke Sweet',
        avatar: `https://robohash.org/${Math.random().toString(36).substring(7)}`,
      },
      {
        id: uuidv4(),
        userName: 'Martin Gray',
        avatar: `https://robohash.org/${Math.random().toString(36).substring(7)}`,
      },
      {
        id: uuidv4(),
        userName: 'Barton Mccullough',
        avatar: `https://robohash.org/${Math.random().toString(36).substring(7)}`,
      },
      {
        id: uuidv4(),
        userName: 'Phelps George',
        avatar: `https://robohash.org/${Math.random().toString(36).substring(7)}`,
      },
    ],
  },
]

export const PROJECT_DETAILS: ProjectDetail[] = [
  {
    id: uuidv4(),
    name: 'Project Alpha',
    owner: {
      id: uuidv4(),
      userName: 'Kerri Landry',
      avatar: `https://robohash.org/${Math.random().toString(36).substring(7)}`,
    },
    team: 'Team Innovators',
    assigned: [
      {
        id: uuidv4(),
        userName: 'Susanne Chavez',
        avatar: `https://robohash.org/${Math.random().toString(36).substring(7)}`,
      },
      {
        id: uuidv4(),
        userName: 'Kent Jordan',
        avatar: `https://robohash.org/${Math.random().toString(36).substring(7)}`,
      },
    ],
    column: 'Pending',
    attachment: [
      {
        id: uuidv4(),
        fileName: 'project_alpha_plan.pdf',
        fileType: 'pdf',
        fileSize: 2048576,
        uploadDate: '2023-05-15T10:30:00Z',
        url: 'https://example.com/files/project_alpha_plan.pdf',
      },
    ],
    taskList: [
      {
        id: uuidv4(),
        status: 'In Progress',
        assigned: [
          {
            id: uuidv4(),
            userName: 'Vargas Bowen',
            avatar: `https://robohash.org/${Math.random().toString(36).substring(7)}`,
          },
        ],
        dueDate: '2023-06-30T23:59:59Z',
      },
      {
        id: uuidv4(),
        status: 'Completed',
        assigned: [
          {
            id: uuidv4(),
            userName: 'Vargas Bowen',
            avatar: `https://robohash.org/${Math.random().toString(36).substring(7)}`,
          },
        ],
        dueDate: '2023-06-30T23:59:59Z',
      },
      {
        id: uuidv4(),
        status: 'Completed',
        assigned: [
          {
            id: uuidv4(),
            userName: 'Vargas Bowen',
            avatar: `https://robohash.org/${Math.random().toString(36).substring(7)}`,
          },
        ],
        dueDate: '2023-06-30T23:59:59Z',
      },
      {
        id: uuidv4(),
        status: 'Completed',
        assigned: [
          {
            id: uuidv4(),
            userName: 'Vargas Bowen',
            avatar: `https://robohash.org/${Math.random().toString(36).substring(7)}`,
          },
        ],
        dueDate: '2023-06-30T23:59:59Z',
      },
    ],
    description: 'Flagship project for our new product line.',
    createdDate: '2023-05-01T09:00:00Z',
    dueDate: '2024-09-31T23:59:59Z',
    comments: [
      {
        id: uuidv4(),
        owner: {
          id: uuidv4(),
          userName: 'Esperanza Lyons',
          avatar: `https://robohash.org/${Math.random().toString(36).substring(7)}`,
        },
        content: 'Great progress on the initial phase!',
        createdDate: '2023-05-10T14:30:00Z',
      },
    ],
  },
  {
    id: uuidv4(),
    name: 'Project Beta',
    owner: {
      id: uuidv4(),
      userName: 'Brooke Sweet',
      avatar: `https://robohash.org/${Math.random().toString(36).substring(7)}`,
    },
    team: 'Team Achievers',
    assigned: [
      {
        id: uuidv4(),
        userName: 'Martin Gray',
        avatar: `https://robohash.org/${Math.random().toString(36).substring(7)}`,
      },
    ],
    column: 'Pending',
    attachment: [
      {
        id: uuidv4(),
        fileName: 'project_beta_specs.docx',
        fileType: 'docx',
        fileSize: 1024288,
        uploadDate: '2023-05-20T14:45:00Z',
        url: 'https://example.com/files/project_beta_specs.docx',
      },
    ],
    taskList: [
      {
        id: uuidv4(),
        status: 'Pending',
        assigned: [
          {
            id: uuidv4(),
            userName: 'Brooke Sweet',
            avatar: `https://robohash.org/${Math.random().toString(36).substring(7)}`,
          },
        ],
        dueDate: '2023-07-15T23:59:59Z',
      },
    ],
    description: 'Innovative project aimed at market disruption.',
    createdDate: '2023-05-10T11:00:00Z',
    dueDate: '2024-09-02T23:59:59Z',
    comments: [
      {
        id: uuidv4(),
        owner: {
          id: uuidv4(),
          userName: 'Martin Gray',
          avatar: `https://robohash.org/${Math.random().toString(36).substring(7)}`,
        },
        content: `Let's schedule a kick-off meeting soon.`,
        createdDate: '2023-05-12T16:20:00Z',
      },
    ],
  },
  {
    id: uuidv4(),
    name: 'Project Gamma',
    owner: {
      id: uuidv4(),
      userName: 'Phelps George',
      avatar: `https://robohash.org/${Math.random().toString(36).substring(7)}`,
    },
    team: 'Team Visionaries',
    assigned: [
      {
        id: uuidv4(),
        userName: 'Barton Mccullough',
        avatar: `https://robohash.org/${Math.random().toString(36).substring(7)}`,
      },
      {
        id: uuidv4(),
        userName: 'Lorie Baxter',
        avatar: `https://robohash.org/${Math.random().toString(36).substring(7)}`,
      },
    ],
    column: 'Run',
    attachment: [
      {
        id: uuidv4(),
        fileName: 'project_gamma_timeline.xlsx',
        fileType: 'xlsx',
        fileSize: 512144,
        uploadDate: '2023-05-25T09:15:00Z',
        url: 'https://example.com/files/project_gamma_timeline.xlsx',
      },
      {
        id: uuidv4(),
        fileName: 'project_gamma_timeline.xlsx',
        fileType: 'xlsx',
        fileSize: 512144,
        uploadDate: '2023-05-25T09:15:00Z',
        url: 'https://example.com/files/project_gamma_timeline.xlsx',
      },
    ],
    taskList: [
      {
        id: uuidv4(),
        status: 'Completed',
        assigned: [
          {
            id: uuidv4(),
            userName: 'Barton Mccullough',
            avatar: `https://robohash.org/${Math.random().toString(36).substring(7)}`,
          },
        ],
        dueDate: '2023-06-15T23:59:59Z',
      },
    ],
    description: 'Cutting-edge project focusing on emerging technologies.',
    createdDate: '2023-05-20T13:30:00Z',
    dueDate: '2024-09-17T23:59:59Z',
    comments: [
      {
        id: uuidv4(),
        owner: {
          id: uuidv4(),
          userName: 'Lorie Baxter',
          avatar: `https://robohash.org/${Math.random().toString(36).substring(7)}`,
        },
        content: 'Exciting project! Looking forward to our first milestone.',
        createdDate: '2023-05-22T10:45:00Z',
      },
    ],
  },
  {
    id: uuidv4(),
    name: 'Project Delta',
    owner: {
      id: uuidv4(),
      userName: 'Alicia Rodgers',
      avatar: `https://robohash.org/${Math.random().toString(36).substring(7)}`,
    },
    team: 'Team Visionaries',
    assigned: [
      {
        id: uuidv4(),
        userName: 'Barton Mccullough',
        avatar: `https://robohash.org/${Math.random().toString(36).substring(7)}`,
      },
      {
        id: uuidv4(),
        userName: 'Lorie Baxter',
        avatar: `https://robohash.org/${Math.random().toString(36).substring(7)}`,
      },
    ],
    column: 'Run',
    attachment: [
      {
        id: uuidv4(),
        fileName: 'project_gamma_timeline.xlsx',
        fileType: 'xlsx',
        fileSize: 512144,
        uploadDate: '2023-05-25T09:15:00Z',
        url: 'https://example.com/files/project_gamma_timeline.xlsx',
      },
      {
        id: uuidv4(),
        fileName: 'project_gamma_timeline.xlsx',
        fileType: 'xlsx',
        fileSize: 512144,
        uploadDate: '2023-05-25T09:15:00Z',
        url: 'https://example.com/files/project_gamma_timeline.xlsx',
      },
    ],
    taskList: [
      {
        id: uuidv4(),
        status: 'Completed',
        assigned: [
          {
            id: uuidv4(),
            userName: 'Barton Mccullough',
            avatar: `https://robohash.org/${Math.random().toString(36).substring(7)}`,
          },
        ],
        dueDate: '2023-06-15T23:59:59Z',
      },
    ],
    description: 'Revolutionary project pushing boundaries in AI integration.',
    createdDate: '2023-06-01T08:00:00Z',
    dueDate: '2024-05-31T23:59:59Z',
    comments: [
      {
        id: uuidv4(),
        owner: {
          id: uuidv4(),
          userName: 'Lorie Baxter',
          avatar: `https://robohash.org/${Math.random().toString(36).substring(7)}`,
        },
        content: 'Exciting project! Looking forward to our first milestone.',
        createdDate: '2023-05-22T10:45:00Z',
      },
    ],
  },
  {
    id: uuidv4(),
    name: 'Project Epsilon',
    owner: {
      id: uuidv4(),
      userName: 'Marcus Holloway',
      avatar: `https://robohash.org/${Math.random().toString(36).substring(7)}`,
    },
    team: 'Team Pioneers',
    assigned: [
      {
        id: uuidv4(),
        userName: 'Barton Mccullough',
        avatar: `https://robohash.org/${Math.random().toString(36).substring(7)}`,
      },
      {
        id: uuidv4(),
        userName: 'Lorie Baxter',
        avatar: `https://robohash.org/${Math.random().toString(36).substring(7)}`,
      },
    ],
    column: 'Run',
    attachment: [
      {
        id: uuidv4(),
        fileName: 'project_gamma_timeline.xlsx',
        fileType: 'xlsx',
        fileSize: 512144,
        uploadDate: '2023-05-25T09:15:00Z',
        url: 'https://example.com/files/project_gamma_timeline.xlsx',
      },
      {
        id: uuidv4(),
        fileName: 'project_gamma_timeline.xlsx',
        fileType: 'xlsx',
        fileSize: 512144,
        uploadDate: '2023-05-25T09:15:00Z',
        url: 'https://example.com/files/project_gamma_timeline.xlsx',
      },
    ],
    taskList: [
      {
        id: uuidv4(),
        status: 'Completed',
        assigned: [
          {
            id: uuidv4(),
            userName: 'Barton Mccullough',
            avatar: `https://robohash.org/${Math.random().toString(36).substring(7)}`,
          },
        ],
        dueDate: '2023-06-15T23:59:59Z',
      },
    ],
    description: 'Groundbreaking project focused on sustainable technology solutions.',
    createdDate: '2023-06-15T09:30:00Z',
    dueDate: '2024-07-31T23:59:59Z',
    comments: [
      {
        id: uuidv4(),
        owner: {
          id: uuidv4(),
          userName: 'Lorie Baxter',
          avatar: `https://robohash.org/${Math.random().toString(36).substring(7)}`,
        },
        content: 'Exciting project! Looking forward to our first milestone.',
        createdDate: '2023-05-22T10:45:00Z',
      },
    ],
  },
]

export const PROJECT_COLUMNS: ProjectColumn[] = [
  {
    id: uuidv4(),
    title: 'Pending',
    projectIds: [PROJECT_DETAILS[0].id, PROJECT_DETAILS[1].id],
  },
  {
    id: uuidv4(),
    title: 'Run',
    projectIds: [PROJECT_DETAILS[2].id, PROJECT_DETAILS[3].id],
  },
  {
    id: uuidv4(),
    title: 'Completed',
    projectIds: [PROJECT_DETAILS[4].id],
  },
]
