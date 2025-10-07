# Profile Section - Física aplicada con Timmy

## Descripción

La sección de Perfil es una aplicación React completa que permite a los estudiantes gestionar su información personal, ver su progreso de aprendizaje, monitorear el estado de Timmy y personalizar su experiencia. Esta sección reemplaza el código HTML original con una arquitectura moderna y mantenible usando React y Tailwind CSS.

## Características Principales

### 🎯 Funcionalidades
- **Información Personal**: Edición de nickname y visualización de datos de cuenta
- **Estadísticas de Progreso**: Monedas, logros y tiempo jugado
- **Progreso de Aprendizaje**: Visualización detallada del avance en temas de física
- **Estado de Timmy**: Monitoreo de salud y energía del personaje
- **Selección de Avatar**: Personalización del personaje jugable
- **Gestión de Cambios**: Sistema de guardado con validación
- **Diseño responsive** para todos los dispositivos

### 🏗️ Arquitectura de Componentes

```
src/Components/Dashboard/ProfilePage/
├── ProfilePage.jsx              # Componente principal
├── ProfilePage.css             # Estilos específicos
├── TimmyStatus/
│   └── TimmyStatus.jsx         # Estado de Timmy con animaciones
├── AvatarSelector/
│   └── AvatarSelector.jsx      # Sistema de selección de avatares
└── ProfilePictureModal/
    └── ProfilePictureModal.jsx # Modal para cambiar foto de perfil
```

### 📊 Información del Usuario

#### Datos Personales
- **Apodo**: Editable por el usuario
- **Correo Electrónico**: Solo lectura por seguridad
- **Fecha de Registro**: Información de cuenta
- **Foto de Perfil**: 6 opciones de colores (A-F)

#### Estadísticas Rápidas
- **Monedas Totales**: 1,250 (ganadas por completar desafíos)
- **Logros Desbloqueados**: 12 (badges y medallas)
- **Tiempo Jugado**: 24h 30m (tiempo total en la aplicación)

### 📈 Progreso de Aprendizaje

#### Temas de Física
1. **Equilibrio Estático** ✅ (100%)
   - 5/5 desafíos completados
   - 3 estrellas de calidad
   - Estado: Completado

2. **Torque** 🎯 (60%)
   - 3/5 desafíos completados
   - 2 estrellas de calidad
   - Estado: En progreso

3. **Centro de Gravedad** 🔒 (0%)
   - 0/5 desafíos completados
   - Estado: Bloqueado (requiere completar Torque)

4. **Elasticidad** 🔒 (0%)
   - 0/5 desafíos completados
   - Estado: Bloqueado (requiere completar temas anteriores)

#### Sistema de Estrellas
- **⭐ 1 estrella**: Completado básico
- **⭐⭐ 2 estrellas**: Buen rendimiento
- **⭐⭐⭐ 3 estrellas**: Excelente rendimiento

### 🏆 Logros Recientes

#### Badges Desbloqueados
1. **Maestro del Equilibrio** 🏆
   - Completaste todos los desafíos de equilibrio
   - Color: Verde (accent)

2. **Coleccionista** 💰
   - Acumulaste 1,000 monedas
   - Color: Amarillo (secondary)

3. **Conocedor de la Historia** 🧑‍🔬
   - Desbloqueaste tu primer científico
   - Color: Azul (primary)

4. **Velocidad de Rayo** ⚡
   - Resolviste 5 desafíos en menos de 10 minutos
   - Color: Rojo (error)

### 🤖 Estado de Timmy

#### Indicadores de Salud
- **Salud**: ❤️❤️❤️ (Máxima)
- **Estado**: ¡Excelente!
- **Energía**: 100% (Barra de progreso verde)

#### Animaciones
```css
.timmy-bounce {
  animation: bounce 2s ease-in-out infinite;
}

.timmy-shake {
  animation: shake 0.5s ease-in-out infinite;
}
```

#### Estados Visuales
- **Saludable**: Animación de rebote suave
- **Dañado**: Animación de temblor (no implementado en versión actual)
- **Feliz**: Expresión sonriente en el SVG

### 👤 Sistema de Avatares

#### Avatares Disponibles
1. **Timmy Original** ✅
   - El protagonista clásico
   - Estado: Disponible

2. **Marie Curie** ✅
   - Científica desbloqueada
   - Estado: Disponible

3. **Isaac Newton** 🔒
   - Requiere 100 monedas
   - Estado: Bloqueado

4. **Albert Einstein** 🔒
   - Requiere 150 monedas
   - Estado: Bloqueado

#### Lógica de Selección
```jsx
const handleAvatarClick = (avatar) => {
  if (avatar.locked) {
    alert(`🔒 Este avatar se desbloqueará cuando tengas suficientes monedas.`);
    return;
  }
  onAvatarChange(avatar.id);
};
```

### 🎨 Personalización de Perfil

#### Opciones de Foto de Perfil
- **A**: Azul (primary) - Por defecto
- **B**: Verde (accent)
- **C**: Amarillo (secondary)
- **D**: Rojo (error)
- **E**: Morado (purple-500)
- **F**: Rosa (pink-500)

