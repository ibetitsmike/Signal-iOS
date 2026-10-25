import{j as p,d as ie,c as se,f as ce,e as le,S as j}from"./iframe-DpCW2UOM.js";import{a as Y,A as m}from"./meta-BwRgvoZ6.js";import{s as de}from"./chatSetup-48_rCYsC.js";import{a as pe,c as z}from"./messages-BbMCeQNx.js";import{w as Q,b as X}from"./storyPlayHelpers-_VqAI56j.js";import{n as ue}from"./notion-mcp-uqTA382S.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-Deyyg-fE.js";import"./pin-DuIYkyHL.js";import"./AgentListItem-3Vf8Zgi1.js";import"./useWorkspaceStreamingStatusPhase-CJy2TqN5.js";import"./shield-CrYDrR4O.js";import"./AIView-CvG2HY8V.js";import"./shell-ZYrtNCUY.js";import"./useTranscriptContextMenu-DyvYQxLv.js";import"./ConfirmationModal-DQrDMilx.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-D1Db6hA_.js";import"./sendDispatchModes-Cm5_ciDl.js";import"./timelineReveal-B8CyznN7.js";import"./RightSidebar-tIpngg7n.js";import"./PlanFileDialog-95EwQO2o.js";import"./diffParser-DScks9Dr.js";import"./TimelinePanel-BSxjzr0t.js";import"./TerminalRouterContext-CQ8sOp19.js";import"./ForceDeleteModal-BhMJFUD7.js";import"./workspaces-MVQPvkVv.js";import"./workspace-D5uypDf7.js";import"./orpc-DLtOjQkt.js";import"./autoModelRouting-BdgCPOKg.js";import"./git-Ekgdg9se.js";const{expect:a,userEvent:d,waitFor:B,within:r}=__STORYBOOK_MODULE_TEST__,Je={...Y,title:"App/MCP Identity/Chat",parameters:{...Y.parameters,docs:{description:{component:"Per-call MCP server identity frozen on tool parts and rendered by the production GenericToolCall header: badge with the short display name and the host-decoded icon resolved through mcp.icon. Rows without a snapshot render exactly as before."}}}},P="mcp__notion__notion_ai_search",G="mcp__notion__notion_fetch",H="mcp__local_docs__search",f="Server information: notion-work",E="1".repeat(32),me="2".repeat(32),L=ue,Z="NotionEnterpriseKnowledgeWorkspaceConnectorForSpecsPRDsAndTaskTracking0000000000";function q(e,t,n="Notion"){return{connection:{key:"notion-work",transport:"http",origin:"https://mcp.notion.com"},identity:{name:"Notion MCP",title:n,version:t,description:"Search your workspace, fetch specs and PRDs, and track tasks with your team.",websiteUrl:"https://developers.notion.com/docs/mcp"},source:"connection",iconRef:e}}const s=e=>({content:[{type:"text",text:e}]});function he(e){const t={type:"dynamic-tool",toolCallId:"notion-search",toolName:P,state:"output-available",input:{query:"workspace setup guide"},output:s("Found: Workspace setup guide; Development environment; Team onboarding."),...e.branded?{mcpServer:q(E,"1.2.0",e.longTitle?Z:"Notion")}:{}},n={type:"dynamic-tool",toolCallId:"notion-fetch",toolName:G,state:"output-available",input:{id:"workspace-setup-guide"},output:s("Workspace setup guide: clone the repository, run bun install, then make dev."),...e.branded?{mcpServer:q(e.historical?me:E,"1.1.0")}:{}},o={type:"dynamic-tool",toolCallId:"local-search",toolName:H,state:"output-available",input:{query:"setup"},output:s("docs/development.md: bun install; make dev.")},i={type:"dynamic-tool",toolCallId:"code",toolName:"code_execution",state:"output-available",input:{code:"return await mux.tool('notion_ai_search', { query: 'onboarding' });"},output:{success:!0,result:3,toolCalls:[],consoleOutput:[],duration_ms:42},nestedCalls:[{toolCallId:"nested-notion",toolName:P,input:{query:"onboarding"},output:s("Team onboarding checklist."),state:"output-available",mcpServer:q(E,"1.2.0")},{toolCallId:"nested-local",toolName:H,input:{query:"onboarding"},output:s("docs/onboarding.md"),state:"output-available"}]};return[t,n,o,...e.nested?[i]:[]]}function ee(e){return e.phone?se():ce(),le(["/home/user/projects/xum"]),de({workspaceId:`ws-mcp-tool-identity-${e.variant}`,workspaceName:"mcp-server-identity",projectName:"xum",mcpIcons:new Map([[E,L]]),messages:[pe("request",e.request,{historySequence:1,timestamp:j}),z("lookup",e.lookup,{historySequence:2,timestamp:j+1e3,toolCalls:e.toolCalls}),z("answer",e.answer,{historySequence:3,timestamp:j+2e3})]})}function v(e){const t=e.longTitle?"long-title":e.phone?"phone":e.nested?"nested":e.historical?"historical":e.branded?"branded":"plain";return ee({variant:t,phone:e.phone,request:"Find our workspace setup guide in Notion and check it against the local docs.",lookup:"I’ll check the connected Notion workspace and the local documentation.",answer:"Both guides agree: run `bun install`, then `make dev`.",toolCalls:he(e)})}function c(e,t,n=0){const o=r(e).getAllByText(t,{exact:!0})[n];if(!o?.parentElement?.parentElement)throw new Error(`Tool row ${t} not found`);return{name:o,header:o.parentElement,card:o.parentElement.parentElement}}async function w(e){await Q(e),X(),await r(e).findByText(G,{exact:!0})}async function x(e,t="Notion"){const n=c(e,P),o=r(n.header).getByRole("button",{name:f});return await a(o).toHaveTextContent(t),await B(()=>a(o.querySelector("img")).toHaveAttribute("src",L)),await a(r(c(e,H).header).queryByRole("button",{name:/Server information/})).not.toBeInTheDocument(),{search:n,badge:o}}const te={pixel:{matrix:{viewports:["laptop"]}}},T={render:()=>p.jsx(m,{setup:()=>v({branded:!1})}),parameters:te,play:async({canvasElement:e})=>{await w(e),await a(r(e).queryByRole("button",{name:/Server information/})).not.toBeInTheDocument()}},u={...T,render:()=>p.jsx(m,{setup:()=>v({branded:!0})}),play:async({canvasElement:e})=>{await w(e),await x(e)}},k={...u,play:async({canvasElement:e})=>{await w(e);const{search:t,badge:n}=await x(e);await d.click(n);const o=await r(document.body).findByRole("dialog",{name:"About notion-work"});await a(o).toHaveTextContent("v1.2.0"),await a(o.querySelector("img")).toHaveAttribute("src",L),await a(t.card).not.toHaveTextContent("Arguments"),await d.keyboard("{Escape}"),await B(()=>a(o).not.toBeInTheDocument()),await d.click(t.name),await a(t.card).toHaveTextContent("Arguments"),await d.click(t.name),await d.click(n),await r(document.body).findByRole("dialog",{name:"About notion-work"})}},O={...u,render:()=>p.jsx(m,{setup:()=>v({branded:!0,historical:!0})}),play:async({canvasElement:e})=>{await w(e),await x(e);const t=c(e,G),n=r(t.header).getByRole("button",{name:f});await a(n.querySelector("img")).not.toBeInTheDocument(),await a(n.querySelector("svg")).toBeInTheDocument(),await d.click(n);const o=await r(document.body).findByRole("dialog",{name:"About notion-work"});await a(o).toHaveTextContent("v1.1.0")}},A={...u,render:()=>p.jsx(m,{setup:()=>v({branded:!0,nested:!0})}),play:async({canvasElement:e})=>{await w(e),await x(e);const t=c(e,P,1),n=r(t.header).getByRole("button",{name:f});await B(()=>a(n.querySelector("img")).toHaveAttribute("src",L)),await a(r(c(e,H,1).header).queryByRole("button",{name:/Server information/})).not.toBeInTheDocument()}},b={pixel:{matrix:{viewports:["phone"]}}},$={viewport:{value:"mobile1",isRotated:!1}},K={width:375,height:812};function ae(e){const t=ie.c(3);let n;t[0]===Symbol.for("react.memo_cache_sentinel")?(n={...K,overflow:"hidden"},t[0]=n):n=t[0];let o;return t[1]!==e?(o=p.jsx("div",{"data-testid":"phone-frame",style:n,children:p.jsx(e,{})}),t[1]=e,t[2]=o):o=t[2],o}const R={...u,render:()=>p.jsx(m,{setup:()=>v({branded:!0,nested:!0,phone:!0})}),globals:$,parameters:b,play:async e=>{if(await a(e.parameters.pixel).toEqual(b.pixel),await w(e.canvasElement),await x(e.canvasElement),window.innerWidth<768){for(const t of r(e.canvasElement).getAllByRole("button",{name:f})){const n=t.parentElement;await a(n.scrollWidth).toBeLessThanOrEqual(n.clientWidth)}await a(document.documentElement.scrollWidth).toBeLessThanOrEqual(window.innerWidth)}}},C={...u,render:()=>p.jsx(m,{setup:()=>v({branded:!0,phone:!0,longTitle:!0})}),decorators:[ae],globals:$,parameters:b,play:async e=>{await a(e.parameters.pixel).toEqual(b.pixel);const t=await r(e.canvasElement).findByTestId("phone-frame");await a(t.clientWidth).toBe(K.width),await w(t);const{search:n,badge:o}=await x(t,Z),i=o.querySelector("span");if(!i)throw new Error("Compact label not rendered");await a(i.scrollWidth).toBeGreaterThan(i.clientWidth),await a(n.header.scrollWidth).toBeLessThanOrEqual(n.header.clientWidth),await a(t.scrollWidth).toBeLessThanOrEqual(t.clientWidth),await a(o.querySelector("img, svg")).toBeVisible(),await a(n.name).toBeVisible(),await a(n.name.getBoundingClientRect().right).toBeLessThanOrEqual(t.getBoundingClientRect().right)}},y="plugin:656443adaa7377b9:coder",W="plugin:9f8e7d6c5b4a3210:coder",U=`Server information: ${y}`,ne=`Server information: ${W}`,J="plugin_656443adaa7377b9_coder_coder_create_chat",we="plugin_9f8e7d6c5b4a3210_coder_coder_list_templates",D="plugin_656443adaa7377b9_coder_coder_get_workspace",ge="plugin_656443adaa7377b9_coder_coder_create_workspace_bu_1a2b3c4d",ye="coder_create_workspace_bu_1a2b3c4d",oe="notion_work_notion_ai_search";function S(e,t){return{connection:{key:e,transport:"stdio"},identity:{name:"coder-mcp",title:"Coder",version:t,description:"Manage Coder workspaces, templates and agent chats.",websiteUrl:"https://coder.com"},source:"connection"}}function be(e){const t={type:"dynamic-tool",toolCallId:"coder-create-chat",toolName:J,state:"output-available",input:{task:"Run the UAT round on the pushed SHA",organization_id:"703f72a1"},output:s("Created chat 6b1c… (running)."),mcpServer:S(y,"v2.37.2-devel+a970c6c92e")},n={type:"dynamic-tool",toolCallId:"coder-list-templates",toolName:we,state:"output-available",input:{},output:s("coder (Write Coder on Coder), agents_allowed=true"),mcpServer:S(W,"1.9.0")},o={type:"dynamic-tool",toolCallId:"coder-legacy",toolName:D,state:"output-available",input:{workspace:"uat-runner"},output:s("uat-runner: running")},i={type:"dynamic-tool",toolCallId:"coder-long",toolName:ge,state:"output-available",input:{template_version:"v42"},output:s("Build queued."),mcpServer:S(y,"2.0.0")},l={type:"dynamic-tool",toolCallId:"notion-plain",toolName:oe,state:"output-available",input:{query:"UAT checklist"},output:s("Found: UAT checklist."),mcpServer:q(E,"1.2.0")},g={type:"dynamic-tool",toolCallId:"coder-code",toolName:"code_execution",state:"output-available",input:{code:"return await mux.tool('coder_create_chat', { task: 'retry' });"},output:{success:!0,result:"ok",toolCalls:[],consoleOutput:[],duration_ms:42},nestedCalls:[{toolCallId:"nested-coder",toolName:J,input:{task:"retry"},output:s("Created chat 7c2d…"),state:"output-available",mcpServer:S(y,"2.0.0")},{toolCallId:"nested-legacy",toolName:D,input:{workspace:"uat-runner"},output:s("uat-runner: running"),state:"output-available"}]};return[t,n,o,i,l,...e.nested?[g]:[]]}function V(e){return ee({variant:`plugin-${e.phone?"phone":e.nested?"nested":"desktop"}`,phone:e.phone,request:"Kick off a UAT chat on Coder and pull the checklist from Notion.",lookup:"I’ll use the installed Coder plugin and the Notion connection.",answer:"UAT chat created; the checklist is attached above.",toolCalls:be(e)})}async function M(e){await Q(e),X(),await r(e).findByText("coder_list_templates",{exact:!0})}async function F(e){const t=c(e,"coder_create_chat"),n=r(t.header).getByRole("button",{name:U});await a(n).toHaveTextContent("Coder");const o=c(e,"coder_list_templates");r(o.header).getByRole("button",{name:ne});const i=c(e,ye);r(i.header).getByRole("button",{name:U});for(const{header:re}of[t,o,i])await a(re).not.toHaveTextContent(/plugin_[0-9a-f]{16}/);const l=c(e,D);await a(r(l.header).queryByRole("button",{name:/Server information/})).not.toBeInTheDocument();const g=c(e,oe);return r(g.header).getByRole("button",{name:f}),{create:t,createBadge:n,list:o,long:i,legacy:l}}const h={render:()=>p.jsx(m,{setup:()=>V({})}),parameters:te,play:async({canvasElement:e})=>{await M(e),await F(e)}},I={...h,play:async({canvasElement:e})=>{await M(e);const{create:t,createBadge:n,list:o}=await F(e);await d.click(n);const i=await r(document.body).findByRole("dialog",{name:`About ${y}`});await a(i).toHaveTextContent(y),await a(r(i).getByText("v2.37.2-devel+a970c6c92e",{exact:!0})).toBeVisible(),await a(i).toHaveTextContent("stdio"),await a(t.card).not.toHaveTextContent("Arguments"),await d.keyboard("{Escape}"),await B(()=>a(i).not.toBeInTheDocument()),await d.click(r(o.header).getByRole("button",{name:ne}));const l=await r(document.body).findByRole("dialog",{name:`About ${W}`});await a(l).toHaveTextContent(W),await a(l).toHaveTextContent("v1.9.0"),await d.keyboard("{Escape}"),await B(()=>a(l).not.toBeInTheDocument()),await d.click(t.name),await a(t.card).toHaveTextContent("Arguments"),await a(t.card).toHaveTextContent("Run the UAT round on the pushed SHA")}},N={...h,render:()=>p.jsx(m,{setup:()=>V({nested:!0})}),play:async({canvasElement:e})=>{await M(e),await F(e);const t=c(e,"coder_create_chat",1);r(t.header).getByRole("button",{name:U}),await a(t.header).not.toHaveTextContent(/plugin_[0-9a-f]{16}/);const n=c(e,D,1);await a(r(n.header).queryByRole("button",{name:/Server information/})).not.toBeInTheDocument()}},_={...h,render:()=>p.jsx(m,{setup:()=>V({phone:!0})}),decorators:[ae],globals:$,parameters:b,play:async e=>{await a(e.parameters.pixel).toEqual(b.pixel);const t=await r(e.canvasElement).findByTestId("phone-frame");await a(t.clientWidth).toBe(K.width),await M(t);const{create:n,list:o,long:i}=await F(t);for(const{header:l,name:g}of[n,o,i])await a(l.scrollWidth).toBeLessThanOrEqual(l.clientWidth),await a(g).toBeVisible(),await a(g.getBoundingClientRect().right).toBeLessThanOrEqual(t.getBoundingClientRect().right);await a(t.scrollWidth).toBeLessThanOrEqual(t.clientWidth)}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithMocks setup={() => setupChat({
    branded: false
  })} />,
  parameters: laptop,
  play: async ({
    canvasElement
  }) => {
    await prepareChat(canvasElement);
    await expect(within(canvasElement).queryByRole("button", {
      name: /Server information/
    })).not.toBeInTheDocument();
  }
}`,...T.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  ...NoMetadata,
  render: () => <AppWithMocks setup={() => setupChat({
    branded: true
  })} />,
  play: async ({
    canvasElement
  }) => {
    await prepareChat(canvasElement);
    await expectBranded(canvasElement);
  }
}`,...u.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  ...Branded,
  play: async ({
    canvasElement
  }) => {
    await prepareChat(canvasElement);
    const {
      search,
      badge
    } = await expectBranded(canvasElement);
    await userEvent.click(badge);
    const dialog = await within(document.body).findByRole("dialog", {
      name: "About notion-work"
    });
    await expect(dialog).toHaveTextContent("v1.2.0");
    await expect(dialog.querySelector("img")).toHaveAttribute("src", NOTION_ICON);
    // Server details never toggle the tool; the header still does.
    await expect(search.card).not.toHaveTextContent("Arguments");
    await userEvent.keyboard("{Escape}");
    await waitFor(() => expect(dialog).not.toBeInTheDocument());
    await userEvent.click(search.name);
    await expect(search.card).toHaveTextContent("Arguments");
    await userEvent.click(search.name);
    await userEvent.click(badge);
    await within(document.body).findByRole("dialog", {
      name: "About notion-work"
    });
  }
}`,...k.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  ...Branded,
  render: () => <AppWithMocks setup={() => setupChat({
    branded: true,
    historical: true
  })} />,
  play: async ({
    canvasElement
  }) => {
    await prepareChat(canvasElement);
    await expectBranded(canvasElement);
    // Older capture: identity text stays, its ref is unknown to the host ⇒ generic icon.
    const fetch = toolCard(canvasElement, NOTION_FETCH);
    const badge = within(fetch.header).getByRole("button", {
      name: INFO_BUTTON
    });
    await expect(badge.querySelector("img")).not.toBeInTheDocument();
    await expect(badge.querySelector("svg")).toBeInTheDocument();
    await userEvent.click(badge);
    const dialog = await within(document.body).findByRole("dialog", {
      name: "About notion-work"
    });
    await expect(dialog).toHaveTextContent("v1.1.0");
  }
}`,...O.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  ...Branded,
  render: () => <AppWithMocks setup={() => setupChat({
    branded: true,
    nested: true
  })} />,
  play: async ({
    canvasElement
  }) => {
    await prepareChat(canvasElement);
    await expectBranded(canvasElement);
    const nested = toolCard(canvasElement, NOTION_SEARCH, 1);
    const badge = within(nested.header).getByRole("button", {
      name: INFO_BUTTON
    });
    await waitFor(() => expect(badge.querySelector("img")).toHaveAttribute("src", NOTION_ICON));
    await expect(within(toolCard(canvasElement, LOCAL_SEARCH, 1).header).queryByRole("button", {
      name: /Server information/
    })).not.toBeInTheDocument();
  }
}`,...A.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  ...Branded,
  render: () => <AppWithMocks setup={() => setupChat({
    branded: true,
    nested: true,
    phone: true
  })} />,
  globals: phoneGlobals,
  parameters: phoneParameters,
  play: async context => {
    await expect(context.parameters.pixel).toEqual(phoneParameters.pixel);
    await prepareChat(context.canvasElement);
    await expectBranded(context.canvasElement);
    // The test-runner plays at desktop size; only Pixel/manager pin the phone width.
    if (window.innerWidth < 768) {
      for (const badge of within(context.canvasElement).getAllByRole("button", {
        name: INFO_BUTTON
      })) {
        const header = badge.parentElement!;
        await expect(header.scrollWidth).toBeLessThanOrEqual(header.clientWidth);
      }
      await expect(document.documentElement.scrollWidth).toBeLessThanOrEqual(window.innerWidth);
    }
  }
}`,...R.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  ...Branded,
  render: () => <AppWithMocks setup={() => setupChat({
    branded: true,
    phone: true,
    longTitle: true
  })} />,
  decorators: [PhoneFrameDecorator],
  globals: phoneGlobals,
  parameters: phoneParameters,
  play: async context => {
    await expect(context.parameters.pixel).toEqual(phoneParameters.pixel);
    const frame = await within(context.canvasElement).findByTestId("phone-frame");
    await expect(frame.clientWidth).toBe(PHONE_FRAME.width);
    await prepareChat(frame);
    const {
      search,
      badge
    } = await expectBranded(frame, LONG_TITLE);
    const label = badge.querySelector("span");
    if (!label) throw new Error("Compact label not rendered");
    await expect(label.scrollWidth).toBeGreaterThan(label.clientWidth);
    await expect(search.header.scrollWidth).toBeLessThanOrEqual(search.header.clientWidth);
    await expect(frame.scrollWidth).toBeLessThanOrEqual(frame.clientWidth);
    // Icon, tool name and status survive next to the truncated label.
    await expect(badge.querySelector("img, svg")).toBeVisible();
    await expect(search.name).toBeVisible();
    await expect(search.name.getBoundingClientRect().right).toBeLessThanOrEqual(frame.getBoundingClientRect().right);
  }
}`,...C.parameters?.docs?.source},description:{story:`An allowed 80-char unbroken title must not push the tool name or status off
the card: the compact label is bounded and shrinkable, so it truncates at
every width while the icon, tool name and status stay visible. The frame
decorator pins 375 px even under the desktop-sized test-runner.`,...C.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithMocks setup={() => setupPluginChat({})} />,
  parameters: laptop,
  play: async ({
    canvasElement
  }) => {
    await preparePluginChat(canvasElement);
    await expectPluginLabels(canvasElement);
  }
}`,...h.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  ...PluginTools,
  play: async ({
    canvasElement
  }) => {
    await preparePluginChat(canvasElement);
    const {
      create,
      createBadge,
      list
    } = await expectPluginLabels(canvasElement);
    await userEvent.click(createBadge);
    const dialog = await within(document.body).findByRole("dialog", {
      name: \`About \${CODER_A_KEY}\`
    });
    // The popover keeps the exact configured connection the label dropped.
    await expect(dialog).toHaveTextContent(CODER_A_KEY);
    // Match the whole version label so a duplicate prefix cannot pass.
    await expect(within(dialog).getByText("v2.37.2-devel+a970c6c92e", {
      exact: true
    })).toBeVisible();
    await expect(dialog).toHaveTextContent("stdio");
    await expect(create.card).not.toHaveTextContent("Arguments");
    await userEvent.keyboard("{Escape}");
    await waitFor(() => expect(dialog).not.toBeInTheDocument());
    // The sibling installation resolves to its own connection and version.
    await userEvent.click(within(list.header).getByRole("button", {
      name: CODER_B_INFO
    }));
    const sibling = await within(document.body).findByRole("dialog", {
      name: \`About \${CODER_B_KEY}\`
    });
    await expect(sibling).toHaveTextContent(CODER_B_KEY);
    await expect(sibling).toHaveTextContent("v1.9.0");
    await userEvent.keyboard("{Escape}");
    await waitFor(() => expect(sibling).not.toBeInTheDocument());
    // Expanding still works from the short label and shows the untouched call.
    await userEvent.click(create.name);
    await expect(create.card).toHaveTextContent("Arguments");
    await expect(create.card).toHaveTextContent("Run the UAT round on the pushed SHA");
  }
}`,...I.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  ...PluginTools,
  render: () => <AppWithMocks setup={() => setupPluginChat({
    nested: true
  })} />,
  play: async ({
    canvasElement
  }) => {
    await preparePluginChat(canvasElement);
    await expectPluginLabels(canvasElement);
    // Nested rows go through the same header: shortened with its badge, or raw without one.
    const nested = toolCard(canvasElement, "coder_create_chat", 1);
    within(nested.header).getByRole("button", {
      name: CODER_A_INFO
    });
    await expect(nested.header).not.toHaveTextContent(/plugin_[0-9a-f]{16}/);
    const nestedLegacy = toolCard(canvasElement, CODER_A_LEGACY, 1);
    await expect(within(nestedLegacy.header).queryByRole("button", {
      name: /Server information/
    })).not.toBeInTheDocument();
  }
}`,...N.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  ...PluginTools,
  render: () => <AppWithMocks setup={() => setupPluginChat({
    phone: true
  })} />,
  decorators: [PhoneFrameDecorator],
  globals: phoneGlobals,
  parameters: phoneParameters,
  play: async context => {
    await expect(context.parameters.pixel).toEqual(phoneParameters.pixel);
    const frame = await within(context.canvasElement).findByTestId("phone-frame");
    await expect(frame.clientWidth).toBe(PHONE_FRAME.width);
    await preparePluginChat(frame);
    const {
      create,
      list,
      long
    } = await expectPluginLabels(frame);
    for (const {
      header,
      name
    } of [create, list, long]) {
      await expect(header.scrollWidth).toBeLessThanOrEqual(header.clientWidth);
      await expect(name).toBeVisible();
      await expect(name.getBoundingClientRect().right).toBeLessThanOrEqual(frame.getBoundingClientRect().right);
    }
    await expect(frame.scrollWidth).toBeLessThanOrEqual(frame.clientWidth);
  }
}`,..._.parameters?.docs?.source},description:{story:"375 px frame: short labels, badges and status must all fit without horizontal overflow.",..._.parameters?.docs?.description}}};const Qe=["NoMetadata","Branded","ServerDetails","HistoricalDifferentIcons","Nested","Phone","LongTitlePhone","PluginTools","PluginServerDetails","PluginNested","PluginPhone"];export{u as Branded,O as HistoricalDifferentIcons,C as LongTitlePhone,A as Nested,T as NoMetadata,R as Phone,N as PluginNested,_ as PluginPhone,I as PluginServerDetails,h as PluginTools,k as ServerDetails,Qe as __namedExportsOrder,Je as default};
