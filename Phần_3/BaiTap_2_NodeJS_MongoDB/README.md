# Bài Tập 2: Ứng dụng Node.js + MongoDB

## Mục tiêu
Triển khai ứng dụng Node.js (lưu dữ liệu vào MongoDB) và MongoDB với volume.

## Yêu cầu
1. Viết Dockerfile cho ứng dụng Node.js (REST API đơn giản)
2. Sử dụng image mongo:latest (port 27017)
3. Volume cho MongoDB (/data/db)
4. Đảm bảo Node.js service khởi động sau MongoDB (depends_on + healthcheck)

## Chạy bài tập:
```bash
docker-compose up -d
```

## Truy cập API:
- GET http://localhost:3000/api/items
- POST http://localhost:3000/api/items

## Health check:
```bash
curl http://localhost:3000/health
```

## Dừng:
```bash
docker-compose down -v
```
