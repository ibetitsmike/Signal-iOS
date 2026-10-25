import{j as f,f as _,s as T,u as S,z as b}from"./iframe-DwmVy7SQ.js";import{a as g,A as E}from"./meta-CT6GdK4g.js";import{d as v}from"./storyPlayHelpers-_VqAI56j.js";import{c as B}from"./orpc-sAt07-6s.js";import{c as P,g as R}from"./workspaces-DVCSHIwS.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-B07ZFgJK.js";import"./pin-B7bBByyx.js";import"./AgentListItem-CDHdwnLa.js";import"./useWorkspaceStreamingStatusPhase-BkhDeBLo.js";import"./shield-BJlRjF-1.js";import"./AIView-Cw4ZT1Fh.js";import"./shell-NsnPoeBt.js";import"./useTranscriptContextMenu-BlHqP5bS.js";import"./ConfirmationModal-C1groiNk.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-ZY8y6PCJ.js";import"./sendDispatchModes-BJ8PBEam.js";import"./timelineReveal-HqQYIr77.js";import"./RightSidebar-BQa1W4kD.js";import"./PlanFileDialog-XDIy4dKd.js";import"./diffParser-DYf5q3Bd.js";import"./TimelinePanel-B7hLQBAD.js";import"./TerminalRouterContext-3wrzl_rm.js";import"./ForceDeleteModal-D-zrU_Xr.js";import"./workspace-D5uypDf7.js";import"./autoModelRouting-DEovgEig.js";const{expect:i,userEvent:d,within:o}=__STORYBOOK_MODULE_TEST__,se={...g,title:"App/MCP Plugin Tools",parameters:{...g.parameters,docs:{description:{component:"Discovered tools of an Agent Plugin MCP server in Settings. Plugin definitions stay read-only: the expandable list shows names only, while regular servers keep their editable allowlist."}}}},w="plugin:0123456789abcdef:docs",m="docs-plugin/docs",c="local-docs",y=["search_docs","fetch_page_property_item_with_pagination_and_rich_text_expansion_v2","read_doc","list_recent_changes","summarize_thread"];function k(){_();const e=P({id:"ws-mcp-plugin-tools",name:"mcp-plugin-tools",projectName:"xum"});return T(e),S(b("__global__"),{}),B({projects:R([e]),workspaces:[e],globalMcpServers:{[w]:{transport:"stdio",command:"bun run docs-server.ts",disabled:!1,plugin:{pluginName:"docs-plugin",serverName:"docs",sourceScope:"global",sourceLocation:".xum/plugins/docs-plugin"}},[c]:{transport:"stdio",command:"bun run docs-server.ts",disabled:!1}},mcpTestResults:new Map([[w,{success:!0,tools:y}],[c,{success:!0,tools:["search","read"]}]])})}function p(e,t){let a=o(e).getByRole("switch",{name:`Toggle ${t} enabled`});for(;a&&!o(a).queryByRole("button",{name:"Test connection"});)a=a.parentElement;const n=a?.parentElement;if(!n)throw new Error(`Row for ${t} not found`);return n}async function u(e){const t=await v(e),a=o(t);await d.click(await a.findByRole("button",{name:"MCP"})),await a.findByRole("switch",{name:`Toggle ${m} enabled`});for(const n of[m,c])await d.click(o(p(t,n)).getByRole("button",{name:"Test connection"}));return await o(p(t,m)).findByText("5 tools"),await o(p(t,c)).findByText("2 tools"),t}async function x(e){const t=p(e,m);await d.click(o(t).getByRole("button",{name:/^Tools: 5\b/}));for(const n of y)await o(t).findByText(n);await i(o(t).queryAllByRole("checkbox")).toHaveLength(0),await i(o(t).queryByRole("button",{name:"All"})).not.toBeInTheDocument();const a=p(e,c);await d.click(o(a).getByRole("button",{name:/^Tools: 2\/2\b/})),await i(await o(a).findAllByRole("checkbox")).toHaveLength(2)}const A={pixel:{matrix:{viewports:["laptop"]}}},s={render:()=>f.jsx(E,{setup:k}),parameters:A,play:async({canvasElement:e})=>{await u(e)}},r={...s,play:async({canvasElement:e})=>{await x(await u(e))}},h={pixel:{matrix:{viewports:["phone"]}}},L={viewport:{value:"mobile1",isRotated:!1}},l={...r,globals:L,parameters:h,play:async e=>{await i(e.parameters.pixel).toEqual(h.pixel),await x(await u(e.canvasElement)),window.innerWidth<768&&await i(document.documentElement.scrollWidth).toBeLessThanOrEqual(window.innerWidth)}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithMocks setup={setupPluginToolsStory} />,
  parameters: laptop,
  play: async ({
    canvasElement
  }) => {
    await openMcpSettingsAndTest(canvasElement);
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  ...SettingsCollapsed,
  play: async ({
    canvasElement
  }) => {
    await expandBothToolSections(await openMcpSettingsAndTest(canvasElement));
  }
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  ...SettingsExpanded,
  globals: phoneGlobals,
  parameters: phoneParameters,
  play: async context => {
    await expect(context.parameters.pixel).toEqual(phoneParameters.pixel);
    await expandBothToolSections(await openMcpSettingsAndTest(context.canvasElement));
    // The test-runner plays at desktop size; only Pixel/manager pin the phone width.
    if (window.innerWidth < 768) {
      await expect(document.documentElement.scrollWidth).toBeLessThanOrEqual(window.innerWidth);
    }
  }
}`,...l.parameters?.docs?.source}}};const re=["SettingsCollapsed","SettingsExpanded","SettingsExpandedPhone"];export{s as SettingsCollapsed,r as SettingsExpanded,l as SettingsExpandedPhone,re as __namedExportsOrder,se as default};
