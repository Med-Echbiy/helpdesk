async function fetchRepo() {
  const req = await fetch("http://localhost:3000/api/courses");
  const data = await req.json();
  const siteInfo = data.site_info;
  const seoData = data.seoData;
  return {
    siteName: siteInfo.site_name,
    favicon: seoData.siteIcon,
    customDomain: siteInfo.custom_domain,
    logoTextExtension: siteInfo.logotext_extension,
    setLogo: siteInfo.setlogo,
    logoUrl: siteInfo.logourl,
    analyticsTrackerId: siteInfo.analytics_tracker_id,
    blogNewsletterCatalogueListview:
      siteInfo.blog_newsletter_catalogue_listview,
    loadingAnimation: siteInfo.loadinganimation,
    userIcon: siteInfo.user_icon,
    botIcon: siteInfo.bot_icon,
    title: siteInfo.site_name,
    description: seoData.metaDesc,
    keywords: seoData.metaKeywords,
    siteIcon: seoData.siteIcon,
    siteBanner: seoData.siteBanner,
    siteTitle: seoData.siteTitle,
    setLogoSeoData: seoData.setlogo,
  };
}

const Header = async () => {
  // const pageMetadata = await fetchRepo();
  // console.log(pageMetadata, "========");

  return (
    <>
      {/* <title>{pageMetadata.siteName}</title> */}
      <meta name='description' content={pageMetadata.description} />
      <meta name='keywords' content={pageMetadata.keywords} />
      <meta name='robots' content='index, follow' />

      <meta property='og:type' content='website' />
      <meta property='og:title' content={pageMetadata.title} />
      <meta property='og:url' content={pageMetadata.customDomain} />
      <meta property='og:site_name' content={pageMetadata.siteName} />
      <meta property='og:image' content={pageMetadata.siteBanner} />

      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={pageMetadata.title} />
      <meta name='twitter:description' content={pageMetadata.description} />
      <meta name='twitter:image' content={pageMetadata.siteBanner} />

      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href={pageMetadata.favicon}
      />
      <link rel='shortcut icon' sizes='32x32' href={pageMetadata.favicon} />
      <link rel='icon' sizes='16x16' href={pageMetadata.favicon} />
      <link rel='icon' href={pageMetadata.favicon} />
    </>
  );
};
export default Header;
