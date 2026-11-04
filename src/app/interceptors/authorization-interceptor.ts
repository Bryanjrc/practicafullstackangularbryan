import { HttpInterceptorFn } from '@angular/common/http';
import { Injectable } from '@angular/core';

export const authorizationInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
