const fs = require('fs');
const types = process.argv[2];

const typeList = fs.readFileSync('./src/config/category.js');
const tmp = typeList.toString().split('[')[1].split(']')[0].split(',');
// const list = [];
tmp.forEach(element => {
  const name = element.split("'")[1];
  if (name) {
    getTypeList(name);
  }
});

// getTypeList(types);

function getTypeList(types) {
  const r = `./src/config/${types}`;
  const rd = r + '/src/';
  const files = fs.readdirSync(rd);

  let qaList = '';
  files.forEach(element => {
    let list = '';
    const files = fs.readdirSync(rd + element);
    files.sort((a, b) => (getNameInt(a) > getNameInt(b) ? 1 : -1));
    files.forEach(item => {
      const title = fs
        .readFileSync(rd + element + '/' + item)
        .toString()
        .split('\n')[0];
      const q = title.replace('## ', '').replace('\r', '').replace('\n', '');
      list += `{q:'${q}',a:import(/* webpackChunkName: "${element}-data" */ './src/${element}/${item}')},`;
    });
    qaList += `{typeName:'${element}',typeList:[${list}]},`;
  });

  fs.writeFileSync(r + '/index.js', `export default [${qaList}]`);
  console.log(types + ' 题目更新完成');
}

function getNameInt(name) {
  return Number(name.split('.')[0]);
}
