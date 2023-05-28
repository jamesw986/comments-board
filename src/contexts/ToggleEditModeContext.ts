import { createContext } from 'react';

interface ToggleEditModeContextType {
  toggleEditMode: (id?: string, username?: string, comment?: string) => void;
}

const ToggleEditModeContext = createContext<ToggleEditModeContextType>({
  toggleEditMode: () => {}
});

export default ToggleEditModeContext;
