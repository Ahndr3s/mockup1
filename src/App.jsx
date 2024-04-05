import { ATFooter } from "./components/AT-Footer";
import ParticleBackground from "./components/Backgound";
import { AuthProvider } from "./context";
import { AppRouter } from "./router/AppRouter";
export default function App() {
  return (
    
    <AuthProvider>
      
      <ParticleBackground/>
      <AppRouter/>
      <hr className="footer-hr"/><br/>
      <ATFooter/>      
    </AuthProvider>
  )
}


