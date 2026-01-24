import ChatPage from "./pages/ChatPage";
import { UIProvider } from "./features/chat/ui.store";

export default function App() {
  return (
    <UIProvider>
      <ChatPage />
    </UIProvider>
  );
}
