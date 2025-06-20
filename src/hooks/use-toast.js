'use client';
import { toast } from 'sonner';

export const useToast = () => {
  const notifySuccess = (title, description) => {
    toast.success(title, {
      description,
    });
  };

  const notifyError = (title, description) => {
    toast.error(title, {
      description,
    });
  };

  const notifyInfo = (title, description) => {
    toast(title, {
      description,
    });
  };

  return { notifySuccess, notifyError, notifyInfo };
};
