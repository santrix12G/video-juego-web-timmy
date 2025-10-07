# Dashboard - Física aplicada con Timmy

## Descripción

Este dashboard es una aplicación React moderna que reemplaza el código HTML original con una arquitectura más mantenible y escalable. El dashboard permite a los estudiantes interactuar con temas de física de manera gamificada, ayudando a Timmy a resolver desafíos educativos.

## Características Principales

### 🎯 Funcionalidades
- **Sistema de navegación** con sidebar responsivo
- **Progreso del estudiante** con visualización de avance
- **Sistema de logros** y recompensas
- **Grid de temas** de física interactivos
- **Avatar animado** de Timmy
- **Diseño responsive** para móviles y desktop

### 🏗️ Arquitectura de Componentes

```
src/Components/Dashboard/
├── Dashboard.jsx                 # Componente principal
├── Dashboard.css                # Estilos globales del dashboard
├── Sidebar/
│   └── Sidebar.jsx             # Navegación lateral
├── Header/
│   └── Header.jsx              # Barra superior con usuario y monedas
├── ProgressOverview/
│   └── ProgressOverview.jsx    # Vista de progreso con avatar de Timmy
├── Achievements/
│   └── Achievements.jsx        # Sistema de logros
└── TopicsGrid/
    └── TopicsGrid.jsx          # Grid de temas de física
```

### 🎨 Temas de Física Disponibles

1. **Equilibrio Estático** ✅ (Completado)
2. **Torque** 🎮 (En progreso)
3. **Centro de Gravedad** 🔒 (Bloqueado)
4. **Elasticidad** 🔒 (Bloqueado)

### 🛠️ Tecnologías Utilizadas

- **React 19** - Framework principal
- **Tailwind CSS** - Estilos y diseño responsivo
- **CSS Animations** - Animaciones personalizadas
- **SVG** - Iconografía y avatar de Timmy

### 🎨 Personalización de Colores

El dashboard utiliza un sistema de colores personalizado definido en `tailwind.config.js`:

```javascript
colors: {
  primary: '#3B82F6',      // Azul principal
  secondary: '#FACC15',    // Amarillo dorado
  accent: '#10B981',       // Verde de éxito
  error: '#EF4444',        // Rojo de error
  lightBg: '#F9FAFB',      // Fondo claro
  textPrimary: '#1F2937',  // Texto principal
  textSecondary: '#6B7280', // Texto secundario
  darkPanel: '#111827'     // Panel oscuro
}
```

### 📱 Responsive Design

- **Mobile First**: Diseño optimizado para dispositivos móviles
- **Sidebar colapsible**: Se oculta automáticamente en pantallas pequeñas
- **Grid adaptativo**: Los temas se reorganizan según el tamaño de pantalla
- **Menú hamburguesa**: Para navegación móvil

### 🎭 Animaciones

- **Timmy Avatar**: Animación suave de rebote
- **Monedas**: Animación de rotación y escala
- **Cards**: Efecto hover con elevación
- **Barras de progreso**: Transiciones suaves

### 🚀 Cómo Usar

1. **Iniciar sesión**: El usuario inicia sesión desde la pantalla de login
2. **Dashboard principal**: Se muestra el progreso general y temas disponibles
3. **Navegación**: Usar el sidebar para acceder a diferentes secciones
4. **Jugar**: Hacer clic en temas disponibles para iniciar desafíos
5. **Progreso**: Ver logros y avance en tiempo real

### 🔧 Integración con el Juego

El dashboard está preparado para integrarse con el sistema de juegos Phaser existente:

```javascript
// En App.jsx
const [currentView, setCurrentView] = useState('login');

// Navegación entre vistas
case 'dashboard':
  return <Dashboard onStartGame={() => setCurrentView('game')} />
```

### 📈 Estado del Proyecto

- ✅ Componentes principales creados
- ✅ Navegación funcional
- ✅ Diseño responsive
- ✅ Integración con sistema de login
- 🔄 Integración con Phaser (pendiente)
- 🔄 Sistema de persistencia de datos (pendiente)

### 🎯 Próximos Pasos

1. **Integrar con Phaser**: Conectar los temas con los juegos existentes
2. **Sistema de usuarios**: Implementar autenticación real
3. **Persistencia**: Guardar progreso del estudiante
4. **Más temas**: Agregar nuevos desafíos de física
5. **Analytics**: Tracking de progreso y métricas

## Instalación y Desarrollo

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build
```

## Contribuir

Para contribuir al proyecto:

1. Fork el repositorio
2. Crear una rama para tu feature
3. Hacer commit de tus cambios
4. Push a la rama
5. Crear un Pull Request

---

**Desarrollado con ❤️ para hacer el aprendizaje de física más divertido y accesible.**
