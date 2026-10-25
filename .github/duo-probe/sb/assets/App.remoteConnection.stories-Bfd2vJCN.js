import{j as R,A as u,K as l,u as k,f as P}from"./iframe-DpCW2UOM.js";import{a as _,P as V,A as B}from"./meta-BwRgvoZ6.js";import{g as M,d as T}from"./storyPlayHelpers-_VqAI56j.js";import{s as j}from"./settingsStoryUtils-D5wjZSky.js";import{g as q}from"./remoteConnection-B_zcYH0j.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-Deyyg-fE.js";import"./pin-DuIYkyHL.js";import"./AgentListItem-3Vf8Zgi1.js";import"./useWorkspaceStreamingStatusPhase-CJy2TqN5.js";import"./shield-CrYDrR4O.js";import"./AIView-CvG2HY8V.js";import"./shell-ZYrtNCUY.js";import"./useTranscriptContextMenu-DyvYQxLv.js";import"./ConfirmationModal-DQrDMilx.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-D1Db6hA_.js";import"./sendDispatchModes-Cm5_ciDl.js";import"./timelineReveal-B8CyznN7.js";import"./RightSidebar-tIpngg7n.js";import"./PlanFileDialog-95EwQO2o.js";import"./diffParser-DScks9Dr.js";import"./TimelinePanel-BSxjzr0t.js";import"./TerminalRouterContext-CQ8sOp19.js";import"./ForceDeleteModal-BhMJFUD7.js";import"./workspaces-MVQPvkVv.js";import"./workspace-D5uypDf7.js";import"./orpc-DLtOjQkt.js";import"./autoModelRouting-BdgCPOKg.js";const{expect:e,fn:d,userEvent:r,waitFor:c,within:v}=__STORYBOOK_MODULE_TEST__,H="https://saved.example.com/@user/existing/apps/xum",p="https://remote.example.com/@user/workspace/apps/xum",U=p+"///?token=transient-secret#private-fragment",O="http://localhost:3000",I="No running xum server found for this Xum root. Start `xum server` first, or connect by URL.";function W(){let n={serverUrl:null,status:"disconnected"};const t=new Set,o=i=>{n=i;for(const m of t)m(i)};return{bridge:{getState:d(()=>Promise.resolve(n)),connect:d(i=>(o({serverUrl:q(i),status:"connecting"}),Promise.resolve())),disconnect:d(()=>(o({serverUrl:null,status:"disconnected"}),Promise.resolve())),openLocalServer:d(()=>(o({serverUrl:null,status:"disconnected",error:I}),Promise.resolve({status:"unavailable"}))),onOpenServerWindowRequested:d(()=>()=>{}),onStateChanged:d(i=>(t.add(i),()=>{t.delete(i)}))},publish:o,listeners:t}}let a=W();const ye={..._,title:"App/RemoteConnection",beforeEach:()=>{const n=window.api,t=u(l,void 0);return a=W(),window.api={platform:"linux",versions:{},...n,remoteConnection:a.bridge},k(l,H),()=>{window.api=n,k(l,t)}}};function y(){return P(),j({})}async function b(n){const t=v(await T(n));return await r.click(await t.findByRole("button",{name:"Remote Connection"})),v(await t.findByRole("region",{name:"Remote connection"}))}async function D(n){const t=await b(n),o=v(M());await c(()=>e(t.getByRole("status")).toHaveTextContent("Disconnected"));const s=t.getByRole("textbox",{name:"Server URL"});await e(s).toHaveValue(H),await e(a.bridge.connect).not.toHaveBeenCalled();for(const h of["ftp://remote.example.com","https://user:password@remote.example.com"])await r.clear(s),await r.type(s,h+"{Enter}"),await e(await t.findByRole("alert")).toBeVisible(),await e(a.bridge.connect).not.toHaveBeenCalled(),await e(u(l,"")).toBe(H);a.bridge.connect.mockRejectedValueOnce(new Error("The remote server is unavailable.")),await r.clear(s),await r.type(s,"https://offline.example.com/?token=failed-secret{Enter}"),await e(await t.findByRole("alert")).toHaveTextContent("The remote server is unavailable."),await e(t.getByRole("button",{name:"Connect"})).toBeEnabled(),await e(u(l,"")).toBe("https://offline.example.com"),await r.clear(s),await r.type(s,U),await e(u(l,"")).toBe("https://offline.example.com"),await r.keyboard("{Enter}"),await c(()=>e(a.bridge.connect).toHaveBeenLastCalledWith(U)),await e(t.getByRole("button",{name:"Connecting…"})).toBeDisabled(),await e(u(l,"")).toBe(p),await e(s).toHaveValue(p),await e(t.queryByRole("alert")).toBeNull(),a.publish({serverUrl:p,status:"connected"}),await c(()=>e(t.getByRole("status")).toHaveTextContent("Connected"));const i=t.getByRole("button",{name:"Disconnect"});i.focus(),await r.keyboard("{Enter}"),await c(()=>e(a.bridge.disconnect).toHaveBeenCalledTimes(1)),await e(i).toBeDisabled(),await r.click(o.getByRole("button",{name:"General"})),await e(a.listeners.size).toBe(0),await r.click(o.getByRole("button",{name:"Remote Connection"}));const m=v(await o.findByRole("region",{name:"Remote connection"}));if(await e(m.getByRole("textbox",{name:"Server URL"})).toHaveValue(p),await e(a.bridge.connect).toHaveBeenCalledTimes(2),await e(a.listeners.size).toBe(1),await r.click(m.getByRole("button",{name:"Connect"})),await c(()=>e(a.bridge.connect).toHaveBeenLastCalledWith(p)),await r.click(m.getByRole("button",{name:"Disconnect"})),await e(a.bridge.connect).toHaveBeenCalledTimes(3),window.innerWidth<768){const h=o.getByRole("region",{name:"Remote connection"});await e(h.scrollWidth).toBeLessThanOrEqual(h.clientWidth);for(const N of m.getAllByRole("button"))await e(N.getBoundingClientRect().right).toBeLessThanOrEqual(window.innerWidth)}}const w={globals:{viewport:{value:"desktop",isRotated:!1}},parameters:{pixel:{matrix:{themes:["dark","light"],viewports:["desktop"]}}},render:()=>R.jsx(B,{setup:y}),play:async({canvasElement:n})=>D(n)},g={...w,globals:{viewport:{value:"mobile1",isRotated:!1}},parameters:{pixel:{matrix:{themes:["dark","light"],viewports:["phone"]}}},play:async({canvasElement:n,parameters:t})=>{await e(t.pixel).toMatchObject({matrix:{viewports:["phone"]}}),await D(n)}};async function A(n){const t=await b(n),o=t.getByRole("textbox",{name:"Server URL"});await e(t.queryByRole("note")).toBeNull();for(const i of["http://100.64.0.10:3000","http://localhost:3000"])await r.clear(o),await r.type(o,i),await e(t.getByRole("note")).toBeVisible(),await e(t.getByRole("button",{name:"Connect"})).toBeEnabled(),await e(a.bridge.connect).not.toHaveBeenCalled();for(const i of[p,"not a URL"])await r.clear(o),await r.type(o,i),await e(t.queryByRole("note")).toBeNull();const s="http://100.64.0.10:3000/?token=transient-http-secret";if(await r.clear(o),await r.type(o,s),await e(t.getByRole("note")).not.toHaveTextContent("transient-http-secret"),await r.keyboard("{Enter}"),await c(()=>e(a.bridge.connect).toHaveBeenCalledWith(s)),await e(u(l,"")).toBe("http://100.64.0.10:3000"),await r.click(t.getByRole("button",{name:"Disconnect"})),await e(t.getByRole("note")).toBeVisible(),window.innerWidth<768){const i=v(document.body).getByRole("region",{name:"Remote connection"});await e(i.scrollWidth).toBeLessThanOrEqual(i.clientWidth),await e(t.getByRole("note").getBoundingClientRect().right).toBeLessThanOrEqual(window.innerWidth)}}const x={...w,play:async({canvasElement:n})=>A(n)},S={...g,play:async({canvasElement:n,parameters:t})=>{await e(t.pixel).toMatchObject({matrix:{viewports:["phone"]}}),await A(n)}},E={parameters:{..._.parameters,pixel:V},render:()=>R.jsx(B,{setup:y}),play:async({canvasElement:n})=>{const t=await b(n),o=t.getByRole("button",{name:"Open local xum server"});await r.click(o),await e(await t.findByRole("alert")).toHaveTextContent("No running xum server"),await e(a.bridge.connect).not.toHaveBeenCalled(),a.bridge.openLocalServer.mockImplementationOnce(()=>(a.publish({serverUrl:O,status:"connected"}),Promise.resolve({status:"shown"}))),await r.click(o),await c(()=>e(t.getByRole("status")).toHaveTextContent("Connected · "+O)),await e(t.queryByRole("alert")).toBeNull(),await e(a.bridge.openLocalServer).toHaveBeenCalledTimes(2)}},C={render:()=>R.jsx(B,{setup:y}),play:async({canvasElement:n})=>{let t;a.bridge.getState.mockImplementationOnce(()=>new Promise(s=>{t=s}));const o=await b(n);await c(()=>e(a.bridge.getState).toHaveBeenCalled()),a.publish({serverUrl:p,status:"connected"}),t({serverUrl:null,status:"disconnected"}),await c(()=>e(o.getByRole("status")).toHaveTextContent("Connected")),await e(o.getByRole("button",{name:"Disconnect"})).toBeEnabled(),await e(o.getByRole("button",{name:"Connect"})).toBeDisabled(),await e(a.bridge.connect).not.toHaveBeenCalled()}},f={beforeEach:()=>{k(l,{invalid:!0})},render:()=>R.jsx(B,{setup:y}),play:async({canvasElement:n})=>{const t=await b(n);await e(t.getByRole("textbox",{name:"Server URL"})).toHaveValue(""),await e(t.getByRole("button",{name:"Connect"})).toBeDisabled(),await e(a.bridge.connect).not.toHaveBeenCalled()}},L={beforeEach:()=>{delete window.api},render:()=>R.jsx(B,{setup:y}),play:async({canvasElement:n})=>{const t=v(await T(n));await c(()=>e(t.getByRole("button",{name:"Server Access"})).toBeVisible()),await e(t.queryByRole("button",{name:"Remote Connection"})).toBeNull()}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  globals: {
    viewport: {
      value: "desktop",
      isRotated: false
    }
  },
  parameters: {
    pixel: {
      matrix: {
        themes: ["dark", "light"],
        viewports: ["desktop"]
      }
    }
  },
  render: () => <AppWithMocks setup={setupRemoteSettings} />,
  play: async ({
    canvasElement
  }) => exerciseConnection(canvasElement)
}`,...w.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  ...Desktop,
  globals: {
    viewport: {
      value: "mobile1",
      isRotated: false
    }
  },
  parameters: {
    pixel: {
      matrix: {
        themes: ["dark", "light"],
        viewports: ["phone"]
      }
    }
  },
  play: async ({
    canvasElement,
    parameters
  }) => {
    // Keep the narrow capture when the story matrix changes.
    await expect(parameters.pixel).toMatchObject({
      matrix: {
        viewports: ["phone"]
      }
    });
    await exerciseConnection(canvasElement);
  }
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  ...Desktop,
  play: async ({
    canvasElement
  }) => exerciseHttpWarning(canvasElement)
}`,...x.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  ...Phone,
  play: async ({
    canvasElement,
    parameters
  }) => {
    await expect(parameters.pixel).toMatchObject({
      matrix: {
        viewports: ["phone"]
      }
    });
    await exerciseHttpWarning(canvasElement);
  }
}`,...S.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  // An interaction contract: its states are text in the section the Desktop story already captures.
  parameters: {
    ...appMeta.parameters,
    pixel: PIXEL_DISABLED
  },
  render: () => <AppWithMocks setup={setupRemoteSettings} />,
  play: async ({
    canvasElement
  }) => {
    const section = await openRemoteSettings(canvasElement);
    const open = section.getByRole("button", {
      name: "Open local xum server"
    });
    // No server on this root: the bridge state explains it; nothing else changes.
    await userEvent.click(open);
    await expect(await section.findByRole("alert")).toHaveTextContent("No running xum server");
    await expect(remote.bridge.connect).not.toHaveBeenCalled();
    remote.bridge.openLocalServer.mockImplementationOnce(() => {
      remote.publish({
        serverUrl: LOCAL_SERVER_URL,
        status: "connected"
      });
      return Promise.resolve({
        status: "shown"
      });
    });
    await userEvent.click(open);
    await waitFor(() => expect(section.getByRole("status")).toHaveTextContent("Connected · " + LOCAL_SERVER_URL));
    await expect(section.queryByRole("alert")).toBeNull();
    await expect(remote.bridge.openLocalServer).toHaveBeenCalledTimes(2);
  }
}`,...E.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithMocks setup={setupRemoteSettings} />,
  play: async ({
    canvasElement
  }) => {
    // Deliver an event while the initial snapshot is pending.
    let resolveSnapshot!: (state: RemoteConnectionState) => void;
    remote.bridge.getState.mockImplementationOnce(() => new Promise(resolve => {
      resolveSnapshot = resolve;
    }));
    const section = await openRemoteSettings(canvasElement);
    await waitFor(() => expect(remote.bridge.getState).toHaveBeenCalled());
    remote.publish({
      serverUrl: SERVER_URL,
      status: "connected"
    });
    resolveSnapshot({
      serverUrl: null,
      status: "disconnected"
    });
    await waitFor(() => expect(section.getByRole("status")).toHaveTextContent("Connected"));
    await expect(section.getByRole("button", {
      name: "Disconnect"
    })).toBeEnabled();
    await expect(section.getByRole("button", {
      name: "Connect"
    })).toBeDisabled();
    await expect(remote.bridge.connect).not.toHaveBeenCalled();
  }
}`,...C.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  beforeEach: () => {
    updatePersistedState(REMOTE_CONNECTION_URL_KEY, {
      invalid: true
    });
  },
  render: () => <AppWithMocks setup={setupRemoteSettings} />,
  play: async ({
    canvasElement
  }) => {
    const section = await openRemoteSettings(canvasElement);
    await expect(section.getByRole("textbox", {
      name: "Server URL"
    })).toHaveValue("");
    await expect(section.getByRole("button", {
      name: "Connect"
    })).toBeDisabled();
    await expect(remote.bridge.connect).not.toHaveBeenCalled();
  }
}`,...f.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  beforeEach: () => {
    delete window.api;
  },
  render: () => <AppWithMocks setup={setupRemoteSettings} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(await openSettingsDialog(canvasElement));
    // Settings can mount while AppLoader's fade-in still makes the button invisible.
    await waitFor(() => expect(canvas.getByRole("button", {
      name: "Server Access"
    })).toBeVisible());
    await expect(canvas.queryByRole("button", {
      name: "Remote Connection"
    })).toBeNull();
  }
}`,...L.parameters?.docs?.source}}};const be=["Desktop","Phone","HttpWarning","HttpWarningPhone","LocalServer","NewerStateWins","InvalidSavedUrl","BrowserWithoutBridge"];export{L as BrowserWithoutBridge,w as Desktop,x as HttpWarning,S as HttpWarningPhone,f as InvalidSavedUrl,E as LocalServer,C as NewerStateWins,g as Phone,be as __namedExportsOrder,ye as default};