#### Modal de Cambio
- **Grid 3x2**: Layout organizado de opciones
- **Selección visual**: Ring azul para opción seleccionada
- **Confirmación**: Botones de Cancelar y Confirmar

### 💾 Gestión de Cambios

#### Sistema de Guardado
```jsx
const handleSaveChanges = () => {
  if (!hasUnsavedChanges) {
    alert('No hay cambios para guardar.');
    return;
  }

  // Simular guardado con loading
  button.disabled = true;
  button.innerHTML = '<LoadingSpinner/>';
  
  setTimeout(() => {
    setHasUnsavedChanges(false);
    alert('✅ ¡Cambios guardados exitosamente!');
  }, 2000);
};
```

#### Validaciones
- **Cambios no guardados**: Advertencia al navegar
- **Confirmación**: Diálogo antes de cerrar sesión
- **Auto-detección**: Seguimiento automático de modificaciones

### 🎭 Animaciones y Efectos

#### Barras de Progreso
```css
.progress-bar {
  transition: width 1s ease-in-out;
}
```

#### Efectos Hover
```css
.card-hover:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.15);
}
```

#### Badges de Logros
```css
.achievement-badge {
  animation: pulse 2s ease-in-out infinite;
}
```

### 📱 Responsive Design

#### Breakpoints
- **Mobile**: Layout de una columna
- **Tablet**: Layout adaptativo con grid
- **Desktop**: Layout de 3 columnas (2+1)

#### Adaptaciones Móviles
- **Touch targets**: Botones optimizados para dedos
- **Modal responsive**: Adaptación automática de tamaño
- **Navegación**: Botones fáciles de tocar

### 🔧 Funcionalidades Técnicas

#### Gestión de Estado
```jsx
const [userData, setUserData] = useState({
  nickname: 'Alejandro',
  email: 'alejandro@ejemplo.com',
  registrationDate: '15 de Marzo, 2024',
  coins: 1250,
  achievements: 12,
  playTime: '24h 30m'
});

const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
```

#### Event Handlers
- **onNicknameChange**: Actualización en tiempo real
- **onAvatarChange**: Selección de avatar
- **onProfileChange**: Cambio de foto de perfil
- **onSaveChanges**: Persistencia de datos

### 🚀 Integración con el Sistema

#### Conexión con Dashboard
```jsx
// En Dashboard.jsx
case 'perfil':
  return (
    <ProfilePage 
      onBackToDashboard={() => setActiveSection('inicio')}
    />
  );
```

#### Flujo de Navegación
1. **Dashboard** → Click en "Perfil"
2. **Profile Page** → Visualizar y editar información
3. **Cambios** → Modificar nickname, avatar, foto
4. **Guardar** → Confirmar cambios
5. **Regreso** → Volver al Dashboard

### 🎯 Características de UX

#### Feedback Visual
- **Estados de carga**: Spinner durante guardado
- **Confirmaciones**: Mensajes de éxito
- **Validaciones**: Alertas informativas
- **Indicadores**: Cambios sin guardar

#### Accesibilidad
- **Keyboard navigation**: Escape para cerrar modales
- **ARIA labels**: Para screen readers
- **Focus management**: Navegación por teclado
- **Semantic HTML**: Estructura semántica

### 📊 Métricas y Analytics

#### Datos del Usuario
- **Tiempo de sesión**: Tracking de actividad
- **Progreso**: Completitud de temas
- **Engagement**: Interacciones con el perfil
- **Personalización**: Preferencias de avatar

### 🛠️ Tecnologías Utilizadas

- **React 19**: Framework principal con hooks
- **Tailwind CSS**: Estilos y diseño responsivo
- **CSS Animations**: Transiciones y efectos
- **SVG**: Ilustraciones de Timmy y avatares
- **JavaScript**: Lógica de gestión de estado

### 🎯 Próximos Pasos

1. **Persistencia Real**: Integración con backend
2. **Más Avatares**: Ampliar colección de personajes
3. **Estados de Timmy**: Implementar sistema de salud dinámico
4. **Estadísticas Avanzadas**: Gráficos y métricas detalladas
5. **Logros Sociales**: Sistema de compartir progreso

### 📝 Instrucciones de Uso

1. **Acceder**: Desde el Dashboard, hacer clic en "Perfil"
2. **Editar**: Modificar nickname en el campo correspondiente
3. **Personalizar**: Cambiar foto de perfil o avatar
4. **Revisar**: Ver progreso y logros
5. **Guardar**: Confirmar cambios con el botón "Guardar Cambios"

### 🔒 Seguridad y Privacidad

#### Validaciones
- **Email**: Solo lectura por seguridad
- **Nickname**: Validación de caracteres
- **Cambios**: Confirmación antes de salir
- **Sesión**: Opción de cerrar sesión segura

#### Protección de Datos
- **Datos sensibles**: No se almacenan en localStorage
- **Validación**: Campos requeridos y formatos
- **Confirmación**: Diálogos para acciones importantes

---

**Desarrollado con ❤️ para proporcionar una experiencia de usuario completa y personalizable en el aprendizaje de física con Timmy.**
