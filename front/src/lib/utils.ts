/**
 * Check if the current environment is development.
 */
export const isDev = (): boolean => {
    return process.env.NODE_ENV === 'development'
}