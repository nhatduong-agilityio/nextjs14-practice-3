# Next.js Practice 3 Plan

![Next.js Training Plan Overview](https://lh7-rt.googleusercontent.com/docsz/AD_4nXd1XW2rQN8FeKs6NfZ_Dh-bXsGY-uE1Qfdos-f7jmRjuSWdOZ0xWZet2GDuK3LvXxXd3em1JkmN3VyfrOWLm-mm8CZ9ZKuerJSRwVF8L9Ir8SM7xBsVbUo10PMS_lrx0xr5PO4nxbtAR9_KEXY2C8CphHI?key=ULzQfxtlUV4dL8_d7VlWDQ)
www.agilityio.com

NextJS Practice 3: Square Dashboard

22Th Aug 2024

## Overview

- This document is Next.js practice improvement plan focusing on the latest version of Next.js (14.2.3), followed by the NextJs training plan.
- Refer sign-in/signup page here: [Sign-In/Signup](<https://www.figma.com/design/CztKQPuwWBIe7D77cPVCgF/Square_Dashboard-UI-Kit---Desktop?node-id=0-1139&t=NVxJHSfOlMPDcYTQ-4>).
- Refer dashboard page here: [Square Dashboard](<https://www.figma.com/design/CztKQPuwWBIe7D77cPVCgF/Square_Dashboard-UI-Kit---Desktop?node-id=0-5315&t=NVxJHSfOlMPDcYTQ-4>).

## Timeline

- 15 working days

## Targets

- Master key features: routing, caching, streaming, and data fetching.
- Understand the operation and build a full-stack web app with Next.js.
- Understand hooks/directives/outstanding features:
  - Hook:
    - useSearchParams
    - usePathname
    - userRouter
    - useFormState
  - Directive:
    - 'use server'
    - 'use client'
  - Feature:
    - Function notFound and file not found
    - Revalidate the client cache
    - React server component
    - Server action

### Technical Stack

- Next [14.2.5]
- [Clerk](https://clerk.com/docs)
- React [^18]
- Node [v22.6.0]
- Pnpm [9.7.1]
- Typescript [^5]
- Storybook
- TailwindCss [^3.4.1]
- [shadcn/ui](https://ui.shadcn.com/)

## How to run

### Prerequisites

Make sure you install packages with correct version below:

- [node v18.18.2+](https://nodejs.org/en/download/package-manager)
- [pnpm 9.1.2+](https://pnpm.io/installation)

- **Note:**
  - Please add `.env` into root of project source code, refer `.env.sample`.
  - Refer: Please clone data from `./mock-api` and create it on [mockAPI](https://mockapi.io/projects) then use in your project.

Check and update config image hosting on `next.config.mjs` file follow [Next.js document](https://nextjs.org/docs/messages/next-image-unconfigured-host)

### Get source code

| Command                                                                       | Action                      |
| :---------------------------------------------------------------------------- | :-------------------------- |
| `$ git clone https://gitlab.asoft-python.com/nhat.duong/react-training.git`   | Clone Repository with HTTPS |
| `$ git clone git@gitlab.asoft-python.com:nhat.duong/react-training.git`       | Clone Repository with SSH   |
| `$ git checkout nextjs-practice-3`                                            | Checkout into "nextjs-practice-3" branch  |

### Build and Run app

| Command            | Action                                     | Port                  |
| :----------------- | :----------------------------------------- | :-------------------- |
| `$ pnpm install`   | Install packages dependencies              | N/A                   |
| `$ pnpm build`     | Build app with optimized production mode   | N/A                   |
| `$ pnpm start`     | Starts the application in production mode. | `http://localhost:3000` |
| `$ pnpm dev`       | Run the app in development mode            | `http://localhost:3000` |
| `$ pnpm storybook` | Run Storybook.                             | `http://localhost:6006` |
| `$ pnpm test`      | Run Unit Test                              | N/A                   |
| `$ pnpm coverage`  | Generate code coverage                     | N/A                   |

### Project structure

- GitHub: [alan2207/bulletproof-react/blob](https://github.com/alan2207/bulletproof-react/blob/master/docs/project-structure.md)

```shell
.
|
+-- app               # application layer containing:
|   |                 # this folder might differ based on the meta framework used
|   +-- routes        # application routes / can also be pages
|   +-- app.tsx       # main application component
|   +-- provider.tsx  # application provider that wraps the entire application with different global providers - this might also differ based on meta framework used
|   +-- router.tsx    # application router configuration
+-- assets            # assets folder can contain all the static files such as images, fonts, etc.
|
+-- components        # shared components used across the entire application
|
+-- config            # global configurations, exported env variables etc.
|
+-- features          # feature based modules
|
+-- hooks             # shared hooks used across the entire application
|
+-- lib               # reusable libraries preconfigured for the application
|
+-- stores            # global state stores
|
+-- test              # test utilities and mocks
|
+-- types             # shared types used across the application
|
+-- utils             # shared utility functions
```

### A feature could have the following structure

```shell
features/awesome-feature
|
+-- api         # exported API request declarations and api hooks related to a specific feature
|
+-- assets      # assets folder can contain all the static files for a specific feature
|
+-- components  # components scoped to a specific feature
|
+-- hooks       # hooks scoped to a specific feature
|
+-- stores      # state stores for a specific feature
|
+-- types       # typescript types used within the feature
|
+-- utils       # utility functions for a specific feature
```

## Maintainers

### Team size

- 1 Developer: [Nhat Duong Cong](mailto:nhat.duong@asnet.com.vn)

- GitLab: [@nhat.duong](https://gitlab.asoft-python.com/nhat.duong)

- Slack: nhat.duong

### Task Management

- [GitLab issue board](https://gitlab.asoft-python.com/nhat.duong/react-training/-/boards/918)
