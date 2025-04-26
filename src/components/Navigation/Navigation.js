import React from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'خانه' },
  { to: '/ai-app-1', label: 'دستیار هوش مصنوعی ۱' },
  { to: '/ai-app-2', label: 'دستیار هوش مصنوعی ۲' },
  { to: '/ai-app-3', label: 'دستیار هوش مصنوعی ۳' },
  { to: '/settings', label: 'تنظیمات دستیار' },
];

const Navigation = () => {
  return (
    <nav className="bg-white shadow mb-8">
      <ul className="flex justify-center gap-6 py-4">
        {navItems.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                `px-4 py-2 rounded transition-colors duration-200 ${
                  isActive
                    ? 'bg-blue-600 text-white font-bold'
                    : 'text-gray-700 hover:bg-blue-100'
                }`
              }
              end={item.to === '/'}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation; 