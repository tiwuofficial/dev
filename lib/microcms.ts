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
  description: string,
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

export type Blog = {
  id: string,
  title: string,
  bodyList: string[],
  updatedAt: Img,
}

type BlogAPIResponse = {
  id: string,
  title: string,
  bodyList: {
    fieldId: "html" | "richEditor",
    richEditor: string,
    html: string,
  }[],
  updatedAt: Img,
}

type BlogsAPIResponse = {
  contents: BlogAPIResponse[]
}

const convertBlogFromResponse = (response: BlogAPIResponse): Blog => {
  const bodyList = response.bodyList.map(body => {
    return body.fieldId === "richEditor" ? body.richEditor : body.html;
  });
  return {
    id: response.id,
    title: response.title,
    bodyList,
    updatedAt: response.updatedAt
  }
}

export const getBlogList = async (): Promise<Blog[]> => {
  const response = await client.get<BlogsAPIResponse>({
    endpoint: 'blogs',
  });
  return response.contents.map(content => {
    return convertBlogFromResponse(content);
  });
};

export const getBlog = async (id: Blog['id']): Promise<Blog> => {
  const response = await client.get<BlogAPIResponse>({
    endpoint: 'blogs',
    contentId: id,
  });
  return convertBlogFromResponse(response);
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
  url: string,
  account_id: string,
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