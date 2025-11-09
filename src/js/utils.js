export function formatDate(date){
   return new Date(date).toLocaleDateString('vi-VN');
}


export function debounce(fn, delay = 500) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };
}

export async function fetchJson(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed fetch");
  return res.json();
}

