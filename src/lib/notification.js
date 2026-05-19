import toast from 'react-hot-toast';

export const showSuccessToast = message => {
  toast.success(message, {
    style: {
      padding: '12px 16px',
      color: '#0F172A',
      background: '#FFFFFF',
      fontSize: '14px',
      fontWeight: '600',
      borderRadius: '12px',
      border: '1px solid #E2E8F0',
    },
    iconTheme: {
      primary: '#0284C7',
      secondary: '#FFFFFF',
    },
  });
};
