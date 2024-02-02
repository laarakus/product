import http from 'node:http';
import url from 'node:url';
import httpProxy from 'http-proxy';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { appModule, Routes } from './infrastructure/nest-js-controllers';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    appModule,
    new FastifyAdapter(),
  );
  await app.listen(3000);
}

bootstrap();

const proxy = httpProxy.createProxyServer();
const options = {
  '/nestjs-app': 'http://localhost:3000',
  '/express-app': 'http://localhost:3001',
};
http
  .createServer((req, res) => {
    const pathname = url.parse(req.url).pathname;
    for (const [pattern, target] of Object.entries(options)) {
      if (pathname === pattern || pathname.startsWith(pattern + '/')) {
        console.log('dqsdqs', req, res, target);
        proxy.web(req, res, { target });
      }
    }
  })
  .listen(8080);
