import {Line} from '@antv/g2plot';
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
    ["2020-02-01", 894, 32, 1921, 45, 2590, 45], //日期，武汉新增确诊，武汉新增死亡，湖北新增确诊，湖北新增死亡，全国新增确诊，全国新增死亡
    ["2020-02-02", 1033, 41, 2103, 56, 2829, 57], //日期，武汉新增确诊，武汉新增死亡，湖北新增确诊，湖北新增死亡，全国新增确诊，全国新增死亡
    ["2020-02-03", 1242, 48, 2345, 64, 3235, 64], //日期，武汉新增确诊，武汉新增死亡，湖北新增确诊，湖北新增死亡，全国新增确诊，全国新增死亡
    ["2020-02-04", 1967, 49, 3156, 65, 3887, 65], //日期，武汉新增确诊，武汉新增死亡，湖北新增确诊，湖北新增死亡，全国新增确诊，全国新增死亡
    ["2020-02-05", 1766, 52, 2987, 70, 3143, 73], //日期，武汉新增确诊，武汉新增死亡，湖北新增确诊，湖北新增死亡，全国新增确诊，全国新增死亡
    ["2020-02-06", 1501, 64, 2447, 69, 3143, 73], //日期，武汉新增确诊，武汉新增死亡，湖北新增确诊，湖北新增死亡，全国新增确诊，全国新增死亡
    ["2020-02-07", 1985, 67, 2841, 81, 3399, 86], //日期，武汉新增确诊，武汉新增死亡，湖北新增确诊，湖北新增死亡，全国新增确诊，全国新增死亡
    ["2020-02-08", 1379, 63, 2941, 81, 2656, 89], //日期，武汉新增确诊，武汉新增死亡，湖北新增确诊，湖北新增死亡，全国新增确诊，全国新增死亡
    ["2020-02-09", 1921, 73, 2618, 91, 3062, 97], //日期，武汉新增确诊，武汉新增死亡，湖北新增确诊，湖北新增死亡，全国新增确诊，全国新增死亡
    ["2020-02-10", 1552, 67, 2097, 103, 2478, 108], //日期，武汉新增确诊，武汉新增死亡，湖北新增确诊，湖北新增死亡，全国新增确诊，全国新增死亡
    ["2020-02-11", 1104, 72, 1638, 94, 2015, 97], //日期，武汉新增确诊，武汉新增死亡，湖北新增确诊，湖北新增死亡，全国新增确诊，全国新增死亡
    ["2020-02-12", 13436, 216, 14840, 242, 15152, 254], //日期，武汉新增确诊，武汉新增死亡，湖北新增确诊，湖北新增死亡，全国新增确诊，全国新增死亡
    ["2020-02-13", 3910, 88, 4823, 116, 5090, 121], //日期，武汉新增确诊，武汉新增死亡，湖北新增确诊，湖北新增死亡，全国新增确诊，全国新增死亡
    ["2020-02-14", 1923, 107, 2420, 139, 2641, 143], //日期，武汉新增确诊，武汉新增死亡，湖北新增确诊，湖北新增死亡，全国新增确诊，全国新增死亡
    ["2020-02-15", 1548, 110, 1843, 139, 2009, 142], //日期，武汉新增确诊，武汉新增死亡，湖北新增确诊，湖北新增死亡，全国新增确诊，全国新增死亡
    ["2020-02-16", 1690, 76, 1933, 100, 2048, 105], //日期，武汉新增确诊，武汉新增死亡，湖北新增确诊，湖北新增死亡，全国新增确诊，全国新增死亡
    ["2020-02-17", 1600, 72, 1807, 93, 1886, 98], //日期，武汉新增确诊，武汉新增死亡，湖北新增确诊，湖北新增死亡，全国新增确诊，全国新增死亡
    ["2020-02-18", 1660, 116, 1693, 132, 1749, 136], //日期，武汉新增确诊，武汉新增死亡，湖北新增确诊，湖北新增死亡，全国新增确诊，全国新增死亡
];
let data = []

for (var i = 0; i < originData.length; i++) {
    data.push(
        {
            date: originData[i][0],
            type: "武汉新增确诊",
            value: originData[i][1],
        }
    );
    data.push(
        {
            date: originData[i][0],
            type: "武汉新增死亡",
            value: originData[i][2],
        }
    );
    data.push(
        {
            date: originData[i][0],
            type: "湖北新增确诊",
            value: originData[i][3],
        }
    );
    data.push(
        {
            date: originData[i][0],
            type: "湖北新增死亡",
            value: originData[i][4],
        }
    );
    data.push(
        {
            date: originData[i][0],
            type: "全国新增确诊",
            value: originData[i][5],
        }
    );
    data.push(
        {
            date: originData[i][0],
            type: "全国新增死亡",
            value: originData[i][6],
        }
    );
}
console.log(data);
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
    axis: {
        visible: true,
    },
    xField: 'date',
    yField: 'value',
    legend: {
        position: 'right-top',
    },
    seriesField: 'type',
    responsive: true,
});

linePlot.render();
