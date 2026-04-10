/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Sidebar from './components/Sidebar';
import TopNav from './components/TopNav';
import Dashboard from './components/Dashboard';
import NewUpload from './components/NewUpload';
import TaskHistory from './components/TaskHistory';
import Login from './components/Login';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');

  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <div className="min-h-screen bg-surface">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="ml-64 min-h-screen flex flex-col">
        <TopNav />
        <div className="flex-1">
          {activeTab === 'dashboard' && <Dashboard />}
          {activeTab === 'new-upload' && <NewUpload />}
          {activeTab === 'task-history' && <TaskHistory />}
        </div>
      </main>
    </div>
  );
}
