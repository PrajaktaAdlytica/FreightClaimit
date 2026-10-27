# Host FreightClaimKit on regular Hostinger PHP/HTML hosting

This is a compiled static React website. It does **not** need a Node.js web-app slot, PHP conversion, database, or server process. PHP/HTML hosting can serve its HTML, CSS, JavaScript, images and fonts directly.

You need an active web-hosting plan with an available ordinary website slot. Buying the domain alone does not provide hosting. If that website quota is also exhausted, use an existing suitable website slot or adjust your hosting plan.

## One-time setup

1. In hPanel → Websites → Add website, choose **Custom PHP/HTML website** (wording may be “Empty website”). Select the domain purchased in your account. Do not choose Node.js Web App or Website Builder.
2. Open the website Dashboard → Advanced → Git → **Connect with GitHub**. Authorize only the repository you need: `PrajaktaAdlytica/FreightClaimit`.
3. Select the **hostinger** branch. It contains compiled files with `index.html` and `.htaccess` at its root. Set the Root/Deploy directory to **public_html**, then deploy. Do not select `main`, `website`, `dist`, or `dist/server`. No npm/build command is needed in hPanel.
4. If your account shows the legacy Git interface instead, enter `https://github.com/PrajaktaAdlytica/FreightClaimit.git`, branch `hostinger`, and leave its optional deployment-directory field **blank** to use `public_html`. Follow the field help in your interface. Back up any existing site before clearing a non-empty deployment directory; never delete another live site's files blindly.
5. Open File Manager and verify `public_html/index.html`, `public_html/.htaccess`, `public_html/assets/`, and `public_html/brand/` exist. They must not sit inside another `dist` or `client` folder.
6. Check the domain connection in hPanel. Domains registered in the same Hostinger account normally connect during setup. If DNS is managed elsewhere, use the exact nameservers or A records shown for your hosting account. Preserve email/MX records. Do not guess an IP address.
7. Once DNS points correctly, open Dashboard → Security → SSL. Confirm SSL is Active or install it, then enable Force HTTPS. Verify both your root domain and www redirect as intended.
8. Test the homepage, mobile menu, intro skip/reduced motion, images, and direct reloads at `/products/freight-proof` and `/demo/cases/FC-208`. The included `.htaccess` supplies SPA routing; do not remove it.

## Updates

Push source changes to `main`. GitHub Actions installs dependencies, builds and runs the hosting tests, then publishes the compiled result to `hostinger`. Wait for the green workflow before deploying that branch. The connected GitHub deployment interface can auto-deploy; enable/check that option in hPanel. In the legacy interface use its webhook or click Deploy after each successful build.

Workflow: `.github/workflows/hostinger.yml`. Manual rebuild: Actions → Build Hostinger static website → Run workflow.

## Manual ZIP alternative

Upload the supplied `FreightClaimKit-hostinger.zip` to `public_html`, extract its **contents** there, and verify hidden `.htaccess` is included. This bypasses Git integration and the Node.js app quota. Back up the existing target first. The ZIP is generated from `website/dist/client`, not from the repository source.

## Launch boundaries

This is a concept preview with synthetic data. Forms generate local drafts; they do not send enquiries. Authentication, CRM, analytics, payments, real uploads and claim filing are not connected. `noindex,nofollow` remains intentional until launch approval. Before a public business launch, finalize legal/company information, connect a real enquiry service and configure domain-specific metadata/canonical URLs. Do not publish credentials in Git or frontend code.

## Official Hostinger guidance

- [Current Git integration](https://docs.hostinger.com/websites/git)
- [Add a website](https://www.hostinger.com/support/1583214-how-to-add-a-website-in-hostinger/)
- [Legacy Git deployment](https://www.hostinger.com/support/1583302-how-to-deploy-a-git-repository-in-hostinger/)
- [Point a domain](https://www.hostinger.com/support/1863967-how-to-point-a-domain-to-hostinger/)
- [SSL setup](https://docs.hostinger.com/websites/ssl)
- [Upload with File Manager](https://www.hostinger.com/support/1869114-how-to-upload-backups-with-file-manager-in-hostinger/)

Instructions researched against official documentation on 28 October 2026. Account interfaces and plan allowances can differ.
