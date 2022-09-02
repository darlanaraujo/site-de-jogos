

export const setBanco = (banco, dados) => {
    localStorage.setItem(banco, JSON.stringify(dados))
};

export const getBanco = (banco) => {
    return JSON.parse(localStorage.getItem(banco)) ?? [];
};