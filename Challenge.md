# To do list

เขียน Web App ด้วย React ประกอบด้วย 2 หน้าจอ

1. Home: Path = /
2. History: Path = /history

**หมายเหตุ** เมื่อเปลี่ยนหน้าจอข้อมูล To do list จะยังอยู่ตามเดิม
___

## Home

- สามารถเพิ่ม ลบข้อมูลใน To do list ได้
- สามารถค้นหา To do list จาก text ได้
- มีปุ่มเพื่อไปยังหน้า History

___

## History

แสดงประวัติการเพิ่ม ลบ To do

การแสดงผล

1. แสดงข้อมูลประวัติการเพิ่ม ลบ To do list
2. Order by DateTime DESC
3. แสดงในรูปแบบ `{DateTime} | {action} | {text}`

Action

1. มีปุ่ม Clear History
2. มีปุ่มเพื่อไปยังหน้า Home

ตัวอย่าง

```text
01/01/2020 16:07:20 | Add | Todo 1
01/01/2020 16:07:20 | Remove | Todo 2
```
