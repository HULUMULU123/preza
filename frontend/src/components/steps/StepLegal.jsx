import React from 'react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  BarChart,
  Bar,
  Legend,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

const legalRows = [
  {
    id: 1,
    document: 'Договор поставки №182/24',
    counterparty: 'ООО «Астра»',
    date: '12.11.2024',
    obligation: 'Оплата поставки партия 4',
    amount: '1 200 000 ₽',
    notes: 'Оплатить до 20.11.2024',
    risk: 'низкий',
  },
  {
    id: 2,
    document: 'Соглашение о рассрочке',
    counterparty: 'ЗАО «Радар»',
    date: '06.11.2024',
    obligation: 'Погашение просроченной задолженности',
    amount: '980 000 ₽',
    notes: 'Контроль платежа в декабре',
    risk: 'средний',
  },
  {
    id: 3,
    document: 'Подряд №543/Б',
    counterparty: 'ООО «Мастер Групп»',
    date: '28.10.2024',
    obligation: 'Оплата этапа строительства',
    amount: '3 450 000 ₽',
    notes: 'Проверить закрывающие документы',
    risk: 'высокий',
  },
  {
    id: 4,
    document: 'Акт сверки',
    counterparty: 'ИП Ковалев',
    date: '02.11.2024',
    obligation: 'Подтвердить корректность данных',
    amount: '0 ₽',
    notes: 'Не выявлено расхождений',
    risk: 'низкий',
  },
];

const riskClassMap = {
  низкий: 'risk-low',
  средний: 'risk-medium',
  высокий: 'risk-high',
};

const transactionRisks = [
  {
    id: 'TRX-2045',
    document: 'Платежное поручение №4581',
    counterparty: 'ООО «Альфа Маркет»',
    amount: '820 000 ₽',
    purpose: 'Оплата партии оборудования',
    risk: 'средний',
  },
  {
    id: 'TRX-2058',
    document: 'Платежное поручение №4627',
    counterparty: 'ИП Сафронов',
    amount: '120 400 ₽',
    purpose: 'Выплата по договору услуг',
    risk: 'низкий',
  },
  {
    id: 'TRX-2071',
    document: 'Платежное поручение №4682',
    counterparty: 'ООО «Орион Групп»',
    amount: '2 450 000 ₽',
    purpose: 'Аванс за строительные работы',
    risk: 'высокий',
  },
  {
    id: 'TRX-2076',
    document: 'Платежное поручение №4699',
    counterparty: 'АО «Эверест»',
    amount: '540 800 ₽',
    purpose: 'Закупка лицензий ПО',
    risk: 'средний',
  },
];

const riskBreakdown = [
  { key: 'низкий', name: 'Низкий', value: 18 },
  { key: 'средний', name: 'Средний', value: 9 },
  { key: 'высокий', name: 'Высокий', value: 5 },
];

const complianceTrend = [
  { week: 'Неделя 1', cleared: 8, flagged: 3 },
  { week: 'Неделя 2', cleared: 11, flagged: 4 },
  { week: 'Неделя 3', cleared: 13, flagged: 3 },
  { week: 'Неделя 4', cleared: 16, flagged: 2 },
];

const documentPipeline = [
  { stage: 'Договоры', cleared: 12, pending: 2 },
  { stage: 'Контрагенты', cleared: 9, pending: 3 },
  { stage: 'Обязательства', cleared: 14, pending: 1 },
  { stage: 'Транзакции', cleared: 10, pending: 2 },
];

const RISK_COLORS = {
  низкий: '#55bb9b',
  средний: '#f2c94c',
  высокий: '#ff6b6b',
};

