import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  plugins: {
    CapacitorHttp: {
      enabled: true,
    },
  },
  appId: 'io.ionic.starter',
  appName: 'tired',
  webDir: 'www'
};



export default config;
