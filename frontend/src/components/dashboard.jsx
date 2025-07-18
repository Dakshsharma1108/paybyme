

// import { useState, useEffect } from 'react';
// import {  useNavigate } from 'react-router-dom';


// export function PayByMeDashboard() {
//   const [search, setSearch] = useState('');
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [users, setUsers] = useState([]);
//   const navigate = useNavigate();
//   const token = localStorage.getItem('token');

//   function logout() {
//     localStorage.removeItem('token');
//     navigate('/login');
//   }

//   // Verify token on page load
//   useEffect(() => {
//     fetch("http://localhost:3000/api/verify", {
//       method: 'POST',
//       headers: {
//         "Content-Type": "application/json",
//         "authorization": `Bearer ${token}`
//       },
//     })
//       .then(async response => {
//         const data = await response.json();
//         // try{

//         // }
//         // catch{

//         // }
//         if (!response.ok) {
//           // 
//           navigate('/login');
//           throw new Error(data.error || 'Token verification failed');
//         }
//         console.log(data);
//         // if (!data.id) {
//         //   throw new Error('Invalid token structure');
//         // }
//         if (data.msg === 'Username is not set') {
//           console.log('Username is not set, redirecting to set username page');
//         }

//       })
//       .catch((e) => {
//         console.error('Error verifying token:', e);
//         navigate('/login');
//       }, []);

//   });

//   // Fetch users on page load
//   useEffect(() => {
//     fetch("http://localhost:3000/api/users", {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then(data => {
//         const formattedUsers = data.map(user => ({
//           id: user.id,
//           name: user.email.split('@')[0],
//         }));
//         setUsers(formattedUsers);
//       })
//       .catch(error => {
//         console.error('Error fetching users:', error);
//       });
//   }, []);

//   const filteredUsers = users.filter(user =>
//     user.name.toLowerCase().includes(search.toLowerCase())
//   );

//   if (users.length === 0) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-white p-6 flex items-center justify-center">
//         <div className="text-gray-500">
//           {search ? 'No users found.' : 'Loading users...'}
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-white p-6">
//       <div className="flex justify-between items-center border-b pb-4 mb-6 relative">
//         <div className="relative">
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="text-xl font-bold px-3 py-1 rounded-lg hover:bg-gray-100"
//           >
//             ☰
//           </button>
//           {menuOpen && (
//             <div className="absolute left-0 mt-2 w-32 bg-white border rounded-lg shadow-lg z-10">
//               <button className="w-full text-left px-4 py-2 hover:bg-indigo-100 text-gray-700">Profile</button>
//               <button onClick={logout} className="w-full text-left px-4 py-2 hover:bg-indigo-100 text-red-500">Logout</button>
//             </div>
//           )}
//         </div>

//         <h1 className="text-xl font-semibold text-gray-900">Payments App</h1>

//         <div className="flex items-center space-x-2">
//           <span className="text-gray-700">Hello, User</span>
//           <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 text-white font-bold flex items-center justify-center">
//             U
//           </div>
//         </div>
//       </div>

//       <div className="text-lg font-medium text-gray-800 mb-4">
//         Your Balance <span className="font-bold text-indigo-600">$5000</span>
//       </div>

//       <div className="mb-4">
//         <input
//           type="text"
//           placeholder="Search users..."
//           value={search}
//           onChange={e => setSearch(e.target.value)}
//           className="w-full md:w-1/2 px-4 py-2 rounded-xl border border-gray-300 shadow-inner focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white/70"
//         />
//       </div>

