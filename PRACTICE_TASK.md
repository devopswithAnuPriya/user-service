# HeroVired Practice Assignment: Containerize a Node.js Microservices Application

**Total marks: 50 | Suggested time: 60 minutes**

## Scenario

You are working as a DevOps Engineer for a small online store. The development team has provided three Node.js services:

- User Service — port 3000
- Product Service — port 3001
- Gateway Service — port 3003

Your job is to containerize the services and run them together using Docker Compose.

## Your work

1. Inspect each service's `package.json` and `server.js`.
2. Create one Dockerfile inside each service directory.
3. Use a suitable Node.js base image, set `WORKDIR`, copy dependency files, install dependencies, copy source code, expose the correct port, and define `CMD`.
4. Create `docker-compose.yml` in the project root.
5. Define all three services, publish ports 3000, 3001 and 3003, and attach them to one shared network.
6. Configure Gateway-to-service URLs using Docker Compose service names:
   - `http://user-service:3000`
   - `http://product-service:3001`
7. Build and start the application with `docker compose up --build`.
8. Test each service and the Gateway endpoints.
9. Write `README.md`, capture screenshots, and create a ZIP named `submission.zip`.

## Expected endpoints

| URL | Expected result |
|---|---|
| `http://localhost:3000/health` | User Service is UP |
| `http://localhost:3000/users` | Returns two users |
| `http://localhost:3001/health` | Product Service is UP |
| `http://localhost:3001/products` | Returns three products |
| `http://localhost:3003/health` | Gateway Service is UP |
| `http://localhost:3003/users` | Gateway returns User Service data |
| `http://localhost:3003/products` | Gateway returns Product Service data |

## Marking guide

- Dockerfiles: 15 marks (5 per service)
- Docker Compose: 15 marks
- Local testing and validation: 10 marks
- README and screenshots: 10 marks

## Submission structure

```text
submission/
├── user-service/
│   ├── server.js
│   ├── package.json
│   └── Dockerfile
├── product-service/
│   ├── server.js
│   ├── package.json
│   └── Dockerfile
├── gateway-service/
│   ├── server.js
│   ├── package.json
│   └── Dockerfile
├── docker-compose.yml
└── README.md
```

The `submission/` folder should contain the application source code as well as your Dockerfiles, Compose file and README. Include genuine screenshots of your own successful Docker run in the README or a screenshots folder.

## Important learning points

- `EXPOSE` documents the container port; Compose `ports` publishes it to your host.
- Containers on the same Compose network resolve one another by service name.
- Inside the Gateway container, `localhost` means the Gateway container itself, not the User or Product container.
- Node.js 20 or newer is recommended because the Gateway uses the built-in `fetch()` API.

## Useful commands

```bash
docker compose config
docker compose up --build
docker compose ps
docker compose logs
docker compose down
```
