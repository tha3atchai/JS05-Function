
let x = 1;
function func() {
  console.log(x); // * ระเบิดเพราะ สร้างตัวแปลหลังเรียกใข้
  let x = 2;
}
func();
