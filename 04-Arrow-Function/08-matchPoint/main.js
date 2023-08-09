// ให้เขียนฟังก์ชันคำนวณแต้มฟุตบอล โดยชนะได้ 3 คะแนน เสมอได้ 1 คะแนน และแพ้ไม่ได้คะแนน

const matchPoint = (win=0, draw=0, lose=0) => console.log(3*win + 1*draw + 0*lose);

matchPoint(4,2,2);