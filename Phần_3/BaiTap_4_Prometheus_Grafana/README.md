# Bài Tập 4: Prometheus + Grafana Monitoring

## Mục tiêu
Giám sát Docker containers dùng Prometheus và Grafana.

## Yêu cầu
1. Service Prometheus (port 9090) với file cấu hình thu thập metrics từ Docker
2. Service Grafana (port 3000) kết nối đến Prometheus
3. Volume để lưu dữ liệu Prometheus và Grafana

## Chạy bài tập:
```bash
docker-compose up -d
```

## Truy cập:
- Prometheus: http://localhost:9090
- Grafana: http://localhost:3000
- Grafana login: admin / admin

## Dừng:
```bash
docker-compose down -v
```
