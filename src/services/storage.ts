export function get(id: string): any {
  const data = localStorage.getItem(id);

  if (data) {
    return JSON.parse(atob(data));
  }

  return null;
}

export function set(id: string, data: any): void {
  localStorage.setItem(id, btoa(JSON.stringify(data)));
}
