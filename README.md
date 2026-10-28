# Incident Reporting and Disaster Management Platform

A local-first frontend prototype for reporting incidents and tracking response status. This is Phase 1 of a college cloud computing project.

## Features

- Demo citizen and admin login with role-protected routes
- Citizen incident reporting, image preview, report history and details
- Admin overview, filters, search, incident details and status updates
- Six sample incidents, responsive layouts and localStorage persistence

## Stack

React, Vite, JavaScript, React Router, Tailwind CSS, Lucide React and browser localStorage.

## Setup and run

Requires Node.js 20.19+ or 22.12+.

```bash
npm install
npm run dev
```

Open the URL printed by Vite. To check the production build, run `npm run build`.

## Demo credentials

| Role | Email | Password |
| --- | --- | --- |
| Citizen | citizen@test.com | citizen123 |
| Admin | admin@test.com | admin123 |

## Current limitations

Authentication is simulated and is not secure. Data is stored only in the current browser, is not shared across devices, and can be cleared by the user. Images are previewed during form entry but are not saved. Coordinates are entered manually; there is no map, server, database, or real emergency dispatch. Seed data is created only when the incident storage key is absent.

## Future AWS integration plan

A later phase can use Cognito for authentication, API Gateway for APIs, Lambda for backend logic, DynamoDB for incident storage, S3 for image storage, SQS for asynchronous processing, SNS for notifications, and CloudWatch for monitoring. None of these services are integrated in this prototype.
