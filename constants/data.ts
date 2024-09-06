'use client'

import { v4 as uuidv4 } from 'uuid'
import { ProjectColumn, ProjectDetail } from '@/types/project'
import { TeamDetail } from '@/types/team'

export const TEAM_DETAIL = {
  id: 'b767c413-98b6-4698-98a2-edd5593d75a2',
  name: 'Burks Dillon',
  logo: 'https://robohash.org/b9dkk',
  users: [
    {
      id: '7afbbff9-4913-4787-9176-7609f9bd9ff0',
      userName: 'Kerri Landry',
      avatar: 'https://robohash.org/tje9za',
    },
    {
      id: 'c0edb2ca-4a17-4a49-8f98-2c3e4ae06d55',
      userName: 'Susanne Chavez',
      avatar: 'https://robohash.org/e0ztr',
    },
    {
      id: 'c0108f0a-41d2-44d2-a82f-87a547aa8dbc',
      userName: 'Kent Jordan',
      avatar: 'https://robohash.org/tsa31i',
    },
    {
      id: 'd9154bd9-8893-4c65-839c-e4430dcef65b',
      userName: 'Roseann Finch',
      avatar: 'https://robohash.org/lcotd9',
    },
    {
      id: '6a47a78f-1ce1-443c-9c1a-571a1f6d0f55',
      userName: 'Gibson Shaw',
      avatar: 'https://robohash.org/au5eg',
    },
    {
      id: 'c267400b-6e69-4864-b721-e2c8ea71c45a',
      userName: 'Vargas Bowen',
      avatar: 'https://robohash.org/00laxm',
    },
    {
      id: 'de20037d-f45e-4b86-8bd1-45013b73cf72',
      userName: 'Lorie Baxter',
      avatar: 'https://robohash.org/snoq9e',
    },
    {
      id: '1066f916-4cee-4ac1-b6d1-0678d9889d6a',
      userName: 'Lolita Parker',
      avatar: 'https://robohash.org/xn0buq',
    },
    {
      id: '0a59b75b-23dd-4f36-9ef1-c8b13d9fda29',
      userName: 'Melva Adkins',
      avatar: 'https://robohash.org/tp209o',
    },
    {
      id: '3295136e-2d9a-45b0-a6cc-1a11cc12e0de',
      userName: 'Esperanza Lyons',
      avatar: 'https://robohash.org/5gsxbf',
    },
    {
      id: 'f721b45b-0eb3-46e5-b28e-4270e8139f03',
      userName: 'Everett Oneill',
      avatar: 'https://robohash.org/7zqdfl',
    },
  ],
}

export const TEAM_DETAILS: TeamDetail[] = [
  {
    id: '2ae01f07-fc7d-4ce7-8bc7-b5eedbceaaba',
    name: 'Burks Dillon',
    logo: 'https://robohash.org/u4ob2h',
    users: [
      {
        id: '40113d86-a932-4aaf-b191-e13f01392707',
        userName: 'Kerri Landry',
        avatar: 'https://robohash.org/p88j3',
      },
      {
        id: '8dd9e612-ec99-4b94-b7c4-50deb580feab',
        userName: 'Susanne Chavez',
        avatar: 'https://robohash.org/tfkwjq',
      },
      {
        id: '6f753cb1-d9fa-404f-8c16-9de2284f00dc',
        userName: 'Kent Jordan',
        avatar: 'https://robohash.org/e2d9q',
      },
      {
        id: '991de46e-9945-4321-8e76-0e6dcc13cbfe',
        userName: 'Roseann Finch',
        avatar: 'https://robohash.org/h1sef',
      },
      {
        id: '250aee8e-80bf-40d9-a73c-738dfef5adbf',
        userName: 'Gibson Shaw',
        avatar: 'https://robohash.org/cq4trj',
      },
      {
        id: '8aaa4ed5-e3f5-4dcf-9408-473f6de26309',
        userName: 'Vargas Bowen',
        avatar: 'https://robohash.org/hjs54',
      },
      {
        id: '94ef14ba-e5cf-4885-add8-577b698defb4',
        userName: 'Lorie Baxter',
        avatar: 'https://robohash.org/385k5',
      },
      {
        id: '96efa8ca-4c4f-4b71-a720-2d074d7ee111',
        userName: 'Lolita Parker',
        avatar: 'https://robohash.org/vat7rt',
      },
      {
        id: '674085c7-5735-47ce-9918-e30433464cda',
        userName: 'Melva Adkins',
        avatar: 'https://robohash.org/ucl0x',
      },
      {
        id: 'd5e212ab-db96-47aa-b9ac-b5240779074a',
        userName: 'Esperanza Lyons',
        avatar: 'https://robohash.org/tipoxo',
      },
      {
        id: '80bfb6ef-0624-49ed-a956-5b51defb1f07',
        userName: 'Everett Oneill',
        avatar: 'https://robohash.org/thgh5',
      },
    ],
  },
  {
    id: '1e481952-80c4-42ba-bd4a-7605ecdf4911',
    name: 'Sampson Woodard',
    logo: 'https://robohash.org/zq1ar9',
    users: [
      {
        id: '3432488e-bf22-44b6-b2c0-de440a1f2a15',
        userName: 'Brooke Sweet',
        avatar: 'https://robohash.org/4zdd4e',
      },
      {
        id: '9dc7e1d3-48dd-41e3-bfb1-4cd8030dfb00',
        userName: 'Martin Gray',
        avatar: 'https://robohash.org/uclapa',
      },
      {
        id: '2955b48f-89ba-4723-a59a-3055e9da5c7b',
        userName: 'Barton Mccullough',
        avatar: 'https://robohash.org/hhvjm7',
      },
      {
        id: '91db089e-e1ff-4b87-a3f3-5f9578f91844',
        userName: 'Phelps George',
        avatar: 'https://robohash.org/i3g8pm',
      },
    ],
  },
]

