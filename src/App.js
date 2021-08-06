import "./scss/App.scss";
import TimerPage from "./pages/TimerPage";
import HomePage from "./pages/HomePage";
import ClassicTimerPage from "./pages/ClassicTimerPage";

function App() {
  return (
    <div className="app dark-theme">
      {/* <TimerPage /> */}
      {/* <HomePage /> */}
      <ClassicTimerPage />
    </div>
  );
}

export default App;
