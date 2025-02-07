import React, { useState, useContext, createContext } from "react";

// Contexts
const ThemeContext = createContext();
const UserContext = createContext();
const CounterContext = createContext();
const LanguageContext = createContext();
const AuthContext = createContext();
const NotificationContext = createContext();
const PreferencesContext = createContext();
const SettingsContext = createContext();
const RoleContext = createContext();
const ConfigContext = createContext();

export default function UseContextExamples() {
  const [theme, setTheme] = useState("light");
  const [user, setUser] = useState({ name: "Alice", loggedIn: true });
  const [count, setCount] = useState(0);
  const [language, setLanguage] = useState("en");
  const [auth, setAuth] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [preferences, setPreferences] = useState({ darkMode: false });
  const [settings, setSettings] = useState({ volume: 50 });
  const [role, setRole] = useState("admin");
  const [config, setConfig] = useState({ apiEndpoint: "/api/v1" });

  return (
    <div style={{ padding: "20px" }}>
      <h1>useContext Examples</h1>

      {/* Providing Contexts */}
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <UserContext.Provider value={{ user, setUser }}>
          <CounterContext.Provider value={{ count, setCount }}>
            <LanguageContext.Provider value={{ language, setLanguage }}>
              <AuthContext.Provider value={{ auth, setAuth }}>
                <NotificationContext.Provider value={{ notifications, setNotifications }}>
                  <PreferencesContext.Provider value={{ preferences, setPreferences }}>
                    <SettingsContext.Provider value={{ settings, setSettings }}>
                      <RoleContext.Provider value={{ role, setRole }}>
                        <ConfigContext.Provider value={{ config, setConfig }}>
                          <Examples />
                        </ConfigContext.Provider>
                      </RoleContext.Provider>
                    </SettingsContext.Provider>
                  </PreferencesContext.Provider>
                </NotificationContext.Provider>
              </AuthContext.Provider>
            </LanguageContext.Provider>
          </CounterContext.Provider>
        </UserContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

function Examples() {
  return (
    <>
      <ThemeExample />
      <UserExample />
      <CounterExample />
      <LanguageExample />
      <AuthExample />
      <NotificationExample />
      <PreferencesExample />
      <SettingsExample />
      <RoleExample />
      <ConfigExample />
    </>
  );
}

// 1. Theme Example
function ThemeExample() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div>
      <h3>1. Theme</h3>
      <p>Current Theme: {theme}</p>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
    </div>
  );
}

// 2. User Example
function UserExample() {
  const { user, setUser } = useContext(UserContext);
  return (
    <div>
      <h3>2. User</h3>
      <p>
        User: {user.name}, Logged In: {user.loggedIn ? "Yes" : "No"}
      </p>
      <button
        onClick={() => setUser({ ...user, loggedIn: !user.loggedIn })}
      >
        Toggle Login
      </button>
    </div>
  );
}

// 3. Counter Example
function CounterExample() {
  const { count, setCount } = useContext(CounterContext);
  return (
    <div>
      <h3>3. Counter</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

// 4. Language Example
function LanguageExample() {
  const { language, setLanguage } = useContext(LanguageContext);
  return (
    <div>
      <h3>4. Language</h3>
      <p>Current Language: {language}</p>
      <button onClick={() => setLanguage(language === "en" ? "es" : "en")}>
        Toggle Language
      </button>
    </div>
  );
}

// 5. Auth Example
function AuthExample() {
  const { auth, setAuth } = useContext(AuthContext);
  return (
    <div>
      <h3>5. Authentication</h3>
      <p>Authenticated: {auth ? "Yes" : "No"}</p>
      <button onClick={() => setAuth(!auth)}>Toggle Auth</button>
    </div>
  );
}

// 6. Notifications Example
function NotificationExample() {
  const { notifications, setNotifications } = useContext(NotificationContext);
  return (
    <div>
      <h3>6. Notifications</h3>
      <p>Notifications: {notifications.length}</p>
      <button onClick={() => setNotifications([...notifications, "New Notification"])}>
        Add Notification
      </button>
    </div>
  );
}

// 7. Preferences Example
function PreferencesExample() {
  const { preferences, setPreferences } = useContext(PreferencesContext);
  return (
    <div>
      <h3>7. Preferences</h3>
      <p>Dark Mode: {preferences.darkMode ? "On" : "Off"}</p>
      <button onClick={() => setPreferences({ darkMode: !preferences.darkMode })}>
        Toggle Dark Mode
      </button>
    </div>
  );
}

// 8. Settings Example
function SettingsExample() {
  const { settings, setSettings } = useContext(SettingsContext);
  return (
    <div>
      <h3>8. Settings</h3>
      <p>Volume: {settings.volume}</p>
      <button onClick={() => setSettings({ volume: settings.volume + 10 })}>
        Increase Volume
      </button>
    </div>
  );
}

// 9. Role Example
function RoleExample() {
  const { role, setRole } = useContext(RoleContext);
  return (
    <div>
      <h3>9. Role</h3>
      <p>Current Role: {role}</p>
      <button onClick={() => setRole(role === "admin" ? "user" : "admin")}>
        Switch Role
      </button>
    </div>
  );
}

// 10. Config Example
function ConfigExample() {
  const { config } = useContext(ConfigContext);
  return (
    <div>
      <h3>10. Config</h3>
      <p>API Endpoint: {config.apiEndpoint}</p>
    </div>
  );
}
