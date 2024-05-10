import React, { useState, useEffect } from 'react';
import './Customers.css'; // Import CSS file for styling

function Customers({ onClose }) {
  // State to store the list of customers
  const [customers, setCustomers] = useState([]);

  // Function to fetch the list of customers from the server
  const fetchCustomers = () => {
    // Mock data for demonstration
    const mockCustomers = [
      { id: 1, name: 'John Doe', phoneNumber: '123-456-7890', ordersMade: 5, totalSpent: '$500', ordersPending: 2 },
      { id: 2, name: 'Jane Smith', phoneNumber: '987-654-3210', ordersMade: 8, totalSpent: '$800', ordersPending: 1 },
      { id: 3, name: 'Michael Johnson', phoneNumber: '567-890-1234', ordersMade: 3, totalSpent: '$300', ordersPending: 0 },
      { id: 4, name: 'Emily Brown', phoneNumber: '345-678-9012', ordersMade: 6, totalSpent: '$600', ordersPending: 3 },
      { id: 5, name: 'David Wilson', phoneNumber: '901-234-5678', ordersMade: 7, totalSpent: '$700', ordersPending: 1 },
      { id: 6, name: 'Sarah Lee', phoneNumber: '234-567-8901', ordersMade: 4, totalSpent: '$400', ordersPending: 0 },
      { id: 7, name: 'Matthew Davis', phoneNumber: '789-012-3456', ordersMade: 9, totalSpent: '$900', ordersPending: 2 },
      { id: 8, name: 'Alfas B', phoneNumber: '696-969-6969', ordersMade: 9, totalSpent: '$900', ordersPending: 2 },
      { id: 9, name: 'Jessica Clark', phoneNumber: '012-345-6789', ordersMade: 2, totalSpent: '$200', ordersPending: 1 },
      { id: 10, name: 'Daniel Taylor', phoneNumber: '456-789-0123', ordersMade: 5, totalSpent: '$500', ordersPending: 0 },
      { id: 11, name: 'Olivia Martinez', phoneNumber: '678-901-2345', ordersMade: 6, totalSpent: '$600', ordersPending: 4 },
    ];

    // Set the fetched customers data to the state
    setCustomers(mockCustomers);
  };

  // Fetch customers data when the component mounts
  useEffect(() => {
    fetchCustomers();
  }, []); // Empty dependency array to only run once when the component mounts

  return (
    <div className="customers-container">
      <h1>Customers</h1>
      <table className="customer-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Orders Made</th>
            <th>Total Spent</th>
            <th>Orders Pending</th>
          </tr>
        </thead>
        <tbody>
          {/* Render list of customers */}
          {customers.map(customer => (
            <tr key={customer.id}>
              <td>{customer.name}</td>
              <td>{customer.phoneNumber}</td>
              <td>{customer.ordersMade}</td>
              <td>{customer.totalSpent}</td>
              <td>{customer.ordersPending}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Customers;
