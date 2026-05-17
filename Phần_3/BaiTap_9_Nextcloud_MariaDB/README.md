# Bài Tập 9: Nextcloud với MariaDB + Redis Caching

## Mục tiêu
Triển khai Nextcloud (self-hosted cloud) với MariaDB và Redis.

## Yêu cầu
1. Nextcloud (port 80)
2. MariaDB (volume cho dữ liệu)
3. Redis cache

## Chạy bài tập:
```bash
docker-compose up -d
```

## Truy cập:
- Nextcloud: http://localhost:80

## Dừng:
```bash
docker-compose down -v
```

## Ghi chú:
Nextcloud sẽ hỏi username, password cho admin account khi truy cập lần đầu.
