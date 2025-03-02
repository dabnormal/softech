import React from "react";
import { Bell, Search, User } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2 className="logo">Jee1</h2>
        <nav>
          <ul>
            <li className="active">Overview</li>
            <li>Order Management</li>
            <li>Distributor CNF List</li>
            <li>Stock Management</li>
            <li>Employee Management</li>
            <li>Accounting</li>
            <li>Analytics & Reports</li>
          </ul>
        </nav>
        <button className="coming-soon">Get JEE1 App | Coming Soon!</button>
      </aside>

      <main className="main-content">
        <header className="dashboard-header">
          <h1 className="yash">Hello Yash,</h1>
          <p>We have all the stats ready for you!!</p>
          <div className="header-icons">
            <Search />
            <Bell />
            <User />
          </div>
        </header>

        <section className="dashboard-stats">
          <div className="stat-card orders">Orders Received (30 Days): <strong>23</strong></div>
          <div className="stat-card products">Total Products: <strong>101</strong></div>
          <div className="stat-card distributors">Distributors Approved: <strong>39</strong></div>
        </section>

        <section className="requests">
          <h3>Distributor Requests (42 Pending)</h3>
          <div className="request-tabs">
            <button className="active">All</button>
            <button>Pending</button>
            <button>Approved</button>
            <button>Rejected</button>
          </div>
          <table>
            <thead>
              <tr>
                <th>Distributor Name</th>
                <th>Status</th>
                <th>Contact</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Yash Pharmacy</td>
                <td className="pending">Pending</td>
                <td>+91 999999999</td>
                <td>➡</td>
              </tr>
              <tr>
                <td>Abhishek Pharmacy</td>
                <td className="approved">Approved</td>
                <td>+91 999999999</td>
                <td>➡</td>
              </tr>
              <tr>
                <td>Ankit Pharmacy</td>
                <td className="rejected">Rejected</td>
                <td>+91 999999999</td>
                <td>➡</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
