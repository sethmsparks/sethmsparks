import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Set base to '/' for custom domain (sethmsparks.com)
// Change to '/repo-name/' if deploying to username.github.io/repo-name
export default defineConfig({
  plugins: [react()],
  base: '/',
})
