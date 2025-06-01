export async function getCurrentUser() {
    const res = await fetch('/api/me', {
        method: 'GET',
        credentials: 'include', // 👈 needed to send cookies
    });

    if (!res.ok) return null;

    const data = await res.json();
    return data.user;
}
