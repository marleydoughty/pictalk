import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import HomePage from './pages/home-page';
import AccountInfo from './components/account-info';
import FoldersPage from './pages/folders-page';
import SettingsPage from './pages/settings-page';
import NotFoundPage from './pages/not-found-page';

// Create a custom theme with colors matching your header
const theme = createTheme({
  palette: {
    primary: {
      main: '#667eea', // Purple from header gradient
      light: '#8b9cf9',
      dark: '#4c5ed4',
      contrastText: '#fff'
    },
    secondary: {
      main: '#764ba2', // Darker purple from header gradient
      light: '#9b6ec7',
      dark: '#5a3a7a',
      contrastText: '#fff'
    }
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif'
  }
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<AccountInfo action="sign-in" />} />
          <Route path="/sign-up" element={<AccountInfo action="sign-up" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/folders" element={<FoldersPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
