import { createClient } from 'microcms-js-sdk';

const client = createClient({
  serviceDomain: process.env.MICROCMS_ENDPOINT ?? '',
  apiKey: process.env.MICROCMS_API_KEY ?? '',
});

type Img = {
  url: string,
  height: number,
  width: number,
}

export type Work = {
  id: string,
  title: string,
  url: string,
  icon: Img,
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

export const getWork = async (id: Work['id']): Promise<Work> => {
  return await client.get({
    endpoint: 'works',
    contentId: id,
  });
};

export type About = {
  text: string,
}

export const getAbout = async (): Promise<About> => {
  return await client.get({
    endpoint: 'about',
  });
};

export type Account = {
  id: string,
  service: string,
}

type AccountsAPIResponse = {
  contents: Account[]
}

export const getAccountList = async (): Promise<Account[]> => {
  const response = await client.get<AccountsAPIResponse>({
    endpoint: 'accounts',
  });
  return response.contents;
};