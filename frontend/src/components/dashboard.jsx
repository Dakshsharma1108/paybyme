import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function PayByMeDashboard() {
  const [search, setSearch] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  function logout(){
    localStorage.removeItem('token');
    navigate('/login')
  }

  useEffect(() => {
    fetch("http://localhost:3000/api/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const formattedUsers = data.map(user => ({
          id: user.id,
          name: user.email.split('@')[0], // username from email
        }));
        setUsers(formattedUsers);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );
  if (users.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-white p-6 flex items-center justify-center">
        <div className="text-gray-500">Loading users...</div>
      </div>
    );
  }
  if (users.length === 0 && search) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-white p-6 flex items-center justify-center">
        <div className="text-gray-500">No users found.</div>
      </div>
    );
  }
  if (users.length === 0 && !search) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-white p-6 flex items-center justify-center">
        <div className="text-gray-500">No users available.</div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-white p-6">
      <div className="flex justify-between items-center border-b pb-4 mb-6 relative">
        <div className="relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-xl font-bold px-3 py-1 rounded-lg hover:bg-gray-100"
          >
            ☰
          </button>
          {menuOpen && (
            <div className="absolute left-0 mt-2 w-32 bg-white border rounded-lg shadow-lg z-10">
              <button className="w-full text-left px-4 py-2 hover:bg-indigo-100 text-gray-700">Profile</button>
            {/* remove token and refresh */}
              <button onClick={logout} className="w-full text-left px-4 py-2 hover:bg-indigo-100 text-red-500">Logout</button>
            </div>
          )}
        </div>

        <h1 className="text-xl font-semibold text-gray-900">Payments App</h1>

        <div className="flex items-center space-x-2">
          <span className="text-gray-700">Hello, User</span>
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 text-white font-bold flex items-center justify-center">
            U
          </div>
        </div>
      </div>

      <div className="text-lg font-medium text-gray-800 mb-4">
        Your Balance <span className="font-bold text-indigo-600">$5000</span>
      </div>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Search users..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full md:w-1/2 px-4 py-2 rounded-xl border border-gray-300 shadow-inner focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white/70"
        />
      </div>

      <div className="space-y-4">
        {filteredUsers.length === 0 ? (
          <p className="text-gray-500 text-center">No users found.</p>
        ) : (
          filteredUsers.map(user => (
            <div
              key={user.id}
              className="flex items-center justify-between bg-white/70 backdrop-blur-lg shadow-md p-4 rounded-xl border border-gray-200 transition-transform hover:scale-[1.02] duration-300 ease-in-out"
            >
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 text-white font-bold flex items-center justify-center">
                  {user.name[0].toUpperCase()}
                </div>
                <span className="text-gray-800 font-medium">{user.name}</span>
              </div>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-md shadow hover:bg-indigo-500 transition-all">
                Send Money
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