export default function StepLegal() {
  return (
    <div className="grid-wrapper legal-layout">
      <div className="page-card legal-card">
        <h3 className="section-title">Юридический анализ &amp; отчет</h3>
        <p className="helper-text">
          Автоматический комплаенс анализ выделяет обязательства и риски, готовя базу для отчета
          службе безопасности и юридическому департаменту.
        </p>
        <table className="risk-table legal-table">
          <thead>
            <tr>
              <th>Документ</th>
              <th>Контрагент</th>
              <th>Дата</th>
              <th>Обязательство</th>
              <th>Сумма</th>
              <th>Комментарий</th>
              <th>Риск</th>
            </tr>
          </thead>
          <tbody>
            {legalRows.map((row) => (
              <tr key={row.id}>
                <td>{row.document}</td>
                <td>{row.counterparty}</td>
                <td>{row.date}</td>
                <td>{row.obligation}</td>
                <td>{row.amount}</td>
                <td>{row.notes}</td>
                <td>
                  <span className={`risk-badge ${riskClassMap[row.risk]}`}>{row.risk}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="page-card legal-card">
        <h3 className="section-title">Транзакции под наблюдением</h3>
        <p className="helper-text">
          Список операций, которые требуют повторной проверки и юридической квалификации
          перед включением в итоговый отчет.
        </p>
        <table className="risk-table legal-table legal-table--dense">
          <thead>
            <tr>
              <th>Операция</th>
              <th>Документ</th>
              <th>Контрагент</th>
              <th>Сумма</th>
              <th>Назначение</th>
              <th>Риск</th>
            </tr>
          </thead>
          <tbody>
            {transactionRisks.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.document}</td>
                <td>{row.counterparty}</td>
                <td>{row.amount}</td>
                <td>{row.purpose}</td>
                <td>
                  <span className={`risk-badge ${riskClassMap[row.risk]}`}>{row.risk}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="charts-grid legal-charts">
        <div className="chart-card">
          <h3>Распределение выявленных рисков</h3>
          <div className="chart-shell chart-shell--compact">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={riskBreakdown}
                  innerRadius={55}
                  outerRadius={90}
                  paddingAngle={6}
                  dataKey="value"
                  nameKey="name"
                >
                  {riskBreakdown.map((entry) => (
                    <Cell key={entry.key} fill={RISK_COLORS[entry.key]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value, _name, payload) => [`${value} кейсов`, payload?.payload?.name]} />
                <Legend iconType="circle" verticalAlign="bottom" height={48} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="chart-card">
          <h3>Динамика юридических проверок</h3>
          <div className="chart-shell chart-shell--compact">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={complianceTrend} margin={{ top: 10, right: 16, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="complianceCleared" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#55bb9b" stopOpacity={0.9} />
                    <stop offset="100%" stopColor="#55bb9b" stopOpacity={0.1} />
                  </linearGradient>
                  <linearGradient id="complianceFlagged" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#ff6b6b" stopOpacity={0.8} />
                    <stop offset="100%" stopColor="#ff6b6b" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(47, 58, 69, 0.18)" />
                <XAxis dataKey="week" tick={{ fill: '#536471', fontSize: 12 }} />
                <YAxis allowDecimals={false} tick={{ fill: '#536471', fontSize: 12 }} />
                <Tooltip formatter={(value) => `${value} кейсов`} />
                <Legend verticalAlign="top" height={32} iconType="circle" />
                <Area type="monotone" dataKey="cleared" name="Закрыто" stroke="#55bb9b" strokeWidth={2.5} fill="url(#complianceCleared)" />
                <Area type="monotone" dataKey="flagged" name="На контроле" stroke="#ff6b6b" strokeWidth={2.5} fill="url(#complianceFlagged)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="chart-card">
          <h3>Пайплайн документов и статусов</h3>
          <div className="chart-shell chart-shell--compact">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={documentPipeline} margin={{ top: 10, right: 16, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(47, 58, 69, 0.18)" />
                <XAxis dataKey="stage" tick={{ fill: '#536471', fontSize: 12 }} />
                <YAxis allowDecimals={false} tick={{ fill: '#536471', fontSize: 12 }} />
                <Tooltip formatter={(value) => `${value} единиц`} />
                <Legend verticalAlign="top" height={32} iconType="circle" />
                <Bar dataKey="cleared" name="Подтверждено" radius={[10, 10, 0, 0]} fill="#55bb9b" maxBarSize={28} />
                <Bar dataKey="pending" name="На проверке" radius={[10, 10, 0, 0]} fill="#f2c94c" maxBarSize={28} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
