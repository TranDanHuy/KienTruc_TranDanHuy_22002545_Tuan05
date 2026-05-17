# Bài Tập 7: Elasticsearch + Kibana

## Mục tiêu
Triển khai ELK stack đơn giản.

## Yêu cầu
1. Service Elasticsearch (port 9200) với volume
2. Service Kibana (port 5601) kết nối với Elasticsearch
3. Thiết lập environment variables cho credentials

## Chạy bài tập:
```bash
docker-compose up -d
```

## Truy cập:
- Kibana: http://localhost:5601

## Dừng:
```bash
docker-compose down -v
```
