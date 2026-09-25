// 공통 요청 함수
export async function postRequest(url: string, data: any) {
    const response = await fetch(`http://localhost:8080${url}`, {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
        throw new Error('Join Failed : ' + result.message);
    }

    return result; // 성공 시 데이터 반환
}