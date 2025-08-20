import React from "react";
import NavBar from "./ui_components/NavBar";
import Footer from "./ui_components/Footer";
import DetailPage from "./pages/DetailPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./ui_components/AppLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SignupPage from "./pages/SignupPage";
import CreatePostPage from "./pages/CreatePostPage";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./ui_components/ProtectedRoute";
import PageNotFound from "./pages/PageNotFound";

// Create a client
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route path="*" element={<PageNotFound />} />
            <Route index element={<HomePage />} />
            <Route path="blogs/:slug" element={<DetailPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="signup" element={<SignupPage />} />
            <Route
              path="create_post"
              element={
                <ProtectedRoute>
                  <CreatePostPage />
                </ProtectedRoute>
              }
            />
            <Route path="signin" element={<LoginPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
