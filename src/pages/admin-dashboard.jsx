import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userSearch, setUserSearch] = useState("");
  const [apptSearch, setApptSearch] = useState("");

  useEffect(() => {
    const fetchAll = async () => {
      setLoading(true);
      const usersSnap = await getDocs(collection(db, "users"));
      setUsers(usersSnap.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      const appsSnap = await getDocs(collection(db, "reminders"));
      setAppointments(
        appsSnap.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
      setLoading(false);
    };
    fetchAll();
  }, []);

  // Filtered lists
  const filteredUsers = users.filter(
    (u) =>
      u.fullName?.toLowerCase().includes(userSearch.toLowerCase()) ||
      u.email?.toLowerCase().includes(userSearch.toLowerCase()) ||
      u.phone?.toLowerCase().includes(userSearch.toLowerCase())
  );
  const filteredAppointments = appointments.filter(
    (a) =>
      a.title?.toLowerCase().includes(apptSearch.toLowerCase()) ||
      a.location?.toLowerCase().includes(apptSearch.toLowerCase()) ||
      a.userId?.toLowerCase().includes(apptSearch.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-2 text-[#4cb072]">
          Admin Dashboard
        </h1>
        <p className="mb-8 text-gray-500">
          View all users and appointments at a glance.
        </p>
        {loading && (
          <div className="flex justify-center items-center py-10">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-green-500 border-solid"></div>
          </div>
        )}

        {/* USERS */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
            <h2 className="text-xl font-semibold text-[#4cb072]">All Users</h2>
            <input
              type="text"
              placeholder="Search users..."
              className="border rounded px-3 py-2 w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-green-200"
              value={userSearch}
              onChange={(e) => setUserSearch(e.target.value)}
            />
          </div>
          <div className="overflow-x-auto rounded-lg">
            <table className="min-w-full border">
              <thead className="bg-gray-100 sticky top-0 z-10">
                <tr>
                  <th className="px-4 py-2 border">Full Name</th>
                  <th className="px-4 py-2 border">Email</th>
                  <th className="px-4 py-2 border">Phone</th>
                  <th className="px-4 py-2 border">LGA</th>
                  <th className="px-4 py-2 border">Language</th>
                  <th className="px-4 py-2 border">Pregnancy Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="text-center py-6 text-gray-400">
                      No users found.
                    </td>
                  </tr>
                ) : (
                  filteredUsers.map((u) => (
                    <tr
                      key={u.id}
                      className="hover:bg-green-50 transition-colors"
                    >
                      <td className="px-4 py-2 border">{u.fullName}</td>
                      <td className="px-4 py-2 border">{u.email}</td>
                      <td className="px-4 py-2 border">{u.phone}</td>
                      <td className="px-4 py-2 border">{u.lga}</td>
                      <td className="px-4 py-2 border">{u.language}</td>
                      <td className="px-4 py-2 border">
                        <span
                          className={`px-2 py-1 rounded text-xs font-semibold ${
                            u.pregnancyStatus === "Pregnant"
                              ? "bg-green-100 text-green-700"
                              : "bg-gray-200 text-gray-600"
                          }`}
                        >
                          {u.pregnancyStatus || "N/A"}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* APPOINTMENTS */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
            <h2 className="text-xl font-semibold text-[#4cb072]">
              All Appointments & Reminders
            </h2>
            <input
              type="text"
              placeholder="Search appointments..."
              className="border rounded px-3 py-2 w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-green-200"
              value={apptSearch}
              onChange={(e) => setApptSearch(e.target.value)}
            />
          </div>
          <div className="overflow-x-auto rounded-lg">
            <table className="min-w-full border">
              <thead className="bg-gray-100 sticky top-0 z-10">
                <tr>
                  <th className="px-4 py-2 border">Title</th>
                  <th className="px-4 py-2 border">Date</th>
                  <th className="px-4 py-2 border">Time</th>
                  <th className="px-4 py-2 border">Location</th>
                  <th className="px-4 py-2 border">User ID</th>
                </tr>
              </thead>
              <tbody>
                {filteredAppointments.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="text-center py-6 text-gray-400">
                      No appointments found.
                    </td>
                  </tr>
                ) : (
                  filteredAppointments.map((a) => (
                    <tr
                      key={a.id}
                      className="hover:bg-green-50 transition-colors"
                    >
                      <td className="px-4 py-2 border">{a.title}</td>
                      <td className="px-4 py-2 border">{a.date}</td>
                      <td className="px-4 py-2 border">{a.time}</td>
                      <td className="px-4 py-2 border">{a.location}</td>
                      <td className="px-4 py-2 border">{a.userId}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
