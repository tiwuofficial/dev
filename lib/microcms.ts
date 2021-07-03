import { createClient } from 'microcms-js-sdk';

const client = createClient({
  serviceDomain: process.env.MICROCMS_ENDPOINT ?? '',
  apiKey: process.env.MICROCMS_API_KEY ?? '',
});

export type Work = {
  id: string,
  title: string,
}

type WorksAPIResponse = {
  contents: Work[]
}

export const getWorkList = async (): Promise<Work[]> => {
  const response = await client.get<WorksAPIResponse>({
    endpoint: 'works',
  });
  return response.contents;
};

export type About = {
  text: string,
}


export const getAbout = async (): Promise<About> => {
  return await client.get({
    endpoint: 'about',
  });
};