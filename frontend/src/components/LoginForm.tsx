import React, { useState } from 'react';
import { Lock, Mail, Eye, EyeOff, Loader2 } from 'lucide-react';

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleAuth0Login = () => {
    window.location.href = '../api/auth/login';

  }

  const handleAuth0Register = () => {
    window.location.href = '../api/auth/register';
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulación de conexión con NestJS (AuthModule)
    console.log('Autenticando en NestJS...', { email, password });
    
    setTimeout(() => {
      setIsLoading(false);
      window.location.href = '/dashboard'; // Redirigir al dashboard
    }, 1500);
  };

  return (
    <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-2xl border border-slate-200 shadow-xl">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl mb-4">
          <Lock size={32} />
        </div>
        <h1 className="text-2xl font-bold text-slate-900">Bienvenido de nuevo</h1>
        <p className="text-slate-500 text-sm mt-2">Ingresa tus credenciales para acceder al panel</p>
      </div>

      <form onSubmit={handleLogin} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Correo Electrónico</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              required
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@tienda.com"
              className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Contraseña</label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              required
              type={showPassword ? "text" : "password"} 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full pl-10 pr-12 py-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
            />
            <button 
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
            <span className="text-sm text-slate-600">Recordarme</span>
          </label>
          <a href="#" className="text-sm font-semibold text-blue-600 hover:text-blue-700">¿Olvidaste tu contraseña?</a>
        </div>

        <button 
          disabled={isLoading}
          type="submit" 
          className="w-full bg-slate-900 text-white py-3 rounded-xl font-bold hover:bg-slate-800 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
        >
          {isLoading ? <Loader2 className="animate-spin" size={20} /> : "Iniciar Sesión"}
        </button>
      </form>
      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-slate-200"></span>
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="w-full border-t border-slate-500"> o tambien </span>
        </div>
        
      </div>

      <button 
        onClick={handleAuth0Login}
        type='button'
        className='w-full bg-white border-slate-200 text-slate-700'> 
        Iniciar sesion con Auth0
      </button>

      <div className="text-center mt-6">
        <p className="text-sm text-slate-600">¿No tienes una cuenta?{' '}
          <button 
            onClick={handleAuth0Register}
            className="text-blue-600 hover:text-blue-700 font-semibold"
          >
            Regístrate aquí
          </button>
        </p>
      </div>


      <p className="text-center text-slate-500 text-xs">
        &copy; 2026 Tienda Online - Todos los derechos reservados
      </p>
    </div>
  );
}