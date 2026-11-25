export const Bank = {
    Inter: 'INTER',
    Itau: 'ITAU',
    Nubank: 'NUBANK'
} as const;

export const isValidBank = (value: unknown) : value is Bank => {
    return (Object.values(Bank) as unknown[]).includes(value)
}

export type Bank = typeof Bank[keyof typeof Bank]