//       <div className="space-y-4">
//         {filteredUsers.length === 0 ? (
//           <p className="text-gray-500 text-center">No users found.</p>
//         ) : (
//           filteredUsers.map(user => (
//             <div
//               key={user.id}
//               className="flex items-center justify-between bg-white/70 backdrop-blur-lg shadow-md p-4 rounded-xl border border-gray-200 transition-transform hover:scale-[1.02] duration-300 ease-in-out"
//             >
//               <div className="flex items-center space-x-4">
//                 <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 text-white font-bold flex items-center justify-center">
//                   {user.name[0].toUpperCase()}
//                 </div>
//                 <span className="text-gray-800 font-medium">{user.name}</span>
//               </div>
//               <button className="bg-indigo-600 text-white px-4 py-2 rounded-md shadow hover:bg-indigo-500 transition-all">
//                 Send Money
//               </button>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// }

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export function PayByMeDashboard() {
  const [search, setSearch] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [showUsernamePopup, setShowUsernamePopup] = useState(false);
  const [username, setUsername] = useState('');
  const [balance, setBalance] = useState(0);
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  function logout() {
    localStorage.removeItem('token');
    navigate('/login');
  }

  useEffect(() => {

    fetch("http://localhost:3000/api/details", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "authorization": `Bearer ${token}`
      },
    })
      .then(async response => {
        const data = await response.json();
        console.log(data);
        if (!response.ok) {
          navigate('/login');
          throw new Error(data.error || 'Token invalid');
        }
        if (!data.username) {
          setShowUsernamePopup(true);
        }
        setUsername(data.username || '');
        setBalance(data.balance || 0);
      })

      .finally(() => setLoading(false));
  }, [navigate, token]);




  //     fetch("http://localhost:3000/api/users", {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     })
  //       .then(async response => {
  //         if (!response.ok) {
  //           throw new Error('Network response was not ok');
  //         }
  //         const data = await response.json();
  //         return data;
  //       })
  //       .then(data => {
  //         const formattedUsers = data.map(user => ({
  //           id: user.id,
  //           name: user.username,
  //         }));
  //         setUsers(formattedUsers);
  //       }),
  //   ])
  //     .catch((e) => {
  //       console.error('Error fetching:', e);
  //       navigate('/login');
  //     })
  //     .finally(() => setLoading(false));
  // }, [navigate, token]);

  function handleUsernameSubmit() {
    if (!username.trim()) {
      setError('Username is required');
      return;
    }

    fetch('http://localhost:3000/api/set-username', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ username }),
    })
      .then(res => res.json())
      .then(data => {
        setShowUsernamePopup(false);
        setError('');
        setSuccessMsg('Username updated successfully');
        setTimeout(() => setSuccessMsg(''), 3000);
      })
      .catch(err => {
        console.error(err);
        setError('Failed to set username');
      })
  }




  return (
    <div className="relative">
      <div className={`${showUsernamePopup ? 'blur-sm pointer-events-none select-none' : ''} min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-white p-6`}>
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
                <button onClick={logout} className="w-full text-left px-4 py-2 hover:bg-indigo-100 text-red-500">Logout</button>
              </div>
            )}
          </div>

          <h1 className="text-xl font-semibold text-gray-900">Payments App</h1>

          <div className="flex items-center space-x-2">
            <span className="text-gray-700">
              Hello, <span className="font-semibold text-indigo-600">
                {loading ? <Skeleton width={80} /> : username || 'User'}
              </span>
            </span>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 text-white font-bold flex items-center justify-center">
              {loading ? <Skeleton circle width={32} height={32} /> : (username[0] || 'U').toUpperCase()}
            </div>
          </div>
        </div>

        <div className="text-lg font-medium text-gray-800 mb-4">
          Your Balance <span className="font-bold text-indigo-600">
            {loading ? <Skeleton width={60} /> : `$${balance}`}
          </span>
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
          {loading
            ? Array(3).fill(0).map((_, i) => (
              <div key={i} className="p-4 bg-white/70 rounded-xl">
                <Skeleton height={40} />
              </div>
            ))
            : users.length === 0
              ? <p className="text-gray-500 text-center">No users found.</p>
              : users.filter(user =>
                user.name.toLowerCase().includes(search.toLowerCase())
              ).map(user => (
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
              ))}
        </div>
      </div>

      {showUsernamePopup && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 shadow-xl w-96">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">Set Your Username</h2>
            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            {error && <p className="text-red-500 mb-2">{error}</p>}
            <button
              onClick={handleUsernameSubmit}
              className="bg-indigo-600 text-white px-4 py-2 rounded-md w-full hover:bg-indigo-500"
            >
              Submit
            </button>
          </div>
        </div>
      )}

      {successMsg && (
        <div className="fixed bottom-6 right-6 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50">
          {successMsg}
        </div>
      )}
    </div>
  );
}
