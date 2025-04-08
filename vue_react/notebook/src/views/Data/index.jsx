import React, { useState, useEffect } from 'react';
import { 
  Cell, 
  DatePicker,
  Progress,
  Icon,
  Tabs
} from 'zarm';
import ReactEcharts from 'echarts-for-react';
import s from './style.module.less';
import CustomIcon from '@/components/CustomIcon';

const Data = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [totalType, setTotalType] = useState('expense'); // 收入或支出类型
  const [totalExpense, setTotalExpense] = useState(0);   // 总支出
  const [totalIncome, setTotalIncome] = useState(0);     // 总收入
  const [expenseData, setExpenseData] = useState([]);    // 支出数据
  const [incomeData, setIncomeData] = useState([]);      // 收入数据
  const [chartType, setChartType] = useState('progress'); // 新增：图表类型切换

  // 模拟数据 - 实际项目中应该从API获取
  useEffect(() => {
    setExpenseData([
      { type_name: '餐饮', percent: 30, amount: 300 },
      { type_name: '交通', percent: 20, amount: 200 },
      { type_name: '购物', percent: 15, amount: 150 },
      { type_name: '娱乐', percent: 35, amount: 350 }
    ]);
    setIncomeData([
      { type_name: '工资', percent: 80, amount: 8000 },
      { type_name: '兼职', percent: 20, amount: 2000 }
    ]);
    setTotalExpense(1000);
    setTotalIncome(10000);
  }, []);

  // 饼图配置
  const getPieOption = () => {
    const data = totalType === 'expense' ? expenseData : incomeData;
    return {
      tooltip: {
        trigger: 'item',
        formatter: '{b}: {c} ({d}%)'
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: data.map(item => item.type_name)
      },
      series: [
        {
          name: totalType === 'expense' ? '支出' : '收入',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2
          },
          label: {
            show: true,
            formatter: '{b}: {d}%'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '16',
              fontWeight: 'bold'
            }
          },
          data: data.map(item => ({
            value: item.amount,
            name: item.type_name
          }))
        }
      ]
    };
  };

  return (
    <div className={s.data}>
      <div className={s.header}>
        <span className={s.date}>
          <DatePicker
            className={s.datePicker}
            title="选择月份"
            precision="month"
            value={currentMonth}
            onChange={setCurrentMonth}
          >
            <div className={s.dateText}>
              {currentMonth.getFullYear()}年{currentMonth.getMonth() + 1}月账单
            </div>
          </DatePicker>
        </span>
      </div>
      <div className={s.content}>
        <div className={s.total}>
          <div className={s.time}>
            <span>{totalType === 'expense' ? '支出' : '收入'}构成</span>
            <div className={s.title}>
              <span className={s.expense} onClick={() => setTotalType('expense')}>
                支出
                <Icon className={s.icon} type="arrow-bottom" />
              </span>
              <span className={s.income} onClick={() => setTotalType('income')}>
                收入
                <Icon className={s.icon} type="arrow-bottom" />
              </span>
            </div>
          </div>

          {/* 图表类型切换 */}
          <div className={s.chartSwitch}>
            <Tabs onChange={setChartType} value={chartType}>
              <Tabs.Panel title="进度条" value="progress" />
              <Tabs.Panel title="饼图" value="pie" />
            </Tabs>
          </div>

          {/* 图表展示区域 */}
          <div className={s.chart}>
            {chartType === 'progress' ? (
              // 进度条图表
              (totalType === 'expense' ? expenseData : incomeData).map(item => (
                <Cell
                  key={item.type_name}
                  title={
                    <div className={s.type}>
                      <span className={s.name}>{item.type_name}</span>
                      <span className={s.percent}>
                        {item.percent}% | ¥{item.amount}
                      </span>
                    </div>
                  }
                  description={
                    <Progress
                      shape="line"
                      percent={item.percent}
                      theme='primary'
                    />
                  }
                />
              ))
            ) : (
              // 饼图
              <div className={s.pieChart}>
                <ReactEcharts 
                  option={getPieOption()} 
                  style={{ height: '400px' }}
                  opts={{ renderer: 'svg' }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;