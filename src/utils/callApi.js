export default async (action) => {
    await fetch(`http://192.168.1.22:3000?action=${action}`, {
        method: 'GET',
        credentials: 'include',
    }).catch(() => {})
}