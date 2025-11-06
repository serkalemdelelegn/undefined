"use client"

export function logout() {
  // Clear auth cookie
  document.cookie = "admin-auth=; path=/; max-age=0"
  window.location.href = "/admin/login"
}

export function isAuthenticated(): boolean {
  if (typeof document === "undefined") return false
  return document.cookie.includes("admin-auth=true")
}
