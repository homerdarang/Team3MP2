import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function RoutingMenus() {
  return (
    <div>
        <ul>
            <li><Link to="services" /></li>
            <li><Link to="monitoring" /></li>
            <li><Link to="vaccine"/></li>
        </ul>
        <Outlet />
    </div>
  )
}
