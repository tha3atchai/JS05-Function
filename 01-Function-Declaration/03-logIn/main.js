// - ให้สร้างฟังก์ชัน login ที่มีพารามิเตอร์ 2 ตัว คือ username และ password
// - ถ้า username = “admin” และ password = “P@ssw0rd” แสดงว่า login สำเร็จ แต่ถ้าไม่ใช่แสดงว่าไม่สำเร็จ

function login(username, password) {
    username === "admin" && password === "P@ssw0rd" ? console.log("ล็อกอินสำเร็จ") :
    console.log("ล็อกอินไม่สำเร็จ");
};

login("admin", "P@ssw0rd");