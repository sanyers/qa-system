function fun() {
  let startTime = new Date('2021-05-28 11:04'); // 开始时间
  let endTime = new Date(); // 结束时间
  let usedTime = endTime - startTime; // 相差的毫秒数
  let days = Math.floor(usedTime / (24 * 3600 * 1000)); // 计算出天数
  let leavel = usedTime % (24 * 3600 * 1000); // 计算天数后剩余的时间
  let hours = Math.floor(leavel / (3600 * 1000)); // 计算剩余的小时数
  let leavel2 = leavel % (3600 * 1000); // 计算剩余小时后剩余的毫秒数
  let minutes = Math.floor(leavel2 / (60 * 1000)); // 计算剩余的分钟数
  let leavel3 = leavel2 % (60 * 1000); // 计算剩余秒数后剩余的毫秒数
  let seconds = Math.floor(leavel3 / 1000); // 计算剩余的分钟数
  return days + '天' + hours + '时' + minutes + '分' + seconds + '秒';
}

console.log(fun());
