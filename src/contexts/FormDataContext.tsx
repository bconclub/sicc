import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface FormDataState {
  name: string;
  phone: string;
  email: string;
  location: string;
  projectType: string;
}

interface FormDataContextType {
  formData: FormDataState;
  updateFormData: (data: Partial<FormDataState>) => void;
  clearFormData: () => void;
}

const FormDataContext = createContext<FormDataContextType | undefined>(undefined);

const STORAGE_KEY = 'sicc_form_data';

const defaultFormData: FormDataState = {
  name: '',
  phone: '',
  email: '',
  location: '',
  projectType: ''
};

export function FormDataProvider({ children }: { children: ReactNode }) {
  const [formData, setFormData] = useState<FormDataState>(defaultFormData);

  // Load form data from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        setFormData({ ...defaultFormData, ...parsed });
      }
    } catch (error) {
      console.error('Error loading form data from localStorage:', error);
    }
  }, []);

  // Save form data to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    } catch (error) {
      console.error('Error saving form data to localStorage:', error);
    }
  }, [formData]);

  const updateFormData = (data: Partial<FormDataState>) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  const clearFormData = () => {
    setFormData(defaultFormData);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.error('Error clearing form data from localStorage:', error);
    }
  };

  return (
    <FormDataContext.Provider value={{ formData, updateFormData, clearFormData }}>
      {children}
    </FormDataContext.Provider>
  );
}

export function useFormData() {
  const context = useContext(FormDataContext);
  if (context === undefined) {
    throw new Error('useFormData must be used within a FormDataProvider');
  }
  return context;
}

