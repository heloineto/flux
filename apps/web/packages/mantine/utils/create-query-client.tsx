import {
  hideNotification,
  showNotification,
  updateNotification,
} from '@mantine/notifications';
import { MutationCache, QueryCache, QueryClient } from '@tanstack/react-query';
import posthog from 'posthog-js';

export function createQueryClient() {
  return new QueryClient({
    queryCache: new QueryCache({
      onError: (error, query) => {
        console.error(error);
        posthog.captureException(error);

        const showErrorNotification = getBooleanValue(
          query.meta?.showErrorNotification,
          false
        );

        if (!showErrorNotification) {
          return;
        }

        showNotification({
          title: 'Ocorreu um erro',
          message: error.message,
          color: 'red',
        });
      },
    }),
    mutationCache: new MutationCache({
      onMutate: (_variables, mutation) => {
        const showLoadingNotification = getBooleanValue(
          mutation.meta?.showLoadingNotification,
          true
        );

        if (!showLoadingNotification) {
          return;
        }

        const notificationId = showNotification({
          id: String(mutation.mutationId),
          title: 'Carregando...',
          message: 'Aguarde um momento',
          loading: true,
          autoClose: 5000,
        });

        return { notificationId };
      },
      onError: (error, _variables, _context, mutation) => {
        posthog.captureException(error);

        const showErrorNotification = getBooleanValue(
          mutation.meta?.showErrorNotification,
          true
        );

        if (!showErrorNotification) {
          return;
        }

        // FUTURE: Add error form (with a report button)
        updateNotification({
          id: String(mutation.mutationId),
          title: 'Ocorreu um erro',
          message: error.message,
          loading: false,
          color: 'red',
          autoClose: true,
        });
      },
      onSuccess: (_data, _variables, _context, mutation) => {
        const showSuccessNotification = getBooleanValue(
          mutation.meta?.showSuccessNotification,
          true
        );

        if (!showSuccessNotification) {
          hideNotification(String(mutation.mutationId));
          return;
        }

        const showLoadingNotification = getBooleanValue(
          mutation.meta?.showLoadingNotification,
          true
        );

        const notification = {
          title: 'Sucesso',
          message: 'Operação realizada com sucesso',
          loading: false,
          color: 'green',
          autoClose: 1000,
        };

        if (!showLoadingNotification) {
          showNotification(notification);
          return;
        }

        updateNotification({
          id: String(mutation.mutationId),
          ...notification,
        });
      },
    }),
  });
}

function getBooleanValue(value: unknown, defaultValue: boolean): boolean {
  if (typeof value === 'boolean') {
    return value;
  }

  return defaultValue;
}
