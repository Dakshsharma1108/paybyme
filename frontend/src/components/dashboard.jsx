import { useState } from 'react';

export  function PayByMeDashboard() {
  const [search, setSearch] = useState('');
  const users = [
    { id: 'U1', name: 'User 1' },
    { id: 'U2', name: 'User 2' },
    { id: 'U3', name: 'User 3' },
  ];

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-white p-6">
      {/* Top Nav */}
      <div className="flex justify-between items-center border-b pb-4 mb-6">
        <h1 className="text-xl font-semibold text-gray-900">Payments App</h1>
        <div className="flex items-center space-x-2">
          <span className="text-gray-700">Hello, User</span>
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 text-white font-bold flex items-center justify-center">
            U
          </div>
        </div>
      </div>

      {/* Balance Display */}
      <div className="text-lg font-medium text-gray-800 mb-4">
        Your Balance <span className="font-bold text-indigo-600">$5000</span>
      </div>

      {/* Search */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search users..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full md:w-1/2 px-4 py-2 rounded-xl border border-gray-300 shadow-inner focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white/70"
        />
      </div>

      {/* Users List */}
      <div className="space-y-4">
        {filteredUsers.map(user => (
          <div
            key={user.id}
            className="flex items-center justify-between bg-white/70 backdrop-blur-lg shadow-md p-4 rounded-xl border border-gray-200"
          >
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 text-white font-bold flex items-center justify-center">
                {user.id}
              </div>
              <span className="text-gray-800 font-medium">{user.name}</span>
            </div>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md shadow hover:bg-indigo-500 transition-all">
              Send Money
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
