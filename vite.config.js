import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})