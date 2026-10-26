# Frontend and backend integration

The runnable Next.js app is in `frontend/`; its App Router pages and shared components are under `frontend/src/`.

## Environment

Copy `.env.example` to `.env.local` for local development. `API_BASE_URL` is read by server-side route handlers and catalog loaders. Leave `CATALOG_DATA_SOURCE=sample` while the public catalog controllers are not available.

## Connected endpoints

| Frontend flow | Backend contract | Current status |
| --- | --- | --- |
| Log in | `POST /api/auth/login` → Spring `POST /api/auth/login` | Connected through an HTTP-only cookie bridge |
| Register | `POST /api/auth/register` → Spring `POST /api/auth/register` | Connected through an HTTP-only cookie bridge |
| Log out | `POST /api/auth/logout` | Clears the frontend auth cookies |
| Career catalog | `GET /api/careers/public` | Placeholder contract; no public career controller exists yet |
| University catalog | `GET /api/universities/public` | Placeholder contract; no public university controller exists yet |
| Course catalog | `GET /api/courses/public` | Placeholder contract; no public course controller exists yet |
| Contact form | `POST /api/contact` → Spring `POST /api/contact` | Connected; messages are stored in `contact_messages` |
| Profile | `PATCH /api/account` → `PATCH /api/users/me` | Connected |
| Change password | `POST /api/account/password` → `POST /api/users/me/password` | Connected; revokes all sessions |

Catalog endpoints are selected by setting `CATALOG_DATA_SOURCE=api`. Requests fail visibly if an endpoint is unavailable or returns an invalid shape; they do not silently replace failed API responses with sample data. 

Saved careers, universities and roadmaps currently use browser storage. A future signed-in experience can replace that adapter with user-scoped save and roadmap endpoints without changing the page components.
