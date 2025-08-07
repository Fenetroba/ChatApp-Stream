import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children, requireAuth = true }) => {
  const { isAuthenticated, loading } = useSelector(state => state.auth);
  const location = useLocation();

  // Show loading state
  if (loading) {
    return null;
  }

  // Public routes that don't require authentication
  const publicRoutes = ['/', '/login', '/signup'];
  const isPublicRoute = publicRoutes.includes(location.pathname);

  // Auth routes that authenticated users shouldn't access
  const authRoutes = ['/login', '/signup'];
  const isAuthRoute = authRoutes.includes(location.pathname);

  // If user is authenticated and trying to access auth pages, redirect to chat
  if (isAuthenticated && isAuthRoute) {
    return <Navigate to="/chat" replace />;
  }

  // If route requires auth and user is not authenticated, redirect to login
  if (requireAuth && !isAuthenticated && !isPublicRoute) {
    return <Navigate to="/login" replace />;
  }

  // If user is not authenticated and trying to access home, allow it
  if (!isAuthenticated && location.pathname === '/') {
    return children;
  }

  return children;
};

export default ProtectedRoute;
