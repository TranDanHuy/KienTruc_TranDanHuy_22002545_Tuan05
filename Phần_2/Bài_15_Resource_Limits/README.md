# Bài 15: Giới hạn tài nguyên cho container

## Yêu cầu:
- Giới hạn CPU và RAM cho một container Redis

## Cấu hình:
- CPU limit: 0.5 (50% của 1 core)
- Memory limit: 512MB
- CPU reservation: 0.25
- Memory reservation: 256MB

## Chạy bài tập:
```bash
docker-compose up -d
```

## Kiểm tra tài nguyên:
```bash
docker stats redis_limited
```

## Dừng:
```bash
docker-compose down
```
