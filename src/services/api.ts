const BASE_URL = 'http://10.0.2.2:3000';
//const BASE_URL = 'http://192.168.1.2:3000';

export async function getHealthData() {
  const res = await fetch(`${BASE_URL}/api/health`);
  if (!res.ok) {
    throw new Error('Erro ao buscar dados de saúde');
  }
  return res.json();
}
export async function getFallHistory() {
  const res = await fetch(`${BASE_URL}/api/falls`);
  if (!res.ok) {
    throw new Error('Erro ao buscar histórico de quedas');
  }
  return res.json();
}

export async function confirmFall(id: string) {
  const res = await fetch(`${BASE_URL}/api/fall/confirm`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id }),
  });

  if (!res.ok) {
    throw new Error('Erro ao confirmar queda');
  }
}


