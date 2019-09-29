export const frontendPrefix: string = process.env.__FRONTEND_PREFIX || ''

export const NEXT_DATA_KEY: string = `${frontendPrefix}__NEXT_DATA__`
export const NEXT_P_KEY: string = `${frontendPrefix}__NEXT_P`
export const NEXT_MOUNT_ELEMENT_ID: string = `${frontendPrefix}__next`
export const NEXT_PRELOAD_READY_KEY: string = `${frontendPrefix}__NEXT_PRELOADREADY`
