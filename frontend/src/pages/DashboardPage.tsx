import React from 'react';

const summaryCards = [
  { label: 'Net Balance', value: '$8,420.75', change: '+12.4%', tone: 'positive' },
  { label: 'Monthly Income', value: '$12,500.00', change: '+5.1%', tone: 'positive' },
  { label: 'Monthly Spend', value: '$4,079.25', change: '-2.7%', tone: 'neutral' },
  { label: 'Savings Rate', value: '32.6%', change: '+4.3%', tone: 'positive' },
];

const budgetCategories = [
  { name: 'Housing', spent: 1850, limit: 2200, color: '#4f46e5' },
  { name: 'Food', spent: 840, limit: 1000, color: '#14b8a6' },
  { name: 'Transport', spent: 420, limit: 600, color: '#f59e0b' },
  { name: 'Entertainment', spent: 310, limit: 500, color: '#ef4444' },
  { name: 'Utilities', spent: 260, limit: 400, color: '#8b5cf6' },
];

const recentTransactions = [
  { title: 'Grocery Store', category: 'Food', date: 'Today, 09:45', amount: '-$128.40' },
  { title: 'Salary Deposit', category: 'Income', date: 'Today, 08:00', amount: '+$3,200.00' },
  { title: 'Electric Bill', category: 'Utilities', date: 'Yesterday', amount: '-$94.20' },
  { title: 'Fuel Refill', category: 'Transport', date: 'Yesterday', amount: '-$68.50' },
  { title: 'Streaming Services', category: 'Entertainment', date: 'Mon', amount: '-$29.99' },
];

const spendingTrend = [68, 72, 61, 85, 76, 92, 80];

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: '100vh',
    background: 'linear-gradient(180deg, #f8fafc 0%, #eef2ff 100%)',
    color: '#0f172a',
    fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
    padding: '32px 24px',
  },
  container: {
    maxWidth: '1280px',
    margin: '0 auto',
  },
  topBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '28px',
    gap: '16px',
    flexWrap: 'wrap',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 700,
    margin: 0,
  },
  subtitle: {
    fontSize: '0.96rem',
    color: '#475569',
    margin: '6px 0 0',
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    flexWrap: 'wrap',
  },
  button: {
    border: 'none',
    borderRadius: '12px',
    padding: '10px 16px',
    fontWeight: 600,
    background: '#111827',
    color: '#ffffff',
    cursor: 'pointer',
  },
  secondaryButton: {
    border: '1px solid #cbd5e1',
    background: '#ffffff',
    color: '#0f172a',
    borderRadius: '12px',
    padding: '10px 16px',
    fontWeight: 600,
    cursor: 'pointer',
  },
  summaryGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '20px',
    marginBottom: '24px',
  },
  card: {
    background: '#ffffff',
    borderRadius: '18px',
    boxShadow: '0 12px 32px rgba(15, 23, 42, 0.06)',
    border: '1px solid rgba(148, 163, 184, 0.2)',
    padding: '20px',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '14px',
  },
  label: {
    fontSize: '0.85rem',
    color: '#64748b',
    fontWeight: 600,
  },
  badge: {
    borderRadius: '999px',
    padding: '6px 10px',
    fontSize: '0.75rem',
    fontWeight: 700,
  },
  value: {
    fontSize: '1.9rem',
    fontWeight: 700,
    lineHeight: 1.2,
    margin: 0,
  },
  contentGrid: {
    display: 'grid',
    gridTemplateColumns: '1.6fr 1fr',
    gap: '24px',
  },
  panelTitle: {
    margin: '0 0 18px',
    fontSize: '1.2rem',
    fontWeight: 700,
  },
  budgetList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '18px',
  },
  budgetRow: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  budgetHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontWeight: 600,
    color: '#334155',
  },
  progressBar: {
    height: '10px',
    width: '100%',
    background: '#e2e8f0',
    borderRadius: '999px',
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: '999px',
  },
  chartCard: {
    background: '#ffffff',
    borderRadius: '18px',
    boxShadow: '0 12px 32px rgba(15, 23, 42, 0.06)',
    border: '1px solid rgba(148, 163, 184, 0.2)',
    padding: '20px',
  },
  chart: {
    display: 'flex',
    alignItems: 'end',
    justifyContent: 'space-between',
    gap: '12px',
    height: '180px',
    paddingTop: '12px',
  },
  chartBarWrap: {
    flex: '1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'end',
    height: '100%',
  },
  chartBar: {
    width: '100%',
    maxWidth: '32px',
    borderRadius: '12px 12px 0 0',
    background: 'linear-gradient(180deg, #818cf8 0%, #4f46e5 100%)',
    minHeight: '18px',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '12px',
    padding: '12px 0',
    borderBottom: '1px solid #e2e8f0',
  },
  transactionMeta: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  transactionTitle: {
    fontWeight: 600,
    color: '#0f172a',
  },
  transactionCategory: {
    fontSize: '0.8rem',
    color: '#64748b',
  },
  amount: {
    fontWeight: 700,
    color: '#0f172a',
  },
  negativeAmount: {
    fontWeight: 700,
    color: '#ef4444',
  },
  positiveAmount: {
    fontWeight: 700,
    color: '#16a34a',
  },
  sectionStack: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
};

