import{dx as t,j as a,d as g}from"./iframe-DwmVy7SQ.js";import{l as h}from"./meta-CT6GdK4g.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-B07ZFgJK.js";import"./pin-B7bBByyx.js";import"./AgentListItem-CDHdwnLa.js";import"./useWorkspaceStreamingStatusPhase-BkhDeBLo.js";import"./shield-BJlRjF-1.js";import"./AIView-Cw4ZT1Fh.js";import"./shell-NsnPoeBt.js";import"./useTranscriptContextMenu-BlHqP5bS.js";import"./ConfirmationModal-C1groiNk.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-ZY8y6PCJ.js";import"./sendDispatchModes-BJ8PBEam.js";import"./timelineReveal-HqQYIr77.js";import"./RightSidebar-BQa1W4kD.js";import"./PlanFileDialog-XDIy4dKd.js";import"./diffParser-DYf5q3Bd.js";import"./TimelinePanel-B7hLQBAD.js";import"./TerminalRouterContext-3wrzl_rm.js";import"./ForceDeleteModal-D-zrU_Xr.js";const o=["electron 34 release date","electron 34 breaking changes","electron 34 chromium version"],d=`<style>
.container {
  align-items: center;
  border-radius: 8px;
  display: flex;
  font-family: Google Sans, Roboto, sans-serif;
  font-size: 14px;
  line-height: 20px;
  padding: 8px 12px;
}
.chip {
  display: inline-block;
  border: solid 1px;
  border-radius: 16px;
  min-width: 14px;
  padding: 5px 16px;
  text-align: center;
  user-select: none;
  margin: 0 8px;
}
.carousel {
  overflow: auto;
  scrollbar-width: none;
  white-space: nowrap;
  padding-right: 12px;
}
.headline {
  display: flex;
  margin-right: 4px;
}
@media (prefers-color-scheme: light) {
  .container { background-color: #fafafa; box-shadow: 0 0 0 1px #0000000f; }
  .chip { background-color: #ffffff; border-color: #d2d2d2; color: #5e5e5e; }
  .logo-dark { display: none; }
}
@media (prefers-color-scheme: dark) {
  .container { background-color: #1f1f1f; box-shadow: 0 0 0 1px #ffffff26; }
  .chip { background-color: #2c2c2c; border-color: #3c4043; color: #fff; }
  .logo-light { display: none; }
}
</style>
<div class="container">
  <div class="headline">
    <svg class="logo-light" width="18" height="18" viewBox="9 9 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill="#4285F4" d="M42.81 26.92c0-1.33-.11-2.6-.32-3.83H26.5v7.24h9.14a7.81 7.81 0 0 1-3.39 5.13v4.26h5.49c3.21-2.96 5.07-7.32 5.07-12.8Z"></path>
    </svg>
    <svg class="logo-dark" width="18" height="18" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="23" fill="#FFF" r="22"></circle>
    </svg>
  </div>
  <div class="carousel">
    <a class="chip" href="https://www.google.com/search?q=electron+34+release+date">electron 34 release date</a>
    <a class="chip" href="https://www.google.com/search?q=electron+34+breaking+changes">electron 34 breaking changes</a>
    <a class="chip" href="https://www.google.com/search?q=electron+34+chromium+version">electron 34 chromium version</a>
  </div>
</div>
`,{waitFor:n,within:p}=__STORYBOOK_MODULE_TEST__,H={...h,title:"App/Chat/Tools/GoogleSearch",component:t};function c(s){const e=g.c(5);let l;e[0]!==s.label?(l=a.jsx("div",{className:"text-muted-foreground text-xs font-medium tracking-wide uppercase",children:s.label}),e[0]=s.label,e[1]=l):l=e[1];let r;return e[2]!==s.children||e[3]!==l?(r=a.jsxs("section",{className:"flex flex-col gap-2",children:[l,s.children]}),e[2]=s.children,e[3]=l,e[4]=r):r=e[4],r}const i={render:()=>a.jsx("div",{className:"bg-background p-6",children:a.jsxs("div",{className:"flex w-full max-w-2xl flex-col gap-6",children:[a.jsx(c,{label:"Completed with suggestions (expanded via play)",children:a.jsx(t,{args:{queries:o},result:{search_suggestions:d},status:"completed"})}),a.jsx(c,{label:"Executing (expanded via play)",children:a.jsx(t,{args:{queries:o.slice(0,2)},status:"executing"})}),a.jsx(c,{label:"Failed (expanded via play)",children:a.jsx(t,{args:{queries:[o[0]??""]},result:{success:!1,error:"Search quota exceeded"},status:"failed"})}),a.jsx(c,{label:"Single query, collapsed",children:a.jsx(t,{args:{queries:[o[0]??""]},result:{search_suggestions:d},status:"completed"})})]})}),play:async({canvasElement:s})=>{const e=p(s),l=e.getAllByText("Google Search");l[0]?.click(),l[1]?.click(),l[2]?.click(),await n(()=>e.getByText("Suggested searches")),await n(()=>e.getByText("Searching")),await n(()=>e.getByText("Search quota exceeded"))}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div className="bg-background p-6">
      <div className="flex w-full max-w-2xl flex-col gap-6">
        <GallerySection label="Completed with suggestions (expanded via play)">
          <GoogleSearchToolCall args={{
          queries: SAMPLE_GOOGLE_SEARCH_QUERIES
        }} result={{
          search_suggestions: SAMPLE_SEARCH_SUGGESTIONS_HTML
        }} status="completed" />
        </GallerySection>
        <GallerySection label="Executing (expanded via play)">
          <GoogleSearchToolCall args={{
          queries: SAMPLE_GOOGLE_SEARCH_QUERIES.slice(0, 2)
        }} status="executing" />
        </GallerySection>
        <GallerySection label="Failed (expanded via play)">
          <GoogleSearchToolCall args={{
          queries: [SAMPLE_GOOGLE_SEARCH_QUERIES[0] ?? ""]
        }} result={{
          success: false,
          error: "Search quota exceeded"
        }} status="failed" />
        </GallerySection>
        <GallerySection label="Single query, collapsed">
          <GoogleSearchToolCall args={{
          queries: [SAMPLE_GOOGLE_SEARCH_QUERIES[0] ?? ""]
        }} result={{
          search_suggestions: SAMPLE_SEARCH_SUGGESTIONS_HTML
        }} status="completed" />
        </GallerySection>
      </div>
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    // Expand the first three instances (completed, executing, failed); keep the
    // last one collapsed to also snapshot the collapsed header state.
    const headers = canvas.getAllByText("Google Search");
    headers[0]?.click();
    headers[1]?.click();
    headers[2]?.click();
    await waitFor(() => canvas.getByText("Suggested searches"));
    await waitFor(() => canvas.getByText("Searching"));
    await waitFor(() => canvas.getByText("Search quota exceeded"));
  }
}`,...i.parameters?.docs?.source}}};const B=["Gallery"];export{i as Gallery,B as __namedExportsOrder,H as default};
