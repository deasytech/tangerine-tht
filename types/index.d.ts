export interface Country {
  name: {
    common: string;
  };
}

export interface ParamsProps {
  params: { slug: string };
}

export interface SearchParamsProps {
  searchParams: { [key: string]: string | undefined };
}

export interface URLProps {
  params: { id: string };
  searchParams: { [key: string]: string | undefined };
}