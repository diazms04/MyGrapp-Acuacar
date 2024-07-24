export class IdentificacionFuente {
    ipserver = "http://localhost:5500"

    async postIdentificacionFuente(objectRegister) {
        const url = `${this.ipserver}/api/v1/identificaciondelafuente`;
        const params = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify([objectRegister])
        };
        const response = await fetch(url, params);
        const result = await response.json();
        if (response.status != 201) return alert(result?.msg);

        return result;
    }
}