export const PROJECT_DETAILS: ProjectDetail[] = [
  {
    id: '3a933dc4-bb32-4d12-a272-0af75661d0ca',
    name: 'Project Alpha',
    owner: {
      id: '5eac536d-40c0-4a4b-a097-fdb747cf4fc9',
      userName: 'Kerri Landry',
      avatar: 'https://robohash.org/bl5cso',
    },
    team: 'Team Innovators',
    assigned: [
      {
        id: '8b1d2bb2-bdd7-4773-98fb-395988d36bc0',
        userName: 'Susanne Chavez',
        avatar: 'https://robohash.org/jc5l7f',
      },
      {
        id: '696c1db0-3607-4958-bd87-1c75954315b6',
        userName: 'Kent Jordan',
        avatar: 'https://robohash.org/ayn41l',
      },
    ],
    column: 'Pending',
    attachment: [
      {
        id: '4a967249-fd35-450f-911d-32ef60e62676',
        fileName: 'project_alpha_plan.pdf',
        fileType: 'pdf',
        fileSize: 2048576,
        uploadDate: '2023-05-15T10:30:00Z',
        url: 'https://file-examples.com/storage/fef44df12666d835ba71c24/2017/10/file_example_JPG_100kB.jpg',
      },
    ],
    taskList: [
      {
        id: 'f109f2ed-cf93-431a-bb0f-c40d97d05e6f',
        title: 'Task title lorem',
        status: 'In Progress',
        assigned: [
          {
            id: 'b68d3ce8-a678-4723-8662-e762311736f6',
            userName: 'Vargas Bowen',
            avatar: 'https://robohash.org/0clltf',
          },
        ],
        dueDate: '2023-06-30T23:59:59Z',
      },
      {
        id: '5b541416-80ef-4d63-9e4c-49b4485bf828',
        title: 'Task title lorem',
        status: 'Completed',
        assigned: [
          {
            id: '885c409c-727c-453b-bdfd-356e02a66c92',
            userName: 'Vargas Bowen',
            avatar: 'https://robohash.org/vxae4',
          },
        ],
        dueDate: '2023-06-30T23:59:59Z',
      },
      {
        id: '6bc48954-3fda-4e4a-8106-b3b352ad523c',
        title: 'Task title lorem',
        status: 'Completed',
        assigned: [
          {
            id: '53f2cee6-a381-4d3d-8521-2717bd09dfe3',
            userName: 'Vargas Bowen',
            avatar: 'https://robohash.org/mxprh',
          },
        ],
        dueDate: '2023-06-30T23:59:59Z',
      },
      {
        id: '00434767-a57e-4c09-9b90-6f365b553fa0',
        title: 'Task title lorem',
        status: 'Completed',
        assigned: [
          {
            id: '4f86d6cd-ae2b-4f9a-99fd-b556fa07917e',
            userName: 'Vargas Bowen',
            avatar: 'https://robohash.org/ouzo',
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
        id: 'c9c8ab7f-4e8e-4453-812e-bbdd6aee9b2a',
        owner: {
          id: '97e9a157-60d9-444c-8e04-1cc68bfcedd7',
          userName: 'Esperanza Lyons',
          avatar: 'https://robohash.org/egra7n',
        },
        content: 'Great progress on the initial phase!',
        createdDate: '2023-05-10T14:30:00Z',
      },
    ],
  },
  {
    id: 'df3ff9e3-f6d0-47d6-86b7-2bf2d9ca645f',
    name: 'Project Beta',
    owner: {
      id: '6a78cf89-3678-4a0b-810d-5765a3525943',
      userName: 'Brooke Sweet',
      avatar: 'https://robohash.org/bowoq9',
    },
    team: 'Team Achievers',
    assigned: [
      {
        id: 'e3b2c29e-543c-4b86-9db1-c0efba31aa36',
        userName: 'Martin Gray',
        avatar: 'https://robohash.org/f1yanp',
      },
    ],
    column: 'Pending',
    attachment: [
      {
        id: 'cc205336-36c7-4e81-bd64-d4496d7fa738',
        fileName: 'project_beta_specs.docx',
        fileType: 'docx',
        fileSize: 1024288,
        uploadDate: '2023-05-20T14:45:00Z',
        url: 'https://file-examples.com/storage/fe8c7eef0c6364f6c9504cc/2017/02/file-sample_100kB.docx',
      },
    ],
    taskList: [
      {
        id: '1a8f1ebf-b6ac-468b-83f7-47e8679ac5b8',
        title: 'Task title lorem',
        status: 'Pending',
        assigned: [
          {
            id: 'e553eb5a-9fb7-439d-b7d2-4d9465932ee8',
            userName: 'Brooke Sweet',
            avatar: 'https://robohash.org/bnaipv',
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
        id: 'd4f27ea8-6e4f-4465-9147-2a5d60f25d8f',
        owner: {
          id: '1a575181-789f-48c9-ad95-93f92d8e7860',
          userName: 'Martin Gray',
          avatar: 'https://robohash.org/3xbtoh',
        },
        content: "Let's schedule a kick-off meeting soon.",
        createdDate: '2023-05-12T16:20:00Z',
      },
    ],
  },
  {
    id: 'c25b26a0-6428-48ae-bc93-2860e1b6f306',
    name: 'Project Gamma',
    owner: {
      id: '9e12eba5-42d1-4ed2-8ed2-f49040d0cd20',
      userName: 'Phelps George',
      avatar: 'https://robohash.org/cze2d',
    },
    team: 'Team Visionaries',
    assigned: [
      {
        id: '5ad767a2-10d7-4483-9890-b36dcc3846b1',
        userName: 'Barton Mccullough',
        avatar: 'https://robohash.org/d806e',
      },
      {
        id: 'ba6c754e-f4c8-47ea-a8d8-c07907206bc4',
        userName: 'Lorie Baxter',
        avatar: 'https://robohash.org/gwlui',
      },
    ],
    column: 'Run',
    attachment: [
      {
        id: '8fc26ac8-3b73-426d-81c6-38d861effe92',
        fileName: 'project_gamma_timeline.xlsx',
        fileType: 'xlsx',
        fileSize: 512144,
        uploadDate: '2023-05-25T09:15:00Z',
        url: 'https://file-examples.com/storage/fe8c7eef0c6364f6c9504cc/2017/02/file_example_XLSX_10.xlsx',
      },
      {
        id: '2be610e1-dd85-41f7-bb6a-fd38e14704c2',
        fileName: 'project_gamma_presentation.pptx',
        fileType: 'pptx',
        fileSize: 512144,
        uploadDate: '2023-05-25T09:15:00Z',
        url: 'https://file-examples.com/storage/fe8c7eef0c6364f6c9504cc/2017/08/file_example_PPT_250kB.ppt',
      },
    ],
    taskList: [
      {
        id: '46f61b48-c4f3-4038-919b-d704ad780d79',
        title: 'Task title lorem',
        status: 'Completed',
        assigned: [
          {
            id: '6370fcea-341e-4051-ba69-f8ba1f0c5b17',
            userName: 'Barton Mccullough',
            avatar: 'https://robohash.org/teps5',
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
        id: '2d8294af-965d-4445-9b94-923f34db1acc',
        owner: {
          id: '83225a8a-474b-4f3e-8625-93e8b0f097a1',
          userName: 'Lorie Baxter',
          avatar: 'https://robohash.org/g68h3w',
        },
        content: 'Exciting project! Looking forward to our first milestone.',
        createdDate: '2023-05-22T10:45:00Z',
      },
    ],
  },
  {
    id: 'cf4da989-7847-4332-af8e-b3ffc7917595',
    name: 'Project Delta',
    owner: {
      id: '2102a8d5-af59-4ebb-8703-936a9ebca3ee',
      userName: 'Alicia Rodgers',
      avatar: 'https://robohash.org/5yvag',
    },
    team: 'Team Visionaries',
    assigned: [
      {
        id: 'ada9fd6b-54d1-484d-8265-d5b189a73c3c',
        userName: 'Barton Mccullough',
        avatar: 'https://robohash.org/rzm52o',
      },
      {
        id: 'ab5fb27e-7896-41af-89ae-139b6fa9d664',
        userName: 'Lorie Baxter',
        avatar: 'https://robohash.org/j79wis',
      },
    ],
    column: 'Run',
    attachment: [
      {
        id: 'df0653b8-3c3c-4b9f-ac3e-3d5ed0f327ee',
        fileName: 'project_gamma_timeline.xlsx',
        fileType: 'xlsx',
        fileSize: 512144,
        uploadDate: '2023-05-25T09:15:00Z',
        url: 'https://example.com/files/project_gamma_timeline.xlsx',
      },
      {
        id: '4153e99c-fce4-42c0-9d3c-17dc738205f9',
        fileName: 'project_gamma_timeline.xlsx',
        fileType: 'xlsx',
        fileSize: 512144,
        uploadDate: '2023-05-25T09:15:00Z',
        url: 'https://example.com/files/project_gamma_timeline.xlsx',
      },
    ],
    taskList: [
      {
        id: '23d53455-70de-432e-bc50-925b6e453137',
        title: 'Task title lorem',
        status: 'Completed',
        assigned: [
          {
            id: 'ca08bee5-a30c-43ea-aa43-799def2ed4e4',
            userName: 'Barton Mccullough',
            avatar: 'https://robohash.org/lm8p4q',
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
        id: 'e040f7ab-5d55-4965-87a7-92451d2cbec2',
        owner: {
          id: 'de500266-7bd9-4c6a-bd40-f63e427f665c',
          userName: 'Lorie Baxter',
          avatar: 'https://robohash.org/4cfz5e',
        },
        content: 'Exciting project! Looking forward to our first milestone.',
        createdDate: '2023-05-22T10:45:00Z',
      },
    ],
  },
  {
    id: '3e77b626-61ab-45d1-bb0e-499ce1e7a6ca',
    name: 'Project Epsilon',
    owner: {
      id: '5a2beaec-7d25-4f00-8e4d-5d752d006c68',
      userName: 'Marcus Holloway',
      avatar: 'https://robohash.org/1q8d5k',
    },
    team: 'Team Pioneers',
    assigned: [
      {
        id: 'ef5a1d53-03cf-4ed4-a390-6fd12019f7e4',
        userName: 'Barton Mccullough',
        avatar: 'https://robohash.org/60xpbq',
      },
      {
        id: 'fc1b7ad9-166d-4e20-974d-1baf87b6c071',
        userName: 'Lorie Baxter',
        avatar: 'https://robohash.org/tkek7l',
      },
    ],
    column: 'Run',
    attachment: [
      {
        id: 'de0f45d1-5aff-4664-a4bb-933513147460',
        fileName: 'project_gamma_timeline.xlsx',
        fileType: 'xlsx',
        fileSize: 512144,
        uploadDate: '2023-05-25T09:15:00Z',
        url: 'https://example.com/files/project_gamma_timeline.xlsx',
      },
      {
        id: '564936cf-e764-4783-bfca-a6b3aab31e56',
        fileName: 'project_gamma_timeline.xlsx',
        fileType: 'xlsx',
        fileSize: 512144,
        uploadDate: '2023-05-25T09:15:00Z',
        url: 'https://example.com/files/project_gamma_timeline.xlsx',
      },
    ],
    taskList: [
      {
        id: 'ac1d7055-64a8-4168-8e80-c9ca88908387',
        title: 'Task title lorem',
        status: 'Completed',
        assigned: [
          {
            id: 'd07924c6-053b-49c8-bd9e-02bfd60ee18a',
            userName: 'Barton Mccullough',
            avatar: 'https://robohash.org/jp57wv',
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
        id: '66837f29-604c-495a-9387-d9492526fe89',
        owner: {
          id: '251c7668-f23c-4f69-b193-84b070612642',
          userName: 'Lorie Baxter',
          avatar: 'https://robohash.org/0crvtj',
        },
        content: 'Exciting project! Looking forward to our first milestone.',
        createdDate: '2023-05-22T10:45:00Z',
      },
    ],
  },
]

export const PROJECT_COLUMNS: ProjectColumn[] = [
  {
    id: '4fe298fd-d503-489e-92ba-dc13583d4527',
    title: 'Pending',
    projectIds: ['3a933dc4-bb32-4d12-a272-0af75661d0ca', 'df3ff9e3-f6d0-47d6-86b7-2bf2d9ca645f'],
  },
  {
    id: '5b453d4d-c5ec-4f09-8d14-ce6cb6609df8',
    title: 'Run',
    projectIds: ['c25b26a0-6428-48ae-bc93-2860e1b6f306', 'cf4da989-7847-4332-af8e-b3ffc7917595'],
  },
  {
    id: '31bfddd5-7144-4935-840f-ad9093089ae1',
    title: 'Completed',
    projectIds: ['3e77b626-61ab-45d1-bb0e-499ce1e7a6ca'],
  },
]