export default function DashboardPage() {
  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <header style={styles.topBar}>
          <div>
            <h1 style={styles.title}>Dashboard</h1>
            <p style={styles.subtitle}>Overview of your household finances and spending this month.</p>
          </div>

          <div style={styles.actions}>
            <button style={styles.secondaryButton}>Export</button>
            <button style={styles.button}>Add transaction</button>
          </div>
        </header>

        <section style={styles.summaryGrid}>
          {summaryCards.map((card) => (
            <div key={card.label} style={styles.card}>
              <div style={styles.cardHeader}>
                <span style={styles.label}>{card.label}</span>
                <span
                  style={{
                    ...styles.badge,
                    background:
                      card.tone === 'positive'
                        ? 'rgba(34, 197, 94, 0.12)'
                        : 'rgba(148, 163, 184, 0.12)',
                    color:
                      card.tone === 'positive' ? '#15803d' : '#475569',
                  }}
                >
                  {card.change}
                </span>
              </div>
              <p style={styles.value}>{card.value}</p>
            </div>
          ))}
        </section>

        <div style={styles.contentGrid}>
          <div style={styles.sectionStack}>
            <div style={styles.card}>
              <h2 style={styles.panelTitle}>Budget overview</h2>
              <div style={styles.budgetList}>
                {budgetCategories.map((item) => {
                  const percent = Math.min((item.spent / item.limit) * 100, 100);

                  return (
                    <div key={item.name} style={styles.budgetRow}>
                      <div style={styles.budgetHeader}>
                        <span>{item.name}</span>
                        <span>
                          ${item.spent.toLocaleString()} / ${item.limit.toLocaleString()}
                        </span>
                      </div>

                      <div style={styles.progressBar}>
                        <div
                          style={{
                            ...styles.progressFill,
                            width: `${percent}%`,
                            background: item.color,
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div style={styles.chartCard}>
              <h2 style={styles.panelTitle}>Spending trend</h2>
              <div style={styles.chart}>
                {spendingTrend.map((value, index) => (
                  <div key={`${value}-${index}`} style={styles.chartBarWrap}>
                    <div
                      style={{
                        ...styles.chartBar,
                        height: `${value}%`,
                        opacity: 0.75 + index * 0.05,
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={styles.sectionStack}>
            <div style={styles.card}>
              <h2 style={styles.panelTitle}>Recent activity</h2>
              <ul style={styles.list}>
                {recentTransactions.map((transaction) => {
                  const isPositive = transaction.amount.startsWith('+');
                  const isNegative = transaction.amount.startsWith('-');

                  return (
                    <li key={`${transaction.title}-${transaction.date}`} style={styles.row}>
                      <div style={styles.transactionMeta}>
                        <span style={styles.transactionTitle}>{transaction.title}</span>
                        <span style={styles.transactionCategory}>{transaction.category} • {transaction.date}</span>
                      </div>

                      <span
                        style={
                          isPositive
                            ? styles.positiveAmount
                            : isNegative
                              ? styles.negativeAmount
                              : styles.amount
                        }
                      >
                        {transaction.amount}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
