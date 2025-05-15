# Summit Auto Glass 
Software/ Web Application 


# Copyright (c) 2025 Jaden Hampton, Summit Auto Glass, LLC

COPYRIGHT STATEMENT AND TERMS OF USAGE

This repository and its associated code are only to be shared with those with explicit permission from the maintainer/creator of this repository, or an employee/employer at Summit Auto Glass, LLC. By accessing this GitHub repository and anything committed to it herein, you must comply with the above statement. Breaking this is a violation of company policy and the terms and conditions set by the creator of this codebase.


-----------------------------------------------------

# DOCUMENTATION

---> *Frontend* <---

Part of the frontend stack is deployed via Amazon Web Services. That's accomplished using Route 53 for domain reg. and parking, Amplify for deployment, and CloudFront for content delivery. This is CI/CD'd in tandem with this GitHub repository and a React.js framework for the customer-facing website, as well as an internal employee software dashboard.

---> *Backend* <---

For backend goodies, MongoDB was the NoSQL choice to handle the database with JVM Spring Boot to bridge the gap between the back and frontend. Overall, a very classic tech stack that is straightforward to implement and scale. Refactoring may become an issue, but as SuperFastMatt puts it, "Certified Good Enough" 😉.

-----------------------------------------------------


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



