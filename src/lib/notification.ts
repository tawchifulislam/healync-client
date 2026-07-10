import toast from 'react-hot-toast';

export const showSuccessToast = (message: string): void => {
  toast.success(message, {
    id: message,
    style: {
      padding: '12px 16px',
      color: '#0F172A',
      background: '#FFFFFF',
      fontSize: '14px',
      fontWeight: '600',
      borderRadius: '12px',
      border: '1px solid #E2E8F0',
      fontFamily: 'inherit',
    },
    iconTheme: {
      primary: '#0284C7',
      secondary: '#FFFFFF',
    },
  });
};

export const showErrorToast = (message: string): void => {
  toast.error(message, {
    id: message,
    style: {
      padding: '12px 16px',
      color: '#0F172A',
      background: '#FFFFFF',
      fontSize: '14px',
      fontWeight: '600',
      borderRadius: '12px',
      border: '1px solid #FFE4E6',
      fontFamily: 'inherit',
    },
    iconTheme: {
      primary: '#E11D48',
      secondary: '#FFFFFF',
    },
  });
};
