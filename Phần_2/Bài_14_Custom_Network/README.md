# Bài 14: Cấu hình mạng riêng giữa các container

## Yêu cầu:
- Chạy 2 container có thể giao tiếp với nhau trong một mạng riêng

## Chạy bài tập:
```bash
docker-compose up -d
```

## Kiểm tra giao tiếp:
```bash
docker-compose exec app1 ping app2
docker-compose exec app2 ping app1
```

## Dừng:
```bash
docker-compose down
```
