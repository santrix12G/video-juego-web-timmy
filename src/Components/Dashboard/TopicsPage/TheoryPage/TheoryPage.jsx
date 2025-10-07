import React from 'react';

const TheoryPage = ({ topic, onBack }) => {
  const renderTheoryContent = () => {
    switch (topic.id) {
      case 'equilibrio':
        return <EquilibrioTheory />;
      case 'torque':
        return <TorqueTheory />;
      case 'gravedad':
        return <GravedadTheory />;
      case 'elasticidad':
        return <ElasticidadTheory />;
      default:
        return <div>Contenido no disponible</div>;
    }
  };

  return (
    <div className="fixed inset-0 bg-lightBg z-50 overflow-y-auto">
      <div className="min-h-screen">
        {/* Theory Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 px-4 lg:px-6 py-4 sticky top-0 z-10">
          <div className="flex items-center justify-between max-w-4xl mx-auto">
            <div className="flex items-center">
              <button 
                onClick={onBack}
                className="mr-4 p-2 rounded-lg text-textSecondary hover:text-textPrimary hover:bg-gray-100 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>
              <h1 className="text-2xl font-bold text-textPrimary">Teoría: {topic.title}</h1>
            </div>
            <div className="text-sm text-textSecondary">
              📖 Modo Teoría
            </div>
          </div>
        </header>

        {/* Theory Content */}
        <main className="max-w-4xl mx-auto p-4 lg:p-6">
          {renderTheoryContent()}
        </main>
      </div>
    </div>
  );
};

