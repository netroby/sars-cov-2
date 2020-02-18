import { Line } from '@antv/g2plot';
//日期，武汉新增确诊，武汉新增死亡，湖北新增确诊，湖北新增死亡，全国新增确诊，全国新增死亡
const originData = [
    ["2020-01-10", 41, 1, 0, 0, 0, 0],
    ["2020-01-11", 0, 0, 0, 0, 0, 0],
    ["2020-01-12", 0, 0, 0, 0, 0, 0],
    ["2020-01-13", 0, 0, 0, 0, 0, 0],
    ["2020-01-14", 0, 0, 0, 0, 0, 0],
    ["2020-01-15", 0, 1, 0, 0, 0, 0],
    ["2020-01-16", 4, 0, 0, 0, 0, 0],
    ["2020-01-17", 17, 0, 0, 0, 0, 0],
    ["2020-01-18", 59, 1, 0, 0, 0, 0],
    ["2020-01-19", 60, 0, 72, 0, 77, 0],
    ["2020-01-20", 60, 2, 72, 0, 77, 0],
    ["2020-01-21", 0, 0, 0, 0, 0, 0],
    ["2020-01-22", 0, 0, 0, 0, 0, 0],
    ["2020-01-23", 70, 6, 105, 7, 259, 8],
    ["2020-01-24", 0, 0, 0, 0, 444, 16],
    ["2020-01-25", 46, 7, 323, 13, 688, 15],
    ["2020-01-26", 80, 18, 371, 24, 769, 24],
    ["2020-01-27", 892, 22, 1291, 24, 1771, 26],
    ["2020-01-28", 315, 19, 840, 25, 1459, 26],
    ["2020-01-29", 356, 25, 1032, 37, 1737, 38],
    ["2020-01-30", 378, 30, 1220, 42, 1982, 43],
    ["2020-01-31", 576, 33, 1347, 45, 2102, 46],
];
let data = []

for (var i = 0; i < originData.length;i++) {
  data.push(
      {
        date: originData[i][0],
        type: "武汉新增确诊",
        value: originData[i][1],
      }
  );data.push(
      {
        date: originData[i][0],
        type: "武汉新增死亡",
        value: originData[i][2],
      }
  );data.push(
      {
        date: originData[i][0],
        type: "湖北新增确诊",
        value: originData[i][3],
      }
  );data.push(
      {
        date: originData[i][0],
        type: "湖北新增死亡",
        value: originData[i][4],
      }
  );data.push(
      {
        date: originData[i][0],
        type: "全国新增确诊",
        value: originData[i][5],
      }
  );data.push(
      {
        date: originData[i][0],
        type: "全国新增死亡",
        value: originData[i][6],
      }
  );
  i++;
}

const linePlot = new Line(document.getElementById('container'), {
  title: {
    visible: true,
    text: '新冠肺炎确诊和死亡多折线图',
  },
  description: {
    visible: true,
    text: '将数据按照某一字段进行分组，用于比对不同类型数据的趋势。',
  },
  padding: 'auto',
  forceFit: true,
  data,
  xField: 'date',
  yField: 'value',
  yAxis: {
    label: {
      // 数值格式化为千分位
      formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
    },
  },
  legend: {
    position: 'right-top',
  },
  seriesField: 'type',
  responsive: true,
});

linePlot.render();
