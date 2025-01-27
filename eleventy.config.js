import juice from "juice";
import meta from "./src/_data/meta.js";
const now = String(Date.now());

export default async function (eleventyConfig) {
  // DEV SERVER
  eleventyConfig.setServerOptions({
    port: 8080,
    watch: ["src/sass", "dist/assets/css/*.css"]
  });
  
  /* WATCH */
  eleventyConfig.addWatchTarget("./src/sass/");
  eleventyConfig.setWatchThrottleWaitTime(100);

  /* SHORTCODES */
  // Add cache busting with {% version %} time string
  eleventyConfig.addShortcode('version', function () {
    return now
  });

  // Add cache busting by using {{ 'myurl' | version }}
  eleventyConfig.addFilter("version", (url) => {
    const [urlPart, paramPart] = url.split("?");
    const params = new URLSearchParams(paramPart || "");
    params.set("v", `${now}`);
    return `${urlPart}?${params}`;
  });
  
  // Get current Year for text in footer using {% year %}
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
  
  // Create a button that will accept variables for href and the btn-text value using {% var-btn "https://www.google.co.uk/" "Google" %}
  eleventyConfig.addShortcode("var-btn", function(btnHref, btnText) {
    return `<div>
    <!--[if mso]>
      <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${btnHref}" style="v-text-anchor:middle; height: ${meta.ctaButtonHeight}; width: ${meta.ctaButtonWidth}" class="button-mso" arcsize="10%" stroke="f" fillcolor="${meta.ctaButtonColor}">
      <w:anchorlock/>
        <center>
          <![endif]-->
            <a class="button" href="${btnHref}">${btnText}</a>
          <!--[if mso]>
        </center>
      </v:roundrect>
    <![endif]-->
    </div>
    <br>`;
  });
  
  // Insert spacer for emails using {% emailSpacer %} or {% emailSpacer 'small' %}
  eleventyConfig.addShortcode(
    "emailSpacer",
    (size = "") =>
      `<tr><td class="spacer${size ? `-${size}` : ""}">&#32;</td></tr>`
  );
  
  /* PRODUCTION OR DEV */
  eleventyConfig.addNunjucksAsyncFilter("emailHtml", (raw, callback) => {
    if (meta.environment === "prod") {
      callback(null, juice(raw));
    } else {
      callback(null, raw);
    }
  });

  return {
    templateFormats: ['html', 'njk', 'liquid', 'md', '11ty.js'],
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
