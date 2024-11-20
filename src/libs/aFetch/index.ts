
export async function sendRequest(url: string, method: string, body: any = null) {
    try {
        const res = await fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: body ? JSON.stringify(body) : null
        });

        if (!res?.ok) {
            throw new Error('Request failed with status: ' + res?.status);
        }

        const data = await res?.json();

        return data;
    } catch (error: any) {
        console.error('Error send request: ', error?.message);
        throw error;
    }
}