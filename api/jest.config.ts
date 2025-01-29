import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node', // Usa 'node' porque estás probando código backend
  transform: {
    '^.+\\.ts$': 'ts-jest', // Transforma TypeScript con ts-jest
  },
  moduleFileExtensions: ['ts', 'js', 'json'],
};

export default config;
