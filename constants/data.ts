'use client'

import { v4 as uuidv4 } from 'uuid'
import { ProjectColumn, ProjectDetail } from '@/types/project'
import { TeamDetail } from '@/types/team'

export const TEAM_DETAIL = {
  id: '2ae01f07-fc7d-4ce7-8bc7-b5eedbceaaba',
  name: 'Burks Dillon',
  logo: 'https://i.pravatar.cc/150?u=2ae01f07-fc7d-4ce7-8bc7-b5eedbceaaba',
  users: [
    {
      id: '40113d86-a932-4aaf-b191-e13f01392707',
      userName: 'Kerri Landry',
      avatar: 'https://i.pravatar.cc/150?u=40113d86-a932-4aaf-b191-e13f01392707',
    },
    {
      id: '8dd9e612-ec99-4b94-b7c4-50deb580feab',
      userName: 'Susanne Chavez',
      avatar: 'https://i.pravatar.cc/150?u=8dd9e612-ec99-4b94-b7c4-50deb580feab',
    },
    {
      id: '6f753cb1-d9fa-404f-8c16-9de2284f00dc',
      userName: 'Kent Jordan',
      avatar: 'https://i.pravatar.cc/150?u=6f753cb1-d9fa-404f-8c16-9de2284f00dc',
    },
    {
      id: '991de46e-9945-4321-8e76-0e6dcc13cbfe',
      userName: 'Roseann Finch',
      avatar: 'https://i.pravatar.cc/150?u=991de46e-9945-4321-8e76-0e6dcc13cbfe',
    },
    {
      id: '250aee8e-80bf-40d9-a73c-738dfef5adbf',
      userName: 'Gibson Shaw',
      avatar: 'https://i.pravatar.cc/150?u=250aee8e-80bf-40d9-a73c-738dfef5adbf',
    },
    {
      id: '8aaa4ed5-e3f5-4dcf-9408-473f6de26309',
      userName: 'Vargas Bowen',
      avatar: 'https://i.pravatar.cc/150?u=8aaa4ed5-e3f5-4dcf-9408-473f6de26309',
    },
    {
      id: '94ef14ba-e5cf-4885-add8-577b698defb4',
      userName: 'Lorie Baxter',
      avatar: 'https://i.pravatar.cc/150?u=94ef14ba-e5cf-4885-add8-577b698defb4',
    },
    {
      id: '96efa8ca-4c4f-4b71-a720-2d074d7ee111',
      userName: 'Lolita Parker',
      avatar: 'https://i.pravatar.cc/150?u=96efa8ca-4c4f-4b71-a720-2d074d7ee111',
    },
    {
      id: '674085c7-5735-47ce-9918-e30433464cda',
      userName: 'Melva Adkins',
      avatar: 'https://i.pravatar.cc/150?u=674085c7-5735-47ce-9918-e30433464cda',
    },
    {
      id: 'd5e212ab-db96-47aa-b9ac-b5240779074a',
      userName: 'Esperanza Lyons',
      avatar: 'https://i.pravatar.cc/150?u=d5e212ab-db96-47aa-b9ac-b5240779074a',
    },
    {
      id: '80bfb6ef-0624-49ed-a956-5b51defb1f07',
      userName: 'Everett Oneill',
      avatar: 'https://i.pravatar.cc/150?u=80bfb6ef-0624-49ed-a956-5b51defb1f07',
    },
  ],
}

