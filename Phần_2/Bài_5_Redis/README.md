# Bài 5: Chạy Redis với Docker Compose

## Yêu cầu:
- Chạy một container Redis trên cổng 6379

## Chạy bài tập:
```bash
docker-compose up -d
```

## Kiểm tra:
```bash
docker-compose exec redis redis-cli
```

## Dừng:
```bash
docker-compose down -v
```
