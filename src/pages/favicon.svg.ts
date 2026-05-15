const favicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="14" fill="#11130f" />
  <path d="M10 35h11l5-16 9 29 6-13h13" fill="none" stroke="#c7f45d" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M13 17h38" stroke="#2b6ff6" stroke-width="5" stroke-linecap="round" />
  <path d="M13 49h16" stroke="#e64b35" stroke-width="5" stroke-linecap="round" />
</svg>`;

export const GET = () =>
  new Response(favicon, {
    headers: {
      "Cache-Control": "public, max-age=31536000, immutable",
      "Content-Type": "image/svg+xml; charset=utf-8",
    },
  });
