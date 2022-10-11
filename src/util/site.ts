import request from './request'
import type { Site, OptionsOne, ResultOnly, ResultOnlyError } from '../types'
import config from '../config'

const getSiteInfo = async (options: { site: string | number }, query: OptionsOne | null = null): Promise<ResultOnly<Site> | ResultOnlyError > => {
  if (options.site) {
    let url: string
    query === null
      ? url = `${config.api.base}/${String(options.site)}`
      : url = `${config.api.base}/${String(options.site)}?${new URLSearchParams(Object(query)).toString()}`
    try {
      const req: { data: Site, status: number } = await request({ site: options.site, url })
      return {
        data: req.data,
        status: req.status
      }
    } catch (error: any) {
      return {
        data: null,
        status: error
      }
    }
  } else {
    throw new Error('Require id site o url')
  }
}

export default getSiteInfo
