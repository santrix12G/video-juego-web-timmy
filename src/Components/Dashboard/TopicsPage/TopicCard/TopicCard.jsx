import React from 'react';

const TopicCard = ({ topic, onClick }) => {
  const getStatusIcon = () => {
    switch (topic.status) {
      case 'completed':
        return (
          <div className="flex items-center justify-center space-x-2 text-accent">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
            <span className="font-semibold">Completado</span>
          </div>
        );
      case 'in-progress':
        return (
          <div className="flex items-center justify-center space-x-2 text-primary">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
            </svg>
            <span className="font-semibold">En Progreso</span>
          </div>
        );
      case 'locked':
        return (
          <div className="flex items-center justify-center space-x-2 text-textSecondary">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path>
            </svg>
            <span className="font-semibold">Bloqueado</span>
          </div>
        );
      default:
        return null;
    }
  };

  const getProgressColor = () => {
    switch (topic.status) {
      case 'completed':
        return 'bg-accent';
      case 'in-progress':
        return 'bg-secondary';
      case 'locked':
        return 'bg-gray-300';
      default:
        return 'bg-gray-300';
    }
  };

  const getProgressText = () => {
    switch (topic.status) {
      case 'completed':
        return `✅ ${topic.completed}/${topic.total} desafíos completados`;
      case 'in-progress':
        return `🎯 ${topic.completed}/${topic.total} desafíos completados`;
      case 'locked':
        return `🔒 0/${topic.total} desafíos completados`;
      default:
        return `${topic.completed}/${topic.total} desafíos completados`;
    }
  };

  const progressPercentage = (topic.completed / topic.total) * 100;

  return (
    <div 
      className={`topic-card card-hover bg-white rounded-2xl shadow-lg p-6 cursor-pointer ${
        topic.status === 'locked' ? 'opacity-75' : ''
      }`}
      onClick={onClick}
    >
      <div className="text-center">
        <div className="mb-4">
          {topic.icon}
        </div>
        <h3 className="text-xl font-bold text-textPrimary mb-3">{topic.title}</h3>
        <p className="text-textSecondary text-sm mb-4">
          {topic.description}
        </p>
        <div className="mb-4">
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className={`progress-bar ${getProgressColor()} h-3 rounded-full`}
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          <p className="text-sm text-textSecondary mt-2">
            {getProgressText()}
          </p>
        </div>
        {getStatusIcon()}
      </div>
    </div>
  );
};

export default TopicCard;
