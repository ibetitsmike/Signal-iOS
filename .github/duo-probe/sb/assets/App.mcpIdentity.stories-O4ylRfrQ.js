import{j as R,f as M,s as A,u as B,z as S}from"./iframe-DS5VyXLs.js";import{a as x,A as k}from"./meta-BWzge-eA.js";import{d as I}from"./storyPlayHelpers-_VqAI56j.js";import{c as _}from"./orpc-DZZSHgoi.js";import{c as W,g as P}from"./workspaces-BLRlQP3Y.js";import{n as H}from"./notion-mcp-uqTA382S.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-Dv3BeV3N.js";import"./pin-fK8qQ2Fu.js";import"./AgentListItem-CAAmLyAa.js";import"./useWorkspaceStreamingStatusPhase-CjjTic4i.js";import"./shield-BbzLR52p.js";import"./AIView-Bsvwuvut.js";import"./shell-DJ7G-zZU.js";import"./useTranscriptContextMenu-DNmeKPvc.js";import"./ConfirmationModal-D10R7Urj.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-Cthcbmic.js";import"./sendDispatchModes-Coi3kdkT.js";import"./timelineReveal-B9mUteaZ.js";import"./RightSidebar-C9xoLIA6.js";import"./PlanFileDialog-a1c-6TsR.js";import"./diffParser-x37EWTfF.js";import"./TimelinePanel-BhqA7Mw3.js";import"./TerminalRouterContext-BVlTfB7S.js";import"./ForceDeleteModal-Dhwxawg2.js";import"./workspace-D5uypDf7.js";import"./autoModelRouting-Bi5zLFGe.js";const{expect:n,userEvent:c,waitFor:q,within:a}=__STORYBOOK_MODULE_TEST__,ut={...x,title:"App/MCP Identity",parameters:{...x.parameters,docs:{description:{component:"Server-reported identity and host-decoded icons in MCP settings rows and the workspace MCP dialog. Branding appears after a connection test and lives in memory for the current configuration load; the configured key stays the primary label."}}}},i="notion-work",l="local-docs",m=`Server information: ${i}`,T=H;function O(t="http"){M();const o=W({id:"ws-mcp-identity",name:"mcp-server-identity",projectName:"xum"});return A(o),B(S("__global__"),{}),B(S(o.projectPath,o.id),{}),_({projects:P([o]),workspaces:[o],globalMcpServers:{[i]:{transport:t,url:"https://mcp.notion.com/mcp",disabled:!1},[l]:{transport:"stdio",command:"bun",args:["run","docs-server.ts"],disabled:!1}},mcpTestResults:new Map([[i,{success:!0,tools:["notion_ai_search","notion_fetch","notion_create_pages"],icon:T,serverInfo:{name:"Notion MCP",version:"1.2.0",description:"Search your workspace, fetch specs and PRDs, and track tasks with your team.",websiteUrl:"https://developers.notion.com/docs/mcp"}}],[l,{success:!0,tools:["search","read"]}]])})}function E(t,o){let e=t;for(;e&&!a(e).queryByRole("button",{name:o});)e=e.parentElement;if(!e)throw new Error(`Row with "${o}" not found`);return e}function p(t,o){return E(a(t).getByRole("switch",{name:`Toggle ${o} enabled`}),"Test connection")}async function d(t){const o=await I(t),e=a(o);return await c.click(await e.findByRole("button",{name:"MCP"})),await e.findByRole("switch",{name:`Toggle ${i} enabled`}),await n(e.queryByRole("button",{name:/Server information:/})).not.toBeInTheDocument(),o}async function b(t){for(const e of[i,l])await c.click(a(p(t,e)).getByRole("button",{name:"Test connection"}));const o=await a(p(t,i)).findByRole("button",{name:m});await n(o.querySelector("img")).toHaveAttribute("src",T),await a(p(t,i)).findByText("3 tools"),await a(p(t,l)).findByText("2 tools"),await n(a(p(t,l)).queryByRole("button",{name:/Server information:/})).not.toBeInTheDocument()}const F={pixel:{matrix:{viewports:["laptop"]}}},s={render:()=>R.jsx(k,{setup:O}),parameters:F,play:async({canvasElement:t})=>{await d(t)}},u={...s,play:async({canvasElement:t})=>{await b(await d(t))}},h={...s,play:async({canvasElement:t})=>{const o=await d(t);await b(o),await c.click(a(o).getByRole("button",{name:m}));const e=await a(document.body).findByRole("dialog",{name:`About ${i}`});await n(e.querySelector("img")).toHaveAttribute("src",T),await n(e).toHaveTextContent("Notion MCP"),await n(e).toHaveTextContent("v1.2.0"),await n(e).toHaveTextContent("http · https://mcp.notion.com"),await n(a(e).getByRole("link",{name:/Website/})).toHaveAttribute("href","https://developers.notion.com/docs/mcp"),await n(e).toHaveTextContent("Not a verified identity.")}},y={...s,render:()=>R.jsx(k,{setup:()=>O("auto")}),play:async({canvasElement:t})=>{const o=await d(t);await b(o),await c.click(a(o).getByRole("button",{name:m}));const e=await a(document.body).findByRole("dialog",{name:`About ${i}`});await n(e).toHaveTextContent("auto · https://mcp.notion.com")}},f={pixel:{matrix:{viewports:["phone"]}}},N={viewport:{value:"mobile1",isRotated:!1}},g={...s,globals:N,parameters:f,play:async t=>{await n(t.parameters.pixel).toEqual(f.pixel),await b(await d(t.canvasElement)),window.innerWidth<768&&await n(document.documentElement.scrollWidth).toBeLessThanOrEqual(window.innerWidth)}},r={...s,play:async({canvasElement:t})=>{await a(t).findByTestId("workspace-more-actions",{},{timeout:1e4}),await c.keyboard("{Control>}{Shift>}m{/Shift}{/Control}");const e=await a(document.body).findByRole("switch",{name:`Toggle ${i} MCP server`},{timeout:1e4});await n(e.closest('[role="dialog"]')).not.toHaveAttribute("aria-busy");const w=E(e,"Fetch Tools");await n(a(w).queryByRole("button",{name:m})).not.toBeInTheDocument(),await c.click(a(w).getByRole("button",{name:"Fetch Tools"}));const C=await a(w).findByRole("button",{name:m});await n(C.querySelector("img")).toHaveAttribute("src",T),await q(()=>n(a(w).getByRole("button",{name:"Refresh Tools"})).toBeVisible())}},v={...r,globals:N,parameters:f,play:async t=>{await n(t.parameters.pixel).toEqual(f.pixel),await r.play?.(t),window.innerWidth<768&&await n(document.documentElement.scrollWidth).toBeLessThanOrEqual(window.innerWidth)}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithMocks setup={setupIdentityStory} />,
  parameters: laptop,
  play: async ({
    canvasElement
  }) => {
    await openMcpSettings(canvasElement);
  }
}`,...s.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  ...SettingsBeforeTest,
  play: async ({
    canvasElement
  }) => {
    await testBothServers(await openMcpSettings(canvasElement));
  }
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  ...SettingsBeforeTest,
  play: async ({
    canvasElement
  }) => {
    const dialog = await openMcpSettings(canvasElement);
    await testBothServers(dialog);
    await userEvent.click(within(dialog).getByRole("button", {
      name: INFO_BUTTON
    }));
    const popover = await within(document.body).findByRole("dialog", {
      name: \`About \${NOTION}\`
    });
    await expect(popover.querySelector("img")).toHaveAttribute("src", NOTION_ICON);
    await expect(popover).toHaveTextContent("Notion MCP");
    await expect(popover).toHaveTextContent("v1.2.0");
    await expect(popover).toHaveTextContent("http · https://mcp.notion.com");
    await expect(within(popover).getByRole("link", {
      name: /Website/
    })).toHaveAttribute("href", "https://developers.notion.com/docs/mcp");
    await expect(popover).toHaveTextContent("Not a verified identity.");
  }
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  ...SettingsBeforeTest,
  render: () => <AppWithMocks setup={() => setupIdentityStory("auto")} />,
  play: async ({
    canvasElement
  }) => {
    const dialog = await openMcpSettings(canvasElement);
    await testBothServers(dialog);
    await userEvent.click(within(dialog).getByRole("button", {
      name: INFO_BUTTON
    }));
    const popover = await within(document.body).findByRole("dialog", {
      name: \`About \${NOTION}\`
    });
    await expect(popover).toHaveTextContent("auto · https://mcp.notion.com");
  }
}`,...y.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  ...SettingsBeforeTest,
  globals: phoneGlobals,
  parameters: phoneParameters,
  play: async context => {
    await expect(context.parameters.pixel).toEqual(phoneParameters.pixel);
    await testBothServers(await openMcpSettings(context.canvasElement));
    // The test-runner plays at desktop size; only Pixel/manager pin the phone width.
    if (window.innerWidth < 768) {
      await expect(document.documentElement.scrollWidth).toBeLessThanOrEqual(window.innerWidth);
    }
  }
}`,...g.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  ...SettingsBeforeTest,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    // The workspace menu bar owns this shortcut, and it mounts with the lazy workspace page
    // (T3 #5971), after the settings button.
    await canvas.findByTestId("workspace-more-actions", {}, {
      timeout: 10000
    });
    await userEvent.keyboard("{Control>}{Shift>}m{/Shift}{/Control}");
    // The modal loads lazily (#5971): a "Loading…" dialog shows first, and the loaded modal
    // replaces it with a new dialog element. A handle to the first dialog goes stale (#7310), so
    // wait for the loaded modal's own switch.
    const toggle = await within(document.body).findByRole("switch", {
      name: \`Toggle \${NOTION} MCP server\`
    }, {
      timeout: 10000
    });
    await expect(toggle.closest('[role="dialog"]')).not.toHaveAttribute("aria-busy");
    const row = rowContaining(toggle, "Fetch Tools");
    await expect(within(row).queryByRole("button", {
      name: INFO_BUTTON
    })).not.toBeInTheDocument();
    await userEvent.click(within(row).getByRole("button", {
      name: "Fetch Tools"
    }));
    const badge = await within(row).findByRole("button", {
      name: INFO_BUTTON
    });
    await expect(badge.querySelector("img")).toHaveAttribute("src", NOTION_ICON);
    await waitFor(() => expect(within(row).getByRole("button", {
      name: "Refresh Tools"
    })).toBeVisible());
  }
}`,...r.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  ...WorkspaceModalAfterFetch,
  globals: phoneGlobals,
  parameters: phoneParameters,
  play: async context => {
    await expect(context.parameters.pixel).toEqual(phoneParameters.pixel);
    await WorkspaceModalAfterFetch.play?.(context);
    if (window.innerWidth < 768) {
      await expect(document.documentElement.scrollWidth).toBeLessThanOrEqual(window.innerWidth);
    }
  }
}`,...v.parameters?.docs?.source}}};const ht=["SettingsBeforeTest","SettingsAfterTest","SettingsServerDetails","SettingsAutoTransport","SettingsPhone","WorkspaceModalAfterFetch","WorkspaceModalPhone"];export{u as SettingsAfterTest,y as SettingsAutoTransport,s as SettingsBeforeTest,g as SettingsPhone,h as SettingsServerDetails,r as WorkspaceModalAfterFetch,v as WorkspaceModalPhone,ht as __namedExportsOrder,ut as default};
