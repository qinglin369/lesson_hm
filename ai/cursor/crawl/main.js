const request = require('request-promise');
const cheerio = require('cheerio');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

// 定义 CSV 写入器
const csvWriter = createCsvWriter({
    path: 'weibo_hot_topics.csv',
    header: [
        { id: 'rank', title: '排名' },
        { id: 'title', title: '标题' },
        { id: 'heat', title: '热度' },
        { id: 'link', title: '链接' }
    ]
});

// 目标 URL
const url = 'https://tophub.today/n/KqndgxeLl9';

// 发送 HTTP 请求获取网页内容
request(url)
    .then(html => {
        // 使用 cheerio 解析 HTML
        const $ = cheerio.load(html);
        const hotTopics = [];

        // 调试信息：打印整个 HTML 内容
        console.log('HTML 内容:', html);

        // 遍历表格中的每一行
        $('table.table-bordered.table-striped tbody tr').each((index, element) => {
            const rank = $(element).find('td:nth-child(1)').text().trim();
            const titleElement = $(element).find('td:nth-child(2) a');
            const title = titleElement.text().trim();
            const link = 'https://tophub.today' + titleElement.attr('href');
            const heat = $(element).find('td:nth-child(3)').text().trim();

            // 调试信息：打印每一行的数据
            console.log('排名:', rank, '标题:', title, '热度:', heat, '链接:', link);

            // 将信息添加到数组中
            hotTopics.push({ rank, title, heat, link });
        });

        // 调试信息：打印所有热榜数据
        console.log('所有热榜数据:', hotTopics);

        // 将信息写入 CSV 文件
        if (hotTopics.length > 0) {
            csvWriter.writeRecords(hotTopics)
                .then(() => console.log('CSV 文件已成功写入'))
                .catch(err => console.error('写入 CSV 文件时出错:', err));
        } else {
            console.error('没有提取到任何热榜数据');
        }
    })
    .catch(err => console.error('请求网页时出错:', err));