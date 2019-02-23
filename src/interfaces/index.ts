export interface SocialLinkOptions {
  /**
   * Name of the social network.
   */
  name: string;
  /**
   * Full URL.
   */
  url: string;
  /**
   * FontAwesome icon name for the social brand.
   */
  iconName: string;
}


export interface MenuPageOptions {
  /**
   * Page title.
   */
  title: string;
  /**
   * Relative path to view page (as specified in router.ts).
   */
  url: string;
}


export interface SiteOwnerOptions {
  fullName: string;
  username?: string;
  email: string;
}
