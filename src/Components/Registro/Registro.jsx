import { useState } from "react";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    // Aquí va tu lógica de registro
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="relative w-full max-w-6xl flex items-center justify-center">
        {/* Caja central */}
        <div className="bg-white w-full max-w-lg rounded-2xl shadow-lg p-10 relative z-10">
          <h1 className="text-3xl font-extrabold text-gray-800 text-center">
            Física aplicada con <span className="text-blue-500">Timmy</span>
          </h1>
          <p className="text-center text-gray-500 mt-2">
            Crea tu cuenta y comienza a aprender
          </p>

          {/* Iconos arriba */}
          <div className="flex justify-center gap-6 text-3xl mt-4">
            <span>🧪</span>
            <span>⚡</span>
            <span>🔬</span>
          </div>

          {/* Formulario */}
          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            {/* Nombre */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Nombre completo
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Ej: María García López"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Correo electrónico
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Ej: maria@ejemplo.com"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            {/* Contraseña */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Contraseña
              </label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Mínimo 6 caracteres"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            {/* Confirmar contraseña */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Confirmar contraseña
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="Repite tu contraseña"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            {/* Botón */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition flex items-center justify-center gap-2"
            >
              🚀 Crear cuenta
            </button>
          </form>
        </div>

        {/* Timmy a la izquierda */}
        <div className="absolute left-[-100px] bottom-10 hidden md:block">
          <div className="bg-white border shadow-md rounded-xl p-4 max-w-[200px] text-center">
            <p className="text-sm text-gray-700 font-medium">
              ¡Hola! Soy Timmy. <br />
              Únete para aprender física de manera divertida 🚀
            </p>
          </div>
          <img
            src="/timmy.png"
            alt="Timmy"
            className="w-40 mx-auto mt-2"
          />
        </div>

        {/* Tarjetas de fórmulas a la derecha */}
        <div className="absolute right-[-100px] top-1/3 hidden md:flex flex-col gap-4">
          <div className="border-2 border-blue-400 rounded-lg p-3 text-center bg-white shadow-sm">
            <p className="font-bold text-blue-600">⚡ Fuerza</p>
            <p className="text-sm">F = m × a</p>
          </div>
          <div className="border-2 border-yellow-400 rounded-lg p-3 text-center bg-white shadow-sm">
            <p className="font-bold text-yellow-600">🔧 Torque</p>
            <p className="text-sm">T = F × r</p>
          </div>
          <div className="border-2 border-green-400 rounded-lg p-3 text-center bg-white shadow-sm">
            <p className="font-bold text-green-600">⚡ Energía</p>
            <p className="text-sm">E = m × c²</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
