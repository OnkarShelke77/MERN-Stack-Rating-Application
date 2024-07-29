import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const [userInfo, setUserInfo] = useState(null);
    const [users, setUsers] = useState([]);
    const [stores, setStores] = useState([]);

    useEffect(() => {
        const fetchUserInfo = async () => {
            const user = JSON.parse(localStorage.getItem('userInfo'));
            setUserInfo(user);

            if (user && user.token) {
                const config = {
                    headers: {
                        Authorization: `Bearer ${user.token}`,
                    },
                };

                const { data: usersData } = await axios.get('/api/users', config);
                setUsers(usersData);

                const { data: storesData } = await axios.get('/api/stores', config);
                setStores(storesData);
            }
        };

        fetchUserInfo();
    }, []);

    return (
        <div>
            <h2>Dashboard</h2>
            {userInfo && userInfo.role === 'Admin' && (
                <div>
                    <h3>Total Users: {users.length}</h3>
                    <h3>Total Stores: {stores.length}</h3>
                </div>
            )}
            {/* Implement functionalities for different roles */}
        </div>
    );
};

export default Dashboard;
