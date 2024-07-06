// src/sequence.ts

import {MiddlewareSequence, RequestContext} from '@loopback/rest';

export class MySequence extends MiddlewareSequence {
  async handle(context: RequestContext) {
    const {request, response} = context;
    const startTime = Date.now();
    const referer = request.headers.referer;
    const userAgent = request.headers['user-agent'];
    const requestIp = request.ip;

    // Log request start time and details
    console.log(`Request started at ${new Date(startTime).toISOString()}`);
    console.log(`Referer: ${referer}`);
    console.log(`User Agent: ${userAgent}`);
    console.log(`Request IP: ${requestIp}`);

    try {
      // Process the request
      await super.handle(context);

      // Log request completion time
      const completionTime = Date.now();
      console.log(`Request completed at ${new Date(completionTime).toISOString()}`);
    } catch (err) {
      // Log error time
      const errorTime = Date.now();
      console.log(`Error occurred at ${new Date(errorTime).toISOString()}`);
      throw err;
    }
  }
}
