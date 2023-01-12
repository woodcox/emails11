module.exports = async (code, btn-href, btn-text) => {
  return `<div>
  <!--[if mso]>
    <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="{{ btn-href }}" style="v-text-anchor:middle; height: {{ meta.ctaButtonHeight }}; width: {{ meta.ctaButtonWidth }}" class="button-mso" arcsize="10%" stroke="f" fillcolor="{{ meta.ctaButtonColor }}">
    <w:anchorlock/>
      <center>
        <![endif]-->
          <a class="button" href="${btn-href}">${btn-text}</a>
        <!--[if mso]>
      </center>
    </v:roundrect>
  <![endif]-->
  </div>
  <br>`;
});