// Equilibrio Theory Component
const EquilibrioTheory = () => (
  <div>
    {/* Videos Section */}
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
      <h2 className="text-2xl font-bold text-textPrimary mb-6 flex items-center">
        <svg className="w-8 h-8 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
        </svg>
        Videos Explicativos
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gray-50 rounded-xl p-4">
          <div className="aspect-video bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
              title="Introducción al Equilibrio Estático"
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              className="rounded-lg"
            >
            </iframe>
          </div>
          <h3 className="font-bold text-textPrimary mb-2">Introducción al Equilibrio</h3>
          <p className="text-textSecondary text-sm">Conceptos básicos y definiciones fundamentales</p>
        </div>
        
        <div className="bg-gray-50 rounded-xl p-4">
          <div className="aspect-video bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
              title="Ejemplos Prácticos de Equilibrio"
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              className="rounded-lg"
            >
            </iframe>
          </div>
          <h3 className="font-bold text-textPrimary mb-2">Ejemplos Prácticos</h3>
          <p className="text-textSecondary text-sm">Aplicaciones reales del equilibrio estático</p>
        </div>
      </div>
    </div>

    {/* Theory Explanation */}
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
      <h2 className="text-2xl font-bold text-textPrimary mb-6 flex items-center">
        <svg className="w-8 h-8 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        Conceptos Fundamentales
      </h2>
      
      <div className="prose max-w-none">
        <h3 className="text-xl font-semibold text-textPrimary mb-4">¿Qué es el Equilibrio Estático?</h3>
        <p className="text-textSecondary mb-6 leading-relaxed">
          El equilibrio estático se produce cuando un objeto está en reposo y todas las fuerzas que actúan sobre él se cancelan mutuamente. 
          En esta condición, tanto la suma de fuerzas como la suma de momentos (torques) son igual a cero.
        </p>

        {/* Formula Box */}
        <div className="formula-box text-white p-6 rounded-xl mb-6">
          <h4 className="text-lg font-bold mb-4">Condiciones de Equilibrio:</h4>
          <div className="space-y-3 text-lg">
            <div className="flex items-center">
              <span className="mr-4">1.</span>
              <span>ΣF = 0 (Suma de fuerzas = 0)</span>
            </div>
            <div className="flex items-center">
              <span className="mr-4">2.</span>
              <span>Στ = 0 (Suma de torques = 0)</span>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-textPrimary mb-4">Tipos de Equilibrio</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-accent bg-opacity-10 p-4 rounded-xl">
            <h4 className="font-bold text-accent mb-2">Estable</h4>
            <p className="text-sm text-textSecondary">El objeto regresa a su posición original cuando se perturba ligeramente.</p>
          </div>
          <div className="bg-secondary bg-opacity-10 p-4 rounded-xl">
            <h4 className="font-bold text-yellow-600 mb-2">Inestable</h4>
            <p className="text-sm text-textSecondary">El objeto se aleja de su posición original cuando se perturba.</p>
          </div>
          <div className="bg-primary bg-opacity-10 p-4 rounded-xl">
            <h4 className="font-bold text-primary mb-2">Neutro</h4>
            <p className="text-sm text-textSecondary">El objeto permanece en equilibrio en cualquier posición cercana.</p>
          </div>
        </div>
      </div>
    </div>

    {/* Solved Examples */}
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-textPrimary mb-6 flex items-center">
        <svg className="w-8 h-8 text-accent mr-3" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
        </svg>
        Ejemplos Resueltos
      </h2>
      
      <div className="space-y-6">
        <div className="border-l-4 border-primary pl-6">
          <h3 className="text-lg font-bold text-textPrimary mb-3">Ejemplo 1: Balanza en Equilibrio</h3>
          <p className="text-textSecondary mb-4">
            Una balanza tiene una masa de 2 kg en el lado izquierdo a 30 cm del fulcro. 
            ¿Qué masa se necesita en el lado derecho a 40 cm del fulcro para equilibrar la balanza?
          </p>
          
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <h4 className="font-semibold mb-2">Solución:</h4>
            <div className="space-y-2 text-sm">
              <p><strong>Datos:</strong> m₁ = 2 kg, d₁ = 30 cm, d₂ = 40 cm</p>
              <p><strong>Fórmula:</strong> m₁ × d₁ = m₂ × d₂</p>
              <p><strong>Sustitución:</strong> 2 kg × 30 cm = m₂ × 40 cm</p>
              <p><strong>Resultado:</strong> m₂ = 60/40 = 1.5 kg</p>
            </div>
          </div>
        </div>
        
        <div className="border-l-4 border-accent pl-6">
          <h3 className="text-lg font-bold text-textPrimary mb-3">Ejemplo 2: Viga en Equilibrio</h3>
          <p className="text-textSecondary mb-4">
            Una viga uniforme de 4 m de longitud y 50 N de peso está apoyada en su centro. 
            Se coloca una carga de 100 N a 1 m del extremo izquierdo. ¿Dónde debe colocarse una carga de 75 N para equilibrar el sistema?
          </p>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Solución:</h4>
            <div className="space-y-2 text-sm">
              <p><strong>Punto de apoyo:</strong> Centro de la viga (2 m)</p>
              <p><strong>Momento de 100 N:</strong> 100 N × (2-1) m = 100 N⋅m (sentido horario)</p>
              <p><strong>Para equilibrio:</strong> 75 N × d = 100 N⋅m</p>
              <p><strong>Resultado:</strong> d = 100/75 = 1.33 m del centro hacia la derecha</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Torque Theory Component
const TorqueTheory = () => (
  <div>
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
      <h2 className="text-2xl font-bold text-textPrimary mb-6">Teoría del Torque</h2>
      <p className="text-textSecondary mb-6">
        El torque es la medida de la fuerza que puede causar que un objeto rote alrededor de un eje. 
        También conocido como momento de fuerza, es fundamental para entender el movimiento rotacional.
      </p>
      
      <div className="formula-box text-white p-6 rounded-xl mb-6">
        <h4 className="text-lg font-bold mb-4">Fórmula del Torque:</h4>
        <div className="text-xl">
          <span>τ = r × F × sin(θ)</span>
        </div>
        <p className="text-sm mt-2 opacity-90">Donde τ es torque, r es distancia, F es fuerza, θ es ángulo</p>
      </div>

      <h3 className="text-xl font-semibold text-textPrimary mb-4">Conceptos Clave</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-primary bg-opacity-10 p-4 rounded-xl">
          <h4 className="font-bold text-primary mb-2">Brazo de Palanca</h4>
          <p className="text-sm text-textSecondary">La distancia perpendicular desde el eje de rotación hasta la línea de acción de la fuerza.</p>
        </div>
        <div className="bg-secondary bg-opacity-10 p-4 rounded-xl">
          <h4 className="font-bold text-yellow-600 mb-2">Dirección del Torque</h4>
          <p className="text-sm text-textSecondary">Sigue la regla de la mano derecha: positivo para rotación antihoraria, negativo para horaria.</p>
        </div>
      </div>
    </div>

    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-textPrimary mb-6">Ejemplos de Torque</h2>
      <div className="space-y-4">
        <div className="border-l-4 border-primary pl-6">
          <h3 className="text-lg font-bold text-textPrimary mb-3">Ejemplo: Llave Inglesa</h3>
          <p className="text-textSecondary mb-4">
            Al aplicar una fuerza de 50 N perpendicular a una llave de 30 cm de longitud, ¿cuál es el torque aplicado?
          </p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="space-y-2 text-sm">
              <p><strong>Datos:</strong> F = 50 N, r = 0.30 m, θ = 90°</p>
              <p><strong>Fórmula:</strong> τ = r × F × sin(90°) = r × F × 1</p>
              <p><strong>Cálculo:</strong> τ = 0.30 m × 50 N = 15 N⋅m</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Placeholder components for other topics
const GravedadTheory = () => (
  <div className="bg-white rounded-2xl shadow-lg p-6">
    <h2 className="text-2xl font-bold text-textPrimary mb-6">Centro de Gravedad</h2>
    <p className="text-textSecondary">Contenido en desarrollo...</p>
  </div>
);

const ElasticidadTheory = () => (
  <div className="bg-white rounded-2xl shadow-lg p-6">
    <h2 className="text-2xl font-bold text-textPrimary mb-6">Elasticidad</h2>
    <p className="text-textSecondary">Contenido en desarrollo...</p>
  </div>
);

export default TheoryPage;
