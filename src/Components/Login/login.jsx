import { useState } from "react";
import './login.css'
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password, remember });
    // Aquí va tu lógica de login
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="flex w-full max-w-5xl bg-white rounded-2xl shadow-lg overflow-hidden">
        
        {/* Lado Izquierdo */}
        <div className="w-1/2 flex flex-col items-center justify-center p-10 bg-gray-50">
        <h1 className="text-5xl font-extrabold text-blue-500 titulo_principal">
          FisikaGO
        </h1>
          <h2 className="text-3xl font-extrabold text-gray-800">
            Física aplicada con <span className="text-blue-500">Timmy</span>
          </h2>
          <div className="mt-6">
            <img
              src="/timmy.png" // coloca tu imagen de Timmy en public/
              alt="Timmy"
              className="w-40 h-40"
            />
          </div>
          <p className="mt-4 text-gray-600 text-center">
            ¡Aprende física de manera divertida e interactiva! 🚀
          </p>
        </div>

        {/* Lado Derecho */}
        <div className="w-1/2 p-10 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            ¡Bienvenido de vuelta!
          </h2>
          <p className="text-gray-500 mb-6">
            Inicia sesión para continuar aprendiendo
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Correo electrónico o usuario
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            {/* Contraseña */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Contraseña
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="•••••••"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            {/* Opciones */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                />
                Recordarme
              </label>
              <a href="#" className="text-blue-500 hover:underline">
                ¿Olvidaste tu contraseña?
              </a>
            </div>

            {/* Botón */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition flex items-center justify-center gap-2"
            >
              Iniciar Sesión 🚀
            </button>
          </form>

          {/* Registro */}
          <p className="mt-6 text-center text-sm text-gray-600">
            ¿No tienes cuenta?{" "}
            <Link rel="stylesheet" to="/registro" className="text-yellow-500 font-semibold hover:underline">
              Regístrate aquí
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
