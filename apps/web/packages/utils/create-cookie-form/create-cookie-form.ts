'use client';
import { useEffect } from 'react';
import type {
  DefaultValues,
  FieldValues,
  UseFormProps,
  UseFormReturn,
} from 'react-hook-form';
import { useForm as useRHFForm } from 'react-hook-form';
import type { z } from 'zod';
import cookies from 'js-cookie';

type AsyncDefaultValues<TFieldValues> = (
  payload?: unknown
) => Promise<TFieldValues>;

/**
 * Get utils to create a form with it's values saved in a cookie
 */
export function createCookieForm<
  TFieldValues extends FieldValues = FieldValues,
  TDefaultValues extends
    | DefaultValues<TFieldValues>
    | AsyncDefaultValues<TFieldValues> =
    | DefaultValues<TFieldValues>
    | AsyncDefaultValues<TFieldValues>,
>({
  defaultValues,
  schema,
  cookieName,
}: {
  defaultValues: TDefaultValues;
  schema: z.ZodSchema<TDefaultValues>;
  cookieName: string;
}) {
  const getDefaultValues = (formCookie: string | undefined) => {
    if (!formCookie) return defaultValues;

    try {
      const parsedValue = JSON.parse(formCookie);
      const parsedResult = schema.safeParse(parsedValue);

      if (!parsedResult.success) {
        return defaultValues;
      }

      return parsedResult.data;
    } catch {
      return defaultValues;
    }
  };

  function useForm<TContext = unknown, TTransformedValues = TFieldValues>({
    formCookie,
    ...props
  }: UseFormProps<TFieldValues, TContext, TTransformedValues> & {
    formCookie?: string;
  }): UseFormReturn<TFieldValues, TContext, TTransformedValues> {
    'use no memo';
    const form = useRHFForm<TFieldValues, TContext, TTransformedValues>({
      ...props,
      defaultValues: getDefaultValues(formCookie),
    });

    useEffect(() => {
      /**
       * TODO: rhf is still working on react compiler compatibility. update this once it's fixed.
       * also remove the 'use no memo' comment.
       */
      // eslint-disable-next-line react-hooks/incompatible-library
      const subscription = form.watch((values) => {
        cookies.set(cookieName, JSON.stringify(values));
      });
      return () => subscription.unsubscribe();
    }, [form]);

    return form;
  }

  return { getDefaultValues, useForm };
}
