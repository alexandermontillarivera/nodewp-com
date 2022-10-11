export interface Site {
  ID: number
  name: string
  description: string
  URL: string
  jetpack: boolean
  jetpack_connection: boolean
  subscribers_count: number
  lang: string | false
  icon: SiteIcon
  logo: SiteLogo
  visible: boolean | null
  is_private: boolean
  is_coming_soon: boolean
  is_following: boolean
  organization_id: number
  meta: SiteMeta
  launch_status: boolean
  site_migration: string[] | null
  is_fse_active: boolean
  is_core_site_editor_enabled: boolean
  is_wpcom_atomic: boolean
}

interface SiteMeta {
  links: {
    self: string
    help: string
    posts: string
    comments: string
    xmlrpc: string
  }
}

interface SiteLogo {
  id: string
  sizes: string[]
  url: string
}

interface SiteIcon {
  img: string
  ico: string
}

export default Site
