# Node.js + TypeScript - Dakota Fabro 👾

This project features a Node.js + TS + Express API that:

- allows users to report an existing post as inappropriate for review by moderators
- allows moderators to review and submit flagged reports
- allows moderators to update the resolved status of a post
- automatically assigns a new post to the next available moderator after a report is resolved
- automatically assigns unresolved posts to available moderators

## 💪🏽 Challenges

TypeScript was my biggest hurdle while building the project because I had not worked with TypeScript in the past. Being that Javascript is the language I am most comfortable with, the learning curve was not too steep. I was able to pick up TS quickly as I was building the project and have grown to love it! I love TS now! I have experience with C++ and C# so having to work with types was not too challenging, but I do enjoy that TS is essentially a wonderful combo of JS and C++/C#!

## 🚧 If I Had More Time - Under Construction

- There are two routes that I would love to build (and probably will in the future just for my own learning and curiosity's sake...) that would allow a post that is resolved as inappropriate would be removed from the main "post" collection and moved into a "removed" collection. This would act like a sort of archive. I did not prioritize this functionality because I figured a post that is inappropriate could get deleted instead of archived to 1) save costs in terms of data usage and 2) save memory/computing time in terms of staying lightweight by deleting posts that would be otherwise hidden instead of holding on to them.

- Utilize Mongoose's static methods by adding methods that allow for more abstraction of db calls. I was able to use helper functions for these, but would like to learn how to implement them using Mongoose's static methods so I can use Mongoose to its fullest potential.

## 🛠 Tech Stack

💻 **Server:** Node, Express, TypeScript

To build the server, I chose Express mainly because I have primarily used Express and am very comfortable with it. Aside from being most familiar with Express, I chose it because it is lightweight, modular, follows a very logical flow for building API routes, and has great documentation.

🌿 **Database:** MongoDB

Because of the flexiblity needed in this project (specifically with auto assigning reports to available users, updating post documents, and updating moderator documents), I chose MongoDB. Aside from being curious about MongoDB and it being the most recent DB I've been learning, MongoDB allows for optimnal horizontal scaling, faster querying, and their documentation is well-organized and reliable making it easier to maintain and keep apps up-to-date if a quick pivot is needed.

✅ **Testing:** Jest

## 🚕 API Routes Reference

[API Route Reference Guide](./docs/API_ROUTES.md)

## 🫡 Instance Methods & Model Structure

[Guide - Instance Methods & Model Structure](./docs/MODEL_STRUCTURES.md)

## 📦 Deployed Project

[Node.js + TypeScript - Dakota Fabro](https://nodejs-lex-backend.onrender.com)

## 🔗 Links

[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://dakotafabro.dev/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/dakotafabro/)