export const TEAM_DETAILS: TeamDetail[] = [
  {
    id: '2ae01f07-fc7d-4ce7-8bc7-b5eedbceaaba',
    name: 'Burks Dillon',
    logo: 'https://i.pravatar.cc/150?u=2ae01f07-fc7d-4ce7-8bc7-b5eedbceaaba',
    users: [
      {
        id: '40113d86-a932-4aaf-b191-e13f01392707',
        userName: 'Kerri Landry',
        avatar: 'https://i.pravatar.cc/150?u=40113d86-a932-4aaf-b191-e13f01392707',
      },
      {
        id: '8dd9e612-ec99-4b94-b7c4-50deb580feab',
        userName: 'Susanne Chavez',
        avatar: 'https://i.pravatar.cc/150?u=8dd9e612-ec99-4b94-b7c4-50deb580feab',
      },
      {
        id: '6f753cb1-d9fa-404f-8c16-9de2284f00dc',
        userName: 'Kent Jordan',
        avatar: 'https://i.pravatar.cc/150?u=6f753cb1-d9fa-404f-8c16-9de2284f00dc',
      },
      {
        id: '991de46e-9945-4321-8e76-0e6dcc13cbfe',
        userName: 'Roseann Finch',
        avatar: 'https://i.pravatar.cc/150?u=991de46e-9945-4321-8e76-0e6dcc13cbfe',
      },
      {
        id: '250aee8e-80bf-40d9-a73c-738dfef5adbf',
        userName: 'Gibson Shaw',
        avatar: 'https://i.pravatar.cc/150?u=250aee8e-80bf-40d9-a73c-738dfef5adbf',
      },
      {
        id: '8aaa4ed5-e3f5-4dcf-9408-473f6de26309',
        userName: 'Vargas Bowen',
        avatar: 'https://i.pravatar.cc/150?u=8aaa4ed5-e3f5-4dcf-9408-473f6de26309',
      },
      {
        id: '94ef14ba-e5cf-4885-add8-577b698defb4',
        userName: 'Lorie Baxter',
        avatar: 'https://i.pravatar.cc/150?u=94ef14ba-e5cf-4885-add8-577b698defb4',
      },
      {
        id: '96efa8ca-4c4f-4b71-a720-2d074d7ee111',
        userName: 'Lolita Parker',
        avatar: 'https://i.pravatar.cc/150?u=96efa8ca-4c4f-4b71-a720-2d074d7ee111',
      },
      {
        id: '674085c7-5735-47ce-9918-e30433464cda',
        userName: 'Melva Adkins',
        avatar: 'https://i.pravatar.cc/150?u=674085c7-5735-47ce-9918-e30433464cda',
      },
      {
        id: 'd5e212ab-db96-47aa-b9ac-b5240779074a',
        userName: 'Esperanza Lyons',
        avatar: 'https://i.pravatar.cc/150?u=d5e212ab-db96-47aa-b9ac-b5240779074a',
      },
      {
        id: '80bfb6ef-0624-49ed-a956-5b51defb1f07',
        userName: 'Everett Oneill',
        avatar: 'https://i.pravatar.cc/150?u=80bfb6ef-0624-49ed-a956-5b51defb1f07',
      },
    ],
  },
  {
    id: '1e481952-80c4-42ba-bd4a-7605ecdf4911',
    name: 'Sampson Woodard',
    logo: 'https://i.pravatar.cc/150?u=1e481952-80c4-42ba-bd4a-7605ecdf4911',
    users: [
      {
        id: '3432488e-bf22-44b6-b2c0-de440a1f2a15',
        userName: 'Brooke Sweet',
        avatar: 'https://i.pravatar.cc/150?u=3432488e-bf22-44b6-b2c0-de440a1f2a15',
      },
      {
        id: '9dc7e1d3-48dd-41e3-bfb1-4cd8030dfb00',
        userName: 'Martin Gray',
        avatar: 'https://i.pravatar.cc/150?u=9dc7e1d3-48dd-41e3-bfb1-4cd8030dfb00',
      },
      {
        id: '2955b48f-89ba-4723-a59a-3055e9da5c7b',
        userName: 'Barton Mccullough',
        avatar: 'https://i.pravatar.cc/150?u=2955b48f-89ba-4723-a59a-3055e9da5c7b',
      },
      {
        id: '91db089e-e1ff-4b87-a3f3-5f9578f91844',
        userName: 'Phelps George',
        avatar: 'https://i.pravatar.cc/150?u=91db089e-e1ff-4b87-a3f3-5f9578f91844',
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
      avatar: 'https://i.pravatar.cc/150?u=5eac536d-40c0-4a4b-a097-fdb747cf4fc9',
    },
    team: 'Team Innovators',
    assigned: [
      {
        id: '8b1d2bb2-bdd7-4773-98fb-395988d36bc0',
        userName: 'Susanne Chavez',
        avatar: 'https://i.pravatar.cc/150?u=8b1d2bb2-bdd7-4773-98fb-395988d36bc0',
      },
      {
        id: '696c1db0-3607-4958-bd87-1c75954315b6',
        userName: 'Kent Jordan',
        avatar: 'https://i.pravatar.cc/150?u=696c1db0-3607-4958-bd87-1c75954315b6',
      },
    ],
    attachment: [
      {
        id: '4a967249-fd35-450f-911d-32ef60e62676',
        fileName: 'project_alpha_plan.pdf',
        fileType: 'pdf',
        fileSize: 2048576,
        uploadDate: '2023-05-15T10:30:00Z',
        url: 'https://cdn-icons-png.flaticon.com/512/337/337946.png',
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
            avatar: 'https://i.pravatar.cc/150?u=b68d3ce8-a678-4723-8662-e762311736f6',
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
            avatar: 'https://i.pravatar.cc/150?u=885c409c-727c-453b-bdfd-356e02a66c92',
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
            avatar: 'https://i.pravatar.cc/150?u=53f2cee6-a381-4d3d-8521-2717bd09dfe3',
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
            avatar: 'https://i.pravatar.cc/150?u=4f86d6cd-ae2b-4f9a-99fd-b556fa07917e',
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
          avatar: 'https://i.pravatar.cc/150?u=97e9a157-60d9-444c-8e04-1cc68bfcedd7',
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
      avatar: 'https://i.pravatar.cc/150?u=6a78cf89-3678-4a0b-810d-5765a3525943',
    },
    team: 'Team Achievers',
    assigned: [
      {
        id: 'e3b2c29e-543c-4b86-9db1-c0efba31aa36',
        userName: 'Martin Gray',
        avatar: 'https://i.pravatar.cc/150?u=e3b2c29e-543c-4b86-9db1-c0efba31aa36',
      },
    ],
    attachment: [
      {
        id: 'cc205336-36c7-4e81-bd64-d4496d7fa738',
        fileName: 'project_beta_specs.docx',
        fileType: 'docx',
        fileSize: 1024288,
        uploadDate: '2023-05-20T14:45:00Z',
        url: 'https://cdn-icons-png.flaticon.com/5968/5968517.png',
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
            avatar: 'https://i.pravatar.cc/150?u=e553eb5a-9fb7-439d-b7d2-4d9465932ee8',
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
          avatar: 'https://i.pravatar.cc/150?u=1a575181-789f-48c9-ad95-93f92d8e7860',
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
      avatar: 'https://i.pravatar.cc/150?u=9e12eba5-42d1-4ed2-8ed2-f49040d0cd20',
    },
    team: 'Team Visionaries',
    assigned: [
      {
        id: '5ad767a2-10d7-4483-9890-b36dcc3846b1',
        userName: 'Barton Mccullough',
        avatar: 'https://i.pravatar.cc/150?u=5ad767a2-10d7-4483-9890-b36dcc3846b1',
      },
      {
        id: 'ba6c754e-f4c8-47ea-a8d8-c07907206bc4',
        userName: 'Lorie Baxter',
        avatar: 'https://i.pravatar.cc/150?u=ba6c754e-f4c8-47ea-a8d8-c07907206bc4',
      },
    ],
    attachment: [
      {
        id: '8fc26ac8-3b73-426d-81c6-38d861effe92',
        fileName: 'project_gamma_timeline.xlsx',
        fileType: 'xlsx',
        fileSize: 512144,
        uploadDate: '2023-05-25T09:15:00Z',
        url: 'https://cdn-icons-png.flaticon.com/512/888/888850.png',
      },
      {
        id: '2be610e1-dd85-41f7-bb6a-fd38e14704c2',
        fileName: 'project_gamma_presentation.pptx',
        fileType: 'pptx',
        fileSize: 512144,
        uploadDate: '2023-05-25T09:15:00Z',
        url: 'https://cdn-icons-png.flaticon.com/512/888/888874.png',
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
            avatar: 'https://i.pravatar.cc/150?u=6370fcea-341e-4051-ba69-f8ba1f0c5b17',
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
          avatar: 'https://i.pravatar.cc/150?u=83225a8a-474b-4f3e-8625-93e8b0f097a1',
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
      avatar: 'https://i.pravatar.cc/150?u=2102a8d5-af59-4ebb-8703-936a9ebca3ee',
    },
    team: 'Team Visionaries',
    assigned: [
      {
        id: 'ada9fd6b-54d1-484d-8265-d5b189a73c3c',
        userName: 'Barton Mccullough',
        avatar: 'https://i.pravatar.cc/150?u=ada9fd6b-54d1-484d-8265-d5b189a73c3c',
      },
      {
        id: 'ab5fb27e-7896-41af-89ae-139b6fa9d664',
        userName: 'Lorie Baxter',
        avatar: 'https://i.pravatar.cc/150?u=ab5fb27e-7896-41af-89ae-139b6fa9d664',
      },
    ],
    attachment: [
      {
        id: 'df0653b8-3c3c-4b9f-ac3e-3d5ed0f327ee',
        fileName: 'project_gamma_timeline.xlsx',
        fileType: 'xlsx',
        fileSize: 512144,
        uploadDate: '2023-05-25T09:15:00Z',
        url: 'https://cdn-icons-png.flaticon.com/888/888850.png',
      },
      {
        id: '4153e99c-fce4-42c0-9d3c-17dc738205f9',
        fileName: 'project_gamma_timeline.xlsx',
        fileType: 'xlsx',
        fileSize: 512144,
        uploadDate: '2023-05-25T09:15:00Z',
        url: 'https://cdn-icons-png.flaticon.com/888/888850.png',
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
            avatar: 'https://i.pravatar.cc/150?u=ca08bee5-a30c-43ea-aa43-799def2ed4e4',
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
          avatar: 'https://i.pravatar.cc/150?u=de500266-7bd9-4c6a-bd40-f63e427f665c',
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
      avatar: 'https://i.pravatar.cc/150?u=5a2beaec-7d25-4f00-8e4d-5d752d006c68',
    },
    team: 'Team Pioneers',
    assigned: [
      {
        id: 'ef5a1d53-03cf-4ed4-a390-6fd12019f7e4',
        userName: 'Barton Mccullough',
        avatar: 'https://i.pravatar.cc/150?u=ef5a1d53-03cf-4ed4-a390-6fd12019f7e4',
      },
      {
        id: 'fc1b7ad9-166d-4e20-974d-1baf87b6c071',
        userName: 'Lorie Baxter',
        avatar: 'https://i.pravatar.cc/150?u=fc1b7ad9-166d-4e20-974d-1baf87b6c071',
      },
    ],
    attachment: [
      {
        id: 'de0f45d1-5aff-4664-a4bb-933513147460',
        fileName: 'project_gamma_timeline.xlsx',
        fileType: 'xlsx',
        fileSize: 512144,
        uploadDate: '2023-05-25T09:15:00Z',
        url: 'https://cdn-icons-png.flaticon.com/888/888850.png',
      },
      {
        id: '564936cf-e764-4783-bfca-a6b3aab31e56',
        fileName: 'project_gamma_timeline.xlsx',
        fileType: 'xlsx',
        fileSize: 512144,
        uploadDate: '2023-05-25T09:15:00Z',
        url: 'https://cdn-icons-png.flaticon.com/888/888850.png',
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
            avatar: 'https://i.pravatar.cc/150?u=d07924c6-053b-49c8-bd9e-02bfd60ee18a',
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
          avatar: 'https://i.pravatar.cc/150?u=251c7668-f23c-4f69-b193-84b070612642',
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
    index: 0,
    projects: [
      { projectId: '3a933dc4-bb32-4d12-a272-0af75661d0ca', index: 0 },
      { projectId: 'df3ff9e3-f6d0-47d6-86b7-2bf2d9ca645f', index: 1 },
    ],
  },
  {
    id: '5b453d4d-c5ec-4f09-8d14-ce6cb6609df8',
    title: 'Run',
    index: 1,
    projects: [
      { projectId: 'c25b26a0-6428-48ae-bc93-2860e1b6f306', index: 0 },
      { projectId: 'cf4da989-7847-4332-af8e-b3ffc7917595', index: 1 },
    ],
  },
  {
    id: '31bfddd5-7144-4935-840f-ad9093089ae1',
    title: 'Completed',
    index: 2,
    projects: [{ projectId: '3e77b626-61ab-45d1-bb0e-499ce1e7a6ca', index: 0 }],
  },
]
