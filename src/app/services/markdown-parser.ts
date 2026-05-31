export interface BlogMeta {
  title?: string;
  description?: string;
  date?: string;
  tags?: string[];
  slug?: string;
}

export function parseMarkdown(md: string): {
  meta: BlogMeta;
  content: string;
} {
  const regex = /^---\s*([\s\S]*?)\s*---/;
  const match = md.match(regex);

  if (!match) {
    return { meta: {}, content: md };
  }

  const rawMeta = match[1];
  const content = md.slice(match[0].length).trim();

  const meta: BlogMeta = {};

  rawMeta.split('\n').forEach((line) => {
    const [key, ...rest] = line.split(':');
    if (!key || !rest.length) return;

    const value = rest.join(':').trim();

    if (key === 'tags') {
      meta.tags = value.split(',').map((v) => v.trim());
    } else {
      (meta as any)[key.trim()] = value;
    }
  });

  return { meta, content };
}
