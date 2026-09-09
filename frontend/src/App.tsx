import './App.css'

function App() {
  return (
    <main className="dashboard">
      <header className="dashboard-header">
        <div>
          <p className="eyebrow">Family Budget Planner</p>
          <h1>Good morning, Family</h1>
          <p>Here is your household financial overview.</p>
        </div>
        <button type="button">+ Add transaction</button>
      </header>

      <section className="dashboard-grid" aria-label="Budget summary">
        <article className="dashboard-card balance-card">
          <p>Available balance</p>
          <strong>$4,280.50</strong>
          <span>+$620.50 from last month</span>
        </article>
        <article className="dashboard-card">
          <p>Monthly income</p>
          <strong>$6,500.00</strong>
          <span>Updated today</span>
        </article>
        <article className="dashboard-card">
          <p>Monthly spending</p>
          <strong>$2,219.50</strong>
          <span>34% of your budget</span>
        </article>
      </section>

      <section className="dashboard-content">
        <article className="dashboard-panel">
          <div className="panel-heading"><h2>Spending overview</h2><span>This month</span></div>
          <div className="spending-bar"><span style={{ width: '34%' }} /></div>
          <div className="panel-stats"><span><b>$2,219.50</b> spent</span><span><b>$4,280.50</b> remaining</span></div>
        </article>
        <article className="dashboard-panel">
          <div className="panel-heading"><h2>Recent transactions</h2><a href="#transactions">View all</a></div>
          <ul className="transactions">
            <li><span>Groceries</span><b>-$124.80</b></li>
            <li><span>Electricity bill</span><b>-$86.25</b></li>
            <li><span>Salary</span><b className="income">+$3,250.00</b></li>
          </ul>
        </article>
      </section>
    </main>
  )
}

export default App
