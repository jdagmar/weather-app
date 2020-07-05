import { writeFile } from 'fs';

const targetPath = './src/environments/environment.prod.ts';

const envConfigFile = `export const environment = {
   production: true,
   openWeatherMap : {
        apiKey: '${process.env.OPENWEATHERMAP_API_KEY}'
    },
};
`;

writeFile(targetPath, envConfigFile, 'utf8', (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
});
