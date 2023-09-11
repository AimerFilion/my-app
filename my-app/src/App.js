import Container from "./Container";
import { DarkModeProvider } from "./DarkModeContext";

export default function App() {
  return (
    <div className="App">
      <DarkModeProvider>
        <Container />
      </DarkModeProvider>
    </div>
  );
}
