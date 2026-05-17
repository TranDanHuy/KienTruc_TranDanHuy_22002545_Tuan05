# Bài 10: Lưu trữ dữ liệu với Docker Volumes

## Yêu cầu:
- Chạy MySQL và gắn volume để dữ liệu không bị mất

## Chạy bài tập:
```bash
docker-compose up -d
```

## Kiểm tra dữ liệu:
```bash
docker-compose exec mysql mysql -uuser -ppassword -Dmydb -e "SELECT * FROM users;"
```

## Dừng và restart (dữ liệu vẫn giữ lại):
```bash
docker-compose down
docker-compose up -d
```

## Xóa volume:
```bash
docker-compose down -v
```
