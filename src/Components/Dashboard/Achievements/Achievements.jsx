import React from 'react';

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: 'Maestro del Equilibrio',
      description: 'Completaste todos los desafíos de equilibrio',
      icon: (
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
      ),
      bgColor: 'bg-accent',
      textColor: 'text-accent'
    },
    {
      id: 2,
      title: 'Coleccionista',
      description: 'Acumulaste 1000 monedas',
      icon: <span className="text-white font-bold text-lg">💰</span>,
      bgColor: 'bg-secondary',
      textColor: 'text-secondary'
    },
    {
      id: 3,
      title: 'Precisión Total',
      description: 'Resolviste 5 problemas seguidos sin errores',
      icon: <span className="text-white font-bold text-lg">🎯</span>,
      bgColor: 'bg-primary',
      textColor: 'text-primary'
    }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h3 className="text-xl font-bold text-textPrimary mb-4">Logros Recientes 🏆</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {achievements.map((achievement) => (
          <div 
            key={achievement.id}
            className={`flex items-center p-4 ${achievement.bgColor} bg-opacity-10 rounded-xl hover:bg-opacity-20 transition-all duration-300 cursor-pointer`}
          >
            <div className={`w-12 h-12 ${achievement.bgColor} rounded-full flex items-center justify-center mr-4`}>
              {achievement.icon}
            </div>
            <div>
              <h4 className={`font-semibold ${achievement.textColor}`}>
                {achievement.title}
              </h4>
              <p className="text-sm text-textSecondary">
                {achievement.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
