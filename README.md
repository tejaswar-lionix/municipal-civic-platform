# Municipal Civic-Issue Tracking + Resolution Platform

311-style civic platform: report pothole/streetlight/garbage/water with geo + media → auto-route by ward → department assignment → SLA-tracked resolution → citizen feedback.

## Architecture
- **Backend:** Django 4.2 + DRF + Celery + Redis, PostgreSQL (sqlite fallback)
- **Frontend:** React 18 + Vite + Leaflet (maps) + Chart.js
- **15 Apps:** issues, departments, assignments, resolution, citizens, geospatial, media, notifications, analytics, feedback, escalation, integrations, compliance, api, frontend

## Install
```bash
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
npm install
```

## Build
```bash
make build
docker build -t civic-platform .
npm run build
```

## Run
```bash
python manage.py migrate --run-syncdb
python manage.py runserver 0.0.0.0:8000
npm run dev
docker-compose up
```

## Tests
```bash
pytest -q
pytest --cov=apps --cov-report=xml
npm test
```

## Features
- **Issues** geo-tagged (lat/lon + ward auto-detect), categories `pothole/streetlight/garbage/water/drainage`, priority `low..critical`
- **Auto-routing** by ward/zone → department (`sanitation` for garbage, `roads` for pothole), workload balancing
- **SLA** `pothole 48h, streetlight 24h, garbage 12h` → auto-escalate to commissioner if breach
- **Geospatial** ward/zone clustering, heatmap, Leaflet
- **Media** photo/video evidence, compression
- **Notifications** SMS/email/push/IVR on status change
- **Analytics** KPIs, trend, SLA breach %, satisfaction
- **Integrations** 311, Twitter, IoT ward sensors

## License
Proprietary — All rights reserved (Civic Labs).
