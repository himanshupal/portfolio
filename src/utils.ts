export const getClass = (...classes: Array<string | boolean | undefined>) => classes.filter(Boolean).join(' ')
