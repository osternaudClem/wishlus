import type { Response } from 'express';

interface SendResponse {
  res: Response;
  status?: number;
  error?: boolean;
  datas?: unknown;
  other?: unknown;
  errorMessage?: string | null;
}

interface SuccessResponse {
  res: Response;
  datas?: unknown;
  other?: unknown;
}

interface ErrorResponse {
  res: Response;
  error?: string;
}

export const sendSuccess = ({
  res,
  datas = null,
  other = null,
}: SuccessResponse): Response => send({ res, status: 200, datas, other });

export const sendSuccessCache = ({
  res,
  datas = null,
  other = null,
}: SuccessResponse): Response => send({ res, status: 202, datas, other });

export const sendErrorServer = ({ res, error = '' }: ErrorResponse): Response =>
  send({ res, error: true, status: 500, errorMessage: error });

export const sendErrorNotFound = ({
  res,
  error = '',
}: ErrorResponse): Response =>
  send({ res, error: true, status: 404, errorMessage: error });

export const sendErrorForbidden = ({
  res,
  error = '',
}: ErrorResponse): Response =>
  send({ res, error: true, status: 403, errorMessage: error });

export const sendErrorBadRequest = ({
  res,
  error = '',
}: ErrorResponse): Response =>
  send({ res, error: true, status: 400, errorMessage: error });

const send = ({
  res,
  error = false,
  status = 200,
  datas = null,
  other = null,
  errorMessage = null,
}: SendResponse): Response => {
  let response: Partial<SendResponse> = {
    error,
    status,
  };

  if (error) {
    response.errorMessage = errorMessage;
  } else {
    response.datas = datas;
  }

  if (other) {
    response = {
      ...response,
      ...other,
    };
  }

  return res.status(status).json(response);
